import React from 'react';
import { Link } from 'react-router-dom';

function LearnMorePage() {
  return (
    <div className="learn-more-page">
      <h1>About Meet Or Not</h1>
      <p>
        Meet Or Not helps you determine if a meeting is necessary and assists in creating an effective agenda. We aim to eliminate unnecessary meetings and make required meetings more productive.
      </p>
      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
}

export default LearnMorePage;