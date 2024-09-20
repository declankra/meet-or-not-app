import React, { useState } from 'react';

function StepThree({ onNext }) {
  const [expectedOutcome, setExpectedOutcome] = useState('');

  const handleNext = () => {
    onNext({ expectedOutcome });
  };

  const handleNotSure = () => {
    onNext({ necessityNo: true, noMeetingReason: 'outcome_unclear' });
  };

  return (
    <div className="step-container">
      <h2>What is the expected outcome?</h2>
      <div className="input-wrapper">
        <input
          type="text"
          value={expectedOutcome}
          onChange={(e) => setExpectedOutcome(e.target.value)}
          placeholder="Enter expected outcome"
        />
        <span className="not-sure" onClick={handleNotSure}>
          I'm not sure
        </span>
      </div>
      <button onClick={handleNext} disabled={!expectedOutcome}>
        Next
      </button>
    </div>
  );
}

export default StepThree;