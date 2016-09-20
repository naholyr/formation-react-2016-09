## Composant *stateful*

* Initialiser l'état : ``getInitialState``
* Modifier l'état : ``setState``
* Lire l'état : ``state``

```js
const Counter = React.createClass({
  getInitialState: function () {
    return { counter: 0 }
  },
  incr: function () {
    this.setState({
      counter: this.state.counter + 1
    })
  },
  render: function () {
    const incr = this.incr.bind(this)
    return React.createElement('button', { onClick: incr }, this.state.counter)
  }
})
```
