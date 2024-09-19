import React, { useEffect, useState } from 'react';

function Result({ data, onRestart }) {
  const [agenda, setAgenda] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch agenda from backend
    const fetchAgenda = async () => {
      try {
        const response = await fetch(`https://us-central1-meet-or-not.cloudfunctions.net/generateAgenda`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        setAgenda(result.agenda);
      } catch (error) {
        console.error('Error fetching agenda:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAgenda();
  }, [data]);

  return (
    <div className="result-container">
      {isLoading ? (
        <p>Loading your meeting agenda...</p>
      ) : (
        <>
          <h2>Your Meeting Agenda</h2>
          <p>{agenda}</p>
          <button onClick={onRestart}>Start Over</button>
        </>
      )}
    </div>
  );
}

export default Result;