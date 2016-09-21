import {
  ADD_SUCCESS, ADD_REQUEST, ADD_FAILURE,
  LOAD_SUCCESS, LOAD_REQUEST, LOAD_FAILURE
} from '../actions/todos';
import { createReducer } from '../helpers';


const initialState = {
  isAddingItem: false,
  isLoadingItems: false
}

const reducers = {

  [ADD_REQUEST]: (prevState, payload) =>
    Object.assign({}, prevState, { isAddingItem: true }),
  [ADD_SUCCESS]: (prevState, payload) =>
    Object.assign({}, prevState, { isAddingItem: false }),
  [ADD_FAILURE]: (prevState, payload) =>
    Object.assign({}, prevState, { isAddingItem: false }),

  [LOAD_REQUEST]: (prevState, payload) =>
    Object.assign({}, prevState, { isLoadingItems: true }),
  [LOAD_SUCCESS]: (prevState, payload) =>
    Object.assign({}, prevState, { isLoadingItems: false }),
  [LOAD_FAILURE]: (prevState, payload) =>
    Object.assign({}, prevState, { isLoadingItems: false }),

}


export default createReducer(initialState, reducers);
