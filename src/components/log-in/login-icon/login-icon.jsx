import React from 'react';
import { GoPerson } from 'react-icons/go';
import './login-icon.css';

export const LoginIcon = () => {
    return (
        <div>
            <GoPerson size={ 25 } className='login-icon'/> 
            <span className='login-icon_sigin'>вход</span>
        </div>
    )
};
