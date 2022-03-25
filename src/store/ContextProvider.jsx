import { useReducer } from "react";
import AppContext from "./context";
import {
  CHANGE_DIST,
  CHANGE_STATE,
  LOGIN,
  LOGOUT,
  GET_LOCATION,
} from "./actions";

const initState = {
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  currentDist: null,
  currentState: null,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_DIST:
      return { ...state, currentState: null, currentDist: action.payload };

    case CHANGE_STATE:
      return { ...state, currentState: action.payload, currentDist: null };

    case LOGIN:
      localStorage.setItem("token", action.payload);
      return { ...state, token: action.payload, isLoggedIn: true };

    case LOGOUT:
      localStorage.removeItem("token", action.payload);
      return { ...state, token: null, isLoggedIn: false };

    // yet to implement
    case GET_LOCATION:
      return { ...state };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(appReducer, initState);

  const login = (token) => {
    dispatch({ type: LOGIN, payload: token });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  const setDist = (val) => {
    dispatch({ type: CHANGE_DIST, payload: val });
  };

  const setState = (val) => {
    dispatch({ type: CHANGE_STATE, payload: val });
  };

  const ctx = {
    isLoggedIn: appState.isLoggedIn,
    currentDist: appState.currentDist,
    currentState: appState.currentState,
    login,
    logout,
    setDist,
    setState,
  };

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>;
};

export default ContextProvider;
