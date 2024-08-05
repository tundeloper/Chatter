// src/Home.tsx
import React from 'react';
import FormPropsTextFields from './sgnup';

const Auth: React.FC = () => {
  return <div style={{display: 'flex', justifyContent:'space-between'}}>
    <div style={{background: 'red', width:"60%", height: '100vh'}}>gkdsjjbdasj</div>
    <div style={{width:'40%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <p style={{textAlign: 'center'}}>Chatter</p>
    <FormPropsTextFields />
    </div>
  </div>;
};

export default Auth;