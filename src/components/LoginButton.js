// src/components/LoginButton.js
import React, { useContext } from 'react';
import { CartData } from '../context/UserContext';
import AnotherTest from './anotherTest';

const LoginButton = (props) => {
  const { user, logInUser, logOutUser } = useContext(CartData);

  return (
    <div>
      {user.loggedIn ? (
        <button onClick={logOutUser}>Log Out</button>
      ) : (
        <button onClick={() => logInUser('Soliheen')}>Log In</button>
      )}
        <AnotherTest />
    </div>
  );
};

export default LoginButton;
