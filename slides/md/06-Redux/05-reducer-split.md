## Reducers : découpage

Chaque *reducer* a en charge une partie de l'arbre global :

```js
import { combineReducers } from 'redux';

function reducer1 (state = subState1, action) {
  switch (action.type) { … }
}

function reducer2 (state = subState2, action) {
  switch (action.type) { … }
}

const rootReducer = combineReducers({
  sub1: reducer1,
  sub2: reducer2
})

// État global: { sub1: …, sub2: … }
```

* [ES6 Default Parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

Note:

Ce qui se cache derrière combineReducers:

```js
const rootReducer = (state = {}, action) => {
  return {
    sub1: reducer1(
      state.subState1,
      action
    ),
    sub2: reducer2(
      state.subState2,
      action
    )
  }

}
```

Son implémentation :

```js
const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] => reducers[key](
          state[key],
          action
        )
        return nextState
      },
      {}
    )
  }
}
```
