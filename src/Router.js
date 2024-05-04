<<<<<<< Updated upstream
// src/Router.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
};
=======
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // BrowserRouter 없이 Routes와 Route 사용
import Header from './components/ListHeader';
import Footer from './components/Listfooter';
import Main from './pages/Main';
import ContainerCombine from './pages/page1/ContainerCombine';
import ContainerCombine2 from './pages/page2/ContainerCombine2';
import ContainerCombine3 from './pages/page3/ContainerCombine3';

const Router = () => (
    <div>
        <Header />
        <Routes> {/* 여러 경로를 정의 */}
            <Route path="/" element={<Main />} /> {/* 기본 경로를 Main으로 설정 */}
            <Route path="/page1" element={<ContainerCombine />} />
            <Route path="/page2" element={<ContainerCombine2 />} />
            <Route path="/page3" element={<ContainerCombine3 />} />
        </Routes>
        <Footer />
    </div>
);
>>>>>>> Stashed changes

export default Router;
