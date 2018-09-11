import React, { Component } from 'react'
import nodes from '../constants/nodes'

class SearchInput extends Component {

	constructor(props) {
		super(props)

		this.state = {
			locations: [],
		}
	}

	componentWillMount() {
		const locations = this.createLocationOptions()
		this.setState({locations})
	}

	createLocationOptions = () => nodes.map((e, i) => <option key={i} value={e.id}>{e.name}</option>)

	render () {
		return (
			<div>
				<h2>Start</h2>
				<select onChange={e => this.props.setStart(e.target.value)}>
					{ this.state.locations }
				</select>
				<h2>Ziel</h2>
				<select onChange={e => this.props.setDestination(e.target.value)}>
					{ this.state.locations }
				</select>
			</div>
		)
	}
}

export default SearchInput