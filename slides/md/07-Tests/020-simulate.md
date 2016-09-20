## Simulate

React se base sur la propagation de *synthetic events* au sein de son Virtual DOM.

Durant les tests on peut simuler ces évènements :

```js
import { Simulate } from 'react-addons-test-utils'
// <input ref="product">
// <input type="submit" ref="buy" value=̈́"J'achète">

var champ = this.refs.product
var button = this.refs.buy

champ.value = 'canard vivant'
Simulate.change(champ)
Simulate.click(button)
```
