import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState("No message");

  // Get the message from the root of the backend.
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_BASE_URL || "localhost://3001")
      .then(response => setMessage(response.data))
      .catch(error => "Error");
  });

  return (
    <div className="App">
      <header className="App-header">Welcome to StressLess</header>
      <p>{message}</p>
    </div>
  );
}

export default App;
