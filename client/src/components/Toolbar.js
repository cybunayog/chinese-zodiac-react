import React from 'react';
import {
    Link
} from 'react-router-dom';

// Import Styles
import 'styles/GlobalStyles.css';
import HomeIcon from "../assets/images/home.png";

export default function Toolbar(props) {
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
                        <li><Link to="/zodiac-animals">Zodiac Animals</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}