# Performances

* Mesurer : [React Performance Tools](https://facebook.github.io/react/docs/perf.html)

### Côté serveur : accélérer le rendu initial

* Limiter la taille de l'arbre
* Mettre en place un *pool* de *renderers*

### Côté client : limiter les appels à ``render``

* ``shouldComponentUpdate``
* Solution simple : [``react-pure-render``](https://github.com/gaearon/react-pure-render)
  * Idée : [``immutable``](https://github.com/facebook/immutable-js).``equals``
