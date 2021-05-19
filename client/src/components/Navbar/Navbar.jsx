import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { HOME, LOGIN, UPLOAD_MEME } from '../../routes';

import './styles.scss';

export default function Navbar() {
    const { isAuthenticated } = useSelector(store => store.auth);
    return (
        <div className="navbar">
            <h1>Consume My Meme</h1>
            <div className="navbar__navlinks-wrapper">
                <NavLink to="/search">search</NavLink>
                <NavLink to={isAuthenticated ? UPLOAD_MEME : LOGIN}>
                    Upload meme
                </NavLink>
                <NavLink to={isAuthenticated ? HOME : LOGIN}>
                    {isAuthenticated ? 'LogOut' : 'LogIn'}
                </NavLink>
            </div>
        </div>
    );
}
