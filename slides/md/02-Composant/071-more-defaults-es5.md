## Initialisation de l'état et des propriétés

### ES5

```js
React.createClass({

  getInitialState: function () {
    return initialState
  },

  getDefaultProps: function () {
    return defaultProps
  },

  …
})
```

Exemple : initialiser l'état par les propriétés ([Gare aux anti-patterns](https://facebook.github.io/react/tips/props-in-getInitialState-as-anti-pattern.html))
