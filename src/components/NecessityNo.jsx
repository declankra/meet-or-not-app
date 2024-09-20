import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function NecessityNo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { noMeetingReason } = location.state || {};

  const explanations = {
    purpose: "No purpose: you need to have a clear, objective-orientated purpose that signifies your understanding of why the meeting needs to take place.",
    outcome_type_not_sure: "No clear outcome: you should have a clear understanding of your purpose and what you intend to get out of the meeting",
    outcome_type_awareness: "Unless the information meeting requires live interaction (therefore not one way interaction), cancel it. consider alternative methods of distributing info: memo, podcast, or vlog. If cancelling it bothers you so much, sleep on it, and then if you’re still bothered, keep it to a max of 30 min",
    outcome_unclear: "No defined outcome: you should have a clear understanding of your purpose and what you intend to get out of the meetin. It's okay if the actual outcome deviates from this, but initial direction is needed.",
    priority: "Given the priority level you've indicated, a formal meeting may not be necessary at this time. Consider addressing this through less time-intensive methods and tackling higher priority items instead.",
    default: "Based on the information provided, it appears that a meeting may not be necessary at this time. Consider alternative approaches to address your needs more efficiently."
  };

  const explanation = explanations[noMeetingReason] || explanations.default;

  const handleStartOver = () => {
    navigate('/');
  };

  return (
    <div className="necessity-no-container">
      <h2>Meeting Not Necessary</h2>
      <div className="explanation-content">
        <p><strong>Reason = </strong>{explanation}</p>
      </div>
      <h3>Next Steps [generic right now, soon to be dynamic]</h3>
      <ul>
        <li>Consider alternative forms of communication (email, chat, etc.)</li>
        <li>Document your decision and share with relevant team members</li>
        <li>Set a reminder to follow up on the topic if needed</li>
      </ul>
      <button onClick={handleStartOver}>Start Over</button>
    </div>
  );
}

export default NecessityNo;