## Pourquoi JSX ?

``React.createElement`` c'est lourd… Pourquoi ne pas retourner directement du HTML ?

* HTML est coûteux à parser
* On veut justement éviter de manipuler du DOM
* On doit donc générer un arbre

Quelles solutions pour se simplifier la vie ?
