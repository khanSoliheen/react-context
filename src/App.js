// src/App.js
import React from 'react';
import { UserProvider } from './context/UserContext';
import UserProfile from './components/UserProfile';
import LoginButton from './components/LoginButton';

const App = () => {
  return (
    <UserProvider>
      <div>
        <UserProfile />
        <LoginButton />
      </div>
    </UserProvider>
  );
};

export default App;
