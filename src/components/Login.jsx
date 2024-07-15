// src/components/Login.js
import React from 'react';
import { auth, googleProvider } from '../firebaseConfig';

const Login = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <p>Welcome to login page</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
