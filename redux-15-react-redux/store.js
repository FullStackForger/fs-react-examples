import {createStore, combineReducers} from 'redux'
import counterListReducer from './components/counter-list/reducer'

const reducers = combineReducers({
	data: counterListReducer
})

export default createStore(reducers)