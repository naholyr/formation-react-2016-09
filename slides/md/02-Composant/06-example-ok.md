## Exemple complet

```js
function Contact (props) {
  return React.createElement('li', {},
    React.createElement('span', {}, 'Name:'),
    React.createElement('strong', {}, props.name)
  )
}
function ContactList (props) {
  return React.createElement('ul', {},
    props.names.map((name, key) =>
      React.createElement(Contact, { name, key }))
  )
}

var root = React.createElement(ContactList, { names: ['John', 'Bob', 'Arnold'] })
```

![](images/error-key.png)

``key`` permet à React de "suivre" les éléments
