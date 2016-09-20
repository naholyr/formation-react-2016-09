## Facebook chat

```js
function onMessage(message) {
  var chatPanel = getChatPanel(message.thread);
  chatPanel.append(message);
}
```

<img alt="facebook chat" src="images/facebook/facebook-chat.jpg">
