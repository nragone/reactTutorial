import React, { Component } from 'react';
import './ToggleBtn.css';

class ToggleBtn extends Component {

  constructor(props) {
    super(props);
    this.state = {isOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }));

    if (this.props) this.props.callBack();
  }

  render() {
    return (
      <div className={'btnSlide ' + (this.state.isOn? '-active': '')} onClick={this.handleClick}>
        <label htmlFor="checkbox">{this.state.isOn ? 'ON' : 'OFF'}</label>
        <input id="checkbox" type="checkbox" />
      </div>
    );
  }
}

export default ToggleBtn;