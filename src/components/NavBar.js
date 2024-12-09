import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const token = localStorage.getItem('token'); // Check if user is logged in

    return (
        <nav>
            {!token && (
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </>
            )}
            {token && (
                <>
                </>
            )}
        </nav>
    );
}

export default Navbar;
