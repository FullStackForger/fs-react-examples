import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import Laout from './components/layout'

function render () {
	ReactDOM.render(
		<Laout />,
		document.getElementById('app')
	)
}

store.subscribe(render)
render()