import React, { useState } from 'react';

function StepFour({ onNext }) {
  const [priority, setPriority] = useState('');

  const handleNext = () => {
    onNext({ priority });
  };

  return (
    <div className="step-container">
      <h2>What's the priority level?</h2>
      <input
        type="text"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        placeholder="Enter priority"
      />
      <button onClick={handleNext} disabled={!priority}>
        Finish
      </button>
    </div>
  );
}

export default StepFour;