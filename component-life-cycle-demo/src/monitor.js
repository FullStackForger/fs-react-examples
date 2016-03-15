const Monitor = React.createClass({
	getInitialState: () => ({
		btnLabel: 'Click me!'
	}),
	handleInputChange(evt) {
		this.setState({ btnLabel: evt.target.value });
	},
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">Monitor</div>
				<div className="panel-body">
					<div className="input-group">
						<div className="input-group-addon">Button label:</div>
						<input className="form-control" type="text" defaultValue={this.state.btnLabel} onInput={this.handleInputChange}/>
					</div>
					<hr />
					<Suspect label={this.state.btnLabel}></Suspect>
				</div>
			</div>
		)
	}
})