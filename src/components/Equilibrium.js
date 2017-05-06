import React, { Component } from 'react';


class Equilibrium extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemValue: '',
            array: []
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        //this.setState({itemValue: event.target.value});
        if (event.target.value.length === 0) {
            this.setState({itemValue: ''});
        } else if (this.isNumber(event.target.value)) {
            this.setState({itemValue: event.target.value});
        }
    }

    isNumber(n) {
        var reg = /^(-){0,1}(\d)+$/;
        return reg.test(n);
    }

    handleKeyDown(event) {
        if (event.keyCode === 13 && this.state.itemValue !== '') {
            this.setState((prevState) => {
                this.state.array.push(this.state.itemValue);
            });
            this.setState({itemValue: ''});
        }
    }

    render() {
        return (
            <div>
                <h2>INCOMPLETE!!</h2>
                <div>
                    Add to array &nbsp; <input type="text" value={this.state.itemValue} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                </div>
                <br/>
                <div>
                    Resulting Array &nbsp;
                    {
                        this.state.array.map((item,index) => {
                            return (
                                <i key={'uk' + index }>{item + ' | '}</i>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

}

export default Equilibrium;