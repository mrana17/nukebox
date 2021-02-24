import { useState } from "react";

export default function useLocalStorage(key: string, initalValue) {
  const readFromLocalStorage = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initalValue;
    } catch (error) {
      console.error(error);
      return initalValue;
    }
  };

  const writeToLocalStorage = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const [storedValue, setStoredValue] = useState(readFromLocalStorage);

  const setValue = (value) => {
    writeToLocalStorage(value);
    setStoredValue(value);
  };
  return [storedValue, setValue];
}
