import React, { useContext } from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';

// Import files
import {
  Home,
  ZodiacAnimals,
  Register,
  Login,
  ZodiacTest
} from 'modules/pages';

import { Toolbar, Footer } from 'modules/components';
import AuthContext from 'context/AuthContext';

export default function Routes() {

  const { loggedIn } = useContext(AuthContext);
  
  return (
    <BrowserRouter>
      <Toolbar />
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/zodiac-animals" component={ZodiacAnimals} />
        {
          loggedIn === false && (
            <>
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
            </>
          )
        }
        {
          loggedIn === true && <Route path="/zodiac-test" component={ZodiacTest} />
        }
        
        <Route render={() => <div style={{ padding: "100px 100px 0px 0px" }}><h1>404: Page not found</h1></div>} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}