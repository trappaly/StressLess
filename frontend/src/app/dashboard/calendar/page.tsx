/**
 * followed a YouTube tutorial on how to make calendar view with TypeScript
 * link: https://youtu.be/VrC5XhjW6W0?si=_ibhdo7doCMXNtB3
 */
// Monthly default view
/**
 * TO DO: fix draggable event color in dark mode 
 * 
 * send rest of attributes to backend everytime event in changed
 * Front End Focused:
 * use "example" consistenly instead of event which doesnt have all info for stressLess
 * make events editable in drag event area
 * create prompts when creating event by clicking date for start time, recurring, end time, location
 * create plus buttom that does offers event generation on calander
 * make a function to send info changed to backend
 * 
 */
'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {
  Draggable,
  DropArg,
} from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { EventSourceInput } from '@fullcalendar/core/index.js';
import { useAuth } from '@/components/context/auth/AuthContext';
import axios from 'axios';
import { backendBaseUrl } from '@/lib/utils';

interface Event {
  id: number | string; // your backend sometimes uses uuid string, sometimes number
  title: string;
  end_time: Date | string | null;
  allDay: boolean;
  break_time: number | null; //for plus buttom for automated creation
  created_at: string;
  description: string | null;
  is_generated: boolean; 
  is_recurring: boolean;
  location_place?: string;
  recurrence_end_date?: string | null;
  recurrence_pattern?: string | null;
  recurrence_start_date?: string | null;
  user_id: string;

  // frontend-only props (for FullCalendar)
  start?: Date | string;
  end?: Date | string;
}

