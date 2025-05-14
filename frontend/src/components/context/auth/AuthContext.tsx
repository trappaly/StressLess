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
  verified: boolean;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  deleteAccount: () => Promise<(() => void) | undefined>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [verified, setVerified] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      setVerified(currentUser?.emailVerified ?? false);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    await signInWithEmailAndPassword(firebaseAuth, email, password).finally(
      () => setLoading(false)
    );
  };

  const signUp = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      await updateProfile(user, { displayName });
      await sendEmailVerification(user);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await firebaseAuth.signOut();
  };

  const forgotPassword = async (email: string) => {
    await sendPasswordResetEmail(firebaseAuth, email);
  };

  const deleteAccount = async () => {
    if (!user) {
      return () => {
        console.log('User not found');
      };
    }
    console.log(
      'Deleting user: ' + user.displayName + ' with uid: ' + user.uid
    );
    await user
      .delete()
      .then(() => {
        console.log('User deleted');
        setAllToNullAndFalse();
      })
      .catch((error: Error) => {
        console.error(error);
      });
  };

  const setAllToNullAndFalse = () => {
    setUser(null);
    setLoading(false);
    setVerified(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        displayName: user?.displayName ?? null,
        verified,
        loading,
        signIn,
        signOut,
        signUp,
        forgotPassword,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
