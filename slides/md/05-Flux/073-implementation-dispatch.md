## Implémentation : Dispatch d'action

```js
// components/ContactForm.js
import dispatcher from '../dispatcher';

export default class Root extends React.Component {
  …

  // Plus besoin de la prop "onAdd"

  submit (e) {
    e.preventDefault();
    this.setState({ value: '' });

    // On dispatche l'action "add-name"
    dispatcher.emit('add-name', this.state.value);
  }

  …
}
```
