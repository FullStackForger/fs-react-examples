import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Laout from './components/layout'

ReactDOM.render(
	<Provider store={store}>
		<Laout />
	</Provider>,
	document.getElementById('app')
)