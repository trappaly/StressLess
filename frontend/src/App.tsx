import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState("No message");

  function updateMessage() {
    axios.get(process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost://3001")
      .then(response => setMessage(response.data))
      .catch(error => "Error");
  }

  function incrementBackendCounter() {
    axios.post(process.env.REACT_APP_BACKEND_BASE_URL || "http://localhost://3001");
    updateMessage();
  }  

  // Get the message from the root of the backend.
  useEffect(updateMessage);

  return (
    <div className="App">
      <header className="App-header">Welcome to StressLess</header>
      <p>{message} <button onClick={incrementBackendCounter}>Increment</button></p>
    </div>
  );
}

export default App;
