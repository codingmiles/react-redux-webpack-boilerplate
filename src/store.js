import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const middlewares = localStorage.getItem('redux-logger')
  ? applyMiddleware(thunkMiddleware, createLogger())
  : applyMiddleware(thunkMiddleware)

export default (rootReducer, initialState) =>
  createStore(rootReducer, initialState, middlewares)
