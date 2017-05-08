import React, { Component } from 'react';
import './DiscIntersection.css';

class DiscIntersection extends Component {

    componentWillMount() {
        this.findIntersections(this.props.discsRatio);
    }

    findIntersections(discs) {  

        var events = [];
        var intersections = 0;
        var activeCircles = 0;

        //Fill array with segments
        discs.forEach((element, index) => {
            events.push({
                point: index - element,
                side: 1
            }, {
                point: index + element,
                side: -1
            });
        });

        events.sort((a, b) => { return a.point - b.point; });

        //Search for intersections between segments
        events.forEach((element) => {

            intersections += activeCircles * (element.side > 0);
            activeCircles += element.side;

            if (intersections > 10e6) return -1;
        });

        this.setState({pairs: intersections});

        return intersections;
    }

    render() {

        var zoom = 20;
        var deltaY = 100;
        var deltaX = 100;

        return (
            <div className="DiscIntersection">
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th colSpan={this.props.discsRatio.length}>Array</th>
                            </tr>
                            <tr>
                                {this.props.discsRatio.map((val, index) => <td key={index}>{val}</td>)}
                            </tr>
                        </tbody>
                    </table>

                    <div className="graphContainer">
                        <svg height="200" width="100%" className="axis">
                            <line x1={deltaX} y1={deltaY} x2="100%" y2={deltaY} style={{stroke: '#222', strokeWidth: '1'}} />
                            <point></point>
                        {
                            this.props.discsRatio.map(
                                (val, index) => 
                                    <circle key={index} cx={index*zoom + deltaX} cy={deltaY} r={val*zoom} stroke="black" strokeWidth="1" fill="transparent" />
                            )
                        }
                        {
                            this.props.discsRatio.map(
                                (val, index) => 
                                    <text key={index} x={index*zoom + deltaX} y={deltaY}>.{index}</text>
                            )
                        }
                        </svg>
                    </div>

                    <h2>{this.state.pairs}</h2>
                </div>
            </div>
        );
    }
}

export default DiscIntersection;