import React from 'react';
import FullCalendar from '@fullcalendar/react'; // FullCalendar 컴포넌트
import dayGridPlugin from '@fullcalendar/daygrid'; // 달력 형태
import interactionPlugin from '@fullcalendar/interaction'; // 클릭 이벤트
import { useNavigate } from 'react-router-dom'; // useNavigate 사용

function CalendarPage() {
  const navigate = useNavigate(); // 페이지 전환을 위해 useNavigate 사용

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
        eventClick={handleEventClick} // 이벤트 클릭 시 페이지 이동
      />
    </div>
  );
}

export default CalendarPage;
