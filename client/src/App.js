import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
// Import files
import {
  Home,
  ZodiacAnimals,
  Register
} from 'modules/pages';
import { Toolbar } from "modules/components";
  
export default function App() {
  // USE SESSIONS/REDUX TO HIDE CERTAIN FEATURES

  return (
    <BrowserRouter>
      <Toolbar/>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/zodiac-animals" component={ZodiacAnimals} />
            <Route path="/register" component={Register} />
            <Route render={() => <div style={{ padding: "100px 100px 0px 0px" }}><h1>404: Page not found</h1></div>} />
      </Switch>
    </BrowserRouter>
  );
}