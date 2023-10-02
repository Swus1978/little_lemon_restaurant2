// utils.js
export const checkError = (checkbox) => {
    const checkboxRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return !checkboxRegex.test(checkbox);
  };
  