## `react-redux` : `connect`

*connecter* un composant à Redux revient à :
- sélectionner la portion du *state* qui le concerne
- choisir et binder les *actions* dont il a besoin

```js
import { connect } from 'react-redux';

class MyComponent { … }

export default connect(select, actions)(MyComponent)
```

```js
@connect(select, actions)
export default class MyComponent { … }
```

* [ES7 Decorators](https://github.com/wycats/javascript-decorators)

Note:
* Pour les décorateurs, penser au ``"stage": 0`` dans ``.babelrc``
