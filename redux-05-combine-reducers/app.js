import { createStore, combineReducers } from 'redux'

function counterReducer(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.value
		case 'DECREMENT':
			return state - action.value
		default:
			return state
	}
}

function userReducer(state = { username: 'guest' }, action) {
	switch (action.type) {
		case 'UPDATE':
			return state = {...state, ...action.payload}
		default:
			return state
	}
}

let store = createStore(combineReducers({
	counter: counterReducer,
	user: userReducer
}))

let curr = JSON.stringify(store.getState())
console.log(`current state:\n${curr}`)
store.subscribe(() => {
	curr = JSON.stringify(store.getState())
	console.log(`current state:\n${curr}`)
})

let dispachers = [
	{ type: 'INCREMENT', value: 10 },
	{ type: 'DECREMENT', value: 5 },
	{ type: 'RESET' },
	{ type: 'UPDATE', value: { username: 'tomhanks', name: 'Tom Hanks' }},
	{ type: 'INCREMENT', value: 7 }
]

let index = 0;
let interval = setInterval(() => {
	if (index < dispachers.length) {
		console.log('dispatching:\n' + JSON.stringify(dispachers[index]))
		store.dispatch(dispachers[index])
		return index++
	}
	clearInterval(interval)
}, 500)