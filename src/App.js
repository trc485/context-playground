import React from "react";
import { GlobalContextProvider } from "./contexts/global";
import Counter from './containers/Counter'

const App = ({ children }) => {
  return <GlobalContextProvider>
      <Counter />
  </GlobalContextProvider>;
};

export default App;
