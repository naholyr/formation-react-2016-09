## Implémentation : Store

```js
// stores/contacts.js
import Jvent from 'jvent';
import dispatcher from '../dispatcher';

// Le store est un Event Emitter
const store = new Jvent();
export default store;

// On expose les données
store.data = { names: [] };

// On écoute les actions (action = nom + paramètres)
dispatcher.on('add-name', (params) =>{
  store.data.names.push(name); // On met à jour les données métier
  store.emit('change', store.data}); // On notifie la vue
});
```
