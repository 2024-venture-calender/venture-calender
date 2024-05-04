// Router.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Switch를 import 추가
import Header from './components/ListHeader';
import Footer from './components/Listfooter';
import ContainerCombine from './pages/page1/ContainerCombine';
import ContainerCombine2 from './pages/page2/ContainerCombine2';
import ContainerCombine3 from './pages/page3/ContainerCombine3';

import Main from './pages/Main'
import Layout from './layouts/Layout';
const Router = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<ContainerCombine/>}/>
                    <Route path="/content" element={<Main/>}/>
                    <Route path="/content2" element={<ContainerCombine2/>}/>
                    <Route path="/content3" element={<ContainerCombine3/>}/>
                    
                </Route>
            </Routes>
            <Footer/>
        </div>
    );
}

export default Router;