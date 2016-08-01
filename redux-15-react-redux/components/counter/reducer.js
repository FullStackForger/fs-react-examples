import {INCREMENT, DECREMENT, RESET} from './actions'

export const counterInitState = { index: 0, value: 0 }

export default (state = counterInitState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {...state, value: state.value + 1 }
		case DECREMENT:
			return {...state, value: state.value - 1 }
		case RESET:
			return {...state, value: 0 }
	}
	return state
}