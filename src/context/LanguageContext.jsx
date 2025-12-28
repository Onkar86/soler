import React, { createContext, useContext, useState, useEffect } from 'react';
import { content } from '../data/content';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('mr'); // Default to Marathi

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'mr' ? 'en' : 'mr'));
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = content[language];
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Fallback to key if not found
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
