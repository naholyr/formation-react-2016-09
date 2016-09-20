## Le store : mort aux singletons !

On n'exporte plus directement le store, mais une fonction ``state => store`` :

```js
// Avant
export default createStore(reducers, initialStore)

// Après
export default (state = {}) =>
  createStore(reducers, { ...initialStore, ...state })
```

* côté serveur on génère le ``state`` **avant** de répondre
* côté client on utilise la valeur injectée par le serveur

Note:

Pourquoi injecter le ``state`` ?

* React va regénérer son arbre à partir de l'état de l'application
* État différent → Arbre différent
* Le contenu du &lt;DIV&gt; sera incohérent

> Warning: React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering.

S'il est impossible de partager l'état :

* Laisser tomber l'isomorphique (pas de différences en perfs, et bien moins de charge côté serveur)
* Utiliser ``renderToStaticMarkup`` (référencement OK, et pas de tentative de réutilisation du DOM pour rien)
