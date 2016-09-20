## Composant classe (ES6)

```js
class Composant extends React.Component {
  render() {
    return element
  }
}
```

* Même principe de base
* Utilisation des [classes ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) au lieu du helper
  * [ES6 in 350 bullet points](https://ponyfoo.com/articles/es6)

```js
class Hello extends React.Component {
  render() {
    return ... this.props.who ...
  }
}

var root = React.createElement(Hello, { who: 'World' })
```
