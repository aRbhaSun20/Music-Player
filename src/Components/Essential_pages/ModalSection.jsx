import React, { Component } from "react";
import Share from "./Share";

class ModalSection extends Component {
	render() {
		return (
			<div
				id="sharebar"
				tabIndex={-1}
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				className="modal fade place-model"
			>
				<div className="modal-dialog">
					<Share />
				</div>
			</div>
		);
	}
}

export default ModalSection;
