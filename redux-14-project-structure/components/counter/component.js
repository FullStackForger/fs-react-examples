import React from 'react'
import actions from './actions'

const Counter = ({
	index,
	value
}) => (
	<div className="panel panel-default">
		<div className="panel-body">
			<label>Counter: {value}</label>
			<button className="btn btn-default" onClick={actions.onIncrement.bind(null, index)}>+</button>
				<button className="btn btn-default" onClick={actions.onDecrement.bind(null, index)}>-</button>
				<button className="btn btn-default" onClick={actions.onReset.bind(null, index)}>0</button>
				<button className="btn btn-default" onClick={actions.onRemove.bind(null, index)}>X</button>
		</div>
	</div>
)

export default Counter