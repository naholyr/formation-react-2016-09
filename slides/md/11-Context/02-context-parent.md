## Context : le parent

* ``childContextTypes`` définit le format du context
* ``getChildContext()`` définit sa valeur

```js
class App extends React.Component {

  getChildContext () {
    return { color: 'blue' };
  }

  render () {
    // Plus besoin de passe-plat
    return <MessageList />;
  }
}

App.childContextTypes = { color: React.PropTypes.string }
```

Un composant *stateless* ne peut définir un contexte
