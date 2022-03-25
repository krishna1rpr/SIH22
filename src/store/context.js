import React from "react";

const AppContext = React.createContext({
  token: null,
  isLoggedIn: false,
  currentDist: null,
  currentState: null,
  login: (token) => {},
  logout: () => {},
  setDist: (val) => {},
  setState: (val) => {},
});

export default AppContext;
