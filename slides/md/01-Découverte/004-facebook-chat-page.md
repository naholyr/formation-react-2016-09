## Facebook chat page

```js
function onMessage(message) {
  var chatPanel = getChatPanel(message.thread);
  chatPanel.append(message);
  chatNotif.increase(1);
  if (chatPage.currentThread === message.thread) {
    chatPage.append(message);
  }
  if (chatPanel.hasFocus()
      || chatPage.currentThread === message.thread) {
    chatNotif.decrease(1);
  }
}
```
