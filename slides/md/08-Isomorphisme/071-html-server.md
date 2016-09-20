## Génération du HTML

Idée : des commentaires pour injecter les résultats

```js
// State's HTML
const stateHTML = '<script>window.APP_STATE=' + JSON.stringify(state) + '</script>'

// App's HTML
const element = <Provider store={ store }><Root /></Provider>;
const appHtml = renderToString(element);

return html
  // Inject app into global HTML
  .replace(/<!-- APP_HERE -->/, appHtml)
  // Inject state into global HTML
  .replace(/<!-- APP_STATE_HERE -->/, stateHTML)
```
