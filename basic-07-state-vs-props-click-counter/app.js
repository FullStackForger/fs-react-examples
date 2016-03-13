const Clicker = React.createClass({
	getInitialState: function () {
		return { count: 0 };
	},
	handleClick: function () {
		this.setState({
			count: this.state.count + 1,
		});
		this.props.handleClick();
	},
	render: function () {
		return (
			<button onClick={this.handleClick}>
				Click me! Number of clicks: {this.state.count}
			</button>
		);
	}
})

const ClickCounter = React.createClass({
	getInitialState: function () {
		return { totalClicks: 0 }
	},
	handleClick: function () {
		this.setState({ totalClicks: this.state.totalClicks + 1 });
	},
	render: function () {
		let clickers = [];
		for(let i=0; i<this.props.buttons; i++) {
			let key = 'btn-' + i;
			clickers.push(<Clicker handleClick={this.handleClick} key={key}/>);
		}

		return (
			<div className="panel panel-default">
				<div className="panel-heading">Click Counter</div>
				<div className="panel-body">
					<p>Total clicks: {this.state.totalClicks}</p>
					{clickers}
				</div>
			</div>
		)
	}
})
ReactDOM.render(
	<ClickCounter buttons="4"/>,
	document.getElementById('app')
);