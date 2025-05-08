/**
 * followed a YouTube tutorial on how to make calendar view with TypeScript
 * link: https://youtu.be/VrC5XhjW6W0?si=_ibhdo7doCMXNtB3
 *
 *
 */
// Monthly default view
/**
 * TO DO: fix draggable event color in dark mode (done)
 * make a help button to link to help page
 * make events editable in drag event area
 * add documentation and comments to each function
 * sync event to backend to test out syntax
 * send rest of attributes to backend everytime event in changed
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

export default function Calendar() {
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
            />
          </div>
        </div>
      </main>
    </>
  );
}
