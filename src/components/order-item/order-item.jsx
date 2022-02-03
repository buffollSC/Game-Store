import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GameCover } from '../game-cover';
import './order-item.css';
import { deleteItemFromCart } from '../../redux/cart/reducer';

export const OrderItem = ({ game }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }
    return (
        <div className='order-item'>
            <div className='order-item_cover'>
                <GameCover image={game.image} />
            </div>
            <div className='order-item_title'>
                <span>
                    {game.title}
                </span>
            </div>
            <div className='order-item_price'>
                <span>
                    {game.price}$
                    <AiOutlineCloseCircle 
                        size={25}
                        className='cart-item_delete-icon'
                        onClick={handleClick}
                    />
                </span>
            </div>
        </div>
    )
};
