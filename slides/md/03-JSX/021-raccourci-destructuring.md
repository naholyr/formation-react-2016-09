## Autres raccourcis

```js
const { li, span, strong, ul } = React.DOM
const h = React.createElement

function Contact (props) {
  return li({},
    span({}, 'Name:'),
    strong({}, props.name)
  )
}

function ContactList (props) {
  return ul({},
    props.names.map((name, key) => h(Contact, { name, key }))
  )
}

var root = h(ContactList, { names: ['John', 'Bob', 'Arnold'] })
```

