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
			rendered: false,
			updatingState: false
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
		highlight('prop:componentWillReceiveProps');
	},

	shouldComponentUpdate: function () {
		if (this.state.updatingState) {
			highlight('state:shouldComponentUpdate');
		} else {
			highlight('prop:shouldComponentUpdate');
		}
		return true;
	},

	componentWillUpdate: function () {
		if (this.state.updatingState) {
			highlight('state:componentWillUpdate');
		} else {
			highlight('prop:componentWillUpdate');
		}
	},

	componentDidUpdate: function () {
		if (this.state.updatingState) {
			this.state.updatingState = false;
			highlight('state:componentDidUpdate');
		} else {
			highlight('prop:componentDidUpdate');
		}
	},

	// -------------------------------
	// methods called during update
	// -------------------------------
	handleClick: function () {
		this.setState({clicks: this.state.clicks+1})
		this.state.updatingState = true;
	},

	render: function () {
		if (!this.state.rendered) {
			this.state.rendered = true;
			highlight('mount:render');
		} else if (this.state.updatingState) {
			highlight('state:render');
		} else {
			highlight('prop:render');
		}


		return (
			<div className="panel panel-default">
				<div className="panel-heading">Suspect</div>
				<div className="panel-body">
					<div className="input-group">
						<label>Total clicks: {this.state.clicks}</label>&nbsp;&nbsp;&nbsp;
						<button className="btn btn-default" onClick={this.handleClick}>{this.props.label}</button>
					</div>
				</div>
			</div>
		)
	}

});