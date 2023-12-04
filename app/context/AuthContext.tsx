import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
