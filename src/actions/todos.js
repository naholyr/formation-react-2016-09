import { createAction } from '../helpers';
import { addItem, getItems } from '../todos-api';

export const ADD_REQUEST = 'todos:add:request';
export const ADD_SUCCESS = 'todos:add:success';
export const ADD_FAILURE = 'todos:add:failure';
export const LOAD_REQUEST = 'todos:load:request';
export const LOAD_SUCCESS = 'todos:load:success';
export const LOAD_FAILURE = 'todos:load:failure';
export const REMOVE = 'todos:remove';
export const TOGGLE = 'todos:toggle';
export const UPDATE = 'todos:update';

const requestAdd = createAction(ADD_REQUEST, (text) => ({ text }));
const successAdd = createAction(ADD_SUCCESS, (item) => ({ item }));
const failureAdd = createAction(ADD_FAILURE, (error) => ({ error }));
export const add = text => dispatch => {
  dispatch(requestAdd(text));
  addItem(text)
  .then(item => dispatch(successAdd(item)))
  .catch(error => dispatch(failureAdd(error)));
};

const requestLoad = createAction(LOAD_REQUEST, () => null);
const successLoad = createAction(LOAD_SUCCESS, (items) => ({ items }));
const failureLoad = createAction(LOAD_FAILURE, (error) => ({ error }));
export const load = text => dispatch => {
  dispatch(requestLoad(text));
  getItems()
  .then(item => dispatch(successLoad(item)))
  .catch(error => dispatch(failureLoad(error)));
};

export const remove = createAction(REMOVE, (id) => ({id}));
export const toggle = createAction(TOGGLE, (id) => ({id}));
export const update = createAction(UPDATE, (id, text) => ({id, text}));
