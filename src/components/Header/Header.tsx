import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {AuthStateType} from "../../Redux/auth-reducer";

const Header: React.FC<AuthStateType> = (props) => {
    return <header className={s.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPIy0hwSFb9IsEugadxiIDd1Mvp5DYDT2Vw&usqp=CAU'/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;

