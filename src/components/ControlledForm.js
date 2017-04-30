import React, { Component } from 'react';
import './ControlledForm.css';

class ControlledForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: '',
            descriptionValue: 'Description here'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {

        const name = event.target.name;

        this.setState({[name]: event.target.value.toUpperCase()});

        if (event.target.value.length < 4) {
            event.target.className = 'error';
            this.setState((prevState) => (this.state.errorCount = prevState.errorCount++));
        } else {
            event.target.className = '';
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("Submit");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="controlledForm">
                <label>
                    Name&nbsp;
                    <input type="text" name="nameValue" value={this.state.nameValue} onChange={this.handleChange} />
                </label><br/><br/>
                <textarea name="descriptionValue" id="" cols="30" rows="10" value={this.state.descriptionValue} onChange={this.handleChange}></textarea>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default ControlledForm;