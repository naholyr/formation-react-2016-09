import { createAction } from '../helpers'

export const ADD    = 'todos:add'
export const REMOVE = 'todos:remove'
export const TOGGLE = 'todos:toggle'
export const UPDATE = 'todos:update'

export const add = createAction(ADD, (text) => ({ text }))
export const remove = createAction(REMOVE, (id) => ({id}))
export const toggle = createAction(TOGGLE, (id) => ({id}))
export const update = createAction(UPDATE, (id, text) => ({id, text}))
