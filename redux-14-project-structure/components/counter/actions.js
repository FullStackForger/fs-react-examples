import store from '../../store'

const actions = {}

actions.onIncrement = (index) => store.dispatch({
	type: 'INC',
	index: index
})

actions.onDecrement = (index) => store.dispatch({
	type: 'DEC',
	index: index
})

actions.onReset = (index) => store.dispatch({
	type: 'RESET',
	index: index
})

actions.onRemove = (index) => store.dispatch({
	type: 'RM_COUNTER',
	index: index
})

export default actions

