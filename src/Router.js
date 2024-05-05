import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Error from './Error';
import ScrollTop from './ScrollTop';
import Layout from './layouts/Layout';
import Main from './pages/Main/Main';
import EventCalendar from './pages/EventCalendar/EventCalendar';
import EventList from './pages/EventList/EventList';
import EventDetails from './pages/Events/EventDetails';
import Login from './pages/User/Login';
import Register from './pages/User/Register';

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />}/>
                    <Route path="/event">
                        <Route index element={<EventCalendar />} />
                        <Route path="calendar" element={<EventCalendar />} />
                        <Route path="list" element={<EventList />} />
                        <Route path=":eventId" element={<EventDetails />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
            
        </BrowserRouter>
    );
};

export default Router;
