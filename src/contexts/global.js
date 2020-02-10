import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    count: 0,
    temperature: 0,
    user: {
      name: "thomas",
      isLoggedIn: true,
      email: "thomas.chappel4@gmail.com"
    }
  };
  const [state, setState] = useLocalStorage("state", initialState);

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const [state, setState] = useContext(GlobalContext);
  const incrementCount = () => {
    setState({
      ...state,
      count: state.count + 1
    });
  };
  const decrementCount = () => {
    setState({
      ...state,
      count: state.count - 1
    });
  };
  const updateUserName = str => {
    setState({
      ...state,
      user: {
          ...state.user,
          name: str
      }
    });
  };
  const actions = {
    incrementCount,
    decrementCount,
    updateUserName
  };
  return [state, actions];
};
