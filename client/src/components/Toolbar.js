import React, { useContext} from 'react';
import {
    Link
} from 'react-router-dom';

import AuthContext from 'context/AuthContext';
import { LogOutButton } from 'modules/components';

import HomeIcon from "../assets/images/home.png";

export default function Toolbar(props) {
    const {loggedIn} = useContext(AuthContext);
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_logo">
                    <img src={HomeIcon} title="Home" />
                </div>
                <div className="spacer" />
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {
                            loggedIn === false && (
                                <>
                                    <li><Link to="/login">Login</Link></li>
                                    <li><Link to="/register">Register</Link></li>
                                </>
                            )
                        }
                        {
                            loggedIn === true &&
                            <>
                                <li><Link to="/zodiac-animals">Zodiac Animals</Link></li>
                                <li><Link to="/zodiac-test">Zodiac Test</Link></li>
                                <li><Link to="/what-is-your-zodiac">What's your Zodiac?</Link></li>
                                <li><LogOutButton /></li>
                            </>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
}