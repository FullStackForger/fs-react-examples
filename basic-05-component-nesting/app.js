const ChildComponent = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">Child component</div>
				<div className="panel-body">
					This is child no {this.props.childNumber}
				</div>
			</div>
			)
	}
});

const ParentComponent = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">Parent component</div>
				<div className="panel-body">
				<ChildComponent childNumber="1"/>
				<ChildComponent childNumber="2"/>
				<ChildComponent childNumber="3"/>
				</div>
			</div>
		)
	}
});

ReactDOM.render( <ParentComponent />, document.getElementById('app') );