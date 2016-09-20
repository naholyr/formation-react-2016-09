## Routes index et redirections

```js
// routes.js
export default (
  <Router>
    <Route path="/" component={ Root }>
      <IndexRoute component={ Home } />
      <Route path="contacts" component={ Contacts }>
        <IndexRoute component={ ContactList } />
        <Redirect from="list" to="" />
        <Route path="new" component={ ContactForm } />
      </Route>
      <Route path="*" component={ NoMatch } />
    </Route>
  </Router>
)
```

```
/               → <Root><Home /></Root>
/contacts       → <Root><Contacts><ContactList /></Contacts></Root>
/contacts/list  → /contacts
/contacts/new   → <Root><Contacts><ContactForm /></Contacts></Root>
```

[IndexRoutes.md](https://github.com/rackt/react-router/blob/master/docs/guides/basics/IndexRoutes.md)
