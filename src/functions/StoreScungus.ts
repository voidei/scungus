import { useState } from "react";

function storeScungusLocally(key: string, initialValue: Number) {
  // State to store value
  // pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // get from local storage by key
      const item = window.localStorage.getItem(key);
      // parse stored json or if none return init val
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // if error, also return init value
      console.log(error)
      return initialValue;
    }
  });


  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: Number) => {
    try {
      // allow value to be a function so we have the same api as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // save state
      setStoredValue(valueToStore);
      // save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // a more advanced implementation would handle the error
      console.log(error);
    }
  };
  return [storedValue, setValue]
}

function loadScungusLocally(key: string) {
  const [storedValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : console.log(`error?`)
    } catch (error) {
      console.log(error)
    }
  })
}


function storeScungusSession(key: string, value: Number) {
  // State to store value
  // pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // get from local storage by key
      const item = window.sessionStorage.getItem(key);
      // parse stored json or if none return init val
      return item ? JSON.parse(item) : value;
    } catch (error) {
      // if error, also return init value
      console.log(error)
      return value;
    }
  });


  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: Number) => {
    try {
      // allow value to be a function so we have the same api as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // save state
      setStoredValue(valueToStore);
      // save to local storage
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // a more advanced implementation would handle the error
      console.log(error);
    }
  };
  return [storedValue, setValue]
};

export { storeScungusLocally, storeScungusSession };

