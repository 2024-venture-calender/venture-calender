// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import EventList from './pages/EventList/EventList';

import Layout from './layouts/Layout';

const Router = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                {/* <Route path="/main" element={<Main />} /> */}
                
                {/*  */}
                <Route path='/' element={<Layout/>}>

                    <Route index element={<Main/>}/>

                    <Route path='/eventlist' element={<EventList/>}/>

                    {/* <Route path="/eventlist" element={<EventList />} /> */}
                        {/* 
                        <Route path="(/주소창에적힐이름)" index element={ <(파일이름) />}
                        <Route path="(/주소창에적힐이름)" index element={ <(파일이름) />}
                        <Route path="(/주소창에적힐이름)" index element={ <(파일이름) />}
                        */}
                    {/* </Route> */}

                </Route>
            </Routes>
            
        </BrowserRouter>
    );
};

export default Router;
