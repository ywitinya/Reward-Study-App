import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            Home
          </li>
          <li>
            {/* <Link to="/Goals">Dashboard</Link> */}
            Dashboard
          </li>
          <li>
            {/* <Link to="/Rewards">Rewards</Link> */}
            Rewards
          </li>
          <li>
            {/* <Link to="/Community">Goals</Link> */}
            Community
          </li>
        </ul>
      </nav>
    </header>
  );
}

