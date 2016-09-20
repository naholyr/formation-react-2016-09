## La *stack* : *hot reload*

```sh
npm install --save-dev \
  livereactload \
  babel-plugin-react-transform \
  react-proxy@1
  # Windows: --ignore-scripts
```

```json
{
  "watch": "watchify -p livereactload …"
}
```

Compléter ``.babelrc`` ([cf. exemple](https://github.com/milankinen/livereactload/tree/master/examples/01-basic-usage))

```sh
npm run watch
```

Même plus besoin de rafraichir.

Exercice : ajouter un composant à état pour observer que les états sont conservés lors du *hot reload*

Note:

* ["*React Proxy 2.0 has important breaking changes. Until LiveReactload supports them, you should stick with 1.x.*"](https://github.com/milankinen/livereactload/issues/72)
* **LIMITATION** Les composants *stateless* provoquent des "full refresh"

``.babelrc`` :

```json
{
  "presets": ["es2015", "react"],
  "env": {
    "development": {
      "plugins": [
        ["react-transform", {
          "transforms": [{
            "transform": "livereactload/babel-transform",
            "imports": ["react"]
          }]
        }]
      ]
    }
  }
}
```
