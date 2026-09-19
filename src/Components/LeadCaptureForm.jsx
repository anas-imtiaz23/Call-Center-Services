import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const LeadCaptureForm = () => {
  const DID_NUMBER = "+1 (848) 467-1057";
  
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
  const [isLookingUp, setIsLookingUp] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [showDID, setShowDID] = useState(false);
  const [visitorIP, setVisitorIP] = useState('Detecting...');

  useEffect(() => {
    const detectIP = async () => {
      try {
        let ip = null;
        try {
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          ip = data.ip;
        } catch (e) {}
        if (!ip) {
          try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            ip = data.ip;
          } catch (e) {}
        }
        if (!ip) {
          const response = await fetch('https://api.ip.sb/ip');
          ip = await response.text();
        }
        setVisitorIP(ip ? ip.trim() : 'Unable to detect');
      } catch (error) {
        setVisitorIP('Unable to detect');
      }
    };
    detectIP();
  }, []);

  const lookupZipCode = async (zip) => {
    if (!zip || zip.length < 5) return;
    setIsLookingUp(true);
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
      if (response.ok) {
        const data = await response.json();
        if (data && data.places && data.places.length > 0) {
          const place = data.places[0];
          setFormData(prev => ({
            ...prev,
            area: place['place name'],
            county: place['state'],
            state: place['state abbreviation']
          }));
          setSubmitStatus({
            success: true,
            message: `✓ Location detected: ${place['place name']}, ${place['state']}`
          });
          setTimeout(() => setSubmitStatus(null), 3000);
        }
      } else {
        setSubmitStatus({
          success: false,
          message: '❌ ZIP code not found. Please enter a valid USA ZIP code.'
        });
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: '❌ Error detecting location. Please enter details manually.'
      });
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsLookingUp(false);
    }
  };

  const handleZipChange = (e) => {
    const zip = e.target.value;
    setFormData(prev => ({ ...prev, zipCode: zip }));
    if (zip.length === 5) {
      lookupZipCode(zip);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const leadData = {
        cx_name: formData.cxName,
        cx_phone: formData.cxPhone,
        zip_code: formData.zipCode,
        area: formData.area,
        county: formData.county,
        state: formData.state,
        visitor_ip: visitorIP,
        status: 'new',
        assigned_to: null
      };
      const { data, error } = await supabase
        .from('lead_captures')
        .insert([leadData])
        .select();
      if (error) throw error;
      setShowDID(true);
      setSubmitStatus({
        success: true,
        message: '✓ Lead captured successfully! An agent will contact you shortly.'
      });
      setFormData({
        cxName: '',
        cxPhone: '',
        zipCode: '',
        area: '',
        county: '',
        state: ''
      });
      setTimeout(() => setShowDID(false), 10000);
      setTimeout(() => setSubmitStatus(null), 6000);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: '❌ Something went wrong. Please try again or call us directly at 848-467-1057.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const usStates = [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' }, { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' }, { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' }, { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' }, { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' }, { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' }, { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' }, { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' }, { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      
      {/* Animated Background Elements - Orange Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FB923C]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FB923C]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FB923C]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 py-12 md:py-16">
        
        {/* Header Section - Soft Stone Theme */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FB923C]/10 backdrop-blur-sm rounded-full px-5 py-2 mb-5 border border-[#FB923C]/20 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB923C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB923C]"></span>
            </span>
            <span className="text-[#FB923C] text-sm font-semibold tracking-wide">🇺🇸 USA LICENSED AGENTS ONLINE NOW</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E293B] mb-4 tracking-tight">
            Get Connected With{' '}
            <span className="text-[#FB923C]">A Live Agent</span>
          </h1>
          
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            Fill out the form below and one of our licensed insurance agents will contact you within minutes.
          </p>
        </div>

        {/* IP Address Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 border border-[#E8E5DF] shadow-sm">
            <p className="text-xs text-[#475569]">
              🌐 Your IP Address: <span className="text-[#FB923C] font-mono font-semibold">{visitorIP}</span>
            </p>
          </div>
        </div>

        {/* Main Form Card - Soft Stone */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] border border-[#E8E5DF] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)]">
          
          {/* Card Header - Orange */}
          <div className="bg-gradient-to-r from-[#FB923C]/10 to-[#F97316]/10 px-8 py-6 border-b border-[#E8E5DF]">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-[#1E293B] text-2xl font-black">Quick Lead Capture</h2>
                <p className="text-[#475569] text-sm mt-1">Your information is 256-bit SSL encrypted</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-[#FB923C]/10 rounded-full px-3 py-1.5 text-[#1E293B] text-xs flex items-center gap-1 border border-[#FB923C]/20">
                  <span>🔒</span> SSL Secure
                </div>
                <div className="bg-[#FB923C]/10 rounded-full px-3 py-1.5 text-[#1E293B] text-xs flex items-center gap-1 border border-[#FB923C]/20">
                  <span>✓</span> DNC Compliant
                </div>
              </div>
            </div>
          </div>

          {/* Success/Error Message */}
          {submitStatus && (
            <div className={`mx-8 mt-6 p-4 rounded-xl backdrop-blur-sm border ${
              submitStatus.success 
                ? 'bg-[#FB923C]/10 border-[#FB923C]/20 text-[#1E293B]' 
                : 'bg-red-50 border-red-200 text-red-700'
            } animate-slideDown`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{submitStatus.success ? '🎉' : '⚠️'}</span>
                <p className="font-medium">{submitStatus.message}</p>
              </div>
            </div>
          )}

          {/* DID Display - Orange */}
          {showDID && (
            <div className="mx-8 mt-6 p-5 rounded-xl bg-gradient-to-r from-[#FB923C]/20 to-[#F97316]/20 border-2 border-[#FB923C]/50 text-center backdrop-blur-sm animate-slideDown">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl animate-bounce">📞</span>
                <span className="text-[#1E293B] font-bold text-lg">Your Dedicated DID Number:</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#1E293B] tracking-wide bg-white/50 inline-block px-6 py-2 rounded-xl border border-[#E8E5DF]">
                {DID_NUMBER}
              </div>
              <p className="text-xs text-[#475569] mt-3">
                Agents will call you from this number. Please save it to avoid missing the call.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Name Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                Full Name <span className="text-[#FB923C]">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'cxName' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-lg">👤</span>
                <input
                  type="text"
                  name="cxName"
                  value={formData.cxName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('cxName')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 text-[#1E293B] placeholder-[#94A3B8] ${
                    focusedField === 'cxName'
                      ? 'border-[#FB923C] shadow-lg shadow-[#FB923C]/20'
                      : 'border-[#E8E5DF] hover:border-[#FB923C]/50'
                  }`}
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                Phone Number <span className="text-[#FB923C]">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'cxPhone' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-lg">📞</span>
                <input
                  type="tel"
                  name="cxPhone"
                  value={formData.cxPhone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('cxPhone')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 text-[#1E293B] placeholder-[#94A3B8] ${
                    focusedField === 'cxPhone'
                      ? 'border-[#FB923C] shadow-lg shadow-[#FB923C]/20'
                      : 'border-[#E8E5DF] hover:border-[#FB923C]/50'
                  }`}
                  placeholder="848-467-1057"
                />
              </div>
              <p className="text-xs text-[#FB923C] mt-1 flex items-center gap-1">✓ USA licensed agents will call you</p>
            </div>

            {/* ZIP Code Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                ZIP Code <span className="text-[#FB923C]">*</span>
                {isLookingUp && <span className="text-xs text-[#FB923C] ml-2 animate-pulse">🔍 Looking up location...</span>}
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'zipCode' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-lg">📍</span>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleZipChange}
                  onFocus={() => setFocusedField('zipCode')}
                  onBlur={() => setFocusedField(null)}
                  maxLength="5"
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 text-[#1E293B] placeholder-[#94A3B8] ${
                    focusedField === 'zipCode'
                      ? 'border-[#FB923C] shadow-lg shadow-[#FB923C]/20'
                      : 'border-[#E8E5DF] hover:border-[#FB923C]/50'
                  }`}
                  placeholder="Enter 5-digit ZIP code"
                />
              </div>
              <p className="text-xs text-[#94A3B8] mt-1">✓ Enter ZIP code to auto-detect your city and state</p>
            </div>

            {/* City Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                City / Area <span className="text-[#FB923C]">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'area' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-lg">🏙️</span>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('area')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 text-[#1E293B] placeholder-[#94A3B8] ${
                    focusedField === 'area'
                      ? 'border-[#FB923C] shadow-lg shadow-[#FB923C]/20'
                      : 'border-[#E8E5DF] hover:border-[#FB923C]/50'
                  }`}
                  placeholder="Auto-detected from ZIP"
                />
              </div>
            </div>

            {/* County Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                County <span className="text-[#FB923C]">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'county' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-lg">🗺️</span>
                <input
                  type="text"
                  name="county"
                  value={formData.county}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('county')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 text-[#1E293B] placeholder-[#94A3B8] ${
                    focusedField === 'county'
                      ? 'border-[#FB923C] shadow-lg shadow-[#FB923C]/20'
                      : 'border-[#E8E5DF] hover:border-[#FB923C]/50'
                  }`}
                  placeholder="Auto-detected from ZIP"
                />
              </div>
            </div>

            {/* State Dropdown */}
            <div className="group">
              <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                State <span className="text-[#FB923C]">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'state' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-lg">🇺🇸</span>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('state')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-10 py-3.5 bg-white border-2 rounded-xl outline-none transition-all duration-300 appearance-none text-[#1E293B] ${
                    focusedField === 'state'
                      ? 'border-[#FB923C] shadow-lg shadow-[#FB923C]/20'
                      : 'border-[#E8E5DF] hover:border-[#FB923C]/50'
                  }`}
                >
                  <option value="" className="text-[#94A3B8]">Select State</option>
                  {usStates.map(state => (
                    <option key={state.code} value={state.code}>{state.name} ({state.code})</option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none">▼</span>
              </div>
              {formData.state && (
                <p className="text-xs text-[#FB923C] mt-1 flex items-center gap-1">✓ State auto-detected from ZIP code</p>
              )}
            </div>

            {/* Legal Consent */}
            <div className="bg-[#FAFAF8] rounded-xl p-5 border border-[#E8E5DF]">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="w-5 h-5 mt-0.5 text-[#FB923C] rounded border-[#E8E5DF] focus:ring-[#FB923C] focus:ring-2"
                />
                <label htmlFor="consent" className="text-sm text-[#475569] leading-relaxed">
                  I agree to receive calls as explained below.
                </label>
              </div>
              <p className="text-xs text-[#94A3B8] mt-3 leading-relaxed pl-8">
                By clicking "Get My Free Quote", I agree and give express consent by electronic signature 
                to receive marketing communications at any time regarding insurance services via 
                automated telephone dialing system and/or artificial voice and/or pre-recorded calls 
                and/or SMS/MMS and other forms of telemarketing purposes.
              </p>
            </div>

            {/* Submit Button - Orange */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FB923C] text-white py-4 rounded-xl font-black text-lg hover:bg-[#F97316] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
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
          </form>
        </div>

        {/* Trust Indicators Footer - Orange Theme */}
        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#475569]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#FB923C] rounded-full"></div>
              <span>🔒 256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#FB923C] rounded-full"></div>
              <span>✓ DNC & TCPA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#FB923C] rounded-full"></div>
              <span>⭐ 4.9/5 Rating (2,500+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#FB923C] rounded-full"></div>
              <span>📞 24/7 Customer Support</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-[#E8E5DF] text-xs text-[#94A3B8]">
            © 2024 Artist Media. All rights reserved.
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce {
          animation: bounce 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LeadCaptureForm;