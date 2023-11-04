import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit">Enter</button>
      </form>
      <p>
        or <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
