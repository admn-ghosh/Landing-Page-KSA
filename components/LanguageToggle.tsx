import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-md transition-colors text-sm font-medium border border-emerald-700"
      aria-label="Toggle Language"
    >
      <Globe size={16} />
      <span>{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};

export default LanguageToggle;