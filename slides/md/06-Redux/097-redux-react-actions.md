## `react-redux` : `actions`

Un objet `{ actionName: actionCreator }`

Chaque action sera injectée dans le composant sous la forme d'une prop permettant de dispatcher l'action correspondante.

```js
const actions = {
  addContact: (name) => ({ type: 'ADD_CONTACT', name })
}
```

```js
export default ({ addContact }) =>
  <button onClick={ addContact('Bob') }>Add</button>
```
