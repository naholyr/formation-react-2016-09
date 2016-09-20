## Côté JS : rendu d'un composant

Instancier, puis rendre un composant

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

Note:

Ne jamais monter le composant sur &lt;body&gt; directement (trop d'interactions possibles avec les autres libs)
