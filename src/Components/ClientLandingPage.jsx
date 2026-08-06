import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { isMobile, isTablet, browserName, osName } from 'react-device-detect';

const ClientLandingPage = () => {
  const [visitorInfo, setVisitorInfo] = useState({
    ip: 'Detecting...',
    city: 'Detecting...',
    state: 'Detecting...',
    zip: '-----',
    timestamp: '',
    device: '',
    browser: '',
    os: ''
  });
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    insuranceType: '',
    bestTimeToCall: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUsaTimestamp = () => {
    const now = new Date();
    return now.toLocaleString('en-US', {
      timeZone: 'America/New_York',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const getDeviceInfo = () => {
    if (isMobile) return '📱 Mobile Phone';
    if (isTablet) return '📟 Tablet';
    return '💻 Desktop Computer';
  };

  useEffect(() => {
    const detectLocation = async () => {
      setLoading(true);
      setVisitorInfo(prev => ({
        ...prev,
        timestamp: getUsaTimestamp(),
        device: getDeviceInfo(),
        browser: browserName || 'Unknown',
        os: osName || 'Unknown'
      }));
      
      let ipAddress = null;
      let cityName = null;
      let stateName = null;
      let zipCode = null;
      
      const apis = [
        'https://ipapi.co/json/',
        'https://ip-api.com/json/',
        'https://ipwho.is/'
      ];
      
      for (const apiUrl of apis) {
        try {
          const response = await fetch(apiUrl);
          if (response.ok) {
            const data = await response.json();
            ipAddress = data.ip || data.query;
            if (data.city && data.city !== 'Unknown' && data.city !== 'none') {
              cityName = data.city;
              stateName = data.region || data.regionName;
              zipCode = data.postal || data.zip;
              break;
            }
          }
        } catch (e) {
          console.log(`API ${apiUrl} failed:`, e);
        }
      }
      
      setVisitorInfo(prev => ({
        ...prev,
        ip: ipAddress || prev.ip,
        city: cityName || prev.city,
        state: stateName || prev.state,
        zip: zipCode || prev.zip
      }));
      
      setLoading(false);
    };
    
    detectLocation();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.fullName,
            phone: formData.phone,
            email: formData.email,
            insurance_type: formData.insuranceType,
            best_time_to_call: formData.bestTimeToCall,
            source: 'landing_page',
            visitor_ip: visitorInfo.ip,
            visitor_city: visitorInfo.city,
            visitor_state: visitorInfo.state,
            visitor_zip: visitorInfo.zip,
            visitor_device: visitorInfo.device,
            visitor_browser: visitorInfo.browser,
            visitor_os: visitorInfo.os,
            visitor_timestamp: visitorInfo.timestamp
          }
        ]);
      
      if (error) throw error;
      
      setSubmitStatus({
        success: true,
        message: '✓ Thank you! A licensed USA agent will call you within 5 minutes.'
      });
      
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        insuranceType: '',
        bestTimeToCall: ''
      });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: '❌ Error submitting. Please call us directly: (313) 581-7026'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const insuranceOptions = [
    'Auto Insurance',
    'Medicare',
    'Final Expense / Life Insurance',
    'Home Improvement',
    'ACA / Obama Care',
    'Business Insurance',
    'Not sure - Need advice'
  ];

  const callTimeOptions = [
    'Anytime',
    'Morning (9AM - 12PM)',
    'Afternoon (12PM - 5PM)',
    'Evening (5PM - 8PM)'
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      
      {/* Animated Background Elements - Orange */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FB923C]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FB923C]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FB923C]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Trust Bar - Orange */}
      <div className="bg-[#FB923C]/10 border-b border-[#FB923C]/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-[#475569]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#FB923C] rounded-full"></span>
              🔒 256-bit SSL Encryption
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#FB923C] rounded-full"></span>
              ✓ Fully DNC & TCPA Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#FB923C] rounded-full"></span>
              📞 USA Licensed Agents
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#FB923C] rounded-full"></span>
              ⭐ 4.9/5 Rating (2,500+ Reviews)
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Header - Soft Stone */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#FB923C]/10 backdrop-blur-sm rounded-full px-5 py-2 mb-5 border border-[#FB923C]/20 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB923C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB923C]"></span>
              </span>
              <span className="text-[#FB923C] text-sm font-semibold tracking-wide">🇺🇸 Licensed U.S. Insurance Advisors</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1E293B] mb-4 tracking-tight">
              Premium Insurance Quotes <br className="hidden sm:block"/><span className="text-[#FB923C]">Delivered with Confidence</span>
            </h1>
            <p className="text-[#475569] text-lg max-w-2xl mx-auto">
              Connect with licensed USA agents to compare the most competitive auto, healthcare, and specialty insurance options — fast, secure, and compliant.
            </p>
          </div>

          {/* Main Content - 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN - Visitor Info & Trust Signals */}
            <div className="space-y-6">
              
              {/* IP & Location Card - Soft Stone */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E5DF] shadow-[0_4px_12px_rgba(30,41,59,0.06)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-[#FB923C]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#FB923C]">📍</span>
                  </div>
                  <h3 className="text-[#1E293B] font-bold text-lg">Your Location Details</h3>
                </div>
                
                {loading ? (
                  <div className="text-center py-4">
                    <div className="animate-pulse flex justify-center">
                      <div className="w-8 h-8 border-4 border-[#FB923C] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-[#475569] text-sm mt-2">Detecting your location...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[#E8E5DF]">
                      <span className="text-[#475569] text-sm">🌆 City/State:</span>
                      <span className="text-[#1E293B] font-semibold">{visitorInfo.city}, {visitorInfo.state}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#E8E5DF]">
                      <span className="text-[#475569] text-sm">📮 ZIP Code:</span>
                      <span className="text-[#1E293B] font-semibold">{visitorInfo.zip}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#E8E5DF]">
                      <span className="text-[#475569] text-sm">🖥️ IP Address:</span>
                      <span className="text-[#1E293B] font-semibold text-sm">{visitorInfo.ip}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#E8E5DF]">
                      <span className="text-[#475569] text-sm">📱 Device:</span>
                      <span className="text-[#1E293B] font-semibold">{visitorInfo.device}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#E8E5DF]">
                      <span className="text-[#475569] text-sm">🌐 Browser:</span>
                      <span className="text-[#1E293B] font-semibold">{visitorInfo.browser}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#E8E5DF]">
                      <span className="text-[#475569] text-sm">💻 OS:</span>
                      <span className="text-[#1E293B] font-semibold">{visitorInfo.os}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#475569] text-sm">⏰ Current Time:</span>
                      <span className="text-[#FB923C] font-semibold text-sm">{visitorInfo.timestamp}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Badges - Orange */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#E8E5DF] shadow-[0_4px_12px_rgba(30,41,59,0.06)]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-[#FB923C]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#FB923C]">✅</span>
                  </div>
                  <h3 className="text-[#1E293B] font-bold text-lg">Why Clients Choose Artist Media</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-[#F5F5F0] rounded-xl border border-[#E8E5DF]">
                    <div className="text-2xl">🏆</div>
                    <div className="text-[#1E293B] font-semibold text-sm">Top-rated Service</div>
                    <div className="text-[#475569] text-xs">Trusted by 100+ call centers</div>
                  </div>
                  <div className="text-center p-3 bg-[#F5F5F0] rounded-xl border border-[#E8E5DF]">
                    <div className="text-2xl">🔒</div>
                    <div className="text-[#1E293B] font-semibold text-sm">Strict Compliance</div>
                    <div className="text-[#475569] text-xs">TCPA & DNC safe</div>
                  </div>
                  <div className="text-center p-3 bg-[#F5F5F0] rounded-xl border border-[#E8E5DF]">
                    <div className="text-2xl">⚡</div>
                    <div className="text-[#1E293B] font-semibold text-sm">Rapid Response</div>
                    <div className="text-[#475569] text-xs">Quote matching in minutes</div>
                  </div>
                  <div className="text-center p-3 bg-[#F5F5F0] rounded-xl border border-[#E8E5DF]">
                    <div className="text-2xl">💰</div>
                    <div className="text-[#1E293B] font-semibold text-sm">Competitive Quotes</div>
                    <div className="text-[#475569] text-xs">Access to leading carriers</div>
                  </div>
                </div>
              </div>

              {/* Live Agent Status - Orange */}
              <div className="bg-gradient-to-r from-[#FB923C]/15 to-[#F97316]/15 rounded-2xl p-5 border border-[#FB923C]/20 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[#1E293B] text-sm font-bold">🟢 Licensed Agents Available Now</span>
                </div>
                <p className="text-[#475569] text-sm">Average connection time: <span className="text-[#1E293B] font-bold">under 1 minute</span></p>
                <p className="text-[#94A3B8] text-xs mt-2">🇺🇸 Licensed USA agents · Secure, compliant service</p>
              </div>
            </div>

            {/* RIGHT COLUMN - Trusted Form */}
            <div className="bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] overflow-hidden border border-[#E8E5DF]">
              <div className="bg-gradient-to-r from-[#FB923C] to-[#F97316] px-6 py-5">
                <h2 className="text-white text-2xl font-black">Request a Tailored Quote</h2>
                <p className="text-white/80 text-sm">Submit your details and our licensed team will prepare your best available options.</p>
              </div>

              {submitStatus && (
                <div className={`m-6 p-4 rounded-xl border ${
                  submitStatus.success ? 'bg-[#FB923C]/10 border-[#FB923C]/20 text-[#1E293B]' : 'bg-red-50 border-red-200 text-red-700'
                }`}>
                  <p className="font-medium">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                    Full Name <span className="text-[#FB923C]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-[#FAFAF8]"
                    placeholder="John Smith" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                    Phone Number <span className="text-[#FB923C]">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-[#FAFAF8]"
                    placeholder="(313) 581-7026" 
                  />
                  <p className="text-xs text-[#FB923C] mt-1">✓ USA licensed agents will call you</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-[#FAFAF8]"
                    placeholder="john@example.com" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                    Insurance Type <span className="text-[#FB923C]">*</span>
                  </label>
                  <select 
                    name="insuranceType" 
                    value={formData.insuranceType} 
                    onChange={handleChange} 
                    required 
                    className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-[#FAFAF8]"
                  >
                    <option value="">Select Insurance Type</option>
                    {insuranceOptions.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1E293B] mb-2">Best Time to Call</label>
                  <select 
                    name="bestTimeToCall" 
                    value={formData.bestTimeToCall} 
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-[#FAFAF8]"
                  >
                    <option value="">Select preferred time</option>
                    {callTimeOptions.map((option, idx) => (
                      <option key={idx} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-[#FB923C] text-white py-4 rounded-xl font-black text-lg hover:bg-[#F97316] transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Sending Request...
                    </span>
                  ) : (
                    'Send My Quote Request →'
                  )}
                </button>

                <p className="text-center text-xs text-[#94A3B8]">
                  🔒 Secure submission — your details are protected with encrypted transport.
                  <br />A licensed agent will contact you to discuss tailored coverage options.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#475569]">
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#FB923C] rounded-full"></span>
                🏢 Licensed in all 50 states
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#FB923C] rounded-full"></span>
                🔒 Secure encrypted intake
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#FB923C] rounded-full"></span>
                📞 Fast response from licensed agents
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1 h-1 bg-[#FB923C] rounded-full"></span>
                ⭐ Trusted by call centers nationwide
              </span>
            </div>
            <div className="mt-6 pt-6 border-t border-[#E8E5DF] text-xs text-[#94A3B8]">
              © 2024 Artist Media. All rights reserved.
            </div>
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
      `}</style>
    </div>
  );
};

export default ClientLandingPage;