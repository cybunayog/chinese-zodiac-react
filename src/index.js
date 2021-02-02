import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Import files
import { Home } from 'modules/pages';

// Import styles
import './index.css';


export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
