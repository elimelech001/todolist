import React, { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true); // State to track whether it's login or registration

    const handleToggleAuthMode = () => {
        setIsLogin(!isLogin); // Toggle between login and registration
    };

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Send login data to backend API for authentication
        axios.post(`http://localhost:5000/users/${isLogin ? 'Login' : 'Register'}`, { email, password })
            .then(response => {
                console.log(response.data);
                // Handle login success or failure

                // Save token to localStorage
                localStorage.setItem('token', response.data.token);
                navigate('/todos');
                // Perform other actions after successful login
            })
            .catch(error => {
                console.error(error.message);
                alert(error.response.data.error)
                // Handle error
            });
    };

    return (
        <div>
            {/* <ThemeProvider theme={"theme"}> */}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        {isLogin ? 'Login' : 'Register'}
                    </Typography>
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {isLogin ? 'Login' : 'Register'}
                        </Button>
                    </Box>
                    <Button onClick={handleToggleAuthMode}>
                        {isLogin ? 'Don\'t have an account? Register' : 'Already have an account? Login'}
                    </Button>
                </Box>
            </Container>

        </div>
    );
};

export default LoginForm;
