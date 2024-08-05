import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App: React.FC = ({}) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Auth">SignUp</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;