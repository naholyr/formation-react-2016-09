export function createAction (type, payloadCreator) {
  return (...args) => ({
    type,
    payload: payloadCreator(...args)
  })
}


/*
export const add = createAction(ADD, (text) => ({ text }))

===

export const add = text => ({
  type: ADD,
  payload: {
    text
  }
})
*/
