import React from 'react';
import LanguageToggle from './LanguageToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-emerald-900 py-4 shadow-md relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="/" className="block">
            {/* Using a specific URL for the white logo. */}
            <img 
              src="/images/logo.png" 
              alt="Ghosh Group" 
              width="150"
              height="56"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;