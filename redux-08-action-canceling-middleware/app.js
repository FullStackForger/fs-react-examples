import { createStore, applyMiddleware } from 'redux'

function counterReducer(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT': return state + 1
		case 'DECREMENT': return state - 1
		default: return state
	}
}

const loggerMiddleware = (store) => (next) => (action) => {
	console.log("action dispatched:\n" + JSON.stringify(action))
	next(action)
}

const positiveMiddleware = (store) => (next) => (action) => {
	if (store.getState() == 0 && action.type == 'DECREMENT') {
		// to cancel action do not call `next(action)`
		return console.log('Action cancelled! Negative values not allowed!')
	}
	next(action)
}

const middlewares = applyMiddleware(loggerMiddleware, positiveMiddleware)
const store = createStore(counterReducer, 0, middlewares)


let dispachers = [
	{ type: 'DECREMENT' },
	{ type: 'INCREMENT' },
	{ type: 'DECREMENT' },
	{ type: 'DECREMENT' },
	{ type: 'INCREMENT' },
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