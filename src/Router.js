import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/ListHeader';
import Footer from './components/Listfooter';
import Main from './pages/Main';
import ContainerCombine from './pages/page1/ContainerCombine';
import ContainerCombine2 from './pages/page2/ContainerCombine2';
import ContainerCombine3 from './pages/page3/ContainerCombine3';

const Router = () => (
    <div>
        <Header />
        <Routes>
            <Route path="/" element={<Main />} /> 
            <Route path="/page1" element={<ContainerCombine />} />
            <Route path="/page2" element={<ContainerCombine2 />} />
            <Route path="/page3" element={<ContainerCombine3 />} />
        </Routes>
        <Footer />
    </div>
);

export default Router;
