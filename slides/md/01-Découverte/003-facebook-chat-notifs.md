## Facebook chat-notifs

```js
function onMessage(message) {
  var chatPanel = getChatPanel(message.thread);
  chatPanel.append(message);
  chatNotif.increase(1);
  if (chatPanel.hasFocus()) {
    chatNotif.decrease(1);
  }
}
```

<img alt="facebook notifs" src="images/facebook/facebook-notifications.gif">
