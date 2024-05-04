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
            <Header />
            
            {/* 님 근데 님은 왜 layout 파일이 있음? 
                일단 ㅇㅋ 저 에러가 만약 어처구니 없는 에러면
                혼날줄 아셈 ^^ 오 누가 봐도 임포트 경로 에런데
                안...했....네? 아니 여기위에 ㄷㅏ 1이잖아 글고 2랑 3은 어케해?또만들어?
                일단... 기달려
            */}
            <Routes>
                <Route path="/" element={ <Layout/> }>
                    <Route index element={ <Main/> }/>
                    <Route path="/containerCombine" element={<ContainerCombine />} />
                </Route>
            </Routes>
            <Map />
            <Footer />
        </div>
    );
}

export default Router;