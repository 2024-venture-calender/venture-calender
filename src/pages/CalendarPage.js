import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';  

const CalendarPage = () => {
    const navigate = useNavigate();

    // 이벤트 상세보기 페이지로 이동
    const handleEventClick = (eventClickInfo) => {
        navigate(`/event/${eventClickInfo.event.id}`);  
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={[
                { id: '1', title: 'Sample Event', start: '2024-05-10' },  
            ]}
            eventClick={handleEventClick}  
        />
    );
};

export default CalendarPage;