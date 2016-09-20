## La *stack* : *build* incrémental

```sh
npm install --save-dev watchify
```

```json
{
  "watch": "watchify --debug -t babelify src/app.js -o static/build.js -v"
}
```

```sh
npm run watch
```

Plus besoin de relancer la commande à chaque modification ! Mais il faut rafraichir la page…

On peut faire mieux !

Note:

Solution possible : ``lr-http-server`` au lieu de ``serve``, mais full refresh
