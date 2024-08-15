// useAuth.ts
import { useState} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase-config';

const useAuth = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

   onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    

  return currentUser;
};

export default useAuth;
