import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://192.168.1.x:3001/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, password, userType }),
            });
            if (response.ok) {
                alert('Signup successful! Please log in.');
                navigate('/login'); // Redirect to login page
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <label>
                User Type:
                <select value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="">Select a user type</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;
