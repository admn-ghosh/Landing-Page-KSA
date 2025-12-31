import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-900 mb-12">{t.testimonials.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.testimonials.items.map((item, idx) => (
            <div key={idx} className="bg-stone-50 p-8 rounded-lg relative">
              <Quote className={`text-emerald-200 absolute top-6 ${language === 'ar' ? 'right-6' : 'left-6'}`} size={48} />
              <div className="relative z-10 pt-4">
                <p className="text-stone-700 italic mb-6 text-lg md:text-xl leading-relaxed">"{item.quote}"</p>
                <p className="font-bold text-emerald-900 text-base">{item.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;