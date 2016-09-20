## Principes de base

### Performances : Virtual DOM

* Optimiser les **reflow** et les **repaint** gourmands.
* Solution : ne toucher qu'aux parties réellement modifiées
  * Fonction de rendu = retourner un arbre
  * Comparaison des arbres = opérations à effectuer

Note:

Autres challengers sur le terrain: glimmer (lié à Ember), virtual-dom.js, incremental-dom.js (by Google, touche d'avantage le vrai DOM, + long mais - de conso mémoire)
