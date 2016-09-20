## Produire un *build* prêt pour la production

On va ajouter une phase de minification :

```sh
npm install -D uglify-js
```

```json
{
  "build:prod": "NODE_ENV=production browserify -t babelify src/app.js > static/build.js",
  "postbuild:prod": "uglifyjs static/build.js -o static/build.js"
}
```

```sh
npm run build:prod
```

Note:

* Pourquoi pas ``uglifyify`` et *-t uglifyify* ? L'idée est de voir qu'on peut utiliser n'importe quel binaire, pas besoin de rester sur l'écosystème fermé de son outil de build.
* Sous Windows, la syntaxe ``VAR=val cmd`` ne fonctionne pas, il faudra utiliser le module ``cross-env`` pour avoir un script multi-plateform :

```sh
npm i -D cross-env
```

```json
{
  "build:prod": "cross-env NODE_ENV=production browserify …"
}
```
