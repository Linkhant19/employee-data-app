// components/login.tsx

import React from 'react';
import NextAuth from 'next-auth';
import { GoogleProvider } from 'next-auth/providers/google';

//The whole code behind our google login api using google projects and cloud 
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <GoogleOAuthProvider clientId="896148448279-2vjdp4e8eofvavf3lr7ej6gk8cokn3mc.apps.googleusercontent.com">
      {children}
    </GoogleProvider>
  );
};

export const GoogleAuthButton: React.FC = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};