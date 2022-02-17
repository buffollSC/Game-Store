import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order/order-item';
import { TotalPriceOrder } from '../../components/order/total-price-order';
import './order-page.css';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itensInCart);
    
    return items < 1 ?
    (
        <h1>
            Ваша корзина пуста!
        </h1>
    ) : (
        <div className='order-page'>
            <div className='order-page_left'>
                { items.map(game => <OrderItem game={game} key={game.title}/> )}
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
