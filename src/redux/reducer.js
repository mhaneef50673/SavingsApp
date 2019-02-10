import { combineReducers } from 'redux-immutable'
import savingsReducer from '../savings/reducer'

const appReducer = combineReducers({
  savingsReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
