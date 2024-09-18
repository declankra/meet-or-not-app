import React, { useState } from 'react';

function StepThree({ onNext }) {
  const [expectedOutcome, setExpectedOutcome] = useState('');

  const handleNext = () => {
    onNext({ expectedOutcome });
  };

  return (
    <div className="step-container">
      <h2>What is the expected outcome?</h2>
      <input
        type="text"
        value={expectedOutcome}
        onChange={(e) => setExpectedOutcome(e.target.value)}
        placeholder="Enter expected outcome"
      />
      <button onClick={handleNext} disabled={!expectedOutcome}>
        Next
      </button>
    </div>
  );
}

export default StepThree;