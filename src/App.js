import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

import nodes from './constants/nodes'
import { dijkstra } from './utils/NodesUtility'

import SearchInput from './components/SearchInput'
import CityMap from './components/CityMap'
import Directions from './components/Directions'

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			start: 1,
			destination: 1,
			path: [],
		}
	}

	setStart = start => this.setState({start}, () => this.calculateMap())

	setDestination = destination => this.setState({destination}, () => this.calculateMap())

	componentWillMount() {
		this.calculateMap()
	}

	calculateMap = () => {
		let path = dijkstra(nodes, this.state.start, this.state.destination).path
		this.setState({path})
	}

	render() {
		return (
			<div className="app">
				<CityMap setStart={this.setStart} setDestination={this.setDestination} path={this.state.path} />
				<SearchInput setStart={this.setStart}
							 setDestination={this.setDestination}
							 start={this.state.start}
							 destination={this.state.destination}/>
				<Directions path={this.state.path}
							setStart={this.setStart}
							setDestination={this.setDestination}/>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'))