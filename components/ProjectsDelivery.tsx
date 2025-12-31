import React from 'react';
import { Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const ProjectsDelivery: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-12 bg-stone-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-8 text-center">{t.delivery.title}</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <p className="text-base md:text-lg text-stone-700 mb-6 leading-relaxed">
              {t.delivery.desc}
            </p>
            <ul className="space-y-4 mb-6">
              {t.delivery.points.map((item, idx) => (
                <li key={idx} className="flex items-start text-base text-stone-700 leading-relaxed">
                  <Truck className={`text-emerald-700 flex-shrink-0 mt-1 ${language === 'ar' ? 'ml-3' : 'mr-3'}`} size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-semibold text-emerald-900 text-base md:text-lg leading-relaxed">
              {t.delivery.footer}
            </p>
          </div>
          <div className="md:w-1/3 w-full">
            <img 
              src="https://picsum.photos/seed/trucklogistics/400/300" 
              alt="Logistics truck delivery" 
              className="rounded-lg shadow w-full object-cover aspect-[4/3]"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsDelivery;