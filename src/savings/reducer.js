import { Map, fromJS } from 'immutable'
import { FETCH_DATA } from './actions'

const savingsReducer = (state = Map({}), action) => {
  switch (action.type) {
    case FETCH_DATA:      
      state = state.set('data', fromJS(action.data))
      return state
    default:
      return state
  }
}

export default savingsReducer
