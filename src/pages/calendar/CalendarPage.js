import React from 'react';
import FullCalendar from '@fullcalendar/react'; 
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import { useNavigate } from 'react-router-dom'; 

function CalendarPage() {
  const navigate = useNavigate(); 

  const handleEventClick = (clickInfo) => {
    const eventTitle = clickInfo.event.title;

    if (eventTitle === '[구름톤유니브] 에프터 파티') {
      navigate('/page1'); 
    } else if (eventTitle === '[유데미] 백엔드 개발자 취업 미니 부트캠프') {
      navigate('/page2'); 
    } else if (eventTitle === '[슈코데이] ML 세미나') {
      navigate('/page3'); 
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} 
        initialView="dayGridMonth"
        events={[
          { title: '[구름톤유니브] 에프터 파티', start: '2024-05-18' },
          { title: '[유데미] 백엔드 개발자 취업 미니 부트캠프', start: '2024-05-20', end: '2024-06-21' },
          { title: '[슈코데이] ML 세미나', start: '2024-01-25' },
        ]}
        eventClick={handleEventClick} 
      />
    </div>
  );
}

export default CalendarPage;
