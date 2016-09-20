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


export function createReducer (initialState, reducers) {
  return (state = initialState, { type, payload }) => {
    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
  };
}
