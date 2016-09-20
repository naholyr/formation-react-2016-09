## Implémentation : *Wrappers*

```js
// components/Wrapper.js
export default class Wrapper extends React.Component {
  constructor (props) {
    …
    this.state = props.store.data
  }

  componentDidMount () { this.props.store.on('change', …) }

  componentWillUnmount () { this.props.store.off('change', …) }

  render () {
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { ...this.props, ...this.state }))
    return <div>{ children }</div>
  }
}

// app.js
const element = <Wrapper store={ contactStore }><Root /></Connect>
```
