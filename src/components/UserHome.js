import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserHome() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token
        navigate('/login'); // Redirect to login
    };

    return (
        <div>
            <h1>Welcome User!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default UserHome;