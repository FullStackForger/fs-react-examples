
const Suspect = React.createClass({
	// -------------------------------------
	// methods called during initialization
	// -------------------------------------
	getDefaultProps: function () {
		highlight('init:getDefaultProps');
	},

	getInitialState: function () {
		highlight('init:getInitialState');
		return {
			clicks: 0,
			rendered: false
		}
	},

	// -------------------------------
	// methods called during mounting
	// -------------------------------
	componentWillMount: function () {
		highlight('mount:componentWillMount');
	},

	// render method is called during mounting phase as well

	componentDidMount: function () {
		highlight('mount:componentDidMount');
	},

	// -------------------------------
	// methods called during update
	// -------------------------------
	componentWillReceiveProps: function () {
		highlight('prop:componentDidMount');
	},

	shouldComponentUpdate: function () {
		highlight('prop:shouldComponentUpdate');
		return true;
	},

	componentWillUpdate: function () {
		highlight('prop:componentWillUpdate');
	},

	componentDidUpdate: function () {
		highlight('prop:componentDidUpdate');
	},

	// -------------------------------
	// methods called during update
	// -------------------------------
	handleClick: function () {
		this.setState({clicks: this.state.clicks+1})
	},

	render: function () {
		if (!this.state.rendered) {
			highlight('mount:render');
			this.state.rendered = true;
		}

		return (
			<div>
				<button onClick={this.handleClick}></button>
			</div>
		)
	}

});

ReactDOM.render( <Suspect />, document.getElementById('app') );