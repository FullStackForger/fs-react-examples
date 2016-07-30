import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

function counter(state = {}, action) {
	console.log('action dispatched: ' + JSON.stringify(action))
	// ... switch case
	return state
}

let middlewares = applyMiddleware(thunk)
let store = createStore(counter, middlewares)

store.dispatch((dispatch) => {

	// we could make number of http requests sent to different endpoints
	// then we would fire actions upon receiving response results at different times

	setTimeout(() => dispatch({ type: 'RESPONSE_RESULT', action: 1 }), 300)
	setTimeout(() => dispatch({ type: 'RESPONSE_RESULT', action: 2 }), 50)
	setTimeout(() => dispatch({ type: 'RESPONSE_RESULT', action: 3 }), 500)
	setTimeout(() => dispatch({ type: 'RESPONSE_RESULT', action: 4 }), 200)
})