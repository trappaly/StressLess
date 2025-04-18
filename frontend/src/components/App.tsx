'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { backendBaseUrl } from '@/lib/utils';

export default function LandingPage() {
  const [message, setMessage] = useState('Backend not available');

  // Tracer code for updating backend message.
  function updateMessage() {
    axios
      .get(backendBaseUrl)
      .then((response) => setMessage('User count: ' + response.data.length))
      .catch((error) => {
        console.log(error);
        setMessage('Backend not available');
      });
  }

  // Tracer code to test requesting backend to manipulate databse.
  function incrementBackendCounter() {
    axios.post(backendBaseUrl).then((response) => {
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
