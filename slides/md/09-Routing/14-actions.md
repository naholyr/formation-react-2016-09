## Routing actions

Ajouter le `middleware` à la création du `store`

```js
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

const middleware = routerMiddleware(browserHistory)
const store = createStore(
  reducers,
  applyMiddleware(middleware)
)
```

```js
import { routerActions } from 'react-router-redux'

this.props.dispatch(routerActions.push('/foo'))
```
push, replace, go, goBack, goForward
