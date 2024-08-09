// src/router.tsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';  // Adjust the path according to your project structure
import Auth from './Components/Auth/Auth';  // Example component
import About from './Components/About';  // Example component
import SignIn from './Components/Auth/signIn';
import Profile from './profile/profile';
import Write from './profile/Write/Write';

const router = createBrowserRouter([
  {
    // path: '/',
    // element: <App />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/auth',
        element: <Auth />,
      },
      {
        path: '/login',
        element: <SignIn />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/Write',
        element: <Write />,
      },
    ],
  },
]);

export default router;