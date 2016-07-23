import { createStore } from 'redux'

function counter(state = 0, action) {
	console.log(action)
	switch (action.type) {
		case 'INCREMENT':
			return state + action.value
		case 'DECREMENT':
			return state - action.value
		default:
			return state
	}
}

let store = createStore(counter)
let prev = store.getState()
store.subscribe(() => {
	prev = store.getState()
	console.log(`previous state: ${prev}, current state: ${store.getState()}`)
})

let dispachers = [
	{ type: 'INCREMENT', value: 3 },
	{ type: 'INCREMENT', value: 1 },
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