export default function Home() {
  //imported from the backend user preferences
  const { user } = useAuth();
  const [events] = useState([
    //commented out setEvents(unused var)

    { title: 'event 1', id: '1' }, //creates events in the draggable box and names them
    { title: 'event 2', id: '2' },
    { title: 'event 3', id: '3' },
    { title: 'event 4', id: '4' },
    { title: 'event 5', id: '5' },
  ]);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [showModal, setShowModal] = useState(false); 
  const [showDeleteModal, setShowDeleteModal] = useState(false); //pop up box for deletion
  const [idToDelete, setIdToDelete] = useState<number | null>(null); //id of event that was selected for deletion

  const example = {
    title: '',
    end_time: null,
    start_time: '',
    allDay: false,
    id: '', // UUIDs are strings
    break_time: null,
    created_at: new Date().toISOString(),
    description: null,
    is_generated: false,
    is_recurring: false,
    user_id: '', // you'll want to fill this later when the user is logged in
    location_place: undefined,
    recurrence_end_date: undefined,
    recurrence_pattern: undefined,
    recurrence_start_date: undefined,
  };
  const [newEvent, setNewEvent] = useState<Event>({
    ...example,
  });

  useEffect(() => { 
    async function fetchEvents() {
      try {
        if (!user) {
          console.log('No user found');
          return;
        }

        const response = await axios.get(
          `${backendBaseUrl}/api/calendar/events/by-user/${user.uid}`
        );
        console.log('Fetched raw events:', response.data);

        const extractedEvents = response.data.map((event: Event) => ({
          id: event.id,
          title: event.title,
          start: event.start ? new Date(event.start) : undefined,
          end: event.end_time ? new Date(event.end_time) : undefined,
          allDay: event.allDay ?? false, // default to false if undefined
          // Optional: You could add more fields here if FullCalendar needs
        }));

        console.log('Mapped events for calendar:', extractedEvents);
        setAllEvents(extractedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchEvents().then(() => {
      console.log('Fetched events for user: ', user?.displayName);
    });
  }, [user]);

  useEffect(() => {
    const draggableEl = document.getElementById('draggable-el'); //lets us use draggable feature
    let draggable: Draggable | null = null;
    if (draggableEl) { //if theres an draggable element
      draggable = new Draggable(draggableEl, {
        itemSelector: '.fc-event', //dragging full calander class name event
        eventData: (eventEl) => ({ //function creation
          title: eventEl.getAttribute('title') || '', //gets the tittle of event
          id: eventEl.getAttribute('data') || '', //gets the id of event
          start: eventEl.getAttribute('start') || '', //gets the start of event
        }),
      });
    }
    return () => {
      // Clean up draggable instance
      draggable?.destroy();
    };
  }, []); // empty dependency array -> only once on mount

  //allows user to click on date on cal to make an event
  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    setNewEvent({
      ...newEvent,
      //takes everything in newEvent
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    setShowModal(true);
  }

  /*
//TO DO: send info on recurring data
   //function updates the events into backend
   //input: id, user_id, title, start_time, end_time
   //output: console log that data was added successfully
   function addToBackend(data: { event: { id: string } }){
    const updateEvent = async (eventData) => {
      try {
        const response = await axios.put(
          `http://your-backend-url.com/events/${eventData.id}`,
        //  eventData
        );
        console.log("Event updated:", response.data);
      } catch (error) {
        console.error("Error updating event:", error);
      }
    };
    }
*/

//checks if event was added and outputs console log when dropped
  function addEvent(data: DropArg) {
    console.log('addEvent called'); //check if function was called
//event is added with tittle of html inner text
    if (!user) {
      console.log('no user found');
      return;
    }

    

    const event = {
      ...newEvent,
      user_id: user.uid,
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
    };
    setAllEvents([...allEvents, event]);

    //added to test getting event name to the backend
    axios
      .post(backendBaseUrl + `/api/calendar/events`, event) //saves in the backend
      .then((response) => {
        console.log('Successfully saved event into backend: ', user!.uid);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //deletes what was selected in delete modal
  function handleDeleteModal(data: { event: { id: string } }) {
    setShowDeleteModal(true);
    setIdToDelete(Number(data.event.id)); 
  }

//preconditions: event exists to be deleted
//postconsition: event selected was deleted from cal
  function handleDelete() {
    setAllEvents( //filter function
      allEvents.filter((event) => Number(event.id) !== Number(idToDelete)) //filters by event id to find id and delete
    );
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

//closes any modal opened and puts events back on display
  function handleCloseModal() {
    setShowModal(false); //stop showing modal
    setNewEvent({ //puts everything back in cal
      ...example,
    });
    setShowDeleteModal(false);
    setIdToDelete(null);
  }

  //pre: clicked on date on cal view and modal is up
  //post:event has a new tittle
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('handleChange called');
    setNewEvent({
      ...newEvent,
      title: e.target.value,
    });
  };

  //pre: takes an event
  //post: event is saved into backend and created on cal for whole day as default
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); //stops page from refreshing after submitting form
    if (!user) {
      console.log('no user found');
      return;
    }
    const eventWithUser = {
      ...newEvent,
      user_id: user.uid,
    };
    setAllEvents([...allEvents, eventWithUser]); //shows all other events and newly added event

    axios
      .post(backendBaseUrl + `/api/calendar/events`, eventWithUser)
      .then((response) => {
        console.log('Successfully saved event:', response.data);
      })
      .catch((error) => {
        console.error('Error saving event:', error);
      });

    setShowModal(false); //closes modal
    setNewEvent({ //sets back to orginal state
      ...example,
    });
  }

  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-4xl text-black dark:text-white text-center">
          StressLess //left corner title
        </h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-10">
          <div className="col-span-8">
            <FullCalendar //creates the full calander view
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]} //used to quickly make calander
              headerToolbar={{ //object inside calender
                left: 'prev,next today', //button tittle
                center: 'title', //button that doesnt do anything
                right: 'resourceTimelineWook, dayGridMonth,timeGridWeek', //button
              }}
              events={allEvents as EventSourceInput} //displays events 
              nowIndicator={true}
              editable={true} //makes events editable??
              droppable={true} //makes all event droppable
              selectable={true} //able to select events
              selectMirror={true} //mirrors the event but why make a copy?
              dateClick={handleDateClick} //what happens when we click on a date
              drop={(data) => addEvent(data)} 
              eventClick={(data) => handleDeleteModal(data)}// when clicking event you get delete modal
            />
          </div>
          <div
            id="draggable-el" //creation of draggable event area
            className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-50" //style of draggable events
          >
            <h1 className="font-bold text-lg text-center">Frequent Events</h1> //name of draggable events box n style

            {events.map((event) => (
              <div
                className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white dark:bg-black"
                title={event.title} //tittles
                key={event.id}
              >
                {event.title} //shows tittle of events
              </div>
            ))}
          </div>
        </div>

        <Transition.Root show={showDeleteModal} as={Fragment}> //using Headless UI
          <Dialog 
            as="div"
            className="relative z-10" //gives it high up position on display
            onClose={setShowDeleteModal} //lets user close deletemod  
          >
            <Transition.Child 
              as={Fragment} //use to fade modal 
              enter="ease-out duration-300" //what happens when mod is opened
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200" //what happens when mod is closed
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" /> //ref from tailwind styles
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel //used for deletion modal
                    className="relative transform overflow-hidden rounded-lg
                 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                  >
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div
                          className="mx-auto flex h-12 w-12 flex-shrink-0 items-center
                    justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                        >
                          <ExclamationTriangleIcon //creation triangle icon
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Delete Event
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to delete this event? //text in deletion modal
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"> //creates button to delete
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm
                    font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={handleDelete} 
                      > // when clicked the delete will be done
                        Delete //text in button
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900
                    shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={handleCloseModal}
                      > //closed modal for cancellation
                        Cancel //text in other button
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <Transition.Root show={showModal} as={Fragment}> //modal for creating an event by clicking on date
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" //opening modal
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100" //closing modal
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Add Event //how event is changed in modal
                        </Dialog.Title>
                        <form action="submit" onSubmit={handleSubmit}>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="title"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900
                          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                          focus:ring-2
                          focus:ring-inset focus:ring-violet-600
                          sm:text-sm sm:leading-6"
                              value={newEvent.title}
                              onChange={(e) => handleChange(e)} //changes event name
                              placeholder=" Title"
                            />
                          </div>
                          <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button
                              type="submit"
                              className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
                              disabled={newEvent.title === ''}
                            >
                              Create
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                              onClick={handleCloseModal}
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </main>
    </>
  );
}