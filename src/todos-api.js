import uuid from 'uuid';

export const getItems = () =>
  Promise.resolve(localStorage.getItem('todos') || '[]')
  .then(JSON.parse);

export const getItem = id =>
  getItems()
  .then(items => items.find(item => item.id === id));

export const removeItem = id =>
  getItems()
  .then(items => items.filter(item => item.id !== id))
  .then(JSON.stringify)
  .then(json => localStorage.setItem('todos', json));

export const addItem = text => {
  const item = { id: uuid(), text, done: false }
  return getItems()
  .then(items => items.concat([item]))
  .then(JSON.stringify)
  .then(json => localStorage.setItem('todos', json))
  .then(() => item)
}

export const updateItem = (id, updates) =>
  getItems()
  .then(items => items.map(item => item.id !== id ? item : Object.assign({}, item, updates)))
  .then(JSON.stringify)
  .then(json => localStorage.setItem('todos', json))
