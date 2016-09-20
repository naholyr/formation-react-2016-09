## Middlewares

``redux-thunk`` est un *middleware*. Qu'est-ce ? Une fonction :

```js
store => next => action => anything
```

* ``store`` est limité aux méthodes ``getState`` et ``dispatch``
  * ``getState()`` retourne l'état courant du store
  * ``dispatch(action)`` lance une action
* ``next(action)`` passe la main au middleware suivant
* ``action`` est l'action dispatchée précédemment
* La valeur retournée sera le retour final de ``dispatch()``

```js
const logger = ({ dispatch, getState }) => next => action => {
  console.log('ACTION', action)
  console.log('STATE', state)
  return next(action)
}
```

Note:

* Oui, c'est une fonction qui retourne une fonction qui retourne une fonction : currying.

Sans les fonctions flêche, ça peut piquer :

```js
function logger (store) {
  return function (next) {
    return function (action) {
      …
    }
  }
}
```
