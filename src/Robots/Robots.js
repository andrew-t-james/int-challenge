import React from 'react';

import './Robots.css';

const Robots = props => {
  const renderMyRobots = props.myRobots.map(robot =>
    <div key={robot.id} className="my-robot">
      <p className="my-robot__title">{robot.type}</p>
      <p className="my-robot__color">{robot.color}</p>
      <button className="my-robot__button" onClick={() => props.removeRobot(robot.id)}>Remove</button>
    </div>
  );
  return (
    <section className="robot-container">
      {!props.myRobots.length && <p className="add-robots-message">Add some Robots</p>}
      {renderMyRobots}
    </section>
  );
};

export default Robots;
