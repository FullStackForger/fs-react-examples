import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
	user: {},
	requesting: false,
	err: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'REQ_USER_INIT': return { ...state, requesting: true }
		case 'REQ_USER_DATA': return { ...state, requesting: false, user: action.user }
		case 'REQ_USER_ERR': return { ...state, requesting: false, err: action.err }
	}
	return state;
}

const logger = (store) => (next) => (action) => {
	let previous = JSON.stringify(store.getState())
	next(action)
	console.log(
		'action: ' + JSON.stringify(action) +
		'\n\tprevious: ' + previous +
		'\n\tcurrent: ' + JSON.stringify(store.getState())
	)
}

// order of loaded middleware methods matter
const middleware = applyMiddleware(thunk, logger)
const store = createStore(reducer, middleware)

store.dispatch((dispatch) => {
	dispatch({ type: 'REQ_USER_INIT' })

	// Fake Online REST API for Testing and Prototyping
	// break url to get an error response
	let usersEndpoint = 'https://jsonplaceholder.typicode.com/users/1'

	return axios.get(usersEndpoint)
		.then((response) => dispatch({
			type: 'REQ_USER_DATA',
			user: {
				id: response.data.id,
				username: response.data.username,
				email: response.data.email,
			}
		}))
		.catch((error) => dispatch({
			type: 'REQ_USER_ERR',
			err: error.message
		}))
})