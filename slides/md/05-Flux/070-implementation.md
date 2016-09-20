## Implémentation

* Le dispatcher est un ``EventEmitter`` global
  * Déclencher une action = ``e.emit``
* Un store est un ``EventEmitter`` global
  * Il écoute les actions du dispatcher
  * Il maintient un état interne
  * Il émet des événements pour notifier des mises à jour
* Le composant écoute les événements du store
