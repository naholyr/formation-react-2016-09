import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
