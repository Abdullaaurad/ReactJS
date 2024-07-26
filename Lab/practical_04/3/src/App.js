import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
    setMessage('Input value is changing');
  };

  const handleFocus = () => {
    setMessage('Input is focused');
  };

  const handleBlur = () => {
    setMessage('Input has lost focus');
  };

  return (
    <div className="App">
      <div className="form">
      <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Name"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className="message">{message}</div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
