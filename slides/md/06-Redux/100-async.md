## Asynchrone

On va découper nos actions en deux parties :

* Début de l'opération
* Fin de l'opération

```js
function requestAPI (url) {
  return { type: 'REQUEST', payload: { url } }
}

function receiveAPI (response) {
  return { type: 'RECEIVE', payload: { response }, error: response instanceof Error }
}
```

```js
store.dispatch(requestAPI(url)); // Début
fetch(url)
.then(response => response.json())
.then(json => store.dispatch(receiveAPI(json))) // Fin OK
.catch(err => store.dispatch(receiveAPI(err))) // Fin FAIL
```
