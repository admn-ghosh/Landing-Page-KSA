import React, { useState } from 'react';
import { CITY_OPTIONS, PANEL_OPTIONS } from '../constants';
import { FormData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    mobile: '',
    projectCity: '',
    panelType: '',
    areaQuantity: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    // Directly update form data with the selected value from the dropdown
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);
    
    try {
      // 1. Save to Firebase Firestore in the 'enquiries' collection
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
        language: language,
      });

      // 2. Trigger the email extension by writing to the 'mail' collection
      await addDoc(collection(db, "mail"), {
        to: ['parimal@ghoshgroups.com'],
        cc: ['admin@ghoshgroups.com'],
        message: {
          subject: `New KSA Lead: ${formData.companyName}`,
          html: `
            <h2>New Enquiry from Saudi Arabia Landing Page</h2>
            <p><strong>Name:</strong> ${formData.fullName}</p>
            <p><strong>Company:</strong> ${formData.companyName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
            <p><strong>Mobile:</strong> <a href="tel:${formData.mobile}">${formData.mobile}</a></p>
            <p><strong>City:</strong> ${formData.projectCity}</p>
            <p><strong>Panel Type:</strong> ${formData.panelType}</p>
            <hr />
            <p><strong>Requirement:</strong><br/>${formData.areaQuantity}</p>
          `,
        },
      });

      // 3. Success UI
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
            fullName: '',
            companyName: '',
            email: '',
            mobile: '',
            projectCity: '',
            panelType: '',
            areaQuantity: ''
        });
      }, 5000);

            // 4. Redirect to thank you page after delay
            setTimeout(() => {
              window.location.href = 'https://ghoshgroups.com/thank-you/';
            }, 2000); // 2 second delay after form reset

    } catch (error) {
      console.error("Error adding document: ", error);
      setIsSubmitting(false);
      setErrorMsg("Something went wrong. Please try contacting us via WhatsApp.");
    }
  };

  // Shared classes for floating label inputs
  const inputClasses = "block px-4 pb-2.5 pt-5 w-full text-base text-stone-900 bg-white rounded border border-stone-300 appearance-none focus:outline-none focus:ring-0 focus:border-emerald-600 peer placeholder-transparent focus:placeholder-stone-400 shadow-sm";
  
  // RTL aware label classes
  const labelClasses = `absolute text-sm text-stone-500 duration-200 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] peer-focus:text-emerald-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 pointer-events-none ${language === 'ar' ? 'right-4 left-auto origin-top-right' : 'left-4 right-auto origin-top-left'}`;

  return (
    <section className="bg-white py-8 md:py-16 bg-gradient-to-b from-stone-50 to-stone-100 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side Copy */}
          <div className="lg:w-1/2 pt-4">
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-emerald-950 leading-tight mb-6">
              {t.hero.title}
            </h1>
            
            <p className="text-lg md:text-xl text-stone-700 mb-6 leading-relaxed">
              {t.hero.desc1}
            </p>
            
            <p className="text-lg md:text-xl text-stone-700 mb-6 leading-relaxed">
              {t.hero.desc2}
            </p>
            
            <div className={`bg-emerald-50 ${language === 'ar' ? 'border-r-4' : 'border-l-4'} border-emerald-700 p-6 mb-8`}>
              <p className="font-semibold text-emerald-900 text-base md:text-lg">
                {t.hero.banner}
              </p>
            </div>
            
            <p className="text-base text-stone-600 italic">
              {t.hero.italic}
            </p>
          </div>

          {/* Right Side Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white shadow-xl rounded-lg border border-stone-200 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mb-6">
                {t.hero.formTitle}
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 text-green-800 p-6 rounded text-center border border-green-200">
                  <p className="font-bold text-lg mb-2">{t.hero.success.title}</p>
                  <p className="text-base">{t.hero.success.msg}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Full Name */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName"
                      className={inputClasses}
                      placeholder={t.hero.placeholders.name}
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="fullName" className={labelClasses}>
                      {t.hero.labels.fullName} <span className="text-red-600">*</span>
                    </label>
                  </div>
                  
                  {/* Company Name */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="companyName" 
                      name="companyName"
                      className={inputClasses}
                      placeholder={t.hero.placeholders.company}
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="companyName" className={labelClasses}>
                      {t.hero.labels.companyName} <span className="text-red-600">*</span>
                    </label>
                  </div>
                  
                  {/* Email */}
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className={inputClasses}
                      placeholder={t.hero.placeholders.email}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      dir="ltr" 
                      style={{ textAlign: language === 'ar' ? 'right' : 'left' }}
                    />
                    <label htmlFor="email" className={labelClasses}>
                      {t.hero.labels.email} <span className="text-red-600">*</span>
                    </label>
                  </div>
                  
                  {/* Mobile */}
                  <div className="relative">
                    <input 
                      type="text" 
                      id="mobile" 
                      name="mobile"
                      className={inputClasses}
                      placeholder={t.hero.placeholders.mobile}
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      dir="ltr"
                      style={{ textAlign: language === 'ar' ? 'right' : 'left' }}
                    />
                    <label htmlFor="mobile" className={labelClasses}>
                      {t.hero.labels.mobile} <span className="text-red-600">*</span>
                    </label>
                  </div>
                  
                  {/* Project City (Static) */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">{t.hero.labels.projectCity} <span className="text-red-600">*</span></label>
                    <select 
                      required
                      name="projectCity"
                      value={formData.projectCity}
                      onChange={handleSelectChange}
                      className="w-full rounded border-stone-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-600 p-3 border bg-white text-stone-900 text-base"
                    >
                      <option value="">{t.hero.labels.selectCity}</option>
                      {CITY_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{t.cityOptions[opt.value as keyof typeof t.cityOptions] || opt.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Panel Type (Static) */}
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">{t.hero.labels.panelType} <span className="text-red-600">*</span></label>
                    <select 
                      required
                      name="panelType"
                      value={formData.panelType}
                      onChange={handleSelectChange}
                      className="w-full rounded border-stone-300 shadow-sm focus:border-emerald-600 focus:ring-emerald-600 p-3 border bg-white text-stone-900 text-base"
                    >
                      <option value="">{t.hero.labels.selectPanel}</option>
                      {PANEL_OPTIONS.map(opt => (
                        <option key={opt.value} value={opt.value}>{t.panelOptions[opt.value as keyof typeof t.panelOptions] || opt.label}</option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Area Quantity (Textarea - Floating) */}
                  <div className="relative">
                    <textarea 
                      id="areaQuantity"
                      name="areaQuantity"
                      value={formData.areaQuantity}
                      onChange={handleChange}
                      rows={3} 
                      className={inputClasses}
                      placeholder={t.hero.placeholders.area}
                    ></textarea>
                    <label htmlFor="areaQuantity" className={labelClasses}>
                      {t.hero.labels.area}
                    </label>
                  </div>
                  
                  {errorMsg && (
                    <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded font-bold text-white text-base md:text-lg transition-colors shadow-md ${isSubmitting ? 'bg-emerald-500 cursor-not-allowed' : 'bg-emerald-700 hover:bg-emerald-800'}`}
                  >
                    {isSubmitting ? t.hero.btn.sending : t.hero.btn.submit}
                  </button>
                  
                  <p className="text-sm text-stone-500 text-center mt-3">
                    {t.hero.disclaimer}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
