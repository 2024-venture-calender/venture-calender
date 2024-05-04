import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Router는 없음
import CalendarPage from './calendar/CalendarPage'; 
import Page1 from './page1/ContainerCombine'; 
import Page2 from './page2/ContainerCombine2'; 
import Page3 from './page3/ContainerCombine3';

function Main() {
    return (
        <div>
            <Routes> {/* Routes만 사용 */}
                <Route path="/" element={<CalendarPage />} /> {/* 기본 경로 */}
                <Route path="/page1" element={<Page1 />} />
                <Route path="/page2" element={<Page2 />} />
                <Route path="/page3" element={<Page3 />} />
            </Routes>
        </div>
    );
}

export default Main;
