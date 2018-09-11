import React, { Component } from 'react';
import Form from './Form/Form';
import Robots from './Robots/Robots';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots:[
        { value: 'Flying Robot' },
        { value: 'Wheeled Robot' },
        { value: 'Walking Robot'}
      ],
      colors: [
        { value: 'Gold' },
        { value: 'Bronze' },
        { value: 'Silver' }
      ],
      myRobots: []
    };
  }

  addRobotToView = values => {
    const robot = values;
    this.setState({
      myRobots: [
        ...this.state.myRobots,
        {
          ...robot,
          id: Date.now()
        }
      ]
    });
  }

  removeRobot = id => {
    const myRobots = this.state.myRobots.filter(robot => robot.id !== id);
    this.setState({
      myRobots
    });
  }

  render() {
    const { robots, colors, myRobots } = this.state;
    return (
      <main className="main-container">
        <Form
          robots={robots}
          colors={colors}
          addRobotToView={this.addRobotToView}
        />
        <Robots
          myRobots={myRobots}
          removeRobot={this.removeRobot}
        />
      </main>
    );
  }
}

export default App;
