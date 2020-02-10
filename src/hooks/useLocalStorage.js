import React, { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const valueInLocalStorage = JSON.parse(localStorage.getItem(key));
  const [propertyValue, setPropertyValue] = useState(valueInLocalStorage || initialValue);

  useEffect(() => {
      if (valueInLocalStorage !== propertyValue) {
        localStorage.setItem(key, JSON.stringify(propertyValue));
      }
  }, [propertyValue]);

  return [propertyValue, setPropertyValue];
};

export default useLocalStorage;
