import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const URL = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:3001';

function App() {
  const [message, setMessage] = useState('No message');

  function updateMessage() {
    axios
      .get(URL)
      .then((response) => setMessage(response.data))
      .catch((error) => 'Error');
  }

  function incrementBackendCounter() {
    axios.post(URL);
    updateMessage();
  }

  // Get the message from the root of the backend.
  useEffect(updateMessage);

  return (
    <div className="App">
      <header className="App-header">Welcome to StressLess</header>
      <p>
        {message} <button onClick={incrementBackendCounter}>Increment</button>
      </p>
    </div>
  );
}

export default App;
