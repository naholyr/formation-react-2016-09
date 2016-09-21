import { createAction } from '../helpers'

export const ADD_REQUEST = 'todos:add:request'
export const ADD_SUCCESS = 'todos:add:success'
export const ADD_FAILURE = 'todos:add:failure'
export const REMOVE = 'todos:remove'
export const TOGGLE = 'todos:toggle'
export const UPDATE = 'todos:update'

export const requestAdd = createAction(ADD_REQUEST, (text) => ({ text }))
export const successAdd = createAction(ADD_SUCCESS, (item) => ({ item }))
export const failureAdd = createAction(ADD_FAILURE, (error) => ({ error }))

export const remove = createAction(REMOVE, (id) => ({id}))
export const toggle = createAction(TOGGLE, (id) => ({id}))
export const update = createAction(UPDATE, (id, text) => ({id, text}))
