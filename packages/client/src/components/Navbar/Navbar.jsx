import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import { HOME, LOGIN, UPLOAD_MEME } from '../../routes';

import { logoutInNavbar } from '../../redux/auth/auth-actions';

import './styles.scss';

export default function Navbar() {
    let history = useHistory();

    const { isAuthenticated } = useSelector(store => store.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        isAuthenticated ? dispatch(logoutInNavbar()) : history.push(HOME);
    };

    return (
        <div className="navbar">
            <h1>Consume My Meme</h1>
            <div className="navbar__navlinks-wrapper">
                <NavLink to="/search">search</NavLink>
                <NavLink to={isAuthenticated ? UPLOAD_MEME : LOGIN}>
                    Upload meme
                </NavLink>
                <NavLink to={isAuthenticated ? HOME : LOGIN}>
                    <button onClick={() => handleLogout()}>
                        {isAuthenticated ? 'Log out' : 'Log in'}
                    </button>
                </NavLink>
            </div>
        </div>
    );
}
