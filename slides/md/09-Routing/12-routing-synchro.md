## Synchro history <> store

`hashHistory` peut être préférable dans le cas d'une app *electron*
```js
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

const history = syncHistoryWithStore(browserHistory, store)
```

```html
ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      …
    </Router>
  </Provider>,
  document.getElementById('root')
)
```
