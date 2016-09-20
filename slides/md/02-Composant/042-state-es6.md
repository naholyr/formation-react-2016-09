## Composant *stateful* (ES6)

* Initialiser l'état : ``constructor``
* Modifier l'état : ``setState``
* Lire l'état : ``state``

```js
class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = { counter: 0 }
  }
  incr () {
    this.setState({ counter: this.state.counter + 1 })
  }
  render () {
    const incr = this.incr.bind(this) // ES7 → ::this.incr
    return React.createElement('button', { onClick: incr }, this.state.counter)
  }
}
```
