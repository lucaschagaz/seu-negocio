import { Fragment } from "react";
import { createContext, useReducer } from "react"
import RoutesApp from "./RoutesApp"

import { initialState, reducer } from "./Components/Reducer/useReducer";

export const UserContext = createContext() 

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <Fragment>
        <RoutesApp></RoutesApp>
      </Fragment>
    </UserContext.Provider>
  );
}

export default App;
