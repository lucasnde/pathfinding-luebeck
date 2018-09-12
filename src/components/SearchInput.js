import React, { Component } from 'react'
import nodes from '../constants/nodes'
import '../scss/searchInput.scss'

class SearchInput extends Component {

	constructor(props) {
		super(props)

		this.state = {
			locations: [],
			start: 1,
			destination: 1,
		}
	}

	componentWillReceiveProps(next) {
		this.setState({
			start: next.start,
			destination: next.destination
		}, () => this.updateSelect())
	}

	componentWillMount() {
		this.createLocationOptions()
	}

	componentDidMount() {
		this.initSelect()
	}

	initSelect = () => {
		$(document).ready(function(){
			$('#selectStart').formSelect()
		})
		$(document).ready(function(){
			$('#selectDestination').formSelect()
		})
	}

	updateSelect = () => {
		$(document).ready(function(){
			$('#selectStart').val(this.state.start)
			$('#selectStart').formSelect()
		})
		$(document).ready(function(){
			$('#selectStart').val(this.state.destination)
			$('#selectDestination').formSelect()
		})
	}

	createLocationOptions = () => {
		const locations = nodes.map((e, i) => <option key={i} value={e.id}>[{e.id}]&nbsp;{e.name}</option>)
		this.setState({locations})
	}

	render () {
		return (
			<div className="container" id="searchInput">
				<div className="row">
					<div className="input-field col m6 s12">
						<select id="selectStart" value={this.state.start} onChange={e => this.props.setStart(e.target.value)}>
							{ this.state.locations }
						</select>
						<label>Start</label>
					</div>
					<div className=" input-field col m6 s12">
						<select id="selectDestination" value={this.state.destination} onChange={e => this.props.setDestination(e.target.value)}>
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