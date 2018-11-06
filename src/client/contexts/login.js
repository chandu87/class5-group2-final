import React from "react";
import jwt from "jsonwebtoken";

export const LoginContext = React.createContext({
  isLoggedIn: false,
  token: null,
  email: null
});

export const loadContextValue = () => {
  let contextValue = {
    isLoggedIn: false,
    token: null,
    email: null
  };

  const authToken = localStorage.getItem("authToken");

  if (authToken) {
    const decodedAuthToken = jwt.decode(authToken);

    contextValue = {
      isLoggedIn: true,
      token: authToken,
      email: decodedAuthToken.email
    };
  }

  return contextValue;
};

export default LoginContext;
