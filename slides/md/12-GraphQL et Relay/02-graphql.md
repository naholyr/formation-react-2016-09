## GraphQL

[Thinking in GraphQL](https://facebook.github.io/relay/docs/thinking-in-graphql.html)

* Un langage de requête
* Un protocole (implémentation serveur)

```js
graphql.get(`query {
  users {
    email,
    picture { href }
  }
}`)
.then(users => {
  // partial users list
  // [ { email: "…", picture: { href: "…" } } ]
  console.log(users)
})
```
