import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { GameItem } from '../../components/game/game-item';
import { useAuth } from '../../components/hooks/useAuth';
import { Loader } from '../../components/loader/loader';
import { CreatePages } from '../../components/utils/pages-creator';
import './home-page.css';

export function HomePage() {
    const { isAuth } = useAuth();
    const [ Games, setGames]  = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ numberPage, setNumberPage ] = useState(1);
    const pages = [];

    const fetchData = async () => {
        const url = `https://api.rawg.io/api/games?key=47ea164303ef4f4ea37e6b4c6428008e&page=${numberPage}&page_size=18`;
        try {
            const response = await fetch(url)
            const responseJSON = await response.json(); 
            const responseJSONResults = await responseJSON.results;
            setGames(responseJSONResults);
            setIsLoading(true) 
        } catch (error) {  
            console.log('error', error)
        }
    };
    
    CreatePages(pages, 100, numberPage);
    useEffect(() => { 
        fetchData()
        }, [numberPage]); 

    return  isAuth ? (  
            <div className='home-page'>    
                { isLoading ? 
                        Games.map(game => <GameItem game={ game } key={ game.name }/> ) 
                    :   
                        <div className='loader-margin'>
                            <Loader />
                        </div>
                }
                <div className='pages'>
                    {pages.map((page, index) => 
                    <span 
                        key={ index } 
                        className={ numberPage == page ? 'select-number-page' : 'page' }
                        onClick={()=> { setNumberPage(page) }}>
                            { page }
                    </span>)}   
                </div>
            </div>
        ) : (
            <Redirect to='/login'/>
        ) 
}
