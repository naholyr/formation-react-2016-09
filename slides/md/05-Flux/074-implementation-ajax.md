## Implémentation : Initialisation depuis l'extérieur

```js
// app.js
import dispatcher from './dispatcher';

// Fetch data
setTimeout(function () {
  dispatcher.emit('init-names', ['John', 'Bob', 'Arnold']);
}, 1000);

// Init view
const element = <Root />;
```
