## Utiliser un nom raccourci ?

```js
const h = React.createElement

function Contact (props) {
  return h('li', {},
    h('span', {}, 'Name:'),
    h('strong', {}, props.name)
  )
}

function ContactList (props) {
  return h('ul', {},
    props.names.map((name, key) => h(Contact, { name, key }))
  )
}

var root = h(ContactList, { names: ['John', 'Bob', 'Arnold'] })
```

C'est déjà [**hyper**](https://github.com/Matt-Esch/virtual-dom/tree/master/virtual-hyperscript) mieux !

Note:

En pseudo code :

```js
var ReactElement = function(type, props) {
  this.type = type
  this.props = props
}

var createElement = function(type, config, children) {
  var props = {}
  for (propName in config) {
    props[propName] = config[propName]
  }
  props.children = children

  return new ReactElement(type, props)
}
```

HyperScript va encore plus loin : gestion des selecteurs CSS, props optionelles…
