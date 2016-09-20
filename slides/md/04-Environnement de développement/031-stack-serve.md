## La *stack* : serveur HTTP

```sh
npm install --save-dev serve
```

```json
{
  "scripts": {
    "serve": "serve --port 3000 static/"
  }
}
```

```sh
npm run serve
```

Visiter http://localhost:3000

Pour l'instant ça ne fait pas grand-chose…

Note:

* ``--save-dev`` pour sauvegarder la dépendance dans le ``package.json``, c'est du dev donc → ``devDependencies``

``index.html``

```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>I'm in a React app!</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="build.js"></script>
  </body>
</html>
```
