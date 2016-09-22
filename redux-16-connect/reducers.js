import {RANDOMIZE} from './actions'

export const mathReducer = (state = {
	value: 0,
	updated: false
}, action) => {
	console.log('mathReducer(state, action) prev', state)
	let newState = Object.assign({}, state, { updated: false })
	switch (action.type) {
		case RANDOMIZE:
			newState.updated = true
			newState.value = Math.random()
			break
	}
	console.log('mathReducer(state, action) new', state)
	return newState
}