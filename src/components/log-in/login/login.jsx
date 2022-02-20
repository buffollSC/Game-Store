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
    const { id } = useSelector((state) => state.user);
    const dataBaseRef = ref(getDatabase());

    get(child(dataBaseRef, "user: " + id))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const values = snapshot.val();
                    for(let val in values) {
                        dispatch(setItemInCart(values[val]))
                    }
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => { alert(error) });

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid, 
                }));
                push('/');
            })   
            .catch(() => alert('Invaild user!'))
            
    }
    
    return (
        <LoginForm
            title='Войти'
            handleClick={handleLogin}
        />
    )
};