import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const counter = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1
		case 'DEC':
			return state - 1
		case 'RESET':
			return 0
	}
	return state
}

const store = createStore(counter)
const Counter = ({
	value,
	onIncrement,
	onDecrement,
	onReset
}) => (
	<div className="panel panel-default">
		<div className="panel-body">
				<label>Counter: {value}</label>
				<button className="btn btn-default" onClick={onIncrement}>+</button>
				<button className="btn btn-default" onClick={onDecrement}>-</button>
				<button className="btn btn-default" onClick={onReset}>0</button>
		</div>
	</div>
)

function render() {
	ReactDOM.render(
	<Counter
		value={store.getState()}
		onIncrement={() => store.dispatch({ type: 'INC' })}
		onDecrement={() => store.dispatch({ type: 'DEC' })}
		onReset={() => store.dispatch({ type: 'RESET' })}
	/>,
	document.getElementById('app'))
}


store.subscribe(render)
render()