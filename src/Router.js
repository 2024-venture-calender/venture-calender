// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/User/Login';
import Regist from './pages/User/Register';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/login" element={ <Login/> } />
                <Route path="/regist" element={ <Regist/> } />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
