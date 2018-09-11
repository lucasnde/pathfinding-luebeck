import React, { Component } from 'react'
import API from '../constants/api'
import GoogleMapReact from 'google-map-react'
import CustomMarker from '../components/CustomMarker'
import '../scss/map.scss'
import { getCoordinates } from '../utils/NodesUtility'
import nodes from '../constants/nodes'

class Map extends Component{

	constructor(props) {
		super(props)

		this.state = {
			defaultConfig: {
				center: {
					lat: 53.868054,
					lng: 10.687515
				},
				zoom: 14,
			},
			start: getCoordinates(this.props.start),
			destination: getCoordinates(this.props.destination),
			nodeList: []
		}
	}

	componentDidMount() {
		let nodeList = nodes.map((e, i) => (
			<CustomMarker lat={e.coordinates.latitude}
						  lng={e.coordinates.longitude}
						  text={e.id}
						  key={i}
			/>
		))
		this.setState({nodeList})
	}

	render () {
		return (
			<div className="map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: API.googleMaps }}
					defaultCenter={this.state.defaultConfig.center}
					defaultZoom={this.state.defaultConfig.zoom}
				>

				{ this.state.nodeList }

				</GoogleMapReact>
			</div>
		)
	}
}

export default Map