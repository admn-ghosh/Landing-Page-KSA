import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 bg-stone-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-emerald-900 mb-8">{t.faq.title}</h2>
        
        <div className="space-y-4">
          {t.faq.items.map((faq, idx) => (
            <div key={idx} className="bg-white rounded shadow-sm border border-stone-200 overflow-hidden">
              <button 
                onClick={() => toggle(idx)}
                className={`w-full text-start px-6 py-4 focus:outline-none flex justify-between items-center bg-white hover:bg-stone-50 transition-colors ${language === 'ar' ? 'flex-row-reverse' : ''}`}
              >
                <span className="font-bold text-stone-900 text-base md:text-lg">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-stone-500" /> : <ChevronDown className="text-stone-500" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-stone-600 border-t border-stone-100 pt-4 text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;