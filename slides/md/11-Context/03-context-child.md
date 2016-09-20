## Context : les enfants

* ``contextTypes`` définit le contexte qu'on veut recevoir
* ``this.context`` est alors défini
  * ou passé en second paramètre des composants *stateless*

```js
function Message (props, context) {
  return <span style={ { color: context.color } }>{ props.text }</span>;
}

Message.contextTypes = { color: React.PropTypes.string };
```

Les composants intermédiaires sont simplifiés

```js
function MessageList ({ color }) {
  return <div>
    <Message text={ 'hello' } />
    <Message text={ 'world' } />
  </div>;
}
```
