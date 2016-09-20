## Shallow output


```js
expect(component.props.className).to.equal('MyComponent');
```
```js
{
  "type": "section",
  "_store": {
    "props": {
      "className": "MyComponent",
      "children": [{
        "type": "h1",
        "_store": {
          "props": {
            "className": "MyComponent-header",
            "children": "Titre"
          },
          "originalProps": {
            "className": "MyComponent-header",
            "children": "Titre"
          }
        }
      }]
    }
  }
}
```
