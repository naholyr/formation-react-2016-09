## Implémentation : *Higher Order Component*

```js
class Root extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const { names } = this.props

    …
  }
}

export default connect(Root, store)
```
