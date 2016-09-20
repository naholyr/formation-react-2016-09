## Structure simple

```
static/
  index.html
src/
  app.js
  Contact.js
  ContactList.js
```

Exercice : Écrire les composants ``Contact`` et ``ContactList``

```js
// app.js
import React from 'react'
import ReactDOM from 'react-dom'
import ContactList from './ContactList'

const element = <ContactList names={ ['John', 'Bob', 'Arnold'] } />
const mount = document.getElementById('app')

ReactDOM.render(element, mount)
```

Note:

* Expliquer pourquoi on importe ``React`` sans l'utiliser (JSX → ``React.createElement``)

```js
// src/Contact.js
import React from 'react'

export default function Contact ({ name }) {
  return (
    <li>
      <span>Nom : </span>
      <strong>{ name }</strong>
    </li>
  )
}
```

```js
// src/ContactList.js
import React from 'react'
import Contact from './Contact'

export default function ContactList ({ names }) {
  return (
    <ul>
      { names.map((name, key) => <Contact name={ name } key={ key } />) }
    </ul>
  )
}
```
