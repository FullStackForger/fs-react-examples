import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

function counterReducer(state = { value: 0 }, action) {
	switch (action.type) {
		case 'INCREMENT': return { value: state.value + action.value }
		case 'DECREMENT': return { value: state.value - action.value }
		default: return state
	}
}

const logger = createLogger()
const middlewares = applyMiddleware(logger)
const store = createStore(counterReducer, middlewares)

// todo: there appears to be problem with redux-logger, perhaps it will work ok with webpack
let curr = JSON.stringify(store.getState())
console.log(`current state: ${curr}`)
store.subscribe(() => {
	let curr = JSON.stringify(store.getState())
	console.log(`current state: ${curr}`)
})

let dispachers = [
	{ type: 'INCREMENT', value: 1 },
	{ type: 'INCREMENT', value: 1 },
	{ type: 'DECREMENT', value: 1 }
]

let index = 0;
let interval = setInterval(() => {
	if (index < dispachers.length) {

		// dispatch action
		store.dispatch(dispachers[index])

		return index++
	}
	clearInterval(interval)
}, 500)