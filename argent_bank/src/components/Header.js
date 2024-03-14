import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/argentBankLogo.png"
import { useSelector } from 'react-redux';
import { selectStore } from '../redux/selector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header() {
    const user = useSelector(selectStore);

    return (
        <header>
            <nav className="main-nav">
                <Link to="/" className="main-nav-logo">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    {user.isLoggedIn ? (
                        <Link to="/user" className="main-nav-item">
                            <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
                            {user.user.firstName}
                        </Link>
                    ) : (
                        <Link to="/signin" className="main-nav-item">
                            Sign In
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Header;