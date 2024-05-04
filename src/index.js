import React from 'react';
import ReactDOM from 'react-dom/client';  // 'react-dom'에서 'createRoot' 사용
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // 'root'에 앱 마운트
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);