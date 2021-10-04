import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import {AuthStateType} from "../../Redux/auth-reducer";


interface IProps extends AuthStateType{
    logout: () => void
}

const Header: React.FC<IProps> = (props) => {

    return <header className={s.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPIy0hwSFb9IsEugadxiIDd1Mvp5DYDT2Vw&usqp=CAU'/>

        <div className={s.loginBlock}>
            {props.isAuth

                ? <div>{props.login} <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;

