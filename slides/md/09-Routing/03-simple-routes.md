## Déclaration des routes

```js
// routes.js
import { browserHistory } from 'react-router' // singleton

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ Root }>
      <Route path="contacts" component={ ContactList } />
      <Route path="*" component={ NoMatch } />
    </Route>
  </Router>
)
```

```js
// Root.js
export default (props) => (
  <div>
    { props.children }
  </div>
)
```

```js
// app.js
render(routes, domElement)
```

That's all folks!

Note:

* URLs en ``#/contacts`` par défaut
* Utiliser ``history`` pour passer en mode "pushState" (incompatible IE, dans ce cas les liens rafraichissent la page tout simplement) :
  * ``import createBrowserHistory from 'history/lib/createBrowserHistory'``
  * ``<Router history={ createBrowserHistory() }>``
