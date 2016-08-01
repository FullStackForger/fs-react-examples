import React from 'react'
import CounterList from './counter-list/component'
import store from '../store'

export default () => (
	<CounterList data={store.getState()}>Layout is working</CounterList>
)