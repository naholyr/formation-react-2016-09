## Le store, côté serveur

Le code est le même que côté client :

```js
import configureStore from '…/configure-store';

function renderApp () {
  return getState() // Génération de l'état de l'application
    .then(state => {
      const store = configureStore(state)

      … // Théoriquement le même code que côté client

      return renderToString(reactElement)
    })
}
```
