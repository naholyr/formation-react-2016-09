## Interaction avec le DOM du composant

### Idéalement, ne pas modifier le DOM hors de React

* Écouter les événements externes, modifier l'état ou les propriétés en réaction
* Exemple : [React + HTML5 Drag &amp; Drop API](http://webcloud.se/sortable-list-component-react-js/)

### Quand ce n'est pas possible

* Maintenir manuellement la cohésion React/DOM
* Exemple : [React + jQuery UI sortable](https://gist.github.com/petehunt/7882164)
* Probablement plus "cher" qu'une réécriture
