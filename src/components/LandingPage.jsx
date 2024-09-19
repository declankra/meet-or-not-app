import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Meet Or Not</h1>
      <p>Determine if your meeting is necessary and make it effective.</p>
      <button className="start-button">
        <Link to="/steps">Start</Link>
      </button>
      <button className="learn-more-button">
        <Link to="/learn-more">Learn More</Link>
      </button>
    </div>
  );
}

export default LandingPage;