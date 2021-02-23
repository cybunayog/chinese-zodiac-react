import React from 'react';
import {
    Link
} from 'react-router-dom';
import { DrawerToggleButton } from 'modules/components';

// Import Styles
import 'styles/GlobalStyles.css';

export default function Toolbar(props) {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar_logo">
                    {/* <img src="/images/logo/cnciLogo.jpg" title="CNCI Logo" />--> */}
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