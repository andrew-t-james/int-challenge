import React, { Component } from 'react';

import './Form.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      robot: {}
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  handleSelectInputChange = event => {
    const { value, name } = event.target;
    console.log(value, name);
  }

  render() {
    const { robots, colors } = this.props;

    return (
      <section className="form-container">
        <form
          className="form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="robots">Robot Type</label>
          <select
            name="robots"
            id="robots"
            onChange={this.handleSelectInputChange}
          >
            <option value="">Select..</option>
            {robots.map(robot =>
              <option
                key={robot.value}
                value={robot.value}
              >
                {robot.value}
              </option>
            )}
          </select>
          <label htmlFor="colors">Robot Color</label>
          <select
            name="colors"
            id="colors"
            onChange={this.handleSelectInputChange}
          >
            <option value="">Select...</option>
            {colors.map(color =>
              <option
                key={color.value}
                value={color.value}
              >
                {color.value}
              </option>
            )}
          </select>
          <input type="submit" value="Build My Bot"/>
        </form>
      </section>
    );
  }
}
