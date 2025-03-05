import React, { useState, useRef, useEffect } from 'react';

function DynamicCounter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000); // Increment every 1 second
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current); // Cleanup on unmount/re-run
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Dynamic Counter</h1>
      <p style={{ fontSize: '2em', margin: '20px 0' }}>{count}</p>
      <button
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'green', color: 'white' }}
        onClick={handleStart}
        disabled={isRunning}
      >
        Start
      </button>
      <button
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'orange', color: 'white' }}
        onClick={handlePause}
        disabled={!isRunning}
      >
        Pause
      </button>
      <button
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'red', color: 'white' }}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default DynamicCounter;