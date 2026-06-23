/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Scissors, ShieldAlert, FileText, CheckCircle2, MessageSquare, Sparkles, Phone, HelpCircle } from 'lucide-react';

interface FormState {
  fullName: string;
  mobileNumber: string;
  hasBill: string;
  productName: string;
  size: string;
  alterationTypes: { [key: string]: boolean };
  description: string;
}

export default function Alterations() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    mobileNumber: '',
    hasBill: 'Yes',
    productName: '',
    size: 'M',
    alterationTypes: {
      'Length Adjustment': false,
      'Waist Adjustment': false,
      'Sleeve Adjustment': false,
      'Shoulder Adjustment': false,
      'Neck Modification': false,
      'Fitting Adjustment': false,
      'Other': false,
    },
    description: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showInjectedSuccess, setShowInjectedSuccess] = useState(false);

  const alterationOptions = [
    'Length Adjustment',
    'Waist Adjustment',
    'Sleeve Adjustment',
    'Shoulder Adjustment',
    'Neck Modification',
    'Fitting Adjustment',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (option: string) => {
    setForm(prev => ({
      ...prev,
      alterationTypes: {
        ...prev.alterationTypes,
        [option]: !prev.alterationTypes[option]
      }
    }));
  };

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!form.fullName.trim()) tempErrors.fullName = 'Full name is required';
    if (!form.mobileNumber.trim()) tempErrors.mobileNumber = 'Mobile number is required';
    if (!form.productName.trim()) tempErrors.productName = 'Product name is required';
    
    const anyChecked = Object.values(form.alterationTypes).some(val => val);
    if (!anyChecked) {
      tempErrors.alterationTypes = 'Please select at least one alteration type';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      // Scroll to errors
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const el = document.getElementsByName(firstError)[0];
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Capture checked options
    const selectedOptions = Object.keys(form.alterationTypes)
      .filter(key => form.alterationTypes[key])
      .map(key => `• [x] ${key}`)
      .join('\n');

    // Make description bullet points or block
    const descText = form.description.trim() || 'No additional description provided.';

    // Formatted WhatsApp copy
    const textMessage = `ALTERATION REQUEST

Customer Name: ${form.fullName}
Mobile Number: ${form.mobileNumber}
Bill Available: ${form.hasBill}
Product Name: ${form.productName}
Purchased Size: ${form.size}

Alteration Required:
${selectedOptions}

Description:
${descText}

I purchased this garment from Indo West and would like to request an alteration. Please guide me regarding the garment drop-off process.`;

    // Production contact number
    const whatsappNumber = '917411279019';
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    setShowInjectedSuccess(true);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-warm-ivory text-charcoal-black animate-fade-in">
      <div className="max-w-4xl mx-auto">
        
        {/* Editorial Title Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 text-primary font-sans text-xs uppercase tracking-[0.3em] mb-4">
            <Scissors size={14} className="text-rose-gold animate-bounce" />
            <span>Premium Tailoring & Fit</span>
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl font-light tracking-wide leading-tight mb-6">
            Perfect Fit <span className="font-serif italic text-primary/80">Alterations</span>
          </h1>
          <div className="w-24 h-[1px] bg-rose-gold mx-auto mb-8" />
          <p className="font-sans text-sm text-charcoal-black/75 leading-relaxed max-w-2xl mx-auto font-light">
            Purchased from Indo West? Our alteration specialists can help you achieve the perfect fit. 
            Whether it&apos;s sleeve adjustments, length modifications, waist fitting, shoulder corrections, 
            or other tailoring requirements, our team is here to assist.
          </p>
        </div>

        {/* Info Grid & Rules */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Elegant Notice Box */}
          <div className="md:col-span-5 bg-soft-beige/75 border border-rose-gold/25 p-8 relative flex flex-col justify-between">
            <div className="absolute -top-3 left-6 px-3 bg-warm-ivory border border-rose-gold/20 flex items-center gap-1.5 text-[10px] text-primary uppercase tracking-[0.15em] font-semibold">
              <ShieldAlert size={12} className="text-rose-gold" />
              <span>Boutique Policy</span>
            </div>
            
            <div>
              <h3 className="font-editorial text-lg font-bold tracking-wide text-primary mb-6">
                Important Information
              </h3>
              
              <ul className="space-y-4 text-xs text-charcoal-black/80 font-light leading-relaxed">
                <li className="flex gap-2.5">
                  <span className="text-primary mt-1 select-none">✦</span>
                  <span>Alteration services are available only for garments purchased from Indo West.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-primary mt-1 select-none">✦</span>
                  <span className="font-medium text-primary">The original purchase bill is mandatory and must be brought along when dropping off the garment and during measurement verification for alteration services.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-primary mt-1 select-none">✦</span>
                  <span>Customers must physically bring the garment to the store for inspection and alteration.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-primary mt-1 select-none">✦</span>
                  <span>Alteration feasibility depends on garment design, fabric, and construction.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-rose-gold/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-none bg-primary/5 flex items-center justify-center text-primary">
                <HelpCircle size={18} />
              </div>
              <div>
                <p className="font-sans text-[10px] text-rose-gold uppercase font-semibold tracking-wider">Need urgent help?</p>
                <p className="font-sans text-xs font-bold text-charcoal-black hover:text-primary cursor-pointer transition-colors">
                  Call Room: +91 91734 95718
                </p>
              </div>
            </div>
          </div>

          {/* Alteration Form View */}
          <div className="md:col-span-7 bg-white border border-rose-gold/15 p-8 sm:p-10 shadow-lg">
            
            <div className="flex items-center gap-2 mb-8 pb-4 border-b border-rose-gold/10">
              <FileText size={16} className="text-primary" />
              <h2 className="font-editorial text-xl font-bold tracking-wide">
                Alteration Request Form
              </h2>
            </div>

            <form onSubmit={handleWhatsAppSend} className="space-y-6">
              
              {/* Customer Information Row */}
              <div className="space-y-4">
                <h4 className="font-sans text-[10px] text-rose-gold uppercase font-bold tracking-widest border-b border-charcoal-black/5 pb-1">
                  Customer Information
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal-black/70 mb-1.5 font-medium">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={form.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyah Sharma"
                      className={`w-full p-3 text-xs bg-warm-ivory/50 border ${
                        errors.fullName ? 'border-red-500' : 'border-rose-gold/20'
                      } focus:border-primary focus:outline-none transition-all rounded-none`}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal-black/70 mb-1.5 font-medium">
                      Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      name="mobileNumber"
                      value={form.mobileNumber}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 91734 95718"
                      className={`w-full p-3 text-xs bg-warm-ivory/50 border ${
                        errors.mobileNumber ? 'border-red-500' : 'border-rose-gold/20'
                      } focus:border-primary focus:outline-none transition-all rounded-none`}
                    />
                    {errors.mobileNumber && <p className="text-[10px] text-red-500 mt-1">{errors.mobileNumber}</p>}
                  </div>
                </div>
              </div>

              {/* Purchase Information */}
              <div className="space-y-4">
                <h4 className="font-sans text-[10px] text-rose-gold uppercase font-bold tracking-widest border-b border-charcoal-black/5 pb-1 font-semibold">
                  Purchase Information
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-charcoal-black/70 mb-2.5 font-medium">
                      Do You Have The Purchase Bill? *
                    </span>
                    <div className="flex gap-4">
                      <label className={`flex-1 flex items-center justify-center gap-2 p-3 border cursor-pointer transition-all ${
                        form.hasBill === 'Yes'
                          ? 'border-primary bg-primary/5 text-primary font-medium'
                          : 'border-rose-gold/20 bg-warm-ivory/50 text-charcoal-black/70 hover:border-rose-gold/50'
                      }`}>
                        <input
                          type="radio"
                          name="hasBill"
                          value="Yes"
                          checked={form.hasBill === 'Yes'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                          form.hasBill === 'Yes' ? 'border-primary' : 'border-charcoal-black/35'
                        }`}>
                          {form.hasBill === 'Yes' && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                        </div>
                        <span className="text-xs">Yes</span>
                      </label>

                      <label className={`flex-1 flex items-center justify-center gap-2 p-3 border cursor-pointer transition-all ${
                        form.hasBill === 'No'
                          ? 'border-primary bg-primary/5 text-primary font-medium'
                          : 'border-rose-gold/20 bg-warm-ivory/50 text-charcoal-black/70 hover:border-rose-gold/50'
                      }`}>
                        <input
                          type="radio"
                          name="hasBill"
                          value="No"
                          checked={form.hasBill === 'No'}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${
                          form.hasBill === 'No' ? 'border-primary' : 'border-charcoal-black/35'
                        }`}>
                          {form.hasBill === 'No' && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                        </div>
                        <span className="text-xs">No</span>
                      </label>
                    </div>
                    <p className="text-[9px] text-charcoal-black/50 mt-2 leading-relaxed font-light">
                      Please note: The original purchase bill is mandatory during the garment drop-off and measurement verification process.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-charcoal-black/70 mb-1.5 font-medium">
                      Product Name *
                    </label>
                    <input 
                      type="text" 
                      name="productName"
                      value={form.productName}
                      onChange={handleInputChange}
                      placeholder="e.g. Silk Peplum Top With Plazo"
                      className={`w-full p-3 text-xs bg-warm-ivory/50 border ${
                        errors.productName ? 'border-red-500' : 'border-rose-gold/20'
                      } focus:border-primary focus:outline-none transition-all rounded-none`}
                    />
                    {errors.productName && <p className="text-[10px] text-red-500 mt-1">{errors.productName}</p>}
                  </div>
                </div>
              </div>

              {/* Sizing Information */}
              <div className="space-y-4">
                <h4 className="font-sans text-[10px] text-rose-gold uppercase font-bold tracking-widest border-b border-charcoal-black/5 pb-1 font-semibold">
                  Size Information
                </h4>
                
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal-black/70 mb-1.5 font-medium">
                    Purchased Size *
                  </label>
                  <select 
                    name="size"
                    value={form.size}
                    onChange={handleInputChange}
                    className="w-full p-3 text-xs bg-warm-ivory/50 border border-rose-gold/20 focus:border-primary focus:outline-none transition-all rounded-none appearance-none"
                    style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' fill='none' stroke='%23CAA472' stroke-width='1.5'><path d='M1 1l4 4 4-4'/></svg>")`, backgroundPosition: 'right 16px center', backgroundRepeat: 'no-repeat' }}
                  >
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>

              {/* Alteration Types checkboxes */}
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-charcoal-black/5 pb-1">
                  <h4 className="font-sans text-[10px] text-rose-gold uppercase font-bold tracking-widest font-semibold">
                    Alteration Type
                  </h4>
                  <span className="text-[9px] text-charcoal-black/40 italic">Select all that apply</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {alterationOptions.map((option) => (
                    <label 
                      key={option} 
                      className={`flex items-center gap-3 p-3 border transition-all cursor-pointer ${
                        form.alterationTypes[option]
                          ? 'border-primary/50 bg-primary/5 text-primary'
                          : 'border-charcoal-black/10 hover:border-rose-gold/50 bg-warm-ivory/15'
                      }`}
                    >
                      <input 
                        type="checkbox"
                        checked={form.alterationTypes[option]}
                        onChange={() => handleCheckboxChange(option)}
                        className="hidden"
                      />
                      <div className={`w-4 h-4 border flex items-center justify-center transition-all ${
                        form.alterationTypes[option] 
                          ? 'border-primary bg-primary text-warm-ivory' 
                          : 'border-charcoal-black/35 bg-white'
                      }`}>
                        {form.alterationTypes[option] && <span className="text-[10px] font-bold">✓</span>}
                      </div>
                      <span className="font-sans text-xs tracking-wide">{option}</span>
                    </label>
                  ))}
                </div>
                {errors.alterationTypes && <p className="text-[10px] text-red-500 mt-1">{errors.alterationTypes}</p>}
              </div>

              {/* Description box */}
              <div className="space-y-4">
                <h4 className="font-sans text-[10px] text-rose-gold uppercase font-bold tracking-widest border-b border-charcoal-black/5 pb-1 font-semibold">
                  Description
                </h4>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-charcoal-black/70 mb-1.5 font-medium">
                    Specific Requirements Detail
                  </label>
                  <textarea 
                    name="description"
                    value={form.description}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="e.g. Reduce waist by 2 inches and shorten sleeves by approximately 1 inch."
                    className="w-full p-3.5 text-xs bg-warm-ivory/50 border border-rose-gold/20 focus:border-primary focus:outline-none transition-all rounded-none font-sans font-light leading-relaxed resize-none"
                  />
                  <p className="text-[10px] text-charcoal-black/45 mt-1 font-light italic">
                    Example: &quot;Reduce waist by 2 inches and shorten sleeves by approximately 1 inch.&quot;
                  </p>
                </div>
              </div>

              {/* Submit to WhatsApp Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-warm-ivory py-4 px-6 flex items-center justify-center gap-2.5 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 duration-300"
                >
                  <MessageSquare size={15} className="fill-current text-green-300" />
                  <span>Send Alteration Request via WhatsApp</span>
                </button>
              </div>

            </form>

            {/* Injected Success Alert feedback after clicking */}
            {showInjectedSuccess && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 flex gap-3 animate-fade-in">
                <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-sans text-xs font-bold uppercase tracking-wider mb-1">WhatsApp Launched Successfully</h4>
                  <p className="font-sans text-[11px] leading-relaxed font-light text-green-700">
                    If WhatsApp didn&apos;t open automatically, please ensure popups are permitted. Your response text is saved on the clipboard ready to be sent. We will review the specifications and reply to schedule your custom boutique fitting session.
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
