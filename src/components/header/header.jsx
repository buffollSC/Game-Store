import React from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cart/cart-block';
import { LoginIcon } from '../log-in/login-icon';
import { LogoutIcon } from '../logout-icon/logout-icon';
import './header.css';

export const  Header = () => {
  return (
    <div className='header'>
        <div className='header_wrapper_logo'>
            <Link to="/" className='header_logo'>
                Game Store
            </Link>
        </div>
        <div className='header_login-cart'>
            <div className='header_wrapper_cart'>
                <CartBlock />
            </div>
            {/* <div className='header_login'>
                <Link to="/login" className='header_login_link'>
                    <LoginIcon />
                </Link>
            </div> */}
            <div className='header_logout'>
                <Link to="/login" className='header_logout_link'>
                    <LogoutIcon />
                </Link>
            </div>
        </div>
        
    </div>
  )
}
