import React, { useState } from 'react';

const Signup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, password, userType }),
            });
            console.log(response);
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const data = await response.json();
            console.log('Signup successful:', data);
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
