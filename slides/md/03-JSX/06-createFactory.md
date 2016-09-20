## React.createFactory

Bonus JSX: on s'épargne [`createFactory()`](https://gist.github.com/sebmarkbage/d7bce729f38730399d28)

```js
var MyComponent = require('MyComponent');

function render() {
  return MyComponent({ foo: 'bar' }); // Attention déprécié depuis 0.12
}
```

```js
var React = require('react');
var MyComponent = React.createFactory(require('MyComponent'));

function render() {
  return MyComponent({ foo: 'bar' });
}
```

```js
var React = require('react');
var MyComponent = require('MyComponent');

function render() {
  return <MyComponent foo="bar" />;
}
```

Note:

```js
function createFactory(type) {
  return React.createElement.bind(null, type);
}
```
