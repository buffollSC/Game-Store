import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer';
import { BtnBuy } from '../buttons/btn-buy';
import './game-price.css';

export const GamePrice = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itensInCart);
    const isItemInCart = items.some(item => item.id === game.id)
  
    const handlerClick = (event) => {
        event.stopPropagation();
        if(isItemInCart) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game));
        }
    }
    
    return (
        <div className='game-price'>
            <span className='game-price_span'>{ game.price }$</span>
            <BtnBuy 
                onClick={ handlerClick }
                type={isItemInCart ? "secondary" : "primary"}
            >
                {
                    isItemInCart ? "Убрать из корзины" : "В корзину"
                }      
            </BtnBuy>
        </div>
    )
}
