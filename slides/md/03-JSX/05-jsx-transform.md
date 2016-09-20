## Transpilation

```js
function Contact ({ name }) {
  return (
    <li>
      <span>Name: </span>
      <strong>{ name }</strong>
    </li>
  )
}
```

Avec [Babel](https://babeljs.io) (ES6 cadeau au passage, on peut ressortir IE)

```html
<script src="https://cdn.jsdelivr.net/babel/5.8.33/browser.js"></script>
```

```html
<script type="text/babel">
…
</script>
```

* [ES6 Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Note:

* Syntaxe plus "light" que les appels imbriqués de fonctions
* Implique l'utilisation de **Babel**, donc accès à tout EcmaScript 2015 :
  * Arrow functions
  * Object spread, object shorthands…
  * Default parameters, rest parameters…
  * Destructuring
  * Classes (adieu ``React.createClass``)
  * Modules !
  * …

**ZE** bonne approche pour React
