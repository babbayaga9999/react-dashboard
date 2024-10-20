// src/pages/LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login or signup logic here
    // You can send data to your backend API
    console.log("Form submitted:", {
      email: event.target.email.value,
      password: event.target.password.value,
      ...(isLogin ? {} : { username: event.target.username.value }), // Include username only for signup
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <button onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
