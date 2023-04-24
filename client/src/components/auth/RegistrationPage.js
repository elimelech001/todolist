import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleRegister = (e) => {
        e.preventDefault();
        
        // Send registration data to backend API for processing
        axios.post('http://localhost:5000/users/register', { email, password })
        .then(response => {
            // Handle registration success or failure
            localStorage.setItem('token', response.data.token);
        })
        .catch(error => {
            console.error(error.response);
            // Handle error
        });
    };
    
    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="email" value={email} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default RegisterForm;
