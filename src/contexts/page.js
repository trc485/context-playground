import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const PageContext = createContext();

export const PageContextProvider = ({ children }) => {
  const initialState = {
    isCreate: false,
    isEdit: false,
    rioId: "",
    country: "",
    blocks: ""
  };

  const [state, setState] = useLocalStorage("page", initialState);

  return (
    <PageContextProvider.Provider value={[state, setState]}>
      {children}
    </PageContextProvider.Provider>
  );
};

export const usePageContext = () => {
  const [state, setState] = useContext(PageContext);
  const setPageRioId = str => {
    setState({
      ...state,
      rioId: str
    })
  }
  const setPageBlocks = arr => {
    setState({
      ...state,
      blocks: arr
    })
  }
 
  const actions = {
    setPageRioId,
    setPageBlocks
  };
  return [state, actions];
};
