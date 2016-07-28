import { createStore, combineReducers } from 'redux'

function counter(state = 0, action) {
	console.log('counter:' + JSON.stringify(action))
	switch (action.type) {
		case 'INCREMENT':
			return state + action.value
		case 'DECREMENT':
			return state - action.value
		default:
			return state
	}
}

function reseter(state = 0, action) {
	console.log('reseter:' + JSON.stringify(action))
	switch (action.type) {
		case 'RESET':
			return state = 0;
		default:
			return state
	}
}


let reducers = (state, action) => {
 	return reseter(counter(state, action), action)
}

let store = createStore(reducers)

let prev = store.getState()
store.subscribe(() => {
	let curr = store.getState()
	console.log(`previous state: ${prev}, current state: ${curr}`)
	prev = JSON.stringify(store.getState())
})

let dispachers = [
	{ type: 'INCREMENT', value: 1 },
	{ type: 'INCREMENT', value: 2 },
	{ type: 'RESET' },
	{ type: 'DECREMENT', value: 5 },
	{ type: 'INCREMENT', value: 7 }
]

let index = 0;
let interval = setInterval(() => {
	if (index < dispachers.length) {
		store.dispatch(dispachers[index])
		return index++
	}
	clearInterval(interval)
}, 500)