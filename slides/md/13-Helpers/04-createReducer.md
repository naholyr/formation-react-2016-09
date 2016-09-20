## createReducer

```js
export function createReducer (initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };
}
```

```js
// Avant
export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME': return …
    default: return state
  }
}

// Après
export default createReducer(initialState, {
  CHANGE_NAME: (state, payload) => { ... }
});
```

Voir [Flux Standard Action](https://github.com/acdlite/flux-standard-action)
