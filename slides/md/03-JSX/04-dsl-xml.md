## Une nouvelle syntaxe, un *DSL* basé sur XML

```js
function Contact (props) {
  return (
    <li>
      <span>Name: </span>
      <strong>{ props.name }</strong>
    </li>
  )
}
```

```js
function ContactList (props) {
  const contacts = props.names.map((name, key) => (
    <Contact name={ name } key={ key } />
  ));

  return <ul>{ contacts }</ul>;
}
```

```js
var root = <ContactList names={ ['John', 'Bob', 'Arnold'] } />
```
