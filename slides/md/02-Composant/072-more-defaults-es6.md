## Initialisation de l'état et des propriétés

### ES6

```js
class MyComponent extends React.Component {

  constructor (props) {
    super({...defaultProps, ...props})

    this.state = initialState
  }

  …
}
```

Alternatives : `MyComponent.defaultProps = …` ou `getDefaultProps()`
