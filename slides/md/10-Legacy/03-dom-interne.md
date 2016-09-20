## Interaction avec le DOM du composant

### En lecture seule (ex. canvas)

On a besoin d'accéder au DOM mais on ne modifie pas l'arbre. La clé : ``react-dom``.``findDOMNode``

```js
componentDidMount () {
  const context = findDOMNode(this).getContext('2d')
  paint(context, this.props.rotation)
}
```

```js
componentDidUpdate () {
  const context = findDOMNode(this).getContext('2d')
  context.clearRect(0, 0, 200, 200)
  paint(context, this.props.rotation)
}
```

```js
render () {
  return <canvas width={200} height={200} />
}
```

Note:

* ``componentDidMount`` pour accéder au DOM dès que disponible
* ``componentDidUpdate`` pour réagir aux modification d'état/propriété
  * L'élément DOM sera généralement la même instance, mais **ce n'est pas garanti**
  * Attention aux data-attributes par exemple → ``WeakMap`` peut être une bonne alternative
