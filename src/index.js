import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import routes from './routes';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    { routes }
  </Provider>,
  document.getElementById('root')
);


/* Example: dispatch from outside

import io from 'socket.io-client';

var socket = io('localhost:3001');
socket.emit('subscribe', 'cats');
socket.on('added', (ns, cat) => {
  console.log('Meow!', cat);
  store.dispatch('???')
});

*/
