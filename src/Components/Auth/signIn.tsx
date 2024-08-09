// src/Home.tsx
import React from 'react';
import FormPropsTextFields from './sgnup';
import { Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return <div style={{display: 'flex', justifyContent:'space-between'}}>
    <div style={{background: 'blue', width:"60%", height: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{fontFamily: "Playwrite HU", fontSize: '4rem'}}>Chatter</h1>
    </div>
    <div style={{width:'40%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <h1 style={{textAlign: 'center', color: 'blue'}}>Sign in</h1>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', marginLeft: '5%'},
      }}
      autoComplete="off"
    >
        <TextField
          required
          id="outlined-required"
          label="Email"
          type='email'
          style={{
            width: '90%'
        }}
        />
        
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          style={{
            width: '90%'
        }}
        />
        <div style={{display: 'flex', marginLeft: '5%', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
          <p>Don't have an account ? </p>
          <Link to='/Auth' style={{textDecoration: 'none  '}}>Sign Up</Link>
        </div>
        <button style={{width: '90%', color: 'white', background: 'blue', marginLeft: '5%', marginTop: '.5rem', border: 'none', borderRadius: '2rem', padding: '.5rem', cursor: 'pointer'}}>SignUp</button>
          </Box>
    </div>
  </div>;
};

export default SignIn;