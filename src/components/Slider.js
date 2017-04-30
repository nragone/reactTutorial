import React, { Component } from 'react';
import './Slider.css';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.imagesList = props.images.map((img, index) => (
            <div className="slider-image" key={'uk-' + index} style={{backgroundImage: `url(${props.basePath + img})`}}></div>
        ));
        this.step = 2;
        this.speed = 50;
        this.state = {
            positionLeft: 0,
            direction: -1
        };
    }

    startMoving() {
        this.timerID = setInterval(() => this.moveWrapper(), 1/this.speed*1000);
    }

    pauseMoving() {
        clearInterval(this.timerID);
    }

    moveWrapper() {
        let wrapperChildren = document.getElementsByClassName('slider-wrapper')[0].children.length;
        let wrapperWidth = document.getElementsByClassName('slider-wrapper')[0].clientWidth;

        if ((this.state.positionLeft*-1) >= (wrapperChildren -1) * wrapperWidth) this.setState({positionLeft: 0});

        this.setState({positionLeft: this.state.positionLeft + (this.step * this.state.direction)});
    }

    render() {
        let markup = (
            <div className="slider">
                <div className="slider-wrapper" onMouseEnter={this.startMoving.bind(this)} onMouseLeave={this.pauseMoving.bind(this)} style={{left: this.state.positionLeft}}>
                    {this.imagesList}
                </div>
            </div>
        );

        return markup
    }
}

export default Slider;