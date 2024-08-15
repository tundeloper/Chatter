// src/Home.tsx
import React, { useEffect, useState } from 'react';
import FormPropsTextFields from './sgnup';
import { Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../firebase-config';
import signIn from '../hooks/signIn';
// 
const defaultValue = {
  email: '',
  password: '',
}

const SignIn: React.FC = () => {
  const [userData, setuserData] = React.useState<{email: string, password: string}>(defaultValue)
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState<boolean>(true);


  // persist
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log('User is logged in:', currentUser);
      } else {
        setUser(null);
        console.log('No user is logged in.');
      }
      setLoading(false);
    }, (error) => {
      console.error('Error observing auth state:', error);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);
  
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log(userData)
    signIn(userData.email, userData.password)
    console.log(user)
  }

  return <div style={{display: 'flex', justifyContent:'space-between'}}>
    <div style={{background: 'blue', width:"60%", height: '100vh', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{fontFamily: "Playwrite HU", fontSize: '4rem'}}>Chatter</h1>
    </div>
    <div style={{width:'40%', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
    <h1 style={{textAlign: 'center', color: 'blue'}}>Sign in</h1>
    <h1 style={{textAlign: 'center', color: 'blue'}}>{user?.email}</h1>
    <Box
      component="form"
      onSubmit={handleSubmit}
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
          onChange={e => setuserData({...userData, email: e.target.value})}
          style={{
            width: '90%'
        }}
        />
        
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={e => setuserData({...userData, password: e.target.value})}
          style={{
            width: '90%'
        }}
        />
        <div style={{display: 'flex', marginLeft: '5%', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
          <p>Don't have an account ? </p>
          <Link to='/Auth' style={{textDecoration: 'none  '}}>Sign Up</Link>
        </div>
        <button style={{width: '90%', color: 'white', background: 'blue', marginLeft: '5%', marginTop: '.5rem', border: 'none', borderRadius: '2rem', padding: '.5rem', cursor: 'pointer'}} type='submit'>SignUp</button>
          </Box>
    </div>
  </div>;
};

export default SignIn;