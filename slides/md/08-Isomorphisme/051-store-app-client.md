## Le store, côté client

Ça ne change pas grand-chose :

```js
// Avant
import store from '…/store';

// Après
import configureStore from '…/configure-store';
const store = configureStore(window.APP_STATE)

// …
const element = <Provider store={ store }><Root /></Provider>
render(element, document.getElementById('app'))
```

* ``state`` injecté en variable globale
