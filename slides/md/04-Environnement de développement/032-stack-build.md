## La *stack* : phase de *build*

```sh
npm install --save react react-dom
npm install --save-dev \
  browserify \
  babelify babel-preset-es2015 babel-preset-react
```

Créer ``.babelrc`` ([cf. exemple](https://babeljs.io/docs/plugins/preset-react/))

```json
{
  "build": "browserify --debug -t babelify src/app.js -o static/build.js"
}
```

```sh
npm run build
```

Ça marche ! mais il faut relancer la commande à chaque modification.

Note:

* ``--save`` pour react car c'est du runtime également utilisable côté serveur
* ``--debug`` pour la source-map
* Si besoin ``--extension=.jsx`` pour pouvoir charger des modules en ".jsx" sans spécifier l'extension


``.babelrc`` :

```json
{
  "presets": ["es2015", "react"]
}
```
