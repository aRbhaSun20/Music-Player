import Glide from "@glidejs/glide";

// import { useState, useEffect, React } from "react";

import "../Styles/index.css";

import hawaBanke from "../Images/Artist/hawaBanke.jpg";
// import hawaBanke2 from "../Images/Artist/hawaBanke2.jpg";
import kinnasonna from "../Images/Artist/kinnasonna.jpg";
import vaaste from "../Images/Artist/vaaste.jpg";
import ruladiya from "../Images/Artist/ruladiya.jpg";
import amitabh from "../Images/Artist/amitabh4.jpg";
import arijith from "../Images/Artist/arijth4.jpg";
import asalMein from "../Images/Artist/asal-mein.jpg";
import baarish from "../Images/Artist/baarish.jpg";
import downtown from "../Images/Artist/downtown.jpg";
import ishareTere from "../Images/Artist/ishareTere.jpg";
import lahore from "../Images/Artist/lahore.jpg";
import slowly from "../Images/Artist/slowly-slowly.jpg";

// const AlbumSection = ({ element = "glide", options }) => {
// const [slider] = useState(
// new Glide(`.${element}`, {
// type: "slider",
// startAt: 1,
// focusAt: 2,
// perView: 3,
// gap: 70,
// autoplay: true,
// animationDuration: 4000,
// rewindDuration: 15000,
// animationTimingFunc: "ease-in",
// })
// );

// const albumImages = [
// hawaBanke,
// amitabh,
// kinnasonna,
// vaaste,
// ruladiya,
// arijith,
// asalMein,
// baarish,
// downtown,
// ishareTere,
// lahore,
// slowly,
// ];

// useEffect(() => {
// slider.mount();

// slider.on("run.before", (evnt) => {});
// return () => slider.destroy();
// });

// return (
// <div className="album-section">
// <div className={element}>
// <div className="glide__track" data-glide-el="track">
// <ul className="glide_slides">
// {albumImages.map((slide, index) => {
// return (
// <li className="glide__slide" key={index}>
// <img src={slide} alt="slides" className={index} />
// </li>
// );
// })}
// </ul>
// </div>
// </div>
// </div>
// );
// };

import React, {Component} from "react";

class AlbumSection extends Component {

    constructor(props) {
        super(props)
        [this.slider] = new Glide(`.glide`, {
            type: "slider",
            startAt: 1,
            focusAt: 2,
            perView: 3,
            gap: 70,
            autoplay: true,
            animationDuration: 4000,
            rewindDuration: 15000,
            animationTimingFunc: "ease-in"
        });
        this.state = {
			slider : new Glide(`.glide`, {
            type: "slider",
            startAt: 1,
            focusAt: 2,
            perView: 3,
            gap: 70,
            autoplay: true,
            animationDuration: 4000,
            rewindDuration: 15000,
            animationTimingFunc: "ease-in"
        }),
            albumImages : [
                hawaBanke,
                amitabh,
                kinnasonna,
                vaaste,
                ruladiya,
                arijith,
                asalMein,
                baarish,
                downtown,
                ishareTere,
                lahore,
                slowly,
            ]
        }
    }
    componentDidMount() {
        this.state.slider.mount();

       this.state.slider.on("run.before", (evnt) => {});
        // return () => slider.destroy();
    }
    componentWillUnmount() {
        this.state.slider.destroy();
    }

    render() {
        return (
            <div className="album-section">
                <div className="glide">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="glide_slides">
                            {
                            this.state.albumImages.map((slide, index) => {
                                return (
                                    <li className="glide__slide"
                                        key={index}>
                                        <img src={slide}
                                            alt="slides"
                                            className={index}/>
                                    </li>
                                );
                            })
                        } </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AlbumSection;

// export default AlbumSection;
