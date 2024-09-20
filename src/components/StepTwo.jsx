import React, { useState } from 'react';

function StepTwo({ onNext }) {
  const [expectedOutcomeType, setExpectedOutcomeType] = useState('');

  const outcomeTypes = [
    'Action',
    'Consideration with clear next steps',
    'Potential innovative solutions for decision making',
    'Awareness of new information',
    'Awareness of new information with the concerns and questions addressed',
    'I\'m not sure'
  ];

  const handleNext = () => {
    if (expectedOutcomeType === 'I\'m not sure') {
      onNext({ necessityNo: true, noMeetingReason: 'outcome_type_not_sure' });
    } else if (expectedOutcomeType === 'Awareness of new information') {
      onNext({ necessityNo: true, noMeetingReason: 'outcome_type_awareness' });
    } else {
      onNext({ expectedOutcomeType });
    }
  };

  return (
    <div className="step-container">
      <h2>What do you expect the outcome to be?</h2>
      <div className="radio-group">
        {outcomeTypes.map((type) => (
          <div key={type} className="radio-option">
            <input
              type="radio"
              id={type}
              name="expectedOutcomeType"
              value={type}
              checked={expectedOutcomeType === type}
              onChange={(e) => setExpectedOutcomeType(e.target.value)}
            />
            <label htmlFor={type}>{type}</label>
          </div>
        ))}
      </div>
      <button onClick={handleNext} disabled={!expectedOutcomeType}>
        Next
      </button>
    </div>
  );
  
}

export default StepTwo;