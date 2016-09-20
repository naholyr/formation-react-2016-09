## Routes imbriquées

```js
// routes.js
export default (
  <Router>
    <Route path="/" component={ Root }>
      <Route path="contacts" component={ Contacts }>
        <Route path="list" component={ ContactList } />
        <Route path="new" component={ ContactForm } />
      </Route>
      <Route path="*" component={ NoMatch } />
    </Route>
  </Router>
)
```

```
/               → <Root />
/contacts       → <Root><Contacts /></Root>
/contacts/list  → <Root><Contacts><ContactList /></Contacts></Root>
/contacts/new   → <Root><Contacts><ContactForm /></Contacts></Root>
```
