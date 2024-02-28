import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
);
