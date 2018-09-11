import React, { Component } from 'react';

import './From.css';

export default class Form extends Component {
  render() {
    const { robots, colors } = this.props;

    return (
      <section className="form-container">
        <form>
          <label htmlFor="robots">Robot Type</label>
          <select name="robots" id="robots">
            <option value="">Select..</option>
            {robots.map(robot =>
              <option
                key={robot.robot}
                value={robot.robot}
              >
                {robot.robot}
              </option>
            )}
          </select>
          <label htmlFor="colors">Robot Color</label>
          <select name="colors" id="colors">
            <option value="">Select...</option>
            {colors.map(color =>
              <option
                key={color.color}
                value={color.color}
              >
                {color.color}
              </option>
            )}
          </select>
          <input type="submit" value="Build My Bot"/>
        </form>
      </section>
    );
  }
}
