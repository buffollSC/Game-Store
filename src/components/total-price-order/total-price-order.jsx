import React from 'react';
import { totalPriceSelectGames } from '../utils/total-Price-Select-Games';
import './total-price-order.css';

export const TotalPriceOrder = ({ items }) => {
    
    let lastFigure = items.length > 20 ? items.length % 10 : items.length;
    let stringValue = '';
    
    switch (lastFigure) {
        case 1:
            stringValue = 'игра'
            break;
        case 2:
        case 3:
        case 4:
            stringValue = 'игры'
            break;
        default:
            stringValue = 'игр'
            break;
    }
    
    return (
        <div className='total-price-order'>
            { items.length } {stringValue} на сумму: { totalPriceSelectGames(items) }$
        </div>
    )
};
