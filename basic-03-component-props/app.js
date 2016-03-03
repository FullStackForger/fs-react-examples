const Panel = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">{this.props.title}</div>
				<div className="panel-body">
					{this.props.content}
				</div>
			</div>
		)
	}
})

ReactDOM.render( (
	<Panel
		title="This is title"
		content="This is some totally random content"
	/>
), document.getElementById('app') );