import React, { Component } from 'react';
import Form from './Form/Form';
import Robots from './Robots/Robots';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      types:[
        {
          robot: 'Flying Robot'
        },
        {
          robot: 'Wheeled Robot'
        },
        {
          robot: 'Walking Robot'
        }
      ],
      colors: [
        {
          color: 'Gold'
        },
        {
          color: 'Bronze'
        },
        {
          color: 'Silver'
        }
      ]
    };
  }


  render() {
    const { types, colors } = this.state;
    return (
      <main className="main-container">
        <Form robots={types} colors={colors} />
        <Robots />
      </main>
    );
  }
}

export default App;
