import React from 'react';
import { Link } from 'react-router-dom';
import { CartBlock } from '../cart-block'
import './header.css';

export const  Header = () => {
  return (
    <div className='header'>
        <div className='header_wrapper_logo'>
            <Link to="/" className='header_logo'>
                Game Store
            </Link>
        </div>
        <div className='header_wrapper_cart'>
            <CartBlock />
        </div>
    </div>
  )
}
