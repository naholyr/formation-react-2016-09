## Cycle de vie d'un composant *stateful*

### Updates

* ``shouldComponentUpdate(nextProps, nextState)`` pour limiter les appels à ``render``
  * Cf. [``PureRenderMixin``](https://facebook.github.io/react/docs/pure-render-mixin.html)
* ``componentWillUpdate(nextProps, nextState)``
* ``componentDidUpdate(nextProps, nextState)``

note:

Les composants *stateless* ne peuvent implémenter ``shouldComponentUpdate`` et seront donc souvent écartés lors des recherches d'optimisations fines.
