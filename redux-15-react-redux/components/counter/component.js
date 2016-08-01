import React, {PropTypes} from 'react'
import actions from './actions'

const Counter = ({
	index,
	value,
	onIncrement,
	onDecrement,
	onReset,
	onRemove
}) => (
	<div className="panel panel-default">
		<div className="panel-body">
			{`${index} ) `}
			<button className="btn btn-default" onClick={onIncrement}>+</button>
			<button className="btn btn-default" onClick={onDecrement}>-</button>
			<button className="btn btn-default" onClick={onReset}>0</button>
			<button className="btn btn-default" onClick={onRemove}>X</button>
			<label>Counter: {value}</label>
		</div>
	</div>
)

Counter.propTypes = {
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired
}

export default Counter