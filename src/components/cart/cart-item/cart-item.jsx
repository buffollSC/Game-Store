import React from 'react';
import './cart-item.css';

export const CartItem = ({ price, title }) => {
    return (
        <div >
            <div className='cart-item'>
                <span>{ title }</span>
                <div className='item-cart_price'>
                    <span>{ price }$</span>
                </div>
            </div>
        </div>
    )
};
