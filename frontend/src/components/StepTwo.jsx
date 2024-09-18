import React, { useState } from 'react';

function StepTwo({ onNext }) {
  const [expectedOutcomeType, setExpectedOutcomeType] = useState('');

  const handleNext = () => {
    onNext({ expectedOutcomeType });
  };

  return (
    <div className="step-container">
      <h2>What is the expected outcome type?</h2>
      <input
        type="text"
        value={expectedOutcomeType}
        onChange={(e) => setExpectedOutcomeType(e.target.value)}
        placeholder="Enter outcome type"
      />
      <button onClick={handleNext} disabled={!expectedOutcomeType}>
        Next
      </button>
    </div>
  );
}

export default StepTwo;