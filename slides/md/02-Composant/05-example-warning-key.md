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
    props.names.map(name =>
      React.createElement(Contact, { name }))
  )
}

var root = React.createElement(ContactList, { names: ['John', 'Bob', 'Arnold'] })
```

* [ES6 arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
* [ES6 shorthand objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_6)
