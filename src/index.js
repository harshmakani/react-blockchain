import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes';
import Header from './components/Header';

// initialize rotues and navi links
const initRoutes = () => (
  <Router>
    <div>
      <Header />
      <div className='container'>{routes}</div>
    </div>
  </Router>
);
const initializedRoutes = initRoutes();
ReactDOM.render(initializedRoutes, document.getElementById('root'));
