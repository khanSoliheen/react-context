import React, { createContext, useState } from 'react';
export const CartData = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Soliheen', loggedIn: false });

  const logInUser = (name) => {
    setUser({ name, loggedIn: true });
  };

  const logOutUser = () => {
    setUser({ name: '', loggedIn: false });
  };

  return (
    <CartData.Provider value={{ user, logInUser, logOutUser, testing: false }}>
      {children}
    </CartData.Provider>
  );
};