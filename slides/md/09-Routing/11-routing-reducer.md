## routing reducer

A la création du `store`, on combine un `reducer` dédié au routage

```js
import { routerReducer } from 'react-router-redux'

const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)
```
