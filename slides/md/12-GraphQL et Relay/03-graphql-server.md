## GraphQL : côté serveur


* Définition du schéma avec [``graphql-js``](https://github.com/graphql/graphql-js)
  * Implémente aussi les fonctions de résolution des éléments du graphe
* Intégration dans Express avec [``express-graphql``](https://github.com/graphql/express-graphql)

```js
const schema = new GraphQLSchema({
  …
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))
```

* [``graphiql``](https://github.com/graphql/graphiql) est un explorateur GraphQL dans le navigateur
