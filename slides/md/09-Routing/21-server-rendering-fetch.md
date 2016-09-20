## Rendu côté serveur : data fetching

La question de la récupération initiale des données reste entière… Le routeur nous apporte-t-il quelque-chose ?

Idée : déléguer le chargement des données à la route plutôt qu'au composant.

* ``onEnter`` + *callback* pour charger les données
* Autre piste : ``redux-router`` qui émet une action ``ROUTER_DID_CHANGE`` + ``getState`` (pour fetch conditionné à l'état courant) + ``components`` (pour savoir ce qu'il faut récupérer) → [Exemple complet](https://github.com/erikras/react-redux-universal-hot-example)
  * Attention : installer ``redux-router@latest`` (cf. [npm install only grabs package.json](https://github.com/rackt/redux-router/issues/78))

Note:

* (1) [Chaque composant (racine de route) décrit sa méthode ``fetchData``](https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/containers/App/App.js#L14-L25)
* (2) [On intercepte les actions ROUTER_DIR_CHANGE (ex. middleware)](https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/redux/middleware/transitionMiddleware.js#L6-L17)
* (3) [On appelle une fonction de récupération groupée des données](https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/helpers/getDataDependencies.js)
* (4) [On ouvre un moyen de se brancher sur le résultat du chargement](https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/redux/middleware/transitionMiddleware.js#L38)
* (5) [pour l'écouter côté serveur et attendre pour le rendu](https://github.com/erikras/react-redux-universal-hot-example/blob/master/src/server.js#L93)

```js
// (1)
{
  fetchData(getState, dispatch) {
    if (!getState().contacts._loaded) {
      return dispatch(fetchContacts())
    }
  }
}

// (2)
function fetchDataMiddleware ({getState, dispatch}) {
  return next => action => {
    if (action.type === ROUTER_DID_CHANGE) {
      next(action)
      const fetchP = Promise.all(getDataDependencies(components, getState, dispatch, …))
      // (4)
      getState().fetchP = fetchP
      return fetchP
    } else {
      next(action)
    }
  }
}

// (3)
function getDataDependencies (components, getState, dispatch, …) {
  const callables = _.filter(components, 'fetchData')
  return _.invoke(callables, 'fetchData', getState, dispatch, …)
};

// (5)
import { ReduxRouter } from 'redux-router';
import { match } from 'redux-router/server';
store.dispatch(match(req.originalUrl, (error, redirectLocation, routerState) => {
  store.getState().fetchP.then(() => {
    const component = <Provider store={store} key="provider"><ReduxRouter/></Provider>;
    …
  })
}))
```
