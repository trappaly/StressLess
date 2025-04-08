// Monthly default view
'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, {
  Draggable,
  DropArg,
} from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useEffect, useState } from 'react';
//import { Dialog, Transition } from '@headlessui/react';
//import { CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import { EventSourceInput } from '@fullcalendar/core/index.js';
//import "tailwindcss";
//import './globals.css'

interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

export default function Home() {
  //  const [events, setEvents] = useState([
  //    { title: 'event 1', id: '1' },
  //    { title: 'event 2', id: '2' },
  //    { title: 'event 3', id: '3' },
  //    { title: 'event 4', id: '4' },
  //    { title: 'event 5', id: '5' },
  //  ]);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  //  const [showModal, setShowModal] = useState(false);
  //  const [showDeleteModal, setShowDeleteModal] = useState(false);
  //const [idToDelete, setIdToDelete] = useState<number | null>(null);
  const [newEvent, setNewEvent] = useState<Event>({
    title: '',
    start: '',
    allDay: false,
    id: 0,
  });

  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el');
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
          let title = eventEl.getAttribute('title');
          let id = eventEl.getAttribute('data');
          let start = eventEl.getAttribute('start');
          return { title, id, start };
        },
      });
    }
  }, []);

  function handleDateClick(arg: { date: Date; allDay: boolean }) {
    setNewEvent({
      ...newEvent,
      start: arg.date,
      allDay: arg.allDay,
      id: new Date().getTime(),
    });
    //    setShowModal(true);
  }

  function addEvent(data: DropArg) {
    const event = {
      ...newEvent,
      start: data.date.toISOString(),
      title: data.draggedEl.innerText,
      allDay: data.allDay,
      id: new Date().getTime(),
    };
    setAllEvents([...allEvents, event]);
  }

//  function handleDeleteModal(data: { event: { id: string } }) {
    //    setShowDeleteModal(true);
    //  setIdToDelete(Number(data.event.id));
//  }

  //  function handleDelete() {
  //    setAllEvents(
  //      allEvents.filter((event) => Number(event.id) !== Number(idToDelete))
  //    );
  //    setShowDeleteModal(false);
  //    setIdToDelete(null);
  //  }
  //  function handleCloseModal() {
  //    setShowModal(false);
  //    setNewEvent({
  //      title: '',
  //      start: '',
  //      allDay: false,
  //      id: 0,
  //    });
  //    setShowDeleteModal(false);
  //    setIdToDelete(null);
  //  }

  //  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
  //    setNewEvent({
  //      ...newEvent,
  //      title: e.target.value,
  //    });
  //  };

  //  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //    e.preventDefault();
  //    setAllEvents([...allEvents, newEvent]);
  //    setShowModal(false);
  //    setNewEvent({
  //      title: '',
  //      start: '',
  //      allDay: false,
  //      id: 0,
  //    });
  //  }

  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2x1 text-gray-700">StressLess</h1>
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
//          eventClick={(data) => handleDeleteModal(data)}
        />
      </nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="grid grid-cols-10">
          <div className="col-span-8"></div>
        </div>
      </main>
    </>
  );
}
