import React from 'react'
import '../scss/customMarker.scss'

const CustomMarker = ({text}) => (
	<div className="custom-marker">
		<button>{ text }</button>
	</div>
)

export default CustomMarker