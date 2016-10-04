import _ from 'lodash'

import WeatherAPI from '../apis/WeatherAPI'

import {
  registerAction as unboundRegisterAction,
  registerAsyncAction as unboundRegisterAsyncAction,
} from './ActionUtils'

const actions = {}

const registerAction = _.partial(unboundRegisterAction, actions)
const registerAsyncAction = _.partial(unboundRegisterAsyncAction, actions)

registerAction('RENAME_BUTTON', ['name'])

registerAsyncAction(WeatherAPI, 'fetchWeatherInfo')

export default actions
