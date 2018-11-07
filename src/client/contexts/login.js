import React from "react";
import _ from 'lodash';
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

  console.log({authToken})

  if (_.isString(authToken) && authToken != 'undefined' && authToken != 'null') {
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
