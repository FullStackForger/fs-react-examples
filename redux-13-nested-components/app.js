import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

const counterInitState = { index: 0, value: 0 }
const counter = (state = counterInitState, action) => {
	switch (action.type) {
		case 'INC':
			return {...state, value: state.value + 1 }
		case 'DEC':
			return {...state, value: state.value - 1 }
		case 'RESET':
			return {...state, value: 0 }
	}
	return state
}

const counters = (state = [], action) => {
	switch (action.type) {
		case 'ADD_COUNTER':
			return [...state, { ...counterInitState, index: state.length }]
		case 'RM_COUNTER':
			let index = 0
			return [...state].filter((fCounter) => {
				if (fCounter.index === action.index)
					return false
				return Object.assign(fCounter, { index: index++ })
			})
		case 'RESET':
		case 'INC':
		case 'DEC':
			return state.map((fCounter) => {
				return fCounter.index == action.index
					? counter(fCounter, action)
					: fCounter
			})
	}
	return state
}

const store = createStore(counters)
store.subscribe(render)

const Counter = ({
	index,
	value
}) => (
	<div className="panel panel-default">
		<div className="panel-body">
			<label>Counter: {value}</label>
			<button className="btn btn-default" onClick={Counter.onIncrement.bind(null, index)}>+</button>
			<button className="btn btn-default" onClick={Counter.onDecrement.bind(null, index)}>-</button>
			<button className="btn btn-default" onClick={Counter.onReset.bind(null, index)}>0</button>
			<button className="btn btn-default" onClick={Counter.onRemove.bind(null, index)}>X</button>
		</div>
	</div>
)

Counter.onIncrement = (index) => store.dispatch({
		type: 'INC',
		index: index
})
Counter.onDecrement = (index) => store.dispatch({
	type: 'DEC',
	index: index
})
Counter.onReset = (index) => store.dispatch({
	type: 'RESET',
	index: index
})
Counter.onRemove = (index) => store.dispatch({
	type: 'RM_COUNTER',
	index: index
})



function render() {
	ReactDOM.render(<CounterList data={store.getState()}/>,
	document.getElementById('app'))
}

store.subscribe(render)
render()