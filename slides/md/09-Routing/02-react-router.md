## ``react-router``

```sh
npm install --save react-router history
```

* Routes imbriquées
* Redirections
* Routes paramétrées
* *Hooks* (``onEnter``, ``onLeave``)
* Configuration en JSX ou JSON

→ [react-router/Introduction](https://github.com/rackt/react-router/blob/master/docs/Introduction.md)

Note:

* ``react-router`` est le module principal
* ``history`` sert à manipuler l'URL en barre d'adresse des navigateurs et vise plus largement à manipuler la stack de navigation lors de son utilisation dans react-native.
  * C'est une "peerDependency" mais elles ne sont plus installées automatiquement avec npm 3
