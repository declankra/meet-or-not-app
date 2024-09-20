import React, { useState } from 'react';

function PriorityMatrix({ onNext }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (quadrant) => {
    setSelected(quadrant);
  };

  const handleNext = () => {
    if (selected === 'lowUrgencyLowImpact') {
      onNext({ necessityNo: true, noMeetingReason: 'low_priority' });
    } else {
      onNext({ selected });
    }
  };

  return (
    <div className="priority-matrix-container">
      <h2>Select the priority level</h2>
      <div className="matrix">
        <div
          className={`quadrant ${selected === 'lowUrgencyHighImpact' ? 'selected' : ''}`}
          onClick={() => handleSelect('lowUrgencyHighImpact')}
        >
          Low Urgency<br />High Impact
        </div>
        <div
          className={`quadrant ${selected === 'highUrgencyHighImpact' ? 'selected' : ''}`}
          onClick={() => handleSelect('highUrgencyHighImpact')}
        >
          High Urgency<br />High Impact
        </div>
        <div
          className={`quadrant ${selected === 'lowUrgencyLowImpact' ? 'selected' : ''}`}
          onClick={() => handleSelect('lowUrgencyLowImpact')}
        >
          Low Urgency<br />Low Impact
        </div>
        <div
          className={`quadrant ${selected === 'highUrgencyLowImpact' ? 'selected' : ''}`}
          onClick={() => handleSelect('highUrgencyLowImpact')}
        >
          High Urgency<br />Low Impact
        </div>
      </div>
      <button onClick={handleNext} disabled={!selected}>
        Next
      </button>
    </div>
  );
}

export default PriorityMatrix;