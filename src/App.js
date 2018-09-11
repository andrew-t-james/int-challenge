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
      ]
    };
  }


  render() {
    const { robots, colors } = this.state;
    return (
      <main className="main-container">
        <Form robots={robots} colors={colors} />
        <Robots />
      </main>
    );
  }
}

export default App;
