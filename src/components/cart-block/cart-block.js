import React, { useState } from 'react';
import { BiCartAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { CartMenu } from '../cart-menu';
import { ItemsInCart } from '../item-in-cart';

import { totalPriceSelectGames } from '../utils/total-Price-Select-Games';

import './cart-block.css';


export const CartBlock = () => {
  const [isCartMenuVisible, setCartMenuVisible] = useState(false);
  const items = useSelector(state => state.cart.itensInCart);
  const totalPrice = totalPriceSelectGames(items);
  return (
    <div className='cart-block'>
      <ItemsInCart quantity={items.length}/>
      <BiCartAlt onClick={() => setCartMenuVisible(!isCartMenuVisible)} size={ 25 } className='cart-block_icon'/>
      { totalPrice > 0 ? 
        <span className='cart-block_tota-price'>{ totalPrice }$</span> 
        : null
      }
      { isCartMenuVisible ? 
        <CartMenu items={ items } onClick={() => null} />
        : null 
      }
    </div>
  )
}
