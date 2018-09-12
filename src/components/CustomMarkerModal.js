import React, { Component } from 'react'
import '../scss/customMarkerModal.scss'

class CustomMarkerModal extends Component {
	render() {
		return (
			<div className="custom-marker-modal">
				<div className="container">
					<div className="row">
						<div className="col-s12 m4">
							<div className="select-box">
								<div className="row">
									<h4>
										Straße als Start oder Ziel verwenden?
									</h4>
								</div>
								<div className="row">
									<button className="btn waves-effect waves-light" name="action">Start
										<i className="material-icons right">send</i>
									</button>
									<button className="btn waves-effect waves-light" name="action">Ziel
										<i className="material-icons right">send</i>
									</button>
								</div>
								<div className="row">
									<button className="btn waves-effect waves-teal btn-flat" type="submit" name="action">Abbrechen
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CustomMarkerModal