## Composant fonction

```js
function Composant (props) {
  return element
}
```

* **Entrée** : les ``props`` viennent de ``createElement``
* **Sortie** : la fonction retourne un élément ``React``

```js
function Hello (props) {
  return React.createElement('div', {className: 'hello'},
    React.createElement('span', {}, 'Hello, '),
    React.createElement('strong', {}, props.who))
}

var root = React.createElement(Hello, { who: 'World' })
```
