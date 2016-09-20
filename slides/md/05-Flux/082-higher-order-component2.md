## Implémentation : *Higher Order Component*

```js
export default function connect (Component, store) {
  return class ConnectedComponent extends React.Component {
    constructor (props) {
      super(props);
      this._update = ::this.setState;
      this.state = store.data;
    }
    componentDidMount () {
      store.on('change', this._update);
    }
    componentWillUnmount () {
      store.off('change', this._update);
    }
    render () {
      return <Component { ...this.props } { ...this.state } />;
    }
  }
}
```

Note:

Le *hot reload* ne marche plus aussi bien avec les HOC… La modification de composants entraine parfois la remise à 0 de l'état de l'application.
