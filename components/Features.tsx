import React from 'react';
import { Factory, ShieldCheck, Sun, HardHat, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
  const { t } = useLanguage();
  const icons = [Factory, ShieldCheck, Sun, HardHat, FileText];

  return (
    <section className="py-12 bg-stone-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-950 mb-6">{t.features.title}</h2>
        <p className="text-center text-base md:text-lg text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          {t.features.intro}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div key={idx} className="bg-white p-6 rounded shadow-sm border border-stone-200">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mb-4">
                   <Icon size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">{item.title}</h3>
                <p className="text-base text-stone-600 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;