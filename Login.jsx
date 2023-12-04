
import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import AuthContext from './AuthContext';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { handleLogin, isLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {

      handleLogin();
    } else {

      handleLogin();
    }
    history.replace('/accueil');
  };

  if (isLoggedIn) {
    history.replace('/accueil');
  }

  return (
    <div className="login-signup-container">
      <h1>{isSignUp ? 'Sign Up' : 'Login'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="submit-button">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p>
        {isSignUp ? 'Already have an account? ' : 'Don\'t have an account? '}
        <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Login;
