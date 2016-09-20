## `react-redux`: `bindActionCreators`

Grâce à ce helper, on peut auto-dispatcher l'action au sein des components.

```js
import { bindActionCreators } from 'redux'

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(contactActions, dispatch)
})
```
