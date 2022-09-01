import { useEffect, useReducer, createContext } from "react";
import { product } from "./AppReducer";

const getLocalStorageProducts = typeof window !== 'undefined' && window.localStorage.getItem("state");
const initialProducts = getLocalStorageProducts === undefined || getLocalStorageProducts === null ? [] : JSON.parse(getLocalStorageProducts);

// initial state
const initialState = initialProducts;

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(product), initialState); // pass more reducers combineReducers(user, blogs, products)
  const value = { state, dispatch };

  useEffect(() => {
  
    //checking if there already is a state in localstorage
    //if yes, update the current state with the stored one

    if (JSON.parse(localStorage.getItem("state"))) { 
       dispatch({ 
          type: "init_stored", 
          value: JSON.parse(localStorage.getItem("state")),
       });
    }
  }, []);

  useEffect(() => {
    if (state !== initialState) {
      //create and/or set a new localstorage variable called "state"
       localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
};


export { Context, Provider };