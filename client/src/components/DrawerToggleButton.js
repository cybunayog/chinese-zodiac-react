// Import packages
import React from 'react';

// Import Styles
import 'styles/GlobalStyles.css';

export default function DrawerToggleButton(props) {
    return (
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
            <div className="toggle-button_line" />
        </button>
    );
}