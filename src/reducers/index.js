import { combineReducers } from 'redux'

import home from './HomeReducer'

const reducer = (handlers, state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state

export default combineReducers({
  home: home(reducer)
})
