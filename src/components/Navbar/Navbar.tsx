import React from 'react';
import c from './Navbar.module.css';
import {NavLink} from "react-router-dom";

type NavbarType = {

}

const Navbar: React.FC<NavbarType> = () => {
    return <nav className={c.nav}>
        <div className={c.item}>
            <NavLink to = '/profile' activeClassName={c.active}>Profile</NavLink>
        </div>
        <div className={`${c.item} ${c.active}`}>
            <NavLink to = '/dialogs' activeClassName={c.active}>Messages</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to = '/users' activeClassName={c.active}>Users</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to = '/new' activeClassName={c.active}>News</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to = '/music' activeClassName={c.active}>Music</NavLink>
        </div>
        <div className={c.item}>
            <NavLink to = '/settings' activeClassName={c.active}>Settings</NavLink>
        </div>

    </nav>
}

export default Navbar;