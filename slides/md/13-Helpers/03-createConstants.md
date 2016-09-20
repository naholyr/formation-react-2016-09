## createConstants

```js
export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}
```

Avant
```js
export default {
  'CHANGE_NAME': 'CHANGE_NAME',
  'ADD_USER': 'ADD_USER'
}
```

Après
```js
export default createConstants(
  'CHANGE_NAME',
  'ADD_USER'
);
```
