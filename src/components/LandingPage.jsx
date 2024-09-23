import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1 className="main-title">Meet Or Not</h1>
      <p><i>the greatest meeting there ever was... or wasn't</i></p>
      
      <div className="center-container">
        <button className="start-button">
          <Link to="/steps">Start</Link>
        </button>
      </div>

      <div className="info-boxes">
        <div className="info-box">
          <h3>what is this?</h3>
          <ul>
            <li>a tool to ensure shitty meetings don't happen</li>
            <li>and your next meeting is the best one yet</li>
            <li>using generative AI</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>what does it do for me?</h3>
          <ul>
            <li>saves you time and energy</li>
            <li>improves your collaboration</li>
            <li>increases meeting efficiency</li>
          </ul>
        </div>
        <div className="info-box">
          <h3>how does it work?</h3>
          <ul>
            <li>(1) you answer 4 short questions</li>
            <li>(2) it'll determine if your meeting is necessary </li>
            <li>(3) and generates a personalized meeting agenda to ensure effectiveness</li>
          </ul>
        </div>
      </div>

      <div className="learn-more-container">
        <button className="learn-more-button">
          <Link to="/learn-more">Learn More</Link>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;