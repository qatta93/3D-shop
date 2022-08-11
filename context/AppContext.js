// import { createContext, useContext, useMemo, useReducer } from "react";
// import { AppReducer } from "./AppReducer";

// const AppContext = createContext();

// export const initialState = {
//    number: 0,
//  };

// export function AppWrapper({ children }) {
//    const { state, dispatch } = useReducer(AppReducer, initialState);
//    const contextValue = useMemo(() => {
//       return { state, dispatch };
//    }, [state, dispatch]);

//    return (
//    <AppContext.Provider value={contextValue}>
//       {children}
//    </AppContext.Provider>
//    );
// }
// export function useAppContext() {
//    return useContext(AppContext);
// }

import { useState, useEffect, useReducer, createContext } from "react";
import { user } from "./AppReducer";

// initial state
const initialState = {
  user: {},
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(user), initialState); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };