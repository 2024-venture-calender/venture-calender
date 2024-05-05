import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './EventCalendar.css';

const EventCalendar = () => {
    const navigate = useNavigate();

    // 이벤트 상세보기 페이지로 이동
    const handleEventClick = (clickInfo) => {
        navigate(`/event/${ clickInfo.event.id }`);  
    };

    return (
        <div className="contentWrap container">
            <div className='buttonWrap'>
                <Button variant
                    style={{backgroundColor: '#481677', color: 'white'}}
                    onClick={() => navigate('/event/list')}
                >
                    목록으로 보기
                </Button>
            </div>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
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
                    { id: 1, title: '[구름톤유니브] 에프터 파티', start: '2024-05-18' },
                    { id: 2, title: '[유데미] 백엔드 개발자 취업 미니 부트캠프', start: '2024-05-20', end: '2024-06-21' },
                    { id: 3, title: '[슈코데이] ML 세미나', start: '2024-01-25' },
                ]}
                eventClick={handleEventClick}  
            />
        </div>
    );
};

export default EventCalendar;
