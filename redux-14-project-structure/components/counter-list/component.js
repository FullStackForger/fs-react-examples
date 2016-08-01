import React from 'react'
import Counter from '../counter/component'
import store from '../../store'

const CounterList = React.createClass({
	addCounter: () => store.dispatch({
		type: 'ADD_COUNTER'
	}),
	rmCounter: function () {
		if (this.props.data.length === 0) return
		store.dispatch({
			type: 'RM_COUNTER',
			index: this.props.data.length - 1
		})
	},
	render: function() {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">
					<button className="btn btn-default" onClick={this.addCounter}>Add counter</button>
					<button className="btn btn-default" onClick={this.rmCounter}>Remove counter</button>
				</div>
				<div className="panel-body">
					{this.props.data.map((data) => (
						<Counter
							key={'counter-' + data.index}
							{...data}
						/>
					))}
				</div>
			</div>
		)
	}
})

export default CounterList