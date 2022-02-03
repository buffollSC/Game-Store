import React from 'react';
import './cart-item.css';

export const CartItem = ({
    key,
    price,
    title,
    id,
}) => {
  return (
    <div className='cart-item'>
        <span>{ title }</span>
        <div className='item-cart_price'>
            <span>{ price }$</span>
        </div>
    </div>
  )
};
