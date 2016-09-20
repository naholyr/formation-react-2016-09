## Implémentation : Branchement sur le store

```js
// components/Root.js
import store from '../stores/contacts';

export default class Root extends React.Component {

  // On se branche sur les mises à jour du store
  componentDidMount () { contactsStore.on('change', this.update) }

  // Nettoyage au unmount (memory leak)
  componentWillUnmount () { contactsStore.off('change', this.update) }

  constructor (props) {
    super(props)
    this.update = ::this.setState // juste pour avoir une réf. commune au on/off
    this.state = { ...store.data } // init données
  }

  …
}
```

Note:

Utilisation de ``componentDidMount`` et pas ``componentWillMount`` à cause de *Warning: setState(...): Can only update a mounted or mounting component.*
