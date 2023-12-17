'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import {
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';


import { auth } from '@/firebase/config';
import signUp from '@/firebase/auth/signup';
import signIn from '@/firebase/auth/signIn';


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createUser = signUp();
  const newUser = signIn()

  const logout = () => {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
  

  return (
    <AuthContext.Provider value={{ createUser, user, logout, newUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};