// import React, { useState, useEffect } from 'react';
// import { supabase } from '../lib/supabase';

// const LeadCaptureForm = () => {
//   // DID Number to show after submission
//   const DID_NUMBER = "+1 (833) 711-8975";
  
//   const [formData, setFormData] = useState({
//     cxName: '',
//     cxPhone: '',
//     zipCode: '',
//     area: '',
//     county: '',
//     state: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);
//   const [isLookingUp, setIsLookingUp] = useState(false);
//   const [focusedField, setFocusedField] = useState(null);
//   const [showDID, setShowDID] = useState(false);
//   const [visitorIP, setVisitorIP] = useState('Detecting...');

//   // Get visitor IP address on page load
//   useEffect(() => {
//     const detectIP = async () => {
//       try {
//         let ip = null;
        
//         // Try ipify first
//         try {
//           const response = await fetch('https://api.ipify.org?format=json');
//           const data = await response.json();
//           ip = data.ip;
//         } catch (e) {
//           console.log('ipify failed');
//         }
        
//         // Fallback to ipapi
//         if (!ip) {
//           try {
//             const response = await fetch('https://ipapi.co/json/');
//             const data = await response.json();
//             ip = data.ip;
//           } catch (e) {
//             console.log('ipapi failed');
//           }
//         }
        
//         // Final fallback
//         if (!ip) {
//           const response = await fetch('https://api.ip.sb/ip');
//           ip = await response.text();
//         }
        
//         setVisitorIP(ip ? ip.trim() : 'Unable to detect');
//       } catch (error) {
//         console.error('IP detection error:', error);
//         setVisitorIP('Unable to detect');
//       }
//     };
//     detectIP();
//   }, []);

//   // Lookup location by ZIP code
//   const lookupZipCode = async (zip) => {
//     if (!zip || zip.length < 5) return;
    
//     setIsLookingUp(true);
    
//     try {
//       const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
      
//       if (response.ok) {
//         const data = await response.json();
        
//         if (data && data.places && data.places.length > 0) {
//           const place = data.places[0];
//           const detectedCity = place['place name'];
//           const detectedState = place['state'];
//           const detectedStateAbbr = place['state abbreviation'];
          
//           setFormData(prev => ({
//             ...prev,
//             area: detectedCity,
//             county: detectedState,
//             state: detectedStateAbbr
//           }));
          
//           setSubmitStatus({
//             success: true,
//             message: `✓ Location detected: ${detectedCity}, ${detectedState}`
//           });
          
//           setTimeout(() => setSubmitStatus(null), 3000);
//         }
//       } else {
//         setSubmitStatus({
//           success: false,
//           message: '❌ ZIP code not found. Please enter a valid USA ZIP code.'
//         });
//         setTimeout(() => setSubmitStatus(null), 3000);
//       }
//     } catch (error) {
//       console.error('ZIP lookup error:', error);
//       setSubmitStatus({
//         success: false,
//         message: '❌ Error detecting location. Please enter details manually.'
//       });
//       setTimeout(() => setSubmitStatus(null), 3000);
//     } finally {
//       setIsLookingUp(false);
//     }
//   };

//   // Handle ZIP code input with auto-detection
//   const handleZipChange = (e) => {
//     const zip = e.target.value;
//     setFormData(prev => ({ ...prev, zipCode: zip }));
    
//     if (zip.length === 5) {
//       lookupZipCode(zip);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Prepare data matching YOUR EXACT table columns
//       const leadData = {
//         cx_name: formData.cxName,
//         cx_phone: formData.cxPhone,
//         zip_code: formData.zipCode,
//         area: formData.area,
//         county: formData.county,
//         state: formData.state,
//         visitor_ip: visitorIP,  // Added this column
//         status: 'new',          // Default status
//         assigned_to: null       // Not assigned yet
//       };
      
//       console.log('Submitting data:', leadData);
      
//       const { data, error } = await supabase
//         .from('lead_captures')
//         .insert([leadData])
//         .select();

//       if (error) {
//         console.error('Supabase error details:', error);
//         throw error;
//       }
      
//       console.log('Successfully saved:', data);

//       // Show DID number after successful submission
//       setShowDID(true);
      
//       setSubmitStatus({
//         success: true,
//         message: '✓ Lead captured successfully! An agent will contact you shortly.'
//       });
      
