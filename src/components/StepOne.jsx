import React, { useState } from 'react';

function StepOne({ onNext }) {
  const [purpose, setPurpose] = useState('');

  const handleNext = () => {
    onNext({ purpose });
  };

  const handleNotSure = () => {
    onNext({ necessityNo: true, noMeetingReason: 'purpose' });
  };

  return (
    <div className="step-container">
      <h2>What's the meeting's purpose?</h2>
      <div className="input-wrapper">
        <input
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          placeholder="Enter purpose"
        />
        <span className="not-sure" onClick={handleNotSure}>
          I'm not sure
        </span>
      </div>
      <button onClick={handleNext} disabled={!purpose}>
        Next
      </button>
    </div>
  );
}

export default StepOne;