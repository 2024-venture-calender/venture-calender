// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main/Main';
import EventCalendar from './pages/Calendar/EventCalendar';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main/>}/>
                    <Route path="/calendar" element={<EventCalendar />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
