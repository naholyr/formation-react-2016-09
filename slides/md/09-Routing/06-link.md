## Liens

```js
location.href === '/contacts'

// <a href="/">Home</a>
(<Link to="/">Home</Link>)

// <a href="/" class="active">Home</a>
(<Link to="/" activeClassName="active">Home</Link>)

// <a href="/">Home</a>
(<IndexLink to="/" activeClassName="active">Home</Link>)

// <a href="/contacts/new?name=Bob">New</a>
(<Link to={{ pathname: '/contacts/new', query: { name: 'Bob' } }} activeClassName="active">New</Link>)
```
