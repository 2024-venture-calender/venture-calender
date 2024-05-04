import React from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <header style={{ padding: '10px', backgroundColor: '#282c34', color: 'white' }}>
            <img src="/logo.png" alt="App Logo" style={{ height: '40px' }} />
            <nav aria-label="Main Navigation">
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', gap: '20px' }}>
                    <li><Link to="/" style={{ color: 'white' }}>Home</Link></li>
                    <li><Link to="/calendar" style={{ color: 'white' }}>Calendar</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;