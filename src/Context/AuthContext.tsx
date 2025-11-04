import { createContext, useContext, useState, useEffect } from "react";

// Create Context
const LanguageContext = createContext();

// Custom hook for easy access
export const useLanguage = () => useContext(LanguageContext);

// Provider Component
export const LanguageProvider = ({ children }) => {
  const [isMarathi, setIsMarathi] = useState(() => {
    const langPref = localStorage.getItem("marathi");
    if (langPref === null) {
      localStorage.setItem("marathi", "true"); // Default Marathi
      return true;
    }
    return langPref === "true";
  });

  // Sync to localStorage on change
  useEffect(() => {
    localStorage.setItem("marathi", isMarathi.toString());
  }, [isMarathi]);

  // Toggle function
  const toggleLanguage = () => {
    setIsMarathi((prev) => !prev);
  };

  return (
    <LanguageContext.Provider value={{ isMarathi, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
