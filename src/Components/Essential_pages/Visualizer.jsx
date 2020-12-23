import React, { Component } from "react";
import Sunburst from "./Sunburst";
import "../Styles/index.css";

class Visualizer extends Component {
	state = {
		visualize: [
			"Music Data",
			"Recent Music Data",
			"Browse Music Data",
			"userData",
		],
	};

	render() {
		return (
			<div className="visualizers">
				{
					// eslint-disable-next-line
					this.props.details.map((detail, index) => {
					if (detail.length !== 0) {
						return (
							<div className="indi-visualize" key={index}>
								<div className="heading-visualize">
									<h1>{`${this.state.visualize[index]} Visualization`}</h1>

									<Sunburst data={detail} />
								</div>
							</div>
						);
					}
				})}
			</div>
		);
	}
}

export default Visualizer;
