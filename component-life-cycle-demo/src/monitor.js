const Monitor = React.createClass({
	getInitialState: () => ({
		btnLabel: 'Click me!',
		suspects: 0
	}),
	handleInputChange(evt) {
		this.setState({ btnLabel: evt.target.value });
	},
	handleAddSuspectBtnClick: function() {
		this.setState({
			suspects: this.state.suspects + 1
		})
	},
	render: function () {
		let suspects = [];
		let suspectId = 0;
		while(suspectId < this.state.suspects) {
			let suspectKey = 'sspct-' + suspectId;
			suspects.push(
				<Suspect key={suspectKey} label={this.state.btnLabel}></Suspect>
			);
			suspectId ++;
		}

		return (
			<div className="panel panel-default">
				<div className="panel-heading">component: <strong>Monitor</strong></div>
				<div className="panel-body">
					<div className="row">
						<div className="col-xs-6">
							<div className="input-group">
								<div className="input-group-addon">Button label:</div>
								<input className="form-control" type="text" defaultValue={this.state.btnLabel} onInput={this.handleInputChange}/>
							</div>
						</div>
						<div className="col-xs-2">
							<button className="form-control btn btn-default" onClick={this.handleAddSuspectBtnClick}>Add component</button>
						</div>
					</div>
					<hr />
					{suspects}
				</div>
			</div>
		)
	}
})