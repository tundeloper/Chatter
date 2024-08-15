import React from 'react';
import {Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div style={{background: 'blue', marginTop: '-.1rem', height: '100vh', display: 'flex', justifyContent: 'center',alignItems: 'center', flexDirection: 'column'}}>
      <h1 style={{fontFamily: "Playwrite HU", fontSize: '4rem', color: 'white'}}>Chatter</h1>
      <Link to='/auth' style={{color: 'white'}}>get Started with chatter</Link>
    </div>
  );
};

export default App;