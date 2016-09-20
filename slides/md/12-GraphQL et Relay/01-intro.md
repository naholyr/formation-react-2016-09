## Pourquoi GraphQL et Relay ?

* Chaque composant définit son propre arbre de données
* Mais si chaque composant fait ses requêtes Ajax ?
  * → game over
* Du coup on doit centraliser les requêtes
* Et donc centraliser la définition de l'état global
* C'est souvent compliqué…

### Here comes a new challenger

* Chaque composant déclare ses requêtes adaptées
* Le framework se débrouille pour dispatcher tout ça
