import { createStore, combineReducers } from 'redux'
import { reducer } from './reducer'

const rootReducer = combineReducers({app: reducer})
export const store = createStore(rootReducer)

