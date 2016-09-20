## Reducers

Un *reducer* est une fonction de transformation :

```js
(previousState, action) => nextState
```

```js
function contactsApp (state = initialState, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return newState
    case 'TOGGLE_FRIENDS':
      return newState
    default:
      return state
  }
}
```

Inconvénient : On va vite se retrouver avec un ``switch/case`` énorme !

Note:

Parallèle avec ``Array#reduce`` qui prend en paramètre une fonction de réduction :

```js
array.reduce(
  (previousResult, currentValue) => nextResult,
  initialResult
)
```
