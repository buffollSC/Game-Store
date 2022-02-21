import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItemFromCart, setItemInCart } from '../../../redux/cart/reducer';
import { BtnBuy } from '../../buttons/btn-buy';
import { getDatabase, ref, set, push  } from "firebase/database";
import './game-price.css';

export const GamePrice = ({ game }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.itensInCart);
    const { email, id } = useSelector((state) => state.user);
    const isItemInCart = items.some(item => item.id === game.id)

    const dataBase = getDatabase();
    const cartListRef = ref(dataBase, "user: " + id);
    const newCartRef = push(cartListRef);
  
    const handlerClick = (event) => {
        event.stopPropagation();
        if(isItemInCart) {
            dispatch(deleteItemFromCart(game.id));
        } else {
            dispatch(setItemInCart(game))
            setCartInDataBase()           
        }
    }
     
    const setCartInDataBase = () => {
            set(newCartRef, {
                    email: email,
                    image: game.image,
                    title: game.title,
                    video: game.video,
                    genres: game.genres,
                    price: game.price,
                    id: game.id,
                    description: game.description
            })
            .then(() => console.log("write in BD"))
            .catch((console.error()))  
    }
    
    return (
        <div className='game-price'>
            <span className='game-price_span'>{ game.price }$</span>
            <BtnBuy 
                onClick={ handlerClick }
                type={ isItemInCart ? "secondary" : "primary" }
            >
                {
                    isItemInCart ? "Убрать из корзины" : "В корзину"
                }      
            </BtnBuy>
        </div>
    )
}
