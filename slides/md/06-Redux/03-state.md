## État de l'application

Avant de se lancer dans le développement, penser à la forme qu'aura son état global (il évoluera bien sûr) :

```js
{
  contacts: {
    [id]: 'Bob'
  }
}
```

Les *reducers* ont pour rôle de transformer cet état (en retournant un nouvel état)

* [ES6 Dynamic Property Name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#New_notations_in_ECMAScript_2015)
