import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      color: null,
      type: null
    };
  }


  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();

    this.props.addRobotToView(this.state);
  }

  handleTypeSelect = event => {
    const { value: type } = event.target;
    this.setState({ type });
  }

  handleColorSelect = event => {
    const { value: color } = event.target;
    this.setState({ color });
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
            onChange={this.handleTypeSelect}
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
            onChange={this.handleColorSelect}
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

Form.propTypes = {
  robots: PropTypes.ArrayOf(PropTypes.Object),
  colors: PropTypes.ArrayOf(PropTypes.Object),
  addRobotToView: PropTypes.func
};