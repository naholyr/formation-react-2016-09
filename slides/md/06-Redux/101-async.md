## Asynchrone : ``redux-thunk``

Pour créer une action globale, on va d'abord devoir la découpler du store. Mais comment ``dispatch`` ?

```js
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
)
```

```js
function fetchAPI (url) {
  return (dispatch) => {
    dispatch(request(url)); // Début
    fetch(url).then(response => response.json())
    .then(json => dispatch(receiveAPI(json))) // Fin OK
    .catch(err => dispatch(receiveAPI(err))) // Fin FAIL
  }
}
```

```js
store.dispatch(fetchAPI(url))
```
