import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './auth-form.css';

export const AuthForm = ({ title, handleClick }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className='auth-form'>
            <Typography variant="h4" component="div" className='auth-form-h4'>
                Регистрация
            </Typography>
            <form className='auth-form_form'>
                <TextField
                    label="Логин"
                    value={ email }
                    type="email"
                    size= "small"
                    margin="normal"
                    className="auth-form_input"
                    fullWidth={ true }
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    label="Пароль"
                    value={ password }
                    type="password"
                    size= "small"
                    margin="normal"
                    className="auth-form_input"
                    fullWidth={ true }
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Typography variant="subtitle1" component="div" gutterBottom={ true } className='login-form_subtitle'>
                    Есть учетная запись? <Link to="/login" className='login-link'> Войти </Link>
                </Typography>
                <Button
                    variant="contained"
                    fullWidth={ true }
                    disableElevation={ true }
                    onClick={() => handleClick(email, password)}
                    sx={{
                        marginTop:2
                    }}
                >
                    { title }
                </Button>
            </form>
        </div>
    )
};