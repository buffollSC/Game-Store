import React from 'react';
import { BtnBuy } from '../buttons/btn-buy';
import './game-price.css';
export const GamePrice = ({ game }) => {
  return (
  <div className='game-price'>
      <span className='game-price_span'>{game.price}$</span>
      <BtnBuy 
        onClick={() => null}
        type="primary"
      >
        В корзину
      </BtnBuy>
  </div>
  )
}
