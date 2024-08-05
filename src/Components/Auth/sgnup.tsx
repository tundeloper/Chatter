import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

export default function FormPropsTextFields() {
  const clickHandler = () => {}
  return (
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
          label="Full name"
          style={{
            width: '90%'
        }}
        />

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
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          style={{
            width: '90%'
        }}
        />
        <div style={{display: 'flex', marginLeft: '5%', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
          <p>Already have an account? </p>
          <Link to='/login'>signIn</Link>
        </div>
        <button onClick={clickHandler} style={{width: '90%', color: 'white', background: 'blue', marginLeft: '5%', marginTop: '.5rem', border: 'none', borderRadius: '2rem', padding: '.5rem', cursor: 'pointer'}}>SignUp</button>
          </Box>
  )
}