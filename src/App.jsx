import React from 'react';
import { useLanguage } from './context/LanguageContext';
import { content } from './data/content';
import Hero from './components/Hero';
import ContactButtons from './components/ContactButtons';
import Services from './components/Services';
import Downloads from './components/Downloads';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

function App() {
  const { language, toggleLanguage } = useLanguage();
  const c = content[language];

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'mr' ? 'font-marathi' : 'font-sans'}`}>
      {/* Sticky Header/Language Toggle */}
      <div className="fixed top-0 right-0 p-4 z-50">
        <button
          onClick={toggleLanguage}
          className="bg-white/90 backdrop-blur shadow-lg px-4 py-2 rounded-full font-bold text-solar-green border border-solar-green/20"
        >
          {language === 'en' ? 'मराठी' : 'English'}
        </button>
      </div>

      <main className="max-w-md mx-auto bg-white min-h-screen shadow-xl overflow-hidden pb-20">
        <Hero />
        <ContactButtons />
        <Services />
        <Downloads />
        <Footer />
        <AIChatBot />
      </main>
    </div>
  );
}

export default App;
