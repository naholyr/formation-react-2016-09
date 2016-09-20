## `react-redux` : `Provider`

On vient wrapper notre container racine avec `<Provider>`

```js
import App from './containers/App';
import { Provider } from 'react-redux';

const root = <Provider store={store}><App /></Provider>
```

Le store est alors disponible pour tous les composants descendants.
