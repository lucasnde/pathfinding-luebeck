import React, { Component } from 'react'
import '../scss/map.scss'
import nodes from '../constants/nodes'
import { Map, Marker, Popup, TileLayer, Polyline } from 'react-leaflet'
import { getCoordinates } from '../utils/NodesUtility'
import customIcons from '../constants/customIcons'

class CityMap extends Component {
	constructor(props) {
		super(props)

		this.state = {
			locations: [],
			lines: [],
			path: [],
		}
	}

	componentWillReceiveProps(next) {
		this.setState({
			path: next.path
		}, () => {
			this.createLines()
			this.createMarker()
		})
	}

	componentWillMount() {
		this.createMarker()
		this.createLines()
	}

	closeOnSelect = () => document.querySelector('.leaflet-popup-close-button').click()

	createMarker = () => {
		let locations = nodes.map((node, i) => {
			let icon = customIcons.blueIcon
			if (node.id == this.state.path[0]) {
				icon = customIcons.redIcon
			} else if (node.id == this.state.path[this.state.path.length -1]) {
				icon = customIcons.greenIcon
			} else if (this.state.path.includes(node.id)) {
				icon = customIcons.violetIcon
			}

			return (
				<Marker key={i}
						position={[node.coordinates.latitude, node.coordinates.longitude]}
						icon={icon}>
					<Popup>
						<p style={{minWidth: '120px'}}>[{ node.id }]&nbsp;{ node.name }</p>
						<div className="row">
							<div className="col s6">
								<div className="select-btn" onClick={() => {
									this.props.setStart(node.id)
									this.closeOnSelect()
								}}>
									Start
								</div>
							</div>
							<div className="col s6">
								<div className="select-btn" onClick={() => {
									this.props.setDestination(node.id)
									this.closeOnSelect()
								}}>
									Ziel
								</div>
							</div>
						</div>
					</Popup>
				</Marker>
			)
		})

		this.setState({locations})
	}

	createLines = () => {
		let lines = this.state.path.map(e => {
			let marker = getCoordinates(e)
			return [marker.latitude, marker.longitude]
		})

		this.setState({lines})
	}

	render() {
		return (
			<div>
				<Map center={[53.868054, 10.687515]} zoom={14}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{ this.state.locations }
					<Polyline color="red" positions={this.state.lines}/>
				</Map>
			</div>
		)
	}
}

export default CityMap