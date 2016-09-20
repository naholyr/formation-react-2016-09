## Relay

*Higher Order Component* :

```js
class User extends React.Component {
  render () {
    return <span>{ this.props.user.name } ({ this.props.user.email })</span>;
  }
}

export default Relay.createContainer(User, {
  fragments: {
    user: () => Relay.QL`fragment on User { email }`
  }
})
```

```js
// Render a specific user component
ReactDOM.render(<RelayRootContainer Component={ User } route={
  queries: {
    user: () => Relay.QL`query { node(id: "123") }`
  }
} />, domElement)
```

Note:

* Le composant retourné par ``Relay.createContainer`` décrit de quel "fragments" de la donnée il a besoin pour son rendu
* La donnée requêtée spécifiquement sera définie par un ``RelayRootContainer``
