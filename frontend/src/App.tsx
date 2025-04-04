'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const URL = process.env.REACT_APP_BACKEND_BASE_URL || 'http://localhost:3001';

function App() {
  const [message, setMessage] = useState('Backend not available');

  // Tracer code for updating backend message.
  function updateMessage() {
    axios
      .get(URL)
      .then((response) => setMessage('User count: ' + response.data.length))
      .catch((error) => {
        console.log(error);
        setMessage('Backend not available');
      });
  }

  // Tracer code to test requesting backend to manipulate databse.
  function incrementBackendCounter() {
    axios.post(URL).then((response) => {
      console.log(response);
      updateMessage();
    });
  }

  // Get the message from the root of the backend.
  useEffect(updateMessage);

  return (
    <div className="App">
      <header className="App-header">Welcome to StressLess</header>
      <p>
        {message}{' '}
        <button onClick={incrementBackendCounter}>Create new user</button>
      </p>
    </div>
  );
}

export default App;
