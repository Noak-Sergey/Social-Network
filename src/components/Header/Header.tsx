import React from 'react';
import c from './Header.module.css';

type HeaderType = {

}

const Header: React.FC<HeaderType> = () => {
    return <header className={c.header}>
        <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgPIy0hwSFb9IsEugadxiIDd1Mvp5DYDT2Vw&usqp=CAU'/>
    </header>
}

export default Header;