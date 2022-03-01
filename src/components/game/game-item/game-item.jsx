import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { GameCover } from '../game-cover';
import { GamePrice } from '../game-price';
import { GameGenre } from '../game-genre';
import { setCurrenGame, setVideoURL } from '../../../redux/games/reducer';
import './game-item.css';

export const GameItem = ({ game }) =>  {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ Game, setGame ]  = useState(''); 
    const [ Video, setVideo ] = useState('');
    
    const fetchDataSelectGame = async () => {
        const url = `https://api.rawg.io/api/games/${game.id}?key=47ea164303ef4f4ea37e6b4c6428008e`;
        try {
            const response = await fetch(url)
            const responseJSON = await response.json();  
            setGame(responseJSON); 
        } catch (error) {  
            console.log(error)
        }
    };
    const fetchMovieSelectGame = async () => {
        const url = `https://api.rawg.io/api/games/${game.id}/movies?key=47ea164303ef4f4ea37e6b4c6428008e`;
        try { 
            const response = await fetch(url)
            const responseJSON = await response.json();
            const videoURL = await responseJSON.results[0].data.max;
            setVideo(videoURL);  
        } catch (error) {  
            console.log(error)
        }
    };
    useEffect(() => { 
        fetchDataSelectGame();
        fetchMovieSelectGame();
        }, []); 
    
    const selectCoverGame = () => { 
        dispatch(setCurrenGame(Game));
        dispatch(setVideoURL(Video));
        history.push(`/app/${ game.name }`);
    }

    // Game.genres.map((genre) => console.log('->', genre.games_count))
    return (
        <div className='game-item' onClick={ selectCoverGame }>
            <GameCover image={ game.background_image }/>
            <div className='game-item_details'>
                <span className='game-item_title'>
                    { game.name }
                </span>
                <p className='game-item_rating'>Rating: { game.rating }</p>
                <div className='game-item_genre'>
                    {
                        game.genres.map(genre => <GameGenre genre={ genre } key={ genre.games_count }/>)
                    }
                </div>
                <div className='game-item_buy'>
                    <GamePrice gamePrice={ Game.reviews_text_count } game={ Game } video={ Video } key={ Game.name } />
                </div> 
            </div> 
        </div>
    ) 
}
