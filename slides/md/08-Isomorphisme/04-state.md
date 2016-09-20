## L'état de l'application

### Avant

On partait d'un état vide, qu'on peuplait en lançant des actions d'initialisation.

```js
store.dispatch(fetchContacts());
```

### Après

Côté serveur, on génère l'état à partir de données récupérées, puis on le passe au client.

Côté client, on part de cet état injecté. On ne lance plus d'actions d'initialisation !
