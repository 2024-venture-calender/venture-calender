import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';  
import Footer from './components/Footer';  
import CalendarPage from './pages/CalendarPage';  
import EventListPage from './pages/EventListPage';  

const App = () => (
  <Router>
    <Header />  
    <main>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    </main>
    <Footer /> 
  </Router>
);

export default App;