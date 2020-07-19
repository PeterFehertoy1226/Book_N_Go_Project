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
            <NavLink to="/" exact>Search Trip</NavLink>
        </li>
        {auth.isLoggedIn && (
        <li>
          {/*  <NavLink to={`/${auth.userId}/places`}>My trips</NavLink> */} 
            <NavLink to='/5f09aab6650dec5604290f2e/places'>My trips</NavLink> 
            
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/places/new">Add trip</NavLink>
        </li>
        )}
        {!auth.isLoggedIn && (
        <li>
            <NavLink to="/auth">Login</NavLink>
        </li>
        )}
        {auth.isLoggedIn && (
        <li>
            <NavLink to="/settings">Settings</NavLink>
        </li>
        )}
        {auth.isLoggedIn && 
        <li>
            <button onClick={auth.logout}>LOGOUT</button>
        </li>}
        
    </ul>
};

export default NavLinks;

