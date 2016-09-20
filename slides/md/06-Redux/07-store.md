## Store

Pour rappel, un *store* :

* contient l'état de l'application
* notifie des mises à jour de l'état — `subscribe()`
* donne un accès en lecture à l'état courant – `getState()`
* écoute les actions — `dispatch()`

```js
import { createStore } from 'redux';

const store = createStore(reducer, initialState);

store.subscribe(() => updateApp(store.getState()))

store.dispatch(actionCreator())
```
