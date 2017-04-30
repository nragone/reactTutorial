import React, { Component } from 'react';
import ToggleBtn from './ToggleBtn';
import './Clock.css';

//Componente como clase con estado
class Clock extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return (
      <div className="clock">
        <h2>Son las {this.state.date.toLocaleTimeString()}</h2>
        <ToggleBtn callBack={this.pauseClock.bind(this)}/>
      </div>
    );
  }

  pauseClock() {
    if (this.state.clockOn) {
      clearInterval(this.timerID);
      this.setState({clockOn: false});
    } else {
      this.componentDidMount();
    }
  }

  //Lifecycle hooks

  //Corre despues de que el componente fue renderizado/montado en el DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.setState({clockOn: true});
  }


  //Corre cuando el componente va a ser removido/desmontado
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {

    /*
      No modificar la variable estado directamente, siempre usar setState()
      Las actualizaciones del estado pueden ser asincronicas, en caso de necesitar
      actualizar el estado con un valor dependiente del estado anterior se debe usar
      setState((prevState, props) => ({ counter: prevState.counter + props.incremente }));
    */
    this.setState({
      date: new Date()
    });
  }

}

export default Clock;