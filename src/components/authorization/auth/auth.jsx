import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUser } from '../../../redux/users/reducer';
import { AuthForm } from '../auth-form';

export const Auth = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const handleAuth = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                }));
                push('/');
            })
            .catch(console.error)
    }

    return (
        <AuthForm
            title='Зарегистрироваться'
            handleClick={handleAuth}
        />
    )
};
 
