import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Import files
import { Home, ControlStructures } from 'modules/pages';
import { Toolbar, SideDrawer, Backdrop } from "modules/components";
// Import styles
import './index.css';


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

  return (
    <div className="App">
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
      <main>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/control-structures" component={ControlStructures} />
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
