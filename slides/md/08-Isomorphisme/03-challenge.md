## Tout n'est pas si simple…

En pratique, tout n'est pas "iso" :

* Attention aux **singletons** : une instance par requête
  * Pas de store global
* Les **interactions** ne sont pas les mêmes
  * Normalement on s'en fout
  * Serveur = seulement génération initiale
* **Chargement des données** initiales
  * Côté client des appels HTTP
  * Côté serveur des requêtes BDD

Note:

* Pour la question des singletons, dans ``redux`` seul le store contient l'état, donc c'est le seul singleton dont on doive s'inquiéter (sauf autres parties de l'application)
* Pour le chargement des données, une approche peut être d'écrire deux couches modèles partageant **la même API** ainsi le code pourrait être le même
  * mais les traitements asynchrones ne seront pas traités de la même manière
  * côté client on jette une requête qui dispatchera une action, on n'a pas à se "brancher" dessus
  * côté serveur on veut attendre que les données soient chargées, donc on doit attendre la résolution de l'action pour répondre
