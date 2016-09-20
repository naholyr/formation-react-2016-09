## Communication inter-composants : exercice

Implémenter les composants ``ContactForm`` et ``Root``

```js
// Root.js
…
  render () {
    const { names } = this.state

    return (
      <div>
        <ContactList names={ names } />
        <ContactForm onAdd={ ::this.addName } />
      </div>
    )
  }
…
```
