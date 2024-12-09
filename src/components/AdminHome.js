import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminHome() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token
        navigate('/login'); // Redirect to login
    };

    return (
        <div>
            <h1>Welcome Admin!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default AdminHome;