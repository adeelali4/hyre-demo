"use client"

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";

import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const DnDCalendar = withDragAndDrop(Calendar);

export default function CalendarUI(){
    moment.locale('en-gb');
    const localizer = momentLocalizer(moment);
    let view = "week";
    let events = [
        {
            id: 1,
            start: new Date('2024-01-11T10:00:00'),
            end: new Date('2024-01-11T11:00:00'),
            title: "UI Task"
        },
        {
            id: 2,
            start: new Date('2024-01-10T12:00:00'),
            end: new Date('2024-01-10T13:00:00'),
            title: "UI Task"
        }
    ]

    let onEventResize = (data) => {
        const { start, end, event } = data;
        event.start = start;
        event.end = end;
      };

    let onEventDrop = (data)=>{
        const { start, end, event } = data;
        event.start = start;
        event.end = end;
        if(data.isAllDay == null){
            event.isAllDay=false;
        }
    }

    let onSelectEvent = (data) =>{
        console.log(data);
    }

    let today = new Date();

    let minDate = new Date();
    minDate.setHours(8);
    minDate.setMinutes(0);
    minDate.setSeconds(0);
    minDate.setMilliseconds(0);

    let maxDate = new Date();
    maxDate.setHours(19);
    maxDate.setMinutes(0);
    maxDate.setSeconds(0);
    maxDate.setMilliseconds(0);

    return <>
        <div className="flex justify-between mb-2 items-center">
            <div>
                <h3 className="font-semibold text-xl text-[#ef5225]">{today.toLocaleString('default', { month: 'long' })}, {today.getFullYear()}</h3>
            </div>
            <div>
                <button className="mx-2 px-4 py-2 text-[#ef5225] text-sm font-semibold">Availability</button>
            </div>
        </div>
        <DnDCalendar
            localizer={localizer}
            defaultDate={today}
            defaultView={view}
            onEventDrop={onEventDrop}
            // onEventResize={onEventResize}
            onSelectEvent={onSelectEvent}
            resizable
            min={minDate}
            max={maxDate}
            step={60}
            events={events}
            startAccessor="start"
            endAccessor="end"
        />
        <button type="button" className="bg-[#ef5225] px-5 py-3 shadow rounded-full text-white text-xl font-bold fixed bottom-6 right-10 hover:bg-[#ef5000] hover:shadow-xl">+</button>
    </>
}