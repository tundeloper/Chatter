import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Signed in successfully:', user);
      // Perform additional actions on successful sign-in if needed
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Handle Firebase-specific errors
        switch (error.code) {
          case 'auth/invalid-email':
            console.error('Invalid email address.');
            break;
          case 'auth/user-disabled':
            console.error('User account is disabled.');
            break;
          case 'auth/user-not-found':
            console.error('No user found with this email.');
            break;
          case 'auth/wrong-password':
            console.error('Incorrect password.');
            break;
          default:
            console.error('An unknown error occurred:', error.message);
            break;
        }
      } else {
        // Handle other types of errors
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  export default signIn