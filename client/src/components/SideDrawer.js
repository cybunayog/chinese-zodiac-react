import React from 'react';
import { Link } from 'react-router-dom';

import 'styles/GlobalStyles.css';

export default function SideDrawer(props) {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer-open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/control-structures">Control Structures</Link></li>
      </ul>
    </nav>
  )
}