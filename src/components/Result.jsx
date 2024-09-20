import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation, useNavigate } from 'react-router-dom';

function Result() {
  const [agenda, setAgenda] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAgenda = async () => {
      try {
        const formData = location.state?.formData;
        if (!formData) {
          throw new Error('No form data available');
        }

        const response = await fetch(`https://us-central1-meet-or-not.cloudfunctions.net/generateAgenda`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
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
    navigate('/');
  };

  return (
    <div className="result-container">
      {isLoading ? (
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

export default Result;