import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import CustomList from './components/CustomList';
import Slider from './components/Slider';
import ControlledForm from './components/ControlledForm';
import Equilibrium from './components/Equilibrium';
import DiscIntersection from './components/DiscIntersection';

import Codility from './components/Codility';

//Element
const basicSyntax = <div className="component"><h2>Basic Element</h2></div>;

const user = {
  name: 'Nicolas',
  lastname: 'Ragone'
};

const completeSyntax = (
    <div className="component">
      <h2>Complete syntax for an Element</h2>
      <p>Using a variable {user.name} </p>
    </div>
);

//Component as a function
function FunctionComponent(props) {
  return (
    <div>
      <h2>Component created as a function</h2>
      <p>Props: {props.uno}, {props.dos}</p>
    </div>
  );
}

//Component as a class extending React.Component
class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h2>Component created as a new Class</h2>
        <p>Props: {this.props.uno}, {this.props.dos}</p>
      </div>
    );
  }
}

class App extends Component {

  render() {

    const list = [1,2,3,4,5];
    const images = ['1.jpg', '1.jpg', '1.jpg'];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <Clock />
        </div>
        
        {basicSyntax}

        {completeSyntax}

        <div className="component">
          <FunctionComponent uno="Propiedad uno" dos="Propiedad dos"/>
        </div>

        <div className="component">
          <ClassComponent uno="Propiedad uno" dos="Propiedad dos"/>
        </div>

        <div className="component">
          <h2>List Component</h2>
          <CustomList items={list}></CustomList>
        </div>

        <div className="component">
          <Slider images={images} basePath="./images/"></Slider>
        </div>

        <div className="component">
          <h2>Controlled Component</h2>
          <ControlledForm></ControlledForm>
        </div>

        <div className="component">
          <h2>Equilibrium</h2>
          <Equilibrium></Equilibrium>
        </div>

        <div className="component">
          <h2>Disc Intersection</h2>
          <DiscIntersection discsRatio={[1,5,2,1,4,0]}></DiscIntersection>
          <DiscIntersection discsRatio={[1,3,2]}></DiscIntersection>
        </div>

        <Codility></Codility>

      </div>
    );
  }

}

export default App;
