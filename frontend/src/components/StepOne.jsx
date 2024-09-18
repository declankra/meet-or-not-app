import React, { useState } from 'react';

function StepOne({ onNext }) {
  const [purpose, setPurpose] = useState('');

  const handleNext = () => {
    onNext({ purpose });
  };

  return (
    <div className="step-container">
      <h2>What's the purpose of the meeting?</h2>
      <input
        type="text"
        value={purpose}
        onChange={(e) => setPurpose(e.target.value)}
        placeholder="Enter purpose"
      />
      <button onClick={handleNext} disabled={!purpose}>
        Next
      </button>
    </div>
  );
}

export default StepOne;