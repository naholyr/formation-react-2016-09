import { ADD_SUCCESS, ADD_REQUEST, ADD_FAILURE } from '../actions/todos';
import { createReducer } from '../helpers';


const initialState = { isAddingItem: false }

const reducers = {

  [ADD_REQUEST]: (prevState, payload) =>
    Object.assign({}, prevState, { isAddingItem: true }),

  [ADD_SUCCESS]: (prevState, payload) =>
    Object.assign({}, prevState, { isAddingItem: false }),

  [ADD_FAILURE]: (prevState, payload) =>
    Object.assign({}, prevState, { isAddingItem: false }),

}


export default createReducer(initialState, reducers);
