## Routes paramétrées

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
        <Route path=":id" component={ ContactDetails } />
      </Route>
      <Route path="*" component={ NoMatch } />
    </Route>
  </Router>
)
```

```js
// ContactDetails.js
export default (props) => (
  <div>
    <h2>Contact #{ props.params.id }</h2>
  </div>
)
```
