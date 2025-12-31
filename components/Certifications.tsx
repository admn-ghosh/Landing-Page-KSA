import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Certifications: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-emerald-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.certifications.title}</h2>
        <p className="mb-8 max-w-2xl mx-auto text-emerald-100 text-base md:text-lg leading-relaxed">
          {t.certifications.desc}
        </p>
        
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {t.certifications.items.map((cert, index) => (
            <li key={index} className="flex items-center bg-emerald-800 px-4 py-2 rounded-full">
              <CheckCircle2 size={20} className="text-amber-400 rtl:ml-2 ltr:mr-2" />
              <span className="font-medium text-base mx-2">{cert}</span>
            </li>
          ))}
        </ul>

        <p className="text-base text-emerald-200">
          {t.certifications.footer}
        </p>
      </div>
    </section>
  );
};

export default Certifications;