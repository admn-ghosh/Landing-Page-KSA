import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ProductSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-4">{t.products.title}</h2>
          <p className="text-lg text-stone-700 max-w-3xl mx-auto mb-6 leading-relaxed">
            {t.products.desc}
          </p>
          <div className="inline-block bg-amber-50 text-amber-900 px-6 py-3 rounded border border-amber-200 text-base">
            {t.products.banner}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.products.items.map((product, idx) => (
            <div key={idx} className="bg-stone-50 rounded-lg p-6 border border-stone-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900 mb-3">{product.title}</h3>
              <p className="text-base text-stone-700 mb-5 leading-relaxed min-h-[48px]">{product.description}</p>
              <ul className="space-y-3">
                {product.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-base text-stone-600 leading-relaxed">
                    <span className={`text-amber-500 mt-1.5 text-xs ${language === 'ar' ? 'ml-2' : 'mr-2'}`}>●</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;