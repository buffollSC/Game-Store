import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDatabase, ref, set, push, remove, onValue, child } from "firebase/database";
import { deleteItemFromCart, setItemInCart } from '../../../redux/cart/reducer';
import { BtnBuy } from '../../buttons/btn-buy';
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
            deleteSelectGameFromDB()
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
    
    const deleteSelectGameFromDB = () => {
        onValue(cartListRef, (snapshot) => { 
            snapshot.forEach((childSnapshot) => {
                const childKey = childSnapshot.key;
                const childData = childSnapshot.val();
                if(game.id === childData.id) {
                    remove(child(cartListRef, childKey))
                        .then(() => {
                            console.log(`${childData.title} removed successful`)
                        })
                        .catch((error) => {
                            console.log("unsuccessful, error" + error)
                        })
                }
            });
        }, {
            onlyOnce: true
        });
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
