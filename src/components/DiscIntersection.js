import React, { Component } from 'react';
import './DiscIntersection.css';

class DiscIntersection extends Component {

    componentWillMount() {
        console.log("component did mount");

        var count = this.findIntersections(this.props.discsRatio);
        console.log(count);

        this.setState({
            intersections: (count > 0) ? count : 'No intersections'
        });

    }

    componentWillUnmount() {
        console.log("component will unmount");
    }

    findIntersections(discs) {
        console.log("find intersections");
        let sLeft = [];
        let sRight = [];
        var pairs = 0;

        //Fill array with segments
        for(let i=0; i < discs.length; i++) {
            sLeft.push(i - discs[i]);
            sRight.push(i + discs[i]);
        }

        //Search for intersections between segments
        for (let i=0; i < discs.length; i++) {
            for (var j=1; j < discs.length; j++) {
                if (sRight[i] >= sLeft[j]) {
                pairs++;
                if (pairs > 10000000) return -1;
                }
            }
        }

        this.setState({sLeft: sLeft});
        this.setState({sRight: sRight});

        return pairs;
    }

    render() {
        return (
            <div className="DiscIntersection">
                <h2>INCOMPLETE!!</h2>
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
                        <svg height="100" width="100" className="axis">
                        {
                            this.props.discsRatio.map(
                                (val, index) => 
                                    <circle key={index} cx={index+50} cy="50" r={val} stroke="black" strokeWidth="0.25" fill="transparent" />
                            )
                        }
                        </svg>
                    </div>

                    <table>
                        <tbody>
                            <tr>
                                <th colSpan={this.state.sLeft.length}>Segments</th>
                            </tr>
                            <tr>
                                {this.state.sLeft.map((val, index) => <td key={index}>{'[' + val + ',' + this.state.sRight[index] + ']'}</td>)}
                            </tr>
                        </tbody>
                    </table>

                    <h2>{this.state.intersections}</h2>
                </div>
            </div>
        );
    }
}

export default DiscIntersection;