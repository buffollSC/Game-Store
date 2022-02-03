import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { GameCover } from '../game-cover';
import { GamePrice } from '../game-price';
import { GameGenre } from '../game-genre';
import { setCurrenGame } from '../../redux/games/reducer';
import './game-item.css';


export const GameItem = ({ game }) =>  {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const selectCoverGame = () => {
        dispatch(setCurrenGame(game));
        history.push(`/app/${game.title}`)
    }
    return (
        <div className='game-item' onClick={ selectCoverGame }>
            <GameCover image={ game.image }/>
            <div className='game-item_details'>
                <span className='game-item_title'>
                    { game.title }
                </span>
                <div className='game-item_genre'>
                    {
                        game.genres.map(genre => <GameGenre genre={ genre } key={ genre }/>)
                    }
                </div>
                <div className='game-item_buy'>
                    <GamePrice game={ game } />
                </div>
            </div>
        </div>
    )
}
