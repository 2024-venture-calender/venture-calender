// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Main from './pages/Main/Main';
import CalendarPage from './pages/Calendar/CalendarPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main/>}/>
                    <Route path="/calendar" element={<CalendarPage />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
