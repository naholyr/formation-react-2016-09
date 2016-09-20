## Action

Un simple objet, seul le type est obligatoire :

```js
{
  type: 'ADD_CONTACT',
  payload: {
    name: 'Bob'
  }
}
```

Pour le type, on pourrait être tenté d'utiliser les [`Symbol`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ; hélas ils ne sont pas sérialisables.

Un `standard` permet d'uniformiser la manière de les rediger : [FSA](https://github.com/acdlite/flux-standard-action)
