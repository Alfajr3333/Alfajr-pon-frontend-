import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from "./components/Signup";
import Dashboard from"./components/Dashboard";
import {ProtectedRoute} from './components/ProtectedRoute'; 
import AdminHome from "./components/AdminHome";
import UserHome from "./components/UserHome";
import Navbar from "./components/NavBar";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwtDecode(token);
            const userType = decoded.userType;

            if (userType === 'Admin') {
                navigate('/admin-home');
            } else if (userType === 'User') {
                navigate('/user-home');
            }
        }
    }, [navigate]);

    return (
            <div>
                <Navbar/>

                {/* Routes */}
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/admin-home" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
                    <Route path="/user-home" element={<ProtectedRoute><UserHome /></ProtectedRoute>} />
                    {/* Default Route */}
                    <Route path="/" element={<Login />} />
                </Routes>
            </div>
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
