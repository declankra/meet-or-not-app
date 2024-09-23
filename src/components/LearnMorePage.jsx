import React from 'react';
import { Link } from 'react-router-dom';

function LearnMorePage() {
  return (
    <div className="learn-more-page">
    <h1>About This Project</h1>
    
    <p> This is a fun personal project to: </p>
      <ol>
        <li>use generative AI in a web app</li>
        <li>get more practice building full-stack web apps</li>
        <li>perhaps offer some utility for people frustrated with unproductive meetings</li>
      </ol>

    <p>
      hope you enjoy using this. it was fun to make! i’ll probably update this page sometime 
      in the future with more resources on how this project came to be.
    </p>

    <p>
      for now, I’d appreciate it if you left feedback on the product 
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHJbr616yjhPKzp88Kty7hnTVey2ucIcdF8OYE1euaTG3n5g/viewform" target="_blank" rel="noopener noreferrer"> here</a>.
    </p>

    <div className="credits">
      <p>Credits: @dkBuilds</p>
      <p>
        <a href="https://www.declankramper.me" target="_blank" rel="noopener noreferrer">www.declankramper.me</a>
      </p>
    </div>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

export default LearnMorePage;