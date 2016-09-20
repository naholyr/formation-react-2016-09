## Rester compatible avec le mode *serverless*

Si on sait gérer le cas où l'état global n'est pas injecté, alors on peut aussi fonctionner en mode "fichier statique" :

```js
const hasState = !!window.APP_STATE

// Serverless → état vide
const state = hasState ? window.APP_STATE : {}

// Initialisation du store
const store = configureStore(state)

// Serverless → actions d'initialisation
if (!hasState) {
  store.dispatch(fetchContacts())
}

// …
```
