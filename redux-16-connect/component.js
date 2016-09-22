import React, {Component} from 'react'
import {connect} from 'react-redux'

import {randomize} from './actions'

class MyComponent extends Component {
		constructor(props) {
			super(props)
			this.onClick = this.props.onClick.bind(this)
		}

		render() {
			return (
				<div>
					<button onClick={this.onClick} > Click to randomize </button>
					<hr />
					{ this.props.randomValue }
				</div>
			)
		}
	}

const mapStateToProps = (state, ownProps) => {
	console.log('mapStateToProps()', state.randomData.value)
	return {
		randomValue: state.randomData.value
	}
}

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(randomize())
})

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)