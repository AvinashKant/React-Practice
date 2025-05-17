import React, { useState, useEffect } from 'react';
import { toast } from "../components/Toast/ToastProvider";

function RealTimeUpdates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5000/api/events'); // Replace with your server URL

    eventSource.onopen = () => {
      console.log('SSE connection opened.');
    };

    eventSource.onmessage = (event) => {
      try {
        const parsedData = JSON.parse(event.data);
        setUpdates((prevUpdates) => [...prevUpdates, parsedData]);
        toast.success(parsedData.message)
      } catch (error) {
        console.error('Error parsing SSE data:', error);
        setUpdates((prevUpdates) => [...prevUpdates, { message: `Raw data: ${event.data}` }]);
      }
    };

    eventSource.onerror = (error) => {
      console.error('SSE error occurred:', error);
      if (eventSource.readyState === EventSource.CLOSED) {
        console.log('SSE connection closed. Attempting to reconnect...');
        // Implement reconnection logic here if needed
      }
    };

    // Clean up the EventSource connection when the component unmounts
    return () => {
      eventSource.close();
      console.log('SSE connection closed.');
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount

  return (
    <div>
      <h1>Real-Time Updates</h1>
      <ul>
        {updates.map((update, index) => (
          <li key={index}>{update.message} ({new Date(update.timestamp).toLocaleTimeString()})</li>
        ))}
      </ul>
    </div>
  );
}

export default RealTimeUpdates;