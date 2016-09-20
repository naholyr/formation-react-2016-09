## Hooks

```js
function onEnter (nextState, replace, callback) {
  // nextState.location → current location
  // nextState.routes → matched routes
  // nextState.params → params
  // nextState.components → React rendered params
  // replace({ pathname, query }) → redirects to location
  // optional callback() → transition paused until called
  …
}

function onLeave () {
  // No argument, no way to abort transition here
  // Use "routerWillLeave" (cf. Lifecycle)
  …
}

<Route onEnter={ onEnter } onLeave={ onLeave }
```
