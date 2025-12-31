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
              src="https://ghoshgroups.com/wp-content/uploads/2023/11/Ghosh-Group-Logo-White.png" 
              alt="Ghosh Group" 
              className="h-10 md:h-14 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.parentElement) {
                    const fallback = document.createElement('span');
                    fallback.textContent = 'Ghosh Group';
                    fallback.className = 'text-2xl font-bold text-white tracking-tight';
                    e.currentTarget.parentElement.appendChild(fallback);
                }
              }}
            />
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;