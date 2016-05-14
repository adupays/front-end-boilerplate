'use strict'

import { combineReducers } from 'redux'
import { RECEIVE_ALL_ASSETS, RECEIVE_ASSET } from './actions'

function assets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_ASSETS:
      return Object.assign({}, state, {
        assets: action.assets,
        meta: action.meta
      })
    case RECEIVE_ASSET:
      return Object.assign({}, state, {
        asset: action.asset,
        type: action.requestType
      })
    default:
      return state
  }
}

const AppReducer = combineReducers({
  assets
})

export default AppReducer
