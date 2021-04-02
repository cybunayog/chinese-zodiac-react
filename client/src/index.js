import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import axios from 'axios';

// Import files
import {
  Home,
  ZodiacAnimals,
  WhatIsYourZodiac,
  SignUp,
  ZodiacTest,
  Login
} from 'modules/pages';
import { Toolbar, SideDrawer, Backdrop } from "modules/components";
  
// Import styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;

export default function App() {

  const [sideDrawerOpen, setSideDrawer] = useState(false);
  
  const drawerToggleClickHandler = () => {
    return setSideDrawer(true);
  };

  const backdropClickHandler = () => {
    return setSideDrawer(false);
  };

  let backdrop;
  
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler}/>;
  }
  
  // USE SESSIONS/REDUX TO HIDE CERTAIN FEATURES

  return (
      <div className="App">
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
        <main>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/zodiac-animals" component={ZodiacAnimals} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/what-is-your-zodiac" component={WhatIsYourZodiac} />
            <Route path="/zodiac-test" component={ZodiacTest} />
            <Route render={() => <div style={{ padding: "100px 100px 0px 0px" }}><h1>404: Page not found</h1></div>} />
          </Switch>
        </main>
      </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
