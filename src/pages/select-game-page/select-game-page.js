import React from 'react';
import { useSelector } from 'react-redux';
import { GameCover } from '../../components/game-cover';
import { GameGenre } from '../../components/game-genre';
import { GamePrice } from '../../components/game-price';
import './select-game-page.css';

export const SelectGamePage = () => {
    const game = useSelector((state) => state.game.currentGame);
    console.log(game)
    if(!game) return null
    return (
        <div className='select-game-page'>
            <h1 className='select-game-page_title'>{game.title}</h1>
            <div className='select-game-page_content'>
                <div className='select-game-page_left'>
                    <iframe 
                        width="90%"
                        height="400px"
                        src={game.video}
                        title='YouTube Video Plaer'
                        frameBorder='0'
                    >  
                    </iframe>
                </div>
                <div className='select-game-page_right'>
                    <GameCover image={game.image} />
                    <p>{game.description}</p>
                    <p className='secondary-text'>Популярные метки этого продукта:</p>
                    { game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
                    <div className='select-game-page_buy-game'>
                        <GamePrice game={game}/>
                    </div>
                </div>
            </div>
        </div>
    ) 
};
