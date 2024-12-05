import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    return (
        <BrowserRouter>
            <div>
                {/* Navigation Bar */}
                <nav>
                    <ul style={navStyles}>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    {/* Default Route */}
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

// Inline styles for navigation bar
const navStyles = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#f4f4f4',
    padding: '10px',
};

export default App;
