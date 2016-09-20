## Challenge accepted.

* Problème du singleton : facile
* Interactions : aucune
* Chargement des données : souvent facile

### Ce n'est pas une solution magique

* La construction de l'état n'est pas toujours trivial
  * C'est même parfois **très compliqué** !
* ``renderToString`` est **bloquante** et [**lente**](http://jsperf.com/react-rendertostring/7)
  * cache, PureRenderMixin…

Idée : passer *serverless* quand la charge est trop importante.

Note:

Généralement on lance le fetch dans ``componentWillMount``

**Problème 1** : savoir quand l'application est prête à être rendue ? Idée :

* Jamais de fetch direct → action (tout dans le store)
* (1) Actions qui retournent une promesse (pour suivre)
* L'idée ensuite est de collecter les "fetch"
* (2) Dispatch "FETCH_ASAP" + une fonction
* (3) Un reducer qui empile ces fonctions
* (4) Après le premier rendu, on dépile !

```js
// (1)
export const fetchContacts = () => (dispatch) => (
  promise.then(_ => dispatch(receiveContacts(_)))
)

// (2)
function fetchData ({ getState, dispatch }) {
  const { contacts: { _loaded } } = getState()
  if (!_loaded) {
    return dispatch(fetchContacts())
  }
}
this.props.dispatch({ type: 'FETCH_ASAP', fetch })

// (3)
function fetchers (state = [], { type, fetch }) {
  return (type === 'FETCH_ASAP' && typeof fetch === 'function')
    ? state.concat([fetch])
    : state
}

// (4)
const { fetchers } = store.getState()
Promise.all(fetchers.map(f => f(store))).then(() => /* READY TO RENDER */)
```

**Problème 2** : savoir quand on a l'arbre définitif : changement d'état = ajout de composants qui eux-mêmes font du fetch = changement d'état = L'ENFER.
* Pas de solution, éviter cette situation

**Déléguer au routeur**
