import React from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GameCover } from '../../game/game-cover';
import { deleteItemFromCart } from '../../../redux/cart/reducer';
import './order-item.css';


export const OrderItem = ({ game }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteItemFromCart(game.id))
    }
    return (
        <div className='order-item'>
            <div className='order-item_cover'>
                <GameCover image={game.background_image} />
            </div>
            <div className='order-item_title'>
                <span>
                    {game.name}
                </span>
            </div>
            <div className='order-item_price'>
                <span>
                    {game.reviews_text_count}$
                    <AiOutlineCloseCircle 
                        size={25}
                        className='cart-item_delete-icon'
                        onClick={ handleClick }
                    />
                </span>
            </div>
        </div>
    )
};
