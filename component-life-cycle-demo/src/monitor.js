const Monitor = React.createClass({
	getInitialState: () => ({
		btnLabel: 'Click me!',
		suspectCount: 0
	}),
	handleInputChange(evt) {
		this.setState({ btnLabel: evt.target.value });
	},
	handleAddSuspectBtnClick: function() {
		console.log('CLICK');
		this.setState({
			suspectCount: this.state.suspectCount + 1
		})

	},
	handleRemovesuspectCountBtnClick: function () {
		this.setState({
			suspectCount: 0
		})
	},
	render: function () {
		let suspectCount = [];
		let suspectId = 0;
		while(suspectId <  this.state.suspectCount) {
			let suspectKey = 'sspct-' + suspectId;
			suspectCount.push(
				<Suspect key={suspectKey} label={this.state.btnLabel}></Suspect>
			);
			suspectId ++;
		}
		return (
			<div className="panel panel-default">
				<div className="panel-heading">component: <strong>Monitor</strong></div>
				<div className="panel-body">
					<div className="row">
						<div className="col-xs-8">
							<div className="input-group">
								<div className="input-group-addon">Button label:</div>
								<input className="form-control" type="text" defaultValue={this.state.btnLabel} onInput={this.handleInputChange}/>
							</div>
						</div>
						<div className="col-xs-2">
							<button className="btn btn-default" onClick={this.handleAddSuspectBtnClick}>Add component</button>
						</div>
						<div className="col-xs-2">
							<button className="btn btn-default" onClick={this.handleRemovesuspectCountBtnClick}>Remove all</button>
						</div>
					</div>
					<hr />
					{suspectCount}
				</div>
			</div>
		)
	}
})