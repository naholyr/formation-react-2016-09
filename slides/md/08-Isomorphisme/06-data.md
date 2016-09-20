## Les données

Côté client : ``XMLHttpRequest``, ``$.ajax``, ``fetch``…

Côté serveur : requêtes SQL, fichiers, requêtes HTTP…

```js
// model-server.js
function getState () {
  return query('SELECT * FROM contacts')
    // On a récupéré les contacts
    // L'état global est { "contacts": lesContacts }
    .then(contacts => ({ contacts }))
}
```

```js
// model-client.js
function getState () {
  return fetch('/contacts').then(res => res.json())
    // On a récupéré les contacts
    // L'état global est { "contacts": lesContacts }
    .then(contacts => ({ contacts }))
}
```
