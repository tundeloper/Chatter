// src/Home.tsx
import React from 'react';
import FormPropsTextFields from './sgnup';

const Auth: React.FC = () => {
  return <div style={{display: 'flex', justifyContent:'space-between'}}>
    <div style={{background: 'blue', width:"60%", height: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{fontFamily: "Playwrite HU", fontSize: '4rem'}}>Chatter</h1>
    </div>
    <div style={{width:'40%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <h1 style={{textAlign: 'center', color: 'blue' }}>Create account</h1>

    

    <FormPropsTextFields />
    </div>
  </div>;
};

export default Auth;