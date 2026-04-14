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

  // Get current timestamp in USA format
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

  // Get device info
  const getDeviceInfo = () => {
    if (isMobile) return '📱 Mobile Phone';
    if (isTablet) return '📟 Tablet';
    return '💻 Desktop Computer';
  };

  // Get location using multiple APIs
  useEffect(() => {
    const detectLocation = async () => {
      setLoading(true);
      
      // Set basic info that doesn't need API
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
      
      // Try multiple APIs
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
            
            // Extract IP
            ipAddress = data.ip || data.query;
            
            // Extract location data
            if (data.city && data.city !== 'Unknown' && data.city !== 'none') {
              cityName = data.city;
              stateName = data.region || data.regionName;
              zipCode = data.postal || data.zip;
              break; // Stop if we found good data
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      
      {/* Top Trust Bar */}
      <div className="bg-emerald-600/20 border-b border-emerald-500/30">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-300">
            <span className="flex items-center gap-1">🔒 256-bit SSL Encrypted</span>
            <span className="flex items-center gap-1">✓ DNC & TCPA Compliant</span>
            <span className="flex items-center gap-1">📞 24/7 USA Support</span>
            <span className="flex items-center gap-1">⭐ 4.9/5 (2,500+ Reviews)</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block bg-emerald-500/20 rounded-full px-4 py-1 mb-4">
              <span className="text-emerald-400 text-sm font-semibold">🇺🇸 USA LICENSED INSURANCE AGENTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Save <span className="text-emerald-400">Up to 40%</span> on Insurance
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get free quotes from top-rated USA insurers. No obligation. No spam. Just savings.
            </p>
          </div>

          {/* Main Content - 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN - Visitor Info & Trust Signals */}
            <div className="space-y-6">
              
              {/* IP & Location Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400">📍</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">Your Location Details</h3>
                </div>
                
                {loading ? (
                  <div className="text-center py-4">
                    <div className="animate-pulse flex justify-center">
                      <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-gray-400 text-sm mt-2">Detecting your location...</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300 text-sm">🌆 City/State:</span>
                      <span className="text-white font-semibold">{visitorInfo.city}, {visitorInfo.state}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300 text-sm">📮 ZIP Code:</span>
                      <span className="text-white font-semibold">{visitorInfo.zip}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300 text-sm">🖥️ IP Address:</span>
                      <span className="text-white font-semibold text-sm">{visitorInfo.ip}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300 text-sm">📱 Device:</span>
                      <span className="text-white font-semibold">{visitorInfo.device}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300 text-sm">🌐 Browser:</span>
                      <span className="text-white font-semibold">{visitorInfo.browser}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-gray-300 text-sm">💻 OS:</span>
                      <span className="text-white font-semibold">{visitorInfo.os}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-300 text-sm">⏰ Current Time:</span>
                      <span className="text-emerald-400 font-semibold text-sm">{visitorInfo.timestamp}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Trust Badges */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <span className="text-emerald-400">✅</span>
                  </div>
                  <h3 className="text-white font-bold text-lg">Why USA Clients Trust Us</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl">🏆</div>
                    <div className="text-white font-semibold text-sm">A+ Rated</div>
                    <div className="text-gray-400 text-xs">Better Business Bureau</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl">🔒</div>
                    <div className="text-white font-semibold text-sm">100% Compliant</div>
                    <div className="text-gray-400 text-xs">DNC & TCPA Certified</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl">⚡</div>
                    <div className="text-white font-semibold text-sm">Instant Connect</div>
                    <div className="text-gray-400 text-xs">Live transfers</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-xl">
                    <div className="text-2xl">💰</div>
                    <div className="text-white font-semibold text-sm">Best Rate</div>
                    <div className="text-gray-400 text-xs">50+ insurers</div>
                  </div>
                </div>
              </div>

              {/* Live Agent Status */}
              <div className="bg-gradient-to-r from-emerald-600/20 to-emerald-800/20 rounded-2xl p-5 border border-emerald-500/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-green-400 text-sm font-semibold">🟢 7 Licensed Agents Online Now</span>
                </div>
                <p className="text-gray-300 text-sm">Average response time: <span className="text-white font-bold">32 seconds</span></p>
                <p className="text-gray-400 text-xs mt-2">🇺🇸 USA-based licensed agents only</p>
              </div>
            </div>

            {/* RIGHT COLUMN - Trusted Form */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 px-6 py-5">
                <h2 className="text-white text-2xl font-bold">Get Your Free Quote</h2>
                <p className="text-white/80 text-sm">Fill out the form below. No obligation. No spam.</p>
              </div>

              {submitStatus && (
                <div className={`m-6 p-4 rounded-xl ${submitStatus.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <p className={submitStatus.success ? 'text-green-700' : 'text-red-700'}>{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" placeholder="John Smith" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" placeholder="(313) 581-7026" />
                  <p className="text-xs text-gray-400 mt-1">✓ USA licensed agents will call you</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Insurance Type <span className="text-red-500">*</span></label>
                  <select name="insuranceType" value={formData.insuranceType} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
                    <option value="">Select Insurance Type</option>
                    {insuranceOptions.map((option, idx) => (<option key={idx} value={option}>{option}</option>))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Best Time to Call</label>
                  <select name="bestTimeToCall" value={formData.bestTimeToCall} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
                    <option value="">Select preferred time</option>
                    {callTimeOptions.map((option, idx) => (<option key={idx} value={option}>{option}</option>))}
                  </select>
                </div>

                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 disabled:opacity-50 shadow-lg">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Connecting to an Agent...
                    </span>
                  ) : (
                    'Get My Free Quote →'
                  )}
                </button>

                <p className="text-center text-xs text-gray-400">
                  🔒 Your information is secure. By submitting, you agree to our Privacy Policy.
                  <br />You consent to be contacted by a licensed insurance agent.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>🏢 Licensed in all 50 states</span>
              <span>🔒 256-bit SSL Encrypted</span>
              <span>📞 24/7 Customer Support</span>
              <span>⭐ 4.9/5 Rating</span>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-gray-500">
              © 2024 Artist Media. All rights reserved. | Privacy Policy | Terms of Service
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ClientLandingPage;