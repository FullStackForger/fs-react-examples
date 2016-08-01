import { connect } from 'react-redux'
import { onAddCounter, onRemoveCounter, onRemoveAll } from './actions'
import CounterList from './component'

const mapStateToProps = (state) => ({
	data: state.data
})

const mapDispatchToProps = (dispatch, props) => ({
	onAddCounter: () => dispatch(onAddCounter()),
	onRemoveCounter: () => dispatch(onRemoveCounter(props.items - 1)),
	onRemoveAll: () => dispatch(onRemoveAll())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CounterList)