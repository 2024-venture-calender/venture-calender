import React from 'react';
<<<<<<< Updated upstream
import ReactDOM from 'react-dom/client';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router />
);
=======
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // 단일 BrowserRouter 사용
import Router from './Router'; // 최상위 라우팅 컴포넌트

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* 애플리케이션 전체에 하나의 BrowserRouter */}
    <Router /> {/* 라우팅 구조를 관리하는 컴포넌트 */}
  </BrowserRouter>
);
>>>>>>> Stashed changes
