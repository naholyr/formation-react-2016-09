## Reducers : `createReducer`

Quand on veut juste alléger le switch/case :

```js
const reducer = createReducer(initialState, {
  ADD_CONTACT: addContact,
  TOGGLE_FRIEND: toggleFriend
})

function addContact (state, { id, name }) {
  const contacts = { ...state.contacts, [id]: name }
  // On retourne un NOUVEL ÉTAT
  return { ...state, contacts }
}

function toggleFriend (state, action) {
  …
}
```

* [Helper : ``createReducer``](#/helpers-createreducer)
* [ES6 Object Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)
