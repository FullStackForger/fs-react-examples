import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

function counter(state = {}, action) {
	console.log('action dispatched: ' + JSON.stringify(action))
	return state
}

let middlewares = applyMiddleware(thunk)
let store = createStore(counter, middlewares)

store.dispatch((dispatch) => {
	setTimeout(() => dispatch({ type: 'RESPONSE_RESULT', action: 1 }), 300)
	setTimeout(() => dispatch({ type: 'RESPONSE_RESULT', action: 2 }), 50)
	setTimeout(() => dispatch({ type: 'RESPONSE_RESULT', action: 3 }), 500)
	setTimeout(() => dispatch({ type: 'RESPONSE_RESULT', action: 4 }), 200)
})