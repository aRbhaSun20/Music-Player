import React, { Component } from "react";
import * as d3 from "d3";

class Sunburst extends Component {
	state = {
		width: 600,
		height: 600,
		// maxRadius: (Math.min(width, height) / 2 - 5),
		maxRadius: 220,
		nodeData: {},
		palettes: [
			//light
			[
				"#F2DA57",
				"#F6B656",
				"#E25A42",
				"#DCBDCF",
				"#B396AD",
				"#B0CBDB",
				"#33B6D0",
				"#7ABFCC",
				"#C8D7A1",
				"#A0B700",
			], //mid
			[
				"#E3BA22",
				"#E58429",
				"#BD2D28",
				"#D15A86",
				"#8E6C8A",
				"#6B99A1",
				"#42A5B3",
				"#0F8C79",
				"#6BBBA1",
				"#5C8100",
			],
			//dark
			[
				"#B08B12",
				"#BA5F06",
				"#8C3B00",
				"#6D191B",
				"#842854",
				"#5F7186",
				"#193556",
				"#137B80",
				"#144847",
				"#254E00",
			],
		],
	};
	componentDidMount() {
		this.drawGraph();
		this.mapData();
	}

	UNSAFE_componentWillMount() {
		this.mapData();
	}

	mapData = () => {
		let nodeData = {
			name: "song-list",
			children: [],
		}; // eslint-disable-next-line
		this.props.data.map((data) => {
			let child = {
				name: data.song_name,
				children: [],
			};
			child.children.push({ name: `Artist : ${data.artist_name}`, size: 2 });
			child.children.push({ name: `Album : ${data.album_name}`, size: 2 });
			child.children.push({
				name: `Playlist : ${data.playlist_name}`,
			});

			child.children.push({
				name: `likes : ${data.likes}`,
				size: data.likes,
			});

			child.children.push({
				name: `dislikes : ${data.dislikes}`,
				size: data.dislikes,
			});

			child.children.push({
				name: `favourites : ${data.favourites}`,
				size: data.favourites,
			});
			nodeData.children.push(child);
		});
		this.setState({ nodeData: nodeData });
	};;

	drawGraph = () => {
		const width = this.state.width,
			height = this.state.height,
			maxRadius = this.state.maxRadius;

		const formatNumber = d3.format(",d");

		const x = d3
			.scaleLinear()
			.range([0, 2 * Math.PI])
			.clamp(true);

		const y = d3.scaleSqrt().range([maxRadius * 0.1, maxRadius]);

		const lightGreenFirstPalette = this.state.palettes
			// .map((d) => d.reverse())
			.reduce((a, b) => a.concat(b));

		const color = d3.scaleOrdinal(lightGreenFirstPalette);
		const partition = d3.partition();

		const arc = d3
			.arc()
			.startAngle((d) => x(d.x0))
			.endAngle((d) => x(d.x1))
			.innerRadius((d) => Math.max(0, y(d.y0)))
			.outerRadius((d) => Math.max(0, y(d.y1)));

		const middleArcLine = (d) => {
			const halfPi = Math.PI / 2;
			const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
			const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);

			const middleAngle = (angles[1] + angles[0]) / 2;
			const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
			if (invertDirection) {
				angles.reverse();
			}

			const path = d3.path();
			path.arc(0, 0, r, angles[0], angles[1], invertDirection);
			return path.toString();
		};
		const textFits = (d) => {
			const CHAR_SPACE = 6;

			const deltaAngle = x(d.x1) - x(d.x0);
			const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
			const perimeter = r * deltaAngle;

			return d.data.name.length * CHAR_SPACE < perimeter;
		};

		const svg = d3
			.select(this.visualize)
			.append("svg")
			.style("width", "80vh")
			.style("height", "80vh")
			.attr("viewBox", `${-width / 2} ${-height / 2} ${width} ${height}`)
			.on("click", () => focusOn());
		// Reset zoom on canvas click

		let root = d3.hierarchy(this.state.nodeData);
		root.sum((d) => d.size);

		const slice = svg.selectAll("g.slice").data(partition(root).descendants());

		slice.exit().remove();

		const newSlice = slice
			.enter()
			.append("g")
			.attr("class", "slice")
			.on("click", (event, d) => {
				event.stopPropagation();
				focusOn(d);
			});

		newSlice
			.append("title")
			.text((d) => d.data.name + "\n" + formatNumber(d.value));

		newSlice
			.append("path")
			.attr("class", "main-arc")
			.style("fill", (d) => color((d.children ? d : d.parent).data.name))
			.attr("d", arc);

		newSlice
			.append("path")
			.attr("class", "hidden-arc")
			.attr("id", (_, i) => `hiddenArc${i}`)
			.attr("d", middleArcLine);

		const text = newSlice
			.append("text")
			.attr("display", (d) => (textFits(d) ? null : "none"));
		text.style("stroke", "#0000").style("font-size", "1em");
		text
			.append("textPath")
			.attr("startOffset", "50%")
			.attr("xlink:href", (_, i) => `#hiddenArc${i}`)
			.text((d) => d.data.name);

		function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
			// Reset to top-level if no data point specified

			const transition = svg
				.transition()
				.duration(750)
				.tween("scale", () => {
					const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
						yd = d3.interpolate(y.domain(), [d.y0, 1]);
					return (t) => {
						x.domain(xd(t));
						y.domain(yd(t));
					};
				});

			transition.selectAll("path.main-arc").attrTween("d", (d) => () => arc(d));

			transition
				.selectAll("path.hidden-arc")
				.attrTween("d", (d) => () => middleArcLine(d));

			transition
				.selectAll("text")
				.attrTween("display", (d) => () => (textFits(d) ? null : "none"));

			moveStackToFront(d);

			//

			function moveStackToFront(elD) {
				svg
					.selectAll(".slice")
					.filter((d) => d === elD)
					.each(function (d) {
						this.parentNode.appendChild(this);
						if (d.parent) {
							moveStackToFront(d.parent);
						}
					});
			}
		}
	};

	componentDidUpdate(prevProps) {
		if (this.props.data !== prevProps.data) {
			this.drawGraph();
		}
	}

	render() {
		return (
			<div ref={(ref) => (this.visualize = ref)} className="sunburst"></div>
		);
	}
}

export default Sunburst;
