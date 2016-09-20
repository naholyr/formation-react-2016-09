## Passer une donnée le long de l'arbre

Les composants intermédiaires jouent les passe-plat

```js
// App defines btnColor
function App (props) {
  return <MessageList color={ color } />;
}

// MessageList just passes it along the way
function MessageList ({ color }) {
  return <div>
    <Message text={ 'hello' } color={ color } />
    <Message text={ 'world' } color={ color } />
  </div>;
}

// Message uses it
function Message ({ text, color }) {
  return <span style={ { color } }>{ text }</span>;
}
```

[``context``](http://facebook.github.io/react/docs/context.html) pour effectuer ce passage de manière transparente
