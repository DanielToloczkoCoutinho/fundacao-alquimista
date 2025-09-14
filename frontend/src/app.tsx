
import React from 'react';
import HomePage from '../pages';
import { AuthProvider } from '../utils/auth';

function App() {
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
}

export default App;
