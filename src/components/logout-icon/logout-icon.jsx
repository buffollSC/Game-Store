import React from 'react';
import { IoIosLogOut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { removeCart } from '../../redux/cart/reducer';
import { removeUser } from '../../redux/users/reducer';
import './logout-icon.css';

export const LogoutIcon = () => {
    const dispatch = useDispatch();
    
    return (
        <div onClick={() => {
            dispatch(removeUser());
            dispatch(removeCart())
        }}>
            <IoIosLogOut size={ 25 } className='logout-icon' />
            <span className='logout-icon_sigout'> выход </span>
        </div>
    )
}
