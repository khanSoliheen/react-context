import React, { useContext } from 'react';
import { CartData } from '../context/UserContext';

const UserProfile = () => {
  const { user } = useContext(CartData);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Status: {user.loggedIn ? 'Logged In' : 'Logged Out'}</p>
    </div>
  );
};

export default UserProfile;
