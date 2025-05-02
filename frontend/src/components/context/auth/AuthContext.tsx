'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { firebaseAuth } from '@/lib/firebase';
import {
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth';

type AuthContextType = {
  user: User | null;
  displayName: string | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Define the type for children prop
interface AuthProviderProps {
  children: React.ReactNode; // This ensures the AuthProvider can accept any valid React child
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [displayName, setDisplayName] = useState<string | null>(null);

  // Listen for authentication state changes

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      updateProfile(user, {
        displayName: displayName,
      }).then(() => {
        console.log('Display name updated: ', user.displayName);
      });
    }
  }, [displayName, user]);

  // SignIn function
  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  // SignUp function
  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(async () => {
        if (user)
          await sendEmailVerification(user).then(() =>
            console.log('Email verification sent.')
          );
      })
      .finally(() => {
        setLoading(false);
      });
    setDisplayName(displayName);
  };

  // SignOut function
  const signOut = async () => {
    await firebaseAuth.signOut();
  };

  // ForgotPassword function
  const forgotPassword = async (email: string) => {
    await sendPasswordResetEmail(firebaseAuth, email);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        displayName,
        loading,
        signIn,
        signOut,
        signUp,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
