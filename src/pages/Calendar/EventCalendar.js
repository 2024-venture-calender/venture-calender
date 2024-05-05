import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';  
import './EventCalendar.css';

const EventCalendar = () => {
    const navigate = useNavigate();

    // 이벤트 상세보기 페이지로 이동
    const handleEventClick = (eventClickInfo) => {
        navigate(`/event/${eventClickInfo.event.id}`);  
    };

    return (
        <div className="calendarWrap">
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locale="ko"
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'next'
                }}
                dayCellContent={(e) => {
                    return e.dayNumberText.replace('일', '');
                }}
                events={[
                    { id: '1', title: 'Sample Event', start: '2024-05-10' },  
                ]}
                eventClick={handleEventClick}  
            />
        </div>
    );
};

export default EventCalendar;