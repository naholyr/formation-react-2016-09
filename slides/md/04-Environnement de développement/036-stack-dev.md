## Lancer tous les scripts en une commande

```sh
npm install --save-dev npm-run-all
```

```json
{
  "dev": "npm-run-all --parallel serve watch"
}
```

```sh
npm run dev
```

Quand on ajoutera le build de CSS, voire d'HTML, et autres taches à lancer en parallèle, il sera de plus en plus utile d'avoir un unique point d'entrée simple.
