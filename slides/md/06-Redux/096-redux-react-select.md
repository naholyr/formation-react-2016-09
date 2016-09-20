## `react-redux` : `select`

Une fonction `appState => componentProps`

Son but est de *mapper* l'état global de l'application vers les propriétés reçues par le composant.

```js
function mapStateToProps ({ contacts, ui, data3… }) {
  return { contacts } // pas besoin de récupérer la totalité de l'état
}
```

```js
export default ({ contacts }) => <div>{ contacts }</div>
```
