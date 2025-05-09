/**
 * followed a YouTube tutorial on how to make calendar view with TypeScript
 * link: https://youtu.be/VrC5XhjW6W0?si=_ibhdo7doCMXNtB3
 */
'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {
  Draggable,
  DropArg,
} from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Fragment, useEffect, useMemo, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { EventSourceInput } from '@fullcalendar/core/index.js';
import { useAuth } from '@/components/context/auth/AuthContext';
import axios from 'axios';
import { backendBaseUrl } from '@/lib/utils';
import { UserDeadline, UserEvent } from '@/lib/types';

export default function Home() {
  const colorTypes = useMemo(
    () => ({
      deadline: '#e11d48',
      eventGenerated: '#a1cc76',
      eventByUser: '#6e9adb',
    }),
    [] // empty dependency array means this object will remain stable
  );
  const { user } = useAuth();
  const [events] = useState([
    { title: 'event 1', id: '1' },
    { title: 'event 2', id: '2' },
    { title: 'event 3', id: '3' },
    { title: 'event 4', id: '4' },
    { title: 'event 5', id: '5' },
  ]);
  const [allEvents, setAllEvents] = useState<UserEvent[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState<string | null>(null);

  const example: UserEvent = {
    title: '',
    end_time: null,
    id: '', // UUIDs are strings
    break_time: null,
    start_time: new Date().toISOString(),
    created_at: new Date().toISOString(),
    description: null,
    is_generated: false,
    is_recurring: false,
    user_id: '', // you'll want to fill this later when the user is logged in
    location_place: null,
    recurrence_end_date: null,
    recurrence_pattern: null,
    recurrence_start_date: null,
  };
  const [selectedEvent, setSelectedEvent] = useState<UserEvent>(example);

  const [newEvent, setNewEvent] = useState<UserEvent>({
    ...example,
  });
  const [isDeadline, setIsDeadline] = useState<boolean>(false);

  // Fetching data from backend
  useEffect(() => {
    async function fetchSchedule() {
      try {
        if (!user) {
          console.log('No user found');
          return;
        }

        // fetch deadlines
        const responseDeadlines = await axios.get(
          `${backendBaseUrl}/api/calendar/deadlines/by-user/${user.uid}`
        );
        console.log('Fetched raw deadlines:', responseDeadlines.data);

        // fetch events
        const responseEvents = await axios.get(
          `${backendBaseUrl}/api/calendar/events/by-user/${user.uid}`
        );
        console.log('Fetched raw events:', responseEvents.data);

        // map deadlines
        const extractedDeadlines = responseDeadlines.data.map(
          (deadline: UserDeadline) => ({
            id: deadline.id,
            title: deadline.title,
            start: deadline.due_time ? new Date(deadline.due_time) : undefined,
            description: deadline.description,
            user_id: deadline.user_id,
            // Optional: You could add more fields here if FullCalendar needs
            color: colorTypes.deadline,
          })
        );

        // map events
        const extractedEvents = responseEvents.data.map((event: UserEvent) => ({
          id: event.id,
          title: event.title,
          start: event.start_time ? new Date(event.start_time) : undefined,
          end: event.end_time ? new Date(event.end_time) : undefined,
          description: event.description,
          user_id: event.user_id,
          // Optional: You could add more fields here if FullCalendar needs

          // color for generated events are different than user input events
          color: event.is_generated
            ? colorTypes.eventGenerated
            : colorTypes.eventByUser,
        }));

        console.log('Mapped deadlines for calendar:', extractedDeadlines);
        console.log('Mapped events for calendar:', extractedEvents);

        // setting frontend
        setAllEvents([...extractedEvents, ...extractedDeadlines]);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    }

    fetchSchedule().then(() => {
      console.log('Fetched deadlines and events for user: ', user?.displayName);
    });
  }, [user, colorTypes]);

  useEffect(() => {
    const draggableEl = document.getElementById('draggable-el');
    let draggable: Draggable | null = null;
    if (draggableEl) {
      draggable = new Draggable(draggableEl, {
        itemSelector: '.fc-event',
        eventData: (eventEl) => ({
          title: eventEl.getAttribute('title') || '',
          id: eventEl.getAttribute('data') || '',
          start: eventEl.getAttribute('start') || '',
        }),
      });
    }
    return () => {
      // Clean up draggable instance
      draggable?.destroy();
    };
  }, []); // empty dependency array -> only once on mount

  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    setNewEvent({
      ...newEvent,
      //takes everything in newEvent
      start_time: arg.date.toISOString(),
      id: new Date().getTime().toString(),
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
  function addEvent(data: DropArg) {
    console.log('addEvent called');

    if (!user) {
      console.log('no user found');
      return;
    }

    const event: UserEvent & { start: Date; end?: Date; color?: string } = {
      ...newEvent,
      user_id: user.uid,
      start_time: data.date.toISOString(),
      title: data.draggedEl.innerText,
      id: new Date().getTime().toString(),
      start: data.date, // <-- necessary for FullCalendar
      end_time: newEvent.end_time,
      break_time: newEvent.break_time,
      created_at: newEvent.created_at,
      description: newEvent.description,
      is_generated: false,
      is_recurring: newEvent.is_recurring,
      location_place: newEvent.location_place,
      recurrence_end_date: newEvent.recurrence_end_date,
      recurrence_pattern: newEvent.recurrence_pattern,
      recurrence_start_date: newEvent.recurrence_start_date,
      color: colorTypes.eventByUser,
    };
    setAllEvents([...allEvents, event]);

    //added to test getting event name to the backend
    axios
      .post(backendBaseUrl + `/api/calendar/events`, event)
      .then((response) => {
        console.log('Successfully saved event into backend: ', user!.uid);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleOpenModal(data: { event: { id: string } }) {
    setShowDeleteModal(true);
    setIdToDelete(data.event.id);
    console.log(data.event.id);
    console.log(allEvents);
    const selected = allEvents.find((event) => event.id === data.event.id);
    if (selected) {
      setSelectedEvent(selected);
    }
  }

  async function handleDelete() {
    console.log('handleDelete called for event: ', idToDelete);

    if (!user) {
      console.log('no user found');
      return;
    }

    if (!idToDelete) {
      console.log('no idToDelete found');
      return;
    }

    //added to test getting event name to the backend
    axios
      .delete(backendBaseUrl + `/api/calendar/events/id/${idToDelete}`)
      .then((response) => {
        console.log('Successfully delete event: ', idToDelete);
        console.log(response);
        // UI local state
        setAllEvents(allEvents.filter((event) => event.id !== idToDelete));
      })
      .catch((error) => {
        console.log(error);
        window.alert('Failed to delete event, try again another time :(');
      })
      .finally(() => {
        setShowDeleteModal(false);
        setIdToDelete(null);
        setSelectedEvent(example);
      });
  }

  function handleCloseModal() {
    setShowModal(false);
    setNewEvent({
      ...example,
    });
    setShowDeleteModal(false);
    setIdToDelete(null);
    setSelectedEvent(example);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!user) {
      console.log('no user found');
      return;
    }

    if (isDeadline) {
      addDeadlineFromEvent();
      return;
    }

    const eventWithUser: UserEvent & {
      start: Date;
      end?: Date;
      color?: string;
    } = {
      ...newEvent,
      user_id: user.uid,
      start: new Date(newEvent.start_time), // <-- ensure start is there
      end: newEvent.end_time ? new Date(newEvent.end_time) : undefined,
      title: newEvent.title,
      id: newEvent.id, // this is FullCalendar id
      break_time: newEvent.break_time,
      start_time: newEvent.start_time,
      created_at: new Date().toISOString(),
      description: newEvent.description,
      is_generated: false,
      is_recurring: newEvent.is_recurring,
      location_place: newEvent.location_place,
      recurrence_end_date: newEvent.recurrence_end_date,
      recurrence_pattern: newEvent.recurrence_pattern,
      recurrence_start_date: newEvent.recurrence_start_date,
      color: colorTypes.eventByUser,
    };

    axios
      .post(backendBaseUrl + `/api/calendar/events`, eventWithUser)
      .then((response) => {
        console.log('Successfully saved event:', response.data);
        // We want to be consistent and use our backend id
        const correctId = response.data.id;
        const { id, ...restEvent } = eventWithUser;
        console.log(`Replace ${id} with ${correctId}`);
        setAllEvents([...allEvents, { id: correctId, ...restEvent }]);
      })
      .catch((error) => {
        console.error('Error saving event:', error);
      });

    setShowModal(false);
    setNewEvent({
      ...example,
    });
  }

  // TODO: handle dragging data
  function addDeadlineFromEvent() {
    console.log('addDeadlineFromEvent called');

    if (!user) {
      console.log('no user found');
      return;
    }

    // TODO: very ugly but works - show deadline after creating one
    const deadline: UserDeadline & UserEvent & { start: Date; color?: string } =
      {
        ...example,
        id: newEvent.id,
        user_id: user.uid,
        title: newEvent.title,
        due_time: newEvent.end_time ? newEvent.end_time : newEvent.start_time,
        description: newEvent.description,
        priority: null,
        projected_duration: parseInt(newEvent.location_place || '60'),
        created_at: newEvent.created_at,
        start: new Date(newEvent.start_time),
        color: colorTypes.deadline,
      };

    //added to test getting deadline name to the backend
    axios
      .post(backendBaseUrl + `/api/calendar/deadlines`, deadline)
      .then((response) => {
        console.log(
          'Successfully saved deadline into backend for user id: ',
          user!.uid
        );
        console.log(response);
        // We want to be consistent and use our backend id
        const correctId = response.data.id;
        const { id, ...restEvent } = deadline;
        console.log(`Replace ${id} with ${correctId}`);
        setAllEvents([...allEvents, { id: correctId, ...restEvent }]);
      })
      .catch((error) => {
        console.log(error);
      });

    setShowModal(false);
    setNewEvent({
      ...example,
    });
    setIsDeadline(false);
  }

  function deletePerfectSchedule() {
    console.log('deletePerfectSchedule called');
    if (!user) {
      console.log('no user found');
      return;
    }
    axios
      .delete(backendBaseUrl + `/api/calendar/generated-events/${user.uid}`)
      .then((response) => {
        console.log('Successfully deleted schedule for user: ', user!.uid);
        console.log(response);
        if (response.data.count !== 0) {
          window.location.reload();
        } else {
          window.alert('You do not have any generated events to remove!');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function generatePerfectSchedule() {
    console.log('Generate perfect schedule clicked');
    if (!user) {
      console.log('no user found');
      return;
    }

    axios
      .post(backendBaseUrl + `/api/user/generate-schedule/${user.uid}`)
      .then((response) => {
        console.log('Successfully generated schedule for user: ', user!.uid);
        console.log(response);
        if (response.data.length !== 0) {
          window.location.reload();
        } else {
          window.alert('Add some deadlines first!');
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => console.log('End posting generate-schedule'));
  }

  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-4xl text-black dark:text-white text-center">
          StressLess
        </h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-10">
          <div className="col-span-8">
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'resourceTimelineWook, dayGridMonth,timeGridWeek',
              }}
              events={allEvents as EventSourceInput}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
              dateClick={handleDateClick}
              drop={(data) => addEvent(data)}
              eventClick={(data) => handleOpenModal(data)}
            />
          </div>
          <div
            id="draggable-el"
            className="ml-8 w-full border-2 p-2 rounded-md mt-16 lg:h-1/2 bg-violet-50"
          >
            <h1 className="font-bold text-lg text-center dark:text-black">
              Frequent Events
            </h1>

            {events.map((event) => (
              <div
                className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center bg-white dark:bg-black"
                title={event.title}
                key={event.id}
              >
                {event.title}
              </div>
            ))}
          </div>
        </div>

        <Transition.Root show={showDeleteModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={setShowDeleteModal}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
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
                  <Dialog.Panel
                    className="relative transform overflow-hidden rounded-lg
  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                  >
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="text-center">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-semibold leading-6 text-gray-900 mb-2"
                        >
                          {selectedEvent?.title
                            ? selectedEvent?.title
                            : 'EVENT/DEADLINE DETAILS'}
                        </Dialog.Title>

                        {selectedEvent?.description && (
                          <p
                            className={`text-lg text-gray-700 ${selectedEvent?.location_place ? 'mb-2' : 'mb-4'}`}
                          >
                            <span className="font-medium">Description:</span>{' '}
                            {selectedEvent.description}
                          </p>
                        )}
                        {selectedEvent?.location_place && (
                          <p className="text-lg text-gray-700 mb-4">
                            <span className="font-medium">Location:</span>{' '}
                            {selectedEvent.location_place}
                          </p>
                        )}

                        <p className="text-sm text-gray-500">
                          Would you like to delete this event? The action is
                          permanent.
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm
      font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900
      shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={handleCloseModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>

                  {/*<Dialog.Panel
                    className="relative transform overflow-hidden rounded-lg
                 bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                  >
                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div
                          className="mx-auto flex h-12 w-12 flex-shrink-0 items-center
                    justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                        >
                          <ExclamationTriangleIcon
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                          />
                        </div>
                        {selectedEvent?.description && (
                          <p className="text-sm text-gray-700">
                            <span className="font-medium text-gray-900">Description:</span> {selectedEvent.description}
                          </p>
                        )}
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Delete Event
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Are you sure you want to delete this event?
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm
                    font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900
                    shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={handleCloseModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>*/}
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setShowModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
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
                          Add Event or Deadline
                        </Dialog.Title>
                        <form action="submit" onSubmit={handleSubmit}>
                          <div className="mt-2">
                            <label>
                              <input
                                type="radio"
                                name="event_deadline_switcher"
                                value="event"
                                checked={!isDeadline} // Explicitly control the checked state
                                onChange={() => setIsDeadline(false)}
                              />
                              Event
                            </label>
                            <label>
                              <input
                                type="radio"
                                name="event_deadline_switcher"
                                value="deadline"
                                checked={isDeadline} // Explicitly control the checked state
                                onChange={() => setIsDeadline(true)}
                              />
                              Deadline
                            </label>
                            <input
                              type="text"
                              name="title"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900
                          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                          focus:ring-2
                          focus:ring-inset focus:ring-violet-600
                          sm:text-sm sm:leading-6"
                              value={newEvent.title}
                              onChange={(e) =>
                                setNewEvent({
                                  ...newEvent,
                                  title: e.target.value,
                                })
                              }
                              placeholder=" Title"
                            />

                            <input
                              type="text"
                              name="description"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900
                          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                          focus:ring-2
                          focus:ring-inset focus:ring-violet-600
                          sm:text-sm sm:leading-6"
                              value={newEvent.description || ''}
                              onChange={(e) =>
                                setNewEvent({
                                  ...newEvent,
                                  description: e.target.value,
                                })
                              }
                              placeholder=" Description"
                            />

                            <input
                              type="text"
                              name="location"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900
                          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                          focus:ring-2
                          focus:ring-inset focus:ring-violet-600
                          sm:text-sm sm:leading-6"
                              value={newEvent.location_place || ''}
                              onChange={(e) =>
                                setNewEvent({
                                  ...newEvent,
                                  location_place: e.target.value,
                                })
                              }
                              placeholder={
                                isDeadline
                                  ? ' Projected Duration (minutes)'
                                  : ' Location'
                              }
                            />
                            <input
                              type="DateTime-local"
                              name="start_time"
                              className="block w-full rounded-md border-0 py-1.5 text-gray-900
                          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 text-center
                          focus:ring-2
                          focus:ring-inset focus:ring-violet-600"
                              value={
                                newEvent.start_time
                                  ? new Date(newEvent.start_time)
                                      .toLocaleString('sv-SE')
                                      .replace(' ', 'T')
                                  : newEvent.start_time
                              }
                              onChange={(e) =>
                                setNewEvent({
                                  ...newEvent,
                                  start_time: new Date(
                                    e.target.value
                                  ).toISOString(),
                                })
                              }
                              placeholder="Start Time"
                            />
                            {!isDeadline && (
                              <>
                                <input
                                  type="DateTime-local"
                                  name="end_time"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900
                              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                              focus:ring-2
                              focus:ring-inset focus:ring-violet-600"
                                  value={
                                    newEvent.end_time
                                      ? new Date(newEvent.end_time)
                                          .toLocaleString('sv-SE')
                                          .replace(' ', 'T')
                                      : newEvent.end_time || ''
                                  }
                                  onChange={(e) =>
                                    setNewEvent({
                                      ...newEvent,
                                      end_time: new Date(
                                        e.target.value
                                      ).toISOString(),
                                    })
                                  }
                                  placeholder=" End Time" // Does not work
                                />
                                <input
                                  type="checkbox"
                                  className="block w-full rounded-md border-0 py-1.5 text-gray-900
                              shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                              focus:ring-2
                              focus:ring-inset focus:ring-violet-600"
                                  name="is_recurring"
                                  checked={newEvent.is_recurring}
                                  onChange={(e) =>
                                    setNewEvent({
                                      ...newEvent,
                                      is_recurring: e.target.checked,
                                    })
                                  }
                                  placeholder=" Recurring"
                                />
                                <label
                                  htmlFor="is_recurring"
                                  className="text-sm text-gray-500"
                                >
                                  Reocurring
                                </label>
                              </>
                            )}
                            {newEvent.is_recurring && (
                              <input
                                type="DateTime-local"
                                name="recurrence_start_date"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900
                          shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                          focus:ring-2    
                          focus:ring-inset focus:ring-violet-600"
                                value={
                                  newEvent.recurrence_start_date
                                    ? new Date(newEvent.recurrence_start_date)
                                        .toLocaleString('sv-SE')
                                        .replace(' ', 'T')
                                    : newEvent.recurrence_start_date || ''
                                }
                                onChange={(e) =>
                                  setNewEvent({
                                    ...newEvent,
                                    recurrence_start_date: new Date(
                                      e.target.value
                                    ).toISOString(),
                                  })
                                }
                                placeholder=" Recurrence Start Date"
                              />
                            )}
                            {newEvent.is_recurring && !isDeadline && (
                              <input
                                type="DateTime-local"
                                name="recurrence_end_date"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900
                        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                        focus:ring-2    
                        focus:ring-inset focus:ring-violet-600"
                                value={
                                  newEvent.recurrence_end_date
                                    ? new Date(newEvent.recurrence_end_date)
                                        .toLocaleString('sv-SE')
                                        .replace(' ', 'T')
                                    : newEvent.recurrence_end_date || ''
                                }
                                onChange={(e) =>
                                  setNewEvent({
                                    ...newEvent,
                                    recurrence_end_date: new Date(
                                      e.target.value
                                    ).toISOString(),
                                  })
                                }
                                placeholder=" Recurrence End Date"
                              />
                            )}
                            {newEvent.is_recurring && !isDeadline && (
                              <>
                                <label>
                                  <input
                                    type="radio"
                                    name="recurrence_pattern"
                                    value="daily"
                                    checked={
                                      newEvent.recurrence_pattern === 'daily'
                                    } // Explicitly control the checked state
                                    onChange={(e) =>
                                      setNewEvent({
                                        ...newEvent,
                                        recurrence_pattern: e.target.value,
                                      })
                                    }
                                  />
                                  Daily
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="recurrence_pattern"
                                    value="weekly"
                                    checked={
                                      newEvent.recurrence_pattern === 'weekly'
                                    } // Explicitly control the checked state
                                    onChange={(e) =>
                                      setNewEvent({
                                        ...newEvent,
                                        recurrence_pattern: e.target.value,
                                      })
                                    }
                                  />
                                  Weekly
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="recurrence_pattern"
                                    value="monthly"
                                    checked={
                                      newEvent.recurrence_pattern === 'monthly'
                                    } // Explicitly control the checked state
                                    onChange={(e) =>
                                      setNewEvent({
                                        ...newEvent,
                                        recurrence_pattern: e.target.value,
                                      })
                                    }
                                  />
                                  Monthly
                                </label>
                              </>
                            )}
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
        <div className="fixed bottom-25 right-8 z-50 flex flex-col items-center space-y-2">
          <button
            onClick={generatePerfectSchedule}
            className="flex items-center justify-center w-16 h-26 bg-violet-500 text-white rounded-full shadow-lg hover:bg-violet-600 transition-colors duration-200 cursor-pointer"
            aria-label="Generate Your Perfect Schedule"
          >
            <span className="text-xs text-center">Generate Schedule</span>
          </button>
          <button
            onClick={deletePerfectSchedule}
            className="flex items-center justify-center w-16 h-26 bg-red-400 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors duration-200 cursor-pointer"
            aria-label="Remove Events Generated by the App"
          >
            <span className="text-xs text-center">Remove Generated Events</span>
          </button>
        </div>
      </main>
    </>
  );
}
