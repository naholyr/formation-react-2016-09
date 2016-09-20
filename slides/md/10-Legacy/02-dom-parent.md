## Modification du DOM "parent"

Exemple : [routing ajax old school](http://winterbe.com/posts/2015/08/24/integrate-reactjs-into-jquery-webapps/)

### Le problème

* React va garder une référence à son composant même si le DOM a disparu.
* En cas de rappel à ``render()`` → comportement erratique
* Fuites mémoire

### La solution

La clé : ``react-dom``.``unmountComponentAtNode`` pour démonter un composant
