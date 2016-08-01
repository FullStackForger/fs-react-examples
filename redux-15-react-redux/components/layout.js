import React from 'react'
import { connect } from 'react-redux'

import ListContainer from './counter-list/container'

const mapStateToProps = (state) => ({
	items: state.data.length
})

const Layout = ({items}) => (
	<ListContainer items={items} />
)

export default connect(
	mapStateToProps
)(Layout)