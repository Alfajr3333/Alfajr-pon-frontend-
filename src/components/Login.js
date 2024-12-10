import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode} from 'jwt-decode';



function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://192.168.1.x:3001/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Response data:', data);
            console.log('Response status:', response.status);

            if (data.token) {
                console.log("hi")
                // Store token in localStorage
                localStorage.setItem('token', data.token);

                // Decode the token to get userType
                const decoded = jwtDecode(data.token);
                const userType = decoded.userType;

                // Redirect based on userType
                if (userType === 'admin') {
                    navigate('/admin-home');
                } else if (userType === 'user') {
                    navigate('/user-home');
                }
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
