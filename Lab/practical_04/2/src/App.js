import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    usernameError: '',
    emailError: '',
    passwordError: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    let hasError = false;

    // Validation
    if (!formData.username.trim()) {
      errors.usernameError = 'Username is required';
      hasError = true;
    }

    if (!formData.email.trim()) {
      errors.emailError = 'Email is required';
      hasError = true;
    }

    if (!formData.password.trim()) {
      errors.passwordError = 'Password is required';
      hasError = true;
    }

    if (hasError) {
      setFormErrors(errors);
    } else {
      alert('Form submitted successfully!');
      setFormData({
        username: '',
        email: '',
        password: '',
      });
      setFormErrors({
        usernameError: '',
        emailError: '',
        passwordError: '',
      });
    }
  };

  return (
    <div className="App">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='username'>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter username"
            />
            {formErrors.usernameError && <span className="error">{formErrors.usernameError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
            {formErrors.emailError && <span className="error">{formErrors.emailError}</span>}
          </div>

          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter password"
            />
            {formErrors.passwordError && <span className="error">{formErrors.passwordError}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
