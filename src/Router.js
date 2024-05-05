import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './layouts/Layout';
import Main from './pages/Main/Main';
import EventCalendar from './pages/EventCalendar/EventCalendar';
import EventList from './pages/EventList/EventList';
import EventDetails from './pages/Events/EventDetails';

const Router = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/event">
                        <Route index element={<EventCalendar />} />
                        <Route path="calendar" element={<EventCalendar />} />
                        <Route path="list" element={<EventList />} />
                        <Route path=":eventId" element={<EventDetails />} />
                    </Route>
                </Route>
            </Routes>
            
        </BrowserRouter>
    );
};

export default Router;
