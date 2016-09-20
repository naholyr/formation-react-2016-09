## Côté JS : création d'un composant

Un composant = une fonction de rendu

```html
<body>
  <div id="app"></div>

  <script src="https://cdn.jsdelivr.net/react/0.14.3/react.js"></script>
  <script src="https://cdn.jsdelivr.net/react/0.14.3/react-dom.js"></script>
</body>
```

```js
var root = React.createElement(Hello)
ReactDOM.render(root, document.getElementById('app'))
```

```js
function Hello () {
  return React.createElement('div', {className: 'hello'},
    React.createElement('span', {}, 'Hello, '),
    React.createElement('strong', {}, 'World'))
}
```

Note:

* On peut avoir plusieurs points de montage pour monter des composants à différents endroits de la page
* S'ils doivent communiquer entre eux → Flux (plus tard)
