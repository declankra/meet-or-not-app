import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router-dom';

function NecessityYes({ onRestart }) {
  const [agenda, setAgenda] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showAgenda, setShowAgenda] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const formData = location.state?.formData;
        if (!formData) {
          throw new Error('No form data available');
        }

        const apiData = {
          ...formData,
          priority: formData.priority
        };

        const response = await fetch(`https://us-central1-meet-or-not.cloudfunctions.net/generateAgenda`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(apiData),
        });
        const result = await response.json();
        setAgenda(result.agenda);
      } catch (error) {
        console.error('Error fetching agenda:', error);
        setAgenda('Failed to generate agenda. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgenda();
  }, [location.state]);

  const handleRestart = () => {
    onRestart();
    navigate('/');
  };

  const handleGenerateAgenda = () => {
    setShowAgenda(true);
  };

  return (
    <div className="result-container">
      {!showAgenda ? (
        <>
          <h2>You should Meet!</h2>
          <p>
            Your responses show that you have a clear and objective-oriented understanding of the meeting's purpose and what you expect to achieve. <br></br><br></br>You've also stated that the meeting ranks high on your priority list, so <strong>you should continue with scheduling the meeting.</strong>
          </p>
          <button onClick={handleGenerateAgenda}>Generate Agenda</button>
        </>
      ) : isLoading ? (
        <p>Loading your meeting agenda...</p>
      ) : (
        <>
          <h2>Your Meeting Agenda</h2>
          <div className="agenda-content">
            <ReactMarkdown>{agenda}</ReactMarkdown>
          </div>
          <button onClick={handleRestart}>Start Over</button>
        </>
      )}
    </div>
  );
}

export default NecessityYes;