## Principe général côté serveur :

Côté client :

```js
import { render } from 'react-dom';
…
render(reactElement, domElement)
```

Côté serveur :

```js
import { renderToString } from 'react-dom/server';
… // Théoriquement le même code
const html = renderToString(reactElement)
```
