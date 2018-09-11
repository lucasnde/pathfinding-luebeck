import React, { Component } from 'react'
import nodes from '../constants/nodes'
import '../scss/searchInput.scss'

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

	componentDidMount() {
		$(document).ready(function(){
			$('select').formSelect();
		});
	}

	createLocationOptions = () => nodes.map((e, i) => <option key={i} value={e.id}>{e.name}</option>)

	render () {
		return (
			<div className="container" id="searchInput">
				<div className="row">
					<div className="input-field col m6">
						<select onChange={e => this.props.setStart(e.target.value)}>
							{ this.state.locations }
						</select>
						<label>Start</label>
					</div>
					<div className=" input-field col m6">
						<select onChange={e => this.props.setDestination(e.target.value)}>
							{ this.state.locations }
						</select>
						<label>Ziel</label>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchInput