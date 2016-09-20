## Action creator

Une fonction *pure* retournant une action :

```js
function addContact (name) {
  return { type: 'ADD_CONTACT', payload: { name } }
}
```

```js
function deleteBuilding (height, location) {
  return { type: 'DELETE_BUILDING', payload: { height, location } }
}
```

```js
function showRecent () {
  return { type: 'CHANGE_DATE_FILTER', payload: { ago: 3600 } }
}
```

* [Helper : `createAction`](#/helpers-createaction)

Note:

Comparer avec un "actionDispatcher" qu'on retrouve dans Flux :

```js
function addContact (name) {
  const action = { type: 'ADD_CONTACT', name }
  dispatch(action)
}
```

La différence est donc qu'on ne dispatche pas directement. Pour dispatcher dans Redux on utilise la fonction `dispatch` accessible selon le contexte (vu plus tard)
