import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TopStrip: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-emerald-950 text-white text-sm py-2 px-4 text-center md:text-start font-medium">
      <div className="container mx-auto">
        {t.topStrip}
      </div>
    </div>
  );
};

export default TopStrip;