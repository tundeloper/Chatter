import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

const registerUser = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User registered successfully:', user);
      // Perform additional actions after successful registration, such as saving user data to a database
    } catch (error) {
      if (error instanceof FirebaseError) {
        // Handle Firebase-specific errors
        switch (error.code) {
          case 'auth/email-already-in-use':
            console.error('The email address is already in use by another account.');
            break;
          case 'auth/invalid-email':
            console.error('The email address is not valid.');
            break;
          case 'auth/operation-not-allowed':
            console.error('Email/password accounts are not enabled.');
            break;
          case 'auth/weak-password':
            console.error('The password is too weak.');
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

  export default registerUser