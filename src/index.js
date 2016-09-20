import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import uuid from 'uuid';


const todos = [
  {
    id: uuid(),
    text: 'Cultiver mon jardin',
    done: false
  },
  {
    id: uuid(),
    text: 'Formation React',
    done: false
  },
  {
    id: uuid(),
    text: 'Faire la vaisselle',
    done: true
  },
]

ReactDOM.render(
  <App todos={ todos } />,
  document.getElementById('root')
);