//       setFormData({
//         cxName: '',
//         cxPhone: '',
//         zipCode: '',
//         area: '',
//         county: '',
//         state: ''
//       });
      
//       // Hide DID after 10 seconds
//       setTimeout(() => setShowDID(false), 10000);
//       setTimeout(() => setSubmitStatus(null), 6000);
//     } catch (error) {
//       console.error('Error submitting lead:', error);
//       setSubmitStatus({
//         success: false,
//         message: '❌ Something went wrong. Please try again or call us directly at (313) 581-7026.'
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const usStates = [
//     { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' },
//     { code: 'AZ', name: 'Arizona' }, { code: 'AR', name: 'Arkansas' },
//     { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
//     { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' },
//     { code: 'FL', name: 'Florida' }, { code: 'GA', name: 'Georgia' },
//     { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
//     { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' },
//     { code: 'IA', name: 'Iowa' }, { code: 'KS', name: 'Kansas' },
//     { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
//     { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' },
//     { code: 'MA', name: 'Massachusetts' }, { code: 'MI', name: 'Michigan' },
//     { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
//     { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' },
//     { code: 'NE', name: 'Nebraska' }, { code: 'NV', name: 'Nevada' },
//     { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
//     { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' },
//     { code: 'NC', name: 'North Carolina' }, { code: 'ND', name: 'North Dakota' },
//     { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
//     { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' },
//     { code: 'RI', name: 'Rhode Island' }, { code: 'SC', name: 'South Carolina' },
//     { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
//     { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' },
//     { code: 'VT', name: 'Vermont' }, { code: 'VA', name: 'Virginia' },
//     { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
//     { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
//       <div className="max-w-2xl mx-auto px-4">
        
//         {/* Header */}
//         <div className="text-center mb-8">
//           <div className="inline-block bg-emerald-500/20 rounded-full px-4 py-1 mb-4">
//             <span className="text-emerald-400 text-sm font-semibold">🇺🇸 USA LICENSED INSURANCE AGENTS</span>
//           </div>
//           <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
//             Get Connected With <span className="text-emerald-400">A Live Agent</span>
//           </h1>
//           <p className="text-gray-300 max-w-xl mx-auto">
//             Fill out the form below and one of our licensed agents will contact you.
//           </p>
//         </div>

//         {/* IP Address Display */}
//         <div className="text-center mb-4">
//           <p className="text-xs text-gray-400">
//             🌐 Your IP Address: <span className="text-emerald-400 font-mono">{visitorIP}</span>
//           </p>
//         </div>

//         {/* Main Form Card */}
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 px-6 py-5">
//             <h2 className="text-white text-2xl font-bold">Quick Lead Capture</h2>
//             <p className="text-white/80 text-sm">Your information is secure and confidential</p>
//           </div>

//           {/* Success/Error Message */}
//           {submitStatus && (
//             <div className={`m-6 p-4 rounded-xl ${submitStatus.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
//               <p className={submitStatus.success ? 'text-green-700' : 'text-red-700'}>{submitStatus.message}</p>
//             </div>
//           )}

//           {/* DID Display - Only shows after form submission */}
//           {showDID && (
//             <div className="mx-6 mt-4 p-4 rounded-xl bg-emerald-50 border-2 border-emerald-400 text-center animate-fadeIn">
//               <div className="flex items-center justify-center gap-3 mb-2">
//                 <span className="text-3xl">📞</span>
//                 <span className="text-emerald-600 font-bold text-lg">Your Dedicated DID Number:</span>
//               </div>
//               <div className="text-3xl md:text-4xl font-bold text-emerald-700 tracking-wide">
//                 {DID_NUMBER}
//               </div>
//               <p className="text-xs text-gray-500 mt-2">
//                 Agents will call you from this number. Please save it to avoid missing the call.
//               </p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="p-6 space-y-5">
//             {/* Full Name */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Full Name <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="cxName"
//                 value={formData.cxName}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('cxName')}
//                 onBlur={() => setFocusedField(null)}
//                 required
//                 className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
//                   focusedField === 'cxName'
//                     ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//                 placeholder="John Doe"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 Phone Number <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="tel"
//                 name="cxPhone"
//                 value={formData.cxPhone}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('cxPhone')}
//                 onBlur={() => setFocusedField(null)}
//                 required
//                 className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
//                   focusedField === 'cxPhone'
//                     ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//                 placeholder="(313) 581-7026"
//               />
//               <p className="text-xs text-gray-400 mt-1">✓ USA licensed agents will call you</p>
//             </div>

//             {/* ZIP Code with Auto-Detect */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 ZIP Code <span className="text-red-500">*</span>
//                 {isLookingUp && <span className="text-xs text-emerald-500 ml-2">🔍 Looking up location...</span>}
//               </label>
//               <input
//                 type="text"
//                 name="zipCode"
//                 value={formData.zipCode}
//                 onChange={handleZipChange}
//                 onFocus={() => setFocusedField('zipCode')}
//                 onBlur={() => setFocusedField(null)}
//                 maxLength="5"
//                 required
//                 className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
//                   focusedField === 'zipCode'
//                     ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//                 placeholder="Enter 5-digit ZIP code"
//               />
//               <p className="text-xs text-gray-400 mt-1">✓ Enter ZIP code to auto-detect your city and state</p>
//             </div>

//             {/* City / Area */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 City / Area <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="area"
//                 value={formData.area}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('area')}
//                 onBlur={() => setFocusedField(null)}
//                 required
//                 className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
//                   focusedField === 'area'
//                     ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//                 placeholder="Auto-detected from ZIP"
//               />
//             </div>

//             {/* County */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 County <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="county"
//                 value={formData.county}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('county')}
//                 onBlur={() => setFocusedField(null)}
//                 required
//                 className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 ${
//                   focusedField === 'county'
//                     ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//                 placeholder="Auto-detected from ZIP"
//               />
//             </div>

//             {/* State Dropdown */}
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">
//                 State <span className="text-red-500">*</span>
//               </label>
//               <select
//                 name="state"
//                 value={formData.state}
//                 onChange={handleChange}
//                 onFocus={() => setFocusedField('state')}
//                 onBlur={() => setFocusedField(null)}
//                 required
//                 className={`w-full px-4 py-3 border-2 rounded-xl outline-none transition-all duration-200 bg-white ${
//                   focusedField === 'state'
//                     ? 'border-emerald-500 shadow-lg ring-2 ring-emerald-500/20'
//                     : 'border-gray-300 hover:border-gray-400'
//                 }`}
//               >
//                 <option value="">Select State</option>
//                 {usStates.map(state => (
//                   <option key={state.code} value={state.code}>{state.name} ({state.code})</option>
//                 ))}
//               </select>
//               {formData.state && (
//                 <p className="text-xs text-emerald-500 mt-1">✓ State auto-detected from ZIP code</p>
//               )}
//             </div>

//             {/* Legal Consent Checkbox */}
//             <div className="flex items-start gap-3 mt-4">
//               <input
//                 type="checkbox"
//                 id="consent"
//                 required
//                 className="w-5 h-5 mt-1 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500"
//               />
//               <label htmlFor="consent" className="text-sm text-gray-600">
//                 I agree to receive calls as explained below.
//               </label>
//             </div>

//             <p className="text-xs text-gray-400 mt-2 leading-relaxed">
//               By clicking "Get My Free Quote", I agree and give express consent by electronic signature 
//               to receive marketing communications at any time regarding insurance services via 
//               automated telephone dialing system and/or artificial voice and/or pre-recorded calls 
//               and/or SMS/MMS and other forms of telemarketing purposes.
//             </p>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//             >
//               {isSubmitting ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
//                   </svg>
//                   Processing Your Request...
//                 </span>
//               ) : (
//                 <span className="flex items-center justify-center gap-2">
//                   Get My Free Quote
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </span>
//               )}
//             </button>
//           </form>
//         </div>

//         {/* Trust Badges */}
//         <div className="mt-8 text-center">
//           <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
//             <span className="flex items-center gap-1">🔒 256-bit SSL Encrypted</span>
//             <span className="flex items-center gap-1">✓ DNC & TCPA Compliant</span>
//             <span className="flex items-center gap-1">⭐ 4.9/5 Rating</span>
//           </div>
//           <div className="mt-4 pt-4 border-t border-white/10 text-xs text-gray-500">
//             © 2024 Artist Media. All rights reserved.
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes spin { to { transform: rotate(360deg); } }
//         .animate-spin { animation: spin 1s linear infinite; }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LeadCaptureForm;


import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const LeadCaptureForm = () => {
  // DID Number to show after submission
  const DID_NUMBER = "+1 (833) 711-8975";
  
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

  // Get visitor IP address on page load
  useEffect(() => {
    const detectIP = async () => {
      try {
        let ip = null;
        
        try {
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          ip = data.ip;
        } catch (e) {
          console.log('ipify failed');
        }
        
        if (!ip) {
          try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            ip = data.ip;
          } catch (e) {
            console.log('ipapi failed');
          }
        }
        
        if (!ip) {
          const response = await fetch('https://api.ip.sb/ip');
          ip = await response.text();
        }
        
        setVisitorIP(ip ? ip.trim() : 'Unable to detect');
      } catch (error) {
        console.error('IP detection error:', error);
        setVisitorIP('Unable to detect');
      }
    };
    detectIP();
  }, []);

  // Lookup location by ZIP code
  const lookupZipCode = async (zip) => {
    if (!zip || zip.length < 5) return;
    
    setIsLookingUp(true);
    
    try {
      const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
      
      if (response.ok) {
        const data = await response.json();
        
        if (data && data.places && data.places.length > 0) {
          const place = data.places[0];
          const detectedCity = place['place name'];
          const detectedState = place['state'];
          const detectedStateAbbr = place['state abbreviation'];
          
          setFormData(prev => ({
            ...prev,
            area: detectedCity,
            county: detectedState,
            state: detectedStateAbbr
          }));
          
          setSubmitStatus({
            success: true,
            message: `✓ Location detected: ${detectedCity}, ${detectedState}`
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
      console.error('ZIP lookup error:', error);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 py-12 md:py-16">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-sm rounded-full px-5 py-2 mb-5 border border-emerald-500/30 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-sm font-semibold tracking-wide">🇺🇸 USA LICENSED AGENTS ONLINE NOW</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Get Connected With{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              A Live Agent
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Fill out the form below and one of our licensed insurance agents will contact you within minutes.
          </p>
        </div>

        {/* IP Address Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 border border-white/10">
            <p className="text-xs text-gray-400">
              🌐 Your IP Address: <span className="text-emerald-400 font-mono font-semibold">{visitorIP}</span>
            </p>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden transition-all duration-300 hover:shadow-emerald-500/10">
          
          {/* Card Header */}
          <div className="bg-gradient-to-r from-emerald-600/30 to-emerald-700/30 px-8 py-6 border-b border-white/10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="text-white text-2xl font-bold">Quick Lead Capture</h2>
                <p className="text-gray-300 text-sm mt-1">Your information is 256-bit SSL encrypted</p>
              </div>
              <div className="flex gap-2">
                <div className="bg-white/10 rounded-full px-3 py-1.5 text-white text-xs flex items-center gap-1 backdrop-blur-sm">
                  <span>🔒</span> SSL Secure
                </div>
                <div className="bg-white/10 rounded-full px-3 py-1.5 text-white text-xs flex items-center gap-1 backdrop-blur-sm">
                  <span>✓</span> DNC Compliant
                </div>
              </div>
            </div>
          </div>

          {/* Success/Error Message */}
          {submitStatus && (
            <div className={`mx-8 mt-6 p-4 rounded-xl backdrop-blur-sm ${
              submitStatus.success 
                ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300' 
                : 'bg-red-500/20 border border-red-500/30 text-red-300'
            } animate-slideDown`}>
              <div className="flex items-center gap-3">
                <span className="text-2xl">{submitStatus.success ? '🎉' : '⚠️'}</span>
                <p className="font-medium">{submitStatus.message}</p>
              </div>
            </div>
          )}

          {/* DID Display */}
          {showDID && (
            <div className="mx-8 mt-6 p-5 rounded-xl bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border-2 border-emerald-400/50 text-center backdrop-blur-sm animate-slideDown">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-3xl animate-bounce">📞</span>
                <span className="text-emerald-300 font-bold text-lg">Your Dedicated DID Number:</span>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white tracking-wide bg-black/20 inline-block px-6 py-2 rounded-xl">
                {DID_NUMBER}
              </div>
              <p className="text-xs text-emerald-200/70 mt-3">
                Agents will call you from this number. Please save it to avoid missing the call.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Name Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Full Name <span className="text-emerald-400">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'cxName' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">👤</span>
                <input
                  type="text"
                  name="cxName"
                  value={formData.cxName}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('cxName')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border-2 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-400 ${
                    focusedField === 'cxName'
                      ? 'border-emerald-400 shadow-lg shadow-emerald-500/20 bg-white/15'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                  placeholder="John Doe"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                Phone Number <span className="text-emerald-400">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'cxPhone' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">📞</span>
                <input
                  type="tel"
                  name="cxPhone"
                  value={formData.cxPhone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('cxPhone')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border-2 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-400 ${
                    focusedField === 'cxPhone'
                      ? 'border-emerald-400 shadow-lg shadow-emerald-500/20 bg-white/15'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                  placeholder="(313) 581-7026"
                />
              </div>
              <p className="text-xs text-emerald-400/70 mt-1 flex items-center gap-1">✓ USA licensed agents will call you</p>
            </div>

            {/* ZIP Code Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                ZIP Code <span className="text-emerald-400">*</span>
                {isLookingUp && <span className="text-xs text-emerald-400 ml-2 animate-pulse">🔍 Looking up location...</span>}
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'zipCode' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">📍</span>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleZipChange}
                  onFocus={() => setFocusedField('zipCode')}
                  onBlur={() => setFocusedField(null)}
                  maxLength="5"
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border-2 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-400 ${
                    focusedField === 'zipCode'
                      ? 'border-emerald-400 shadow-lg shadow-emerald-500/20 bg-white/15'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                  placeholder="Enter 5-digit ZIP code"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">✓ Enter ZIP code to auto-detect your city and state</p>
            </div>

            {/* City Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                City / Area <span className="text-emerald-400">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'area' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🏙️</span>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('area')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border-2 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-400 ${
                    focusedField === 'area'
                      ? 'border-emerald-400 shadow-lg shadow-emerald-500/20 bg-white/15'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                  placeholder="Auto-detected from ZIP"
                />
              </div>
            </div>

            {/* County Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                County <span className="text-emerald-400">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'county' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🗺️</span>
                <input
                  type="text"
                  name="county"
                  value={formData.county}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('county')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-4 py-3.5 bg-white/10 border-2 rounded-xl outline-none transition-all duration-300 text-white placeholder-gray-400 ${
                    focusedField === 'county'
                      ? 'border-emerald-400 shadow-lg shadow-emerald-500/20 bg-white/15'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                  placeholder="Auto-detected from ZIP"
                />
              </div>
            </div>

            {/* State Dropdown */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-200 mb-2">
                State <span className="text-emerald-400">*</span>
              </label>
              <div className={`relative transition-all duration-300 ${focusedField === 'state' ? 'transform scale-[1.01]' : ''}`}>
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🇺🇸</span>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('state')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className={`w-full pl-12 pr-10 py-3.5 bg-white/10 border-2 rounded-xl outline-none transition-all duration-300 appearance-none text-white ${
                    focusedField === 'state'
                      ? 'border-emerald-400 shadow-lg shadow-emerald-500/20 bg-white/15'
                      : 'border-white/20 hover:border-white/30'
                  }`}
                >
                  <option value="" className="bg-slate-800 text-gray-400">Select State</option>
                  {usStates.map(state => (
                    <option key={state.code} value={state.code} className="bg-slate-800 text-white">{state.name} ({state.code})</option>
                  ))}
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">▼</span>
              </div>
              {formData.state && (
                <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1">✓ State auto-detected from ZIP code</p>
              )}
            </div>

            {/* Legal Consent */}
            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="w-5 h-5 mt-0.5 text-emerald-500 rounded border-white/30 bg-white/10 focus:ring-emerald-500 focus:ring-2"
                />
                <label htmlFor="consent" className="text-sm text-gray-300 leading-relaxed">
                  I agree to receive calls as explained below.
                </label>
              </div>
              <p className="text-xs text-gray-400 mt-3 leading-relaxed pl-8">
                By clicking "Get My Free Quote", I agree and give express consent by electronic signature 
                to receive marketing communications at any time regarding insurance services via 
                automated telephone dialing system and/or artificial voice and/or pre-recorded calls 
                and/or SMS/MMS and other forms of telemarketing purposes.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-emerald-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 active:translate-y-0"
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

        {/* Trust Indicators Footer */}
        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span>🔒 256-bit SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span>✓ DNC & TCPA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span>⭐ 4.9/5 Rating (2,500+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span>📞 24/7 Customer Support</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/10 text-xs text-gray-500">
            © 2024 Artist Media. All rights reserved. | Privacy Policy | Terms of Service
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