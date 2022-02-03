import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { TotalPriceOrder } from '../../components/total-price-order';
import { totalPriceSelectGames } from '../../components/utils/total-Price-Select-Games';

import './order-page.css';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itensInCart);
    console.log(items)
    if(items < 1) {
        return (
            <h1>
                Ваша корзина пуста!
            </h1>
        )
    }
    return (
        <div className='order-page'>
            <div className='order-page_left'>
                { items.map(game => <OrderItem game={game}/> )}
            </div>
            <div className='order-page_right'>
                <div className='order-page_total-price'>
                    <span>
                        <TotalPriceOrder items={items}/>
                    </span>
                </div>
            </div>
        </div>
    )
};
