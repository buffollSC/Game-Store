import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './login-form.css';

export const LoginForm = ({ title, handleClick }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className='login-form'>
            <Typography variant="h4" component="div" className='login-form-h4'>
                Войдите
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom={ true } className='login-form_subtitle'>
                Чтобы войти на сайт используйте ваш email и пароль, которые были указаны при регистрации на сайт
            </Typography>
            <form className='login-form_form'>
                <TextField
                    label="Логин"
                    type="email"
                    size= "small"
                    margin="normal"
                    className="login-form_input"
                    fullWidth={ true }
                    onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                    label="Пароль"
                    type="password"
                    size= "small"
                    margin="normal"
                    className="login-form_input"
                    fullWidth={ true }
                    onChange={(event) => setPassword(event.target.value)}
                />
                <Typography variant="subtitle1" component="div" gutterBottom={ true } className='login-form_subtitle'>
                    У вас нет учетной записи? <Link to="/login/:register" className='auth-link'> Авторизация </Link>
                </Typography>
                <Button
                    variant="contained"
                    fullWidth={ true }
                    disableElevation={ true }
                    onClick={ () => handleClick(email, password)}
                >
                    {title}
                </Button>
            </form>
        </div>
    )
};
