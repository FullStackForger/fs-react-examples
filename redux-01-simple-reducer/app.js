import { createStore } from 'redux'

function counter(state = 0, action) {
	console.log(action)
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
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

store.subscribe(() =>
	console.log(store.getState())
);

let dispachers = [
	{ type: 'INCREMENT' },
	{ type: 'INCREMENT' },
	{ type: 'DECREMENT' }
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