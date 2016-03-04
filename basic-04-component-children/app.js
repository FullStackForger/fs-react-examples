const Panel = React.createClass({
	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-heading">{this.props.title}</div>
				<div className="panel-body">
					{this.props.children}
				</div>
			</div>
		)
	}
})

ReactDOM.render( (
	<Panel title="Component with raw html as children">
		<h3>Component properties</h3>
		<p>You can pass data into component from it's parent using component properties.</p>
		<pre>
		{[
			'<Panel property="Example of bootstrap panel component">\n',
			'</Panel>'
		]}
		</pre>
		<small>Source: <a href="https://facebook.github.io/react/docs/jsx-gotchas.html#html-entities">tml-entities</a></small>
		<p>You can access data via <code>this.props</code> property.</p>

		<h4>component children</h4>
		<blockquote>
			<p>
				<code>Parent</code> can read its children by accessing the special <code>this.props.children</code> prop.
				<code>this.props.children</code> is an opaque data structure: use the <a href="https://facebook.github.io/react/docs/top-level-api.html#react.children">React.Children utilities</a> to manipulate them.
			</p>
			<p>
				<small>Source: <a href="https://facebook.github.io/react/docs/multiple-components.html#children">facebook.github.io</a></small>
			</p>
		</blockquote>
	</Panel>
), document.getElementById('app') );