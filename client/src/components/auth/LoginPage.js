import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault();
        
        // Send login data to backend API for authentication
        axios.post('http://localhost:5000/users/login', {  email, password })
        .then(response => {
            console.log(response.data);
            // Handle login success or failure
            
            // Save token to localStorage
            localStorage.setItem('token', response.data.token);
            
            // Perform other actions after successful login
        })
        .catch(error => {
            console.error(error.message);
            // Handle error
        });
    };
    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" value={email} onChange={(e) => setUsername(e.target.value)} required /><br /><br />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br /><br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default LoginForm;
