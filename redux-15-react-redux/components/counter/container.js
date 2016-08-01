import { connect } from 'react-redux'
import { onIncrement, onDecrement, onRemove, onReset } from './actions'
import Counter from './component'

const mapStateToProps = (state, ownPros) => ({
	...state.data[ownPros.index]
})

const mapDispatchToProps = 	(dispatch, ownProps) => ({
	onIncrement: () => dispatch(onIncrement(ownProps.index)),
	onDecrement: () => dispatch(onDecrement(ownProps.index)),
	onReset: () => dispatch(onReset(ownProps.index)),
	onRemove: () => dispatch(onRemove(ownProps.index))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)