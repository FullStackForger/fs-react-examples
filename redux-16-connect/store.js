import {createStore, combineReducers} from 'redux'

import {mathReducer, simpleMathReducer} from './reducers'

const reducers = combineReducers({
	randomData: mathReducer
})

export default createStore(reducers)