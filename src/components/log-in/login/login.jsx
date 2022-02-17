import React from 'react';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoginForm } from '../login-form/login-form';
import { setUser } from '../../../redux/users/reducer';

export const Login = () => {
    const dispatch = useDispatch();
    const { push } = useHistory();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid, 
                }));
            })
            .then(() => {
                setPersistence(auth, browserSessionPersistence)
                    .then((event) => {
                        console.log(auth)
                        return signInWithEmailAndPassword(auth, email, password)
                    })
                    .catch((error) => {
                        alert(error.code);
                    })
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
