import React, { useContext }from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.scss';

const NavLinks = props => {
    const auth = useContext(AuthContext);
    return <ul onClick={props.onClick} className="nav-links">
        <li>
            <NavLink to="/popuptest" exact>Popuptest</NavLink>
        </li>
        
        <li>
            <NavLink to="/" exact>Keresés</NavLink>
        </li>
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/u1/places">Profil</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/places/new">Utazás hozzáadás</NavLink>
        </li>
        )}
        {!auth.isLoggedIn && (
        <li>
            <NavLink to="/auth">Belépés</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/settings">Beállítások</NavLink>
        </li>
        )}
        {auth.isLoggedIn && 
        <li>
            <button onClick={auth.logout}>LOGOUT</button>
        </li>}
        
    </ul>
};

export default NavLinks;

