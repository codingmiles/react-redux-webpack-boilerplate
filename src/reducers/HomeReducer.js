const initialState = {
  name: 'I am ankur!'
}

const handlers = {
  ['RENAME_BUTTON']: (state, action) =>
    Object.assign({}, state, {
      name: action.name
    })
}

export default (reducer) =>
  (state=initialState, action) =>
    reducer(handlers, state, action)
