window.highlight = (function() {
	let highlightIds = [];
	let highlightId;

	setInterval(function () {
		let el;
		if (highlightId) {
			el = document.getElementById(highlightId);
			el.className = el.className.replace('alert-success', 'alert-info');
			highlightId = null;
		}

		if (highlightIds.length > 0) {
			highlightId = highlightIds.shift();
			el = document.getElementById(highlightId);
			el.className = el.className.replace('alert-info', 'alert-success');
		}
	}, 500);

	return function (elementId) {
		console.log(elementId);
		highlightIds.push(elementId);
	}
})()

const Suspect = React.createClass({
	// -------------------------------------
	// methods called during initialization
	// -------------------------------------
	getDefaultProps: function () {
		highlight('i:getDefaultProps');
	},

	getInitialState: function () {
		highlight('i:getInitialState');
		return { clicks: 0 }
	},

	// -------------------------------
	// methods called during mounting
	// -------------------------------
	componentWillMount: function () {
		highlight('m:componentWillMount');
	},

	// render method is called during mounting phase as well

	componentDidMount: function () {
		highlight('m:componentDidMount');
	},

	// -------------------------------
	// methods called during update
	// -------------------------------
	componentWillReceiveProps: function () {
		highlight('p:componentDidMount');
	},

	shouldComponentUpdate: function () {
		highlight('p:shouldComponentUpdate');
		return true;
	},

	componentWillUpdate: function () {
		highlight('p:componentWillUpdate');
	},

	componentDidUpdate: function () {
		highlight('p:componentDidUpdate');
	},

	// -------------------------------
	// methods called during update
	// -------------------------------
	handleClick: function () {
		this.setState({clicks: this.state.clicks+1})
	},

	render: function () {
		return (
			<div>
				<button onClick={this.handleClick}></button>
			</div>
		)
	}


});



ReactDOM.render( <Suspect />, document.getElementById('app') );