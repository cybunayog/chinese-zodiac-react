import React from 'react';

// Import context/files
import { AuthContextProvider } from 'context/AuthContext';
import { Routes } from 'modules/components';
  
export default function App() {

  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}