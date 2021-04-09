import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from 'App';

// Import styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
