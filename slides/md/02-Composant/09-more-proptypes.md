## [``propTypes``](https://facebook.github.io/react/docs/reusable-components.html)

Règles de validation pour contrôler le format des propriétés passées en entrée d'un composant.

```js
{
  "num": React.PropTypes.number.isRequired,
  "currency": React.PropTypes.oneOf('$', '€', '£'),
  "persons": React.PropTypes.arrayOf(React.PropTypes.shape({
    "name": React.PropTypes.string.isRequired,
    "age": React.PropTypes.number
  }))
}
```

```js
// ES5
React.createClass({ propTypes: … })
// ES6
MyComponent.propTypes = …
// ES7
class MyComponents extends Component { static propTypes = … }
// Stateless
MyComponent.propTypes = …
```
