import React, { Component } from "react";
import Sunburst from "./Sunburst";
import "../Styles/index.css";

class Visualizer extends Component {
	state = {
		visualize: ["Music Data", "recentmusicData", "browsemusicData", "userData"],
	};

	render() {
		return (
			<div className="visualizers">
				{this.props.details.map((detail, index) => {
					return (
						<div className="indi-visualize" key={index}>
							<div className="heading-visualize">
								<h1>{`${this.state.visualize[index]} Visualization`}</h1>
								<Sunburst data={detail} />
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Visualizer;
