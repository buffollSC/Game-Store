import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, child, get, onValue  } from "firebase/database";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../login-form/login-form';
import { setUser } from '../../../redux/users/reducer';
import { setItemInCart } from '../../../redux/cart/reducer';

export const Login = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();
    const dataBaseRef = ref(getDatabase());

    const handleLogin = (email, password) => {
        const auth = getAuth();
        
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid, 
                }));
                return { user }
            })
            .then(({ user }) => {
                get(child(dataBaseRef, "user: " + user.uid))
                    .then((snapshot) => {
                        if (snapshot.exists()) {
                            const values = snapshot.val();
                            for(let val in values) {
                                dispatch(setItemInCart(values[val]))
                            }
                        } else {
                            console.log("No data available");
                        }
                        push('/');
                    })
            })
            .catch((error) => { alert(error) })
    }
    return (
        <LoginForm
            title='Войти'
            handleClick={handleLogin}
        />
    )
};