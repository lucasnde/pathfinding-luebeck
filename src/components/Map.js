import React, { Component } from 'react'
import API from '../constants/api'
import GoogleMapReact from 'google-map-react'
import CustomMarker from '../components/CustomMarker'
import '../scss/map.scss'

class Map extends Component{

	constructor(props) {
		super(props)

		this.state = {
			center: {
				lat: 53.868054,
				lng: 10.687515
			},
			zoom: 14,
		}
	}

	render () {
		return (
			<div className="map">
				<GoogleMapReact
					bootstrapURLKeys={{ key: API.googleMaps }}
					defaultCenter={this.state.center}
					defaultZoom={this.state.zoom}
				>
					
				</GoogleMapReact>
			</div>
		)
	}
}

export default Map