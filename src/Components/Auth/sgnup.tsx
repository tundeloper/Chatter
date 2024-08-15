import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import {onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';
import registerUser from '../hooks/registerUser';

const defaultValue = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const FormPropsTextFields = () => {
  const [userData, setuserData] = React.useState<{name: string, email: string, password: string, confirmPassword: string}>(defaultValue)
  const [user, setUser] = React.useState<any>()

  // persist User
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  
   
  // submit form event
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    console.log(userData) 
    registerUser(userData.email, userData.password)
    console.log(user)
  }
  
  return(  <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch', marginLeft: '5%'},
      }}
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <h1>{user?.email}</h1>
        <TextField
          required
          id="outlined-required"
          label="Full name"
          value={userData.name}
          onChange={(e) => {
            setuserData({...userData, name: e.target.value})
          }}
          style={{
            width: '90%'
        }}
        />

        <TextField
          required
          id="outlined-required"
          label="Email"
          type='email'
          value={userData.email}
          onChange={(e) => {
            setuserData({...userData, email: e.target.value})
          }}
          style={{
            width: '90%'
        }}
        />
        
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={userData.password}
          onChange={(e) => {
            setuserData({...userData, password: e.target.value})
          }}
          style={{
            width: '90%'
        }}
        />
        <TextField
          required
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
          value={userData.confirmPassword}
          onChange={(e) => {
            setuserData({...userData, confirmPassword: e.target.value})
          }}
          style={{
            width: '90%'
        }}
        />
        <div style={{display: 'flex', marginLeft: '5%', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
          <p>Already have an account? </p>
          <Link to='/login'style={{textDecoration: 'none  '}} >Sign In</Link>
        </div>
        <button style={{width: '90%', color: 'white', background: 'blue', marginLeft: '5%', marginTop: '.5rem', border: 'none', borderRadius: '2rem', padding: '.5rem', cursor: 'pointer'}} type='submit'>SignUp</button>
          </Box>)
}

export default FormPropsTextFields