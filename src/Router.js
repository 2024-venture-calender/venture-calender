// Router.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Switch를 import 추가
import Header from './components/ListHeader';
import Footer from './components/Listfooter';
import Map from './pages/Map';
import ContainerCombine from './pages/page1/ContainerCombine';
import Main from './pages/Main'
import Layout from './layouts/Layout';
const Router = () => {
    return (
        <div>
            {/* <Header /> */}
            <Routes>
                <Route path="/" element={<ContainerCombine/>}>
                    <Route path="/main" element={<Main/>}/>
                </Route>
            </Routes>
            {/* <Footer/> */}
        </div>
    );
}

export default Router;