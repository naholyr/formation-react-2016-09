## Shallow renderer

```js
import TestUtils from 'react-addons-test-utils';

const shallowRenderer = TestUtils.createRenderer();
shallowRenderer.render(React.createElement(MyComponent, { className: 'MyComponent' }, 'du contenu'));

const component = shallowRenderer.getRenderOutput();
```
