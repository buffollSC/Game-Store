import React from 'react';
import './game-item.css';
import { GameCover } from '../game-cover';
import { GamePrice } from '../game-price';
import { GameGenre } from '../game-genre';

export const GameItem = ({ game }) =>  {
  return (
    <div className='game-item'>
        <GameCover image={game.image}/>
        <div className='game-item_details'>
            <span className='game-item_title'>
                {game.title}
            </span>
            <div className='game-item_genre'>
                {
                    game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
                }
            </div>
            <div className='game-item_buy'>
                <GamePrice game={game} />
            </div>
        </div>
    </div>
  )
}
