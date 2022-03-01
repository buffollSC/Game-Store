import React from 'react';
import { useSelector } from 'react-redux';
import { GameCover } from '../../components/game/game-cover';
import { GameGenre } from '../../components/game/game-genre';
import { GamePrice } from '../../components/game/game-price';
import './select-game-page.css';

export const SelectGamePage = () => {
   
    const game = useSelector((state) => state.game.currentGame);
    const video = useSelector((url) => url.game.videoUrl);
    console.log('--->', game)
    if(!game) return null
    return (
        <div className='select-game-page'>
            <h1 className='select-game-page_title'>{ game.name }</h1>
            <div className='select-game-page_content'>
                <div className='select-game-page_left'>
                    <iframe 
                        width="900px"
                        height="500px"
                        src={ video }
                        title='YouTube Video Plaer'
                        frameBorder='0'
                    >  
                    </iframe>        
                </div>
                <div className='select-game-page_right'>
                    <GameCover image={ game.background_image } />
                    <p>
                        { game.description_raw }
                    </p>
                    <p className='secondary-text'>
                        Популярные метки этого продукта:
                    </p>
                    { game.genres.map((genre) => <GameGenre genre={ genre } />)}
                    <div className='select-game-page_buy-game'>
                        <GamePrice gamePrice={ game.reviews_text_count } game={ game } video={ video } key={ game.name }/>
                    </div>
                </div>
            </div>
        </div>
    ) 
};
