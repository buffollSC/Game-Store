import React from 'react';
import { BtnBuy } from '../../buttons/btn-buy';
import { CartItem } from '../cart-item';
import { totalPriceSelectGames } from '../../utils/total-price-select-games';
import './cart-menu.css';

export const CartMenu = ({ items, onClick}) => {
    return (
        <div className='cart-menu'>
            <div className='cart-menu_games-list'>
                {
                    items.length > 0 ? items.map(game => (
                    <CartItem 
                        key={ game.title } 
                        price={ game.price } 
                        title={ game.title } 
                        id={ game.id }/>)) 
                    : "Корзина пуста"
                }
            </div>
            {
                items.length > 0 ?
                <div className='cart-menu_arrange'>
                    <div className='cart-menu_total-price'>
                        <span>Итого: </span>
                        <span>{ totalPriceSelectGames(items) }$</span>
                    </div>
                    <BtnBuy type= "primary" size='m' onClick={ onClick }>
                        Оформить заказ
                    </BtnBuy>
                </div>
                : null
            }
        </div>
    )
}
