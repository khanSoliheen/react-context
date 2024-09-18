import { useContext } from "react";
import { CartData } from "../context/UserContext";
const AnotherTest = () => {
    const { user } = useContext(CartData);
    return (
      <div>
        <h2>Another test component</h2>
        <p>Name: {user.name}</p>
        <p>Status: {user.loggedIn ? 'Logged In' : 'Logged Out'}</p>
      </div>
    );
  };
  
  export default AnotherTest;