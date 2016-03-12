const HelloWorld = React.createClass({
	render: function () {
		return (
			<h3>Hello World</h3>
		)
	}
});

ReactDOM.render( <HelloWorld />, document.getElementById('app') );