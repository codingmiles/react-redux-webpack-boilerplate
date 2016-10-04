import actions from '../actions/HomeActionCreators'

const initialState = {
  name: 'Nice Button!',
  componentState: 'loading',
  weatherInfo: null,
}

const handlers = {
  [actions.RENAME_BUTTON]: (state, action) =>
    Object.assign({}, state, {
      name: action.name
    }),

  [actions.FETCH_WEATHER_INFO_REQUEST]: (state) =>
  	Object.assign({}, state, {
      componentState: 'loading',
      weatherInfo: [],
    }),

  [actions.FETCH_WEATHER_INFO_RECEIVE]: (state, action) =>
    Object.assign({}, state, {
      componentState: 'done',
      weatherInfo: action.weatherInfo,
    }),

  [actions.FETCH_WEATHER_INFO_FAILED]: (state) =>
    Object.assign({}, state, {
      componentState: 'failed',
      weatherInfo: [],
    }),
}

export default (reducer) =>
  (state=initialState, action) =>
    reducer(handlers, state, action)
