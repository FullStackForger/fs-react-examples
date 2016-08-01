import React, {PropTypes } from 'react'
import CounterContainer from '../counter/container'			// todo: import container ???
import Counter from '../counter/component'			// todo: import container ???

const CounterList = ({
	data,
	onAddCounter,
	onRemoveCounter,
	onRemoveAll
}) => (
	<div className="panel panel-default">
		<div className="panel-heading">
			<button className="btn btn-default" onClick={onAddCounter}>Add counter</button>
			<button className="btn btn-default" onClick={onRemoveCounter}>Remove counter</button>
			<button className="btn btn-default" onClick={onRemoveAll}>Remove all</button>
		</div>
		<div className="panel-body">
			{data.map((counterData, index) => (
				<CounterContainer
					key={'counter-' +index}
					index={index}
				/>
			))}
		</div>
	</div>
)

// CounterList.propTypes = {
// 	onAddCounter: PropTypes.func.isRequired,
// 	onRemoveCounter: PropTypes.func.isRequired,
// 	onRemoveall: PropTypes.func.isRequired
// }

export default CounterList