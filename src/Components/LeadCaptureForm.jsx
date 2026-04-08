import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    cxName: '',
    cxPhone: '',
    zipCode: '',
    area: '',
    county: '',
    state: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase
        .from('lead_captures')
        .insert([
          {
            cx_name: formData.cxName,
            cx_phone: formData.cxPhone,
            zip_code: formData.zipCode,
            area: formData.area,
            county: formData.county,
            state: formData.state
          }
        ]);

      if (error) throw error;

      setSubmitStatus({
        success: true,
        message: '✓ Lead captured successfully! An agent will contact you within 24 hours.'
      });
      
      setFormData({
        cxName: '',
        cxPhone: '',
        zipCode: '',
        area: '',
        county: '',
        state: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (error) {
      console.error('Error submitting lead:', error);
      setSubmitStatus({
        success: false,
        message: '❌ Something went wrong. Please try again or call us directly at (313) 581-7026.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const usStates = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const formFields = [
    { name: 'cxName', label: 'Full Name', icon: '👤', placeholder: 'John Doe', type: 'text', required: true },
    { name: 'cxPhone', label: 'Phone Number', icon: '📞', placeholder: '(313) 581-7026', type: 'tel', required: true },
    { name: 'zipCode', label: 'ZIP Code', icon: '📍', placeholder: '48226', type: 'text', required: true, maxLength: 10 },
    { name: 'area', label: 'City / Area', icon: '🏙️', placeholder: 'Detroit', type: 'text', required: true },
    { name: 'county', label: 'County', icon: '🗺️', placeholder: 'Wayne County', type: 'text', required: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1C2E] to-[#0F2B3D] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header Section with Stats */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-[#00BCA2]/20 rounded-full px-4 py-2 mb-4 backdrop-blur-sm border border-[#00BCA2]/30">
            <span className="text-[#00BCA2] text-sm font-semibold tracking-wide">⚡ FAST & SECURE</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get Connected With <span className="text-[#00BCA2]">A Live Agent</span>
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Fill out the form below and one of our licensed agents will contact you to discuss your insurance needs.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/10">
          {/* Decorative Header */}
          <div className="relative bg-gradient-to-r from-[#00BCA2]/20 to-[#008f7b]/20 px-6 py-8 border-b border-white/10">
            <div className="absolute top-0 right-0 opacity-5">
              <svg className="w-32 h-32" viewBox="0 0 100 100" fill="white">
                <circle cx="50" cy="50" r="40" />
              </svg>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-white text-2xl font-bold">Quick Lead Capture</h2>
                <p className="text-gray-300 text-sm mt-1">Your information is secure and confidential</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-white/10 rounded-full px-3 py-1 text-white text-xs flex items-center gap-1 backdrop-blur-sm">
                  <span>🔒</span> 256-bit SSL
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1 text-white text-xs flex items-center gap-1 backdrop-blur-sm">
                  <span>✓</span> DNC Compliant
                </div>
              </div>
            </div>
          </div>

          {/* Success/Error Message */}
          {submitStatus && (
            <div className={`mx-6 mt-6 rounded-xl p-4 flex items-start gap-3 animate-fadeIn ${
              submitStatus.success 
                ? 'bg-green-500/20 border border-green-500/30 backdrop-blur-sm' 
                : 'bg-red-500/20 border border-red-500/30 backdrop-blur-sm'
            }`}>
              <span className="text-2xl">{submitStatus.success ? '🎉' : '⚠️'}</span>
              <div>
                <p className={`font-semibold ${submitStatus.success ? 'text-green-400' : 'text-red-400'}`}>
                  {submitStatus.success ? 'Success!' : 'Oops!'}
                </p>
                <p className={`text-sm ${submitStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                  {submitStatus.message}
                </p>
              </div>
            </div>
          )}

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formFields.map((field) => (
                <div key={field.name} className="relative">
                  <label className="block text-sm font-semibold text-gray-200 mb-2">
                    {field.label} <span className="text-red-400">*</span>
                  </label>
                  <div className={`relative transition-all duration-200 ${
                    focusedField === field.name ? 'transform scale-[1.01]' : ''
                  }`}>
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                      {field.icon}
                    </span>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      required={field.required}
                      maxLength={field.maxLength}
                      className={`w-full pl-12 pr-4 py-3 bg-white/10 border-2 rounded-xl outline-none transition-all duration-200 text-white placeholder-gray-400 ${
                        focusedField === field.name
                          ? 'border-[#00BCA2] shadow-lg ring-2 ring-[#00BCA2]/30 bg-white/15'
                          : 'border-white/20 hover:border-white/30'
                      }`}
                      placeholder={field.placeholder}
                    />
                  </div>
                </div>
              ))}

              {/* State Dropdown */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-200 mb-2">
                  State <span className="text-red-400">*</span>
                </label>
                <div className={`relative transition-all duration-200 ${
                  focusedField === 'state' ? 'transform scale-[1.01]' : ''
                }`}>
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🇺🇸</span>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('state')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full pl-12 pr-10 py-3 bg-white/10 border-2 rounded-xl outline-none transition-all duration-200 appearance-none text-white ${
                      focusedField === 'state'
                        ? 'border-[#00BCA2] shadow-lg ring-2 ring-[#00BCA2]/30 bg-white/15'
                        : 'border-white/20 hover:border-white/30'
                    }`}
                  >
                    <option value="" className="bg-[#0A1C2E] text-gray-400">Select State</option>
                    {usStates.map(state => (
                      <option key={state} value={state} className="bg-[#0A1C2E] text-white">{state}</option>
                    ))}
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 py-4 border-y border-white/10">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Data encrypted in transit
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Never share your info
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                No spam, guaranteed
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-gradient-to-r from-[#00BCA2] to-[#008f7b] text-white py-4 rounded-xl font-bold text-lg hover:from-[#008f7b] hover:to-[#006b53] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Your Request...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Get My Free Quote
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              By clicking "Get My Free Quote", you consent to be contacted by an agent via call, text, or email.
            </p>
          </form>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/10 transition group">
            <div className="w-12 h-12 bg-[#00BCA2]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00BCA2] transition">
              <span className="text-xl group-hover:text-white transition">⚡</span>
            </div>
            <h3 className="font-semibold text-white mb-1">Instant Response</h3>
            <p className="text-xs text-gray-400">Get connected with an agent within minutes</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/10 transition group">
            <div className="w-12 h-12 bg-[#00BCA2]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00BCA2] transition">
              <span className="text-xl group-hover:text-white transition">🔒</span>
            </div>
            <h3 className="font-semibold text-white mb-1">100% Confidential</h3>
            <p className="text-xs text-gray-400">Your information is safe with us</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 text-center border border-white/10 hover:bg-white/10 transition group">
            <div className="w-12 h-12 bg-[#00BCA2]/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00BCA2] transition">
              <span className="text-xl group-hover:text-white transition">🏆</span>
            </div>
            <h3 className="font-semibold text-white mb-1">Top Rated Service</h3>
            <p className="text-xs text-gray-400">4.9/5 from 500+ verified customers</p>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
          <p className="text-gray-300 text-sm">
            Prefer to call us directly? 
            <a href="tel:+13135817026" className="text-[#00BCA2] font-semibold ml-1 hover:underline">
              (313) 581-7026
            </a>
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LeadCaptureForm;