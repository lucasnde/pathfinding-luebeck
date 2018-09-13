import React from 'react'
import nodes from '../constants/nodes'
import { getNode } from '../utils/NodesUtility'
import '../scss/directions.scss'

const Directions = ({path, setStart, setDestination}) => {
	let way = path.map((e, i) => {
		let iconColor = "#55AB3D"
		if (path.length === i + 1) {
			iconColor = "#BB373E"
		} else if (i >= 1 && i < path.length) {
			iconColor = "#954dc7"
		}

		const wayPoint = getNode(nodes, e)
		return (
			<li key={i}>
				<div className="collapsible-header">
					<i style={{color: iconColor}} className="material-icons">location_on</i>
					{wayPoint.name}
					</div>
				<div className="collapsible-body">
					<div className="row">
						<p>ID: {wayPoint.id}</p>
						<p>Breitengrad: {wayPoint.coordinates.latitude}</p>
						<p>Längengrad: {wayPoint.coordinates.longitude}</p>
					</div>
					<div className="row">
						<div className="col s6 m2">
							<button className="btn waves-effect waves-light"
									onClick={() => setStart(wayPoint.id)}>
								Start
							</button>
						</div>
						<div className="col s6 m2">
							<button className="btn waves-effect waves-light"
									onClick={() => setDestination(wayPoint.id)}>
								Ziel
							</button>
						</div>
					</div>
				</div>
			</li>
		)
	})

	// init plugin
	$(document).ready(function(){
		$('.collapsible').collapsible()
	})

	return (
		<div className="container">
			<div className="row">
				<div className="col s12">
					<ul className="collapsible">
						{ way }
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Directions
