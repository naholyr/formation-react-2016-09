## Composant classe

```js
const Composant = React.createClass({
  render: function () {
    return element
  }
})
```

* Composant *stateful* (on y reviendra)
* Une méthode ``render``

```js
const Hello = React.createClass({
  render: function () {
    return ... this.props.who ...
  }
})

var root = React.createElement(Hello, { who: 'World' })
```
