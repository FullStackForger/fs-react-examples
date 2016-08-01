export const ADD_COUNTER = 'ADD_COUNTER'
export const REMOVE_ALL = 'REMOVE_ALL'

import {REMOVE} from '../counter/actions'
export const REMOVE_COUNTER = REMOVE

export const onAddCounter = () => ({
	type: ADD_COUNTER
})

export const onRemoveCounter = (index) => ({
	type: REMOVE_COUNTER,
	index: index
})

export const onRemoveAll = () => ({
	type: REMOVE_ALL
})