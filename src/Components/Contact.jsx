import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vertical: '',
    monthlyVolume: '',
    message: '',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company || null,
            vertical: formData.vertical || null,
            monthly_volume: formData.monthlyVolume || null,
            message: formData.message,
            source: 'contact_form'
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      if (formData.newsletter) {
        const { error: subError } = await supabase
          .from('subscribers')
          .insert([{ email: formData.email }]);
        
        if (subError) {
          console.log('Newsletter signup error:', subError);
        }
      }

      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you. Your inquiry has been received; response times may vary.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        vertical: '',
        monthlyVolume: '',
        message: '',
        newsletter: false
      });
      
      setTimeout(() => setFormStatus(prev => ({ ...prev, submitted: false })), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again or call us directly at +18484671057.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const verticalOptions = [
    'Website information',
    'Auto insurance topic',
    'Advertising disclosure',
    'Privacy question',
    'Other'
  ];

  const volumeOptions = [
    'General question',
    'Content correction',
    'Privacy request',
    'Business inquiry'
  ];

  return (
    <div className="bg-[#F5F5F0] min-h-screen">
      
      {/* Hero Section - Soft Stone with Orange */}
      <section className="relative bg-[#F5F5F0] py-24 overflow-hidden border-b border-[#E8E5DF]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#FB923C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FB923C] rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-[#FB923C]/10 backdrop-blur-sm rounded-full mb-6 border border-[#FB923C]/20">
            <span className="text-[#FB923C] text-sm font-semibold tracking-wider">CONTACT ZARVANTAMEDIA</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#1E293B]">
            Questions About <span className="text-[#FB923C]">Auto Insurance?</span>
          </h1>
          <p className="text-xl text-[#475569] max-w-2xl mx-auto">
            Send a general inquiry about this website or its auto insurance information. We are not an insurance company and cannot determine coverage or rates.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Contact Card - Orange Theme */}
            <div className="bg-[#1E293B] rounded-2xl shadow-xl p-8 text-white border border-[#2A3A4A]">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>📞</span> Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#FB923C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FB923C] transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#FB923C] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">Phone</p>
                    <a href="tel:+18484671057" className="text-xl font-semibold hover:text-[#FB923C] transition">+18484671057</a>
                    <p className="text-xs text-[#64748B] mt-1">Mon-Fri: 9am - 8pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#FB923C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FB923C] transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#FB923C] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">Email</p>
                    <a href="mailto:artistmedia.digital@gmail.com" className="hover:text-[#FB923C] transition break-all">artistmedia.digital@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-[#FB923C]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FB923C] transition-colors duration-300">
                    <svg className="w-6 h-6 text-[#FB923C] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[#94A3B8]">Headquarters</p>
                    <p className="font-medium">Michigan, USA</p>
                    <p className="text-sm text-[#64748B]">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat Card */}
            <div className="bg-[#FAFAF8] rounded-2xl shadow-lg p-6 border border-[#E8E5DF] hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#FB923C]/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B]">Email Inquiries</h4>
                  <p className="text-sm text-[#475569]">For general questions, contact us by email.</p>
                  <a href="mailto:artistmedia.digital@gmail.com" className="text-[#FB923C] text-sm font-semibold mt-1 hover:text-[#F97316] transition">Send an email →</a>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-[#FAFAF8] rounded-2xl p-6 border border-[#E8E5DF]">
              <h4 className="font-bold text-[#1E293B] mb-4 flex items-center gap-2">🕒 Contact Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#475569]">Monday - Friday</span>
                  <span className="font-medium text-[#1E293B]">Response times vary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#475569]">Saturday</span>
                  <span className="font-medium text-[#1E293B]">Email is available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#475569]">Sunday</span>
                  <span className="font-medium text-[#1E293B]">No fixed response time</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-[#E8E5DF]">
                <p className="text-xs text-[#94A3B8]">Response times may vary.</p>
              </div>
            </div>

            {/* Trust Badges - Orange */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="bg-[#FAFAF8] rounded-full px-4 py-2 shadow-sm border border-[#E8E5DF]">
                  <span className="text-sm text-[#475569]">Independent information resource</span>
              </div>
              <div className="bg-[#FAFAF8] rounded-full px-4 py-2 shadow-sm border border-[#E8E5DF]">
                <span className="text-sm text-[#475569]">Provider terms may vary</span>
              </div>
              <div className="bg-[#FAFAF8] rounded-full px-4 py-2 shadow-sm border border-[#E8E5DF]">
                <span className="text-sm text-[#475569]">No insurer affiliation implied</span>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAF8] rounded-2xl shadow-xl border border-[#E8E5DF] overflow-hidden">
              <div className="bg-[#FB923C] h-2"></div>
              <div className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-black text-[#1E293B]">Send a <span className="text-[#FB923C]">General Inquiry</span></h2>
                  <p className="text-[#475569] mt-2">Use this form to contact ZarvantaMedia. Submission does not request or guarantee an insurance quote.</p>
                </div>
                
                {formStatus.submitted && (
                  <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${formStatus.success ? 'bg-[#FB923C]/10 border border-[#FB923C]/20' : 'bg-red-50 border border-red-200'}`}>
                    <span className="text-2xl">{formStatus.success ? '✅' : '❌'}</span>
                    <div>
                      <p className={`font-semibold ${formStatus.success ? 'text-[#1E293B]' : 'text-red-800'}`}>
                        {formStatus.success ? 'Success!' : 'Error'}
                      </p>
                      <p className={`text-sm ${formStatus.success ? 'text-[#475569]' : 'text-red-600'}`}>
                        {formStatus.message}
                      </p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                        Full Name <span className="text-[#FB923C]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-white"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                        Email Address <span className="text-[#FB923C]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-white"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-white"
                        placeholder="+18484671057"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                        Organization (optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-white"
                        placeholder="Organization"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                        Inquiry topic <span className="text-[#FB923C]">*</span>
                      </label>
                      <select
                        name="vertical"
                        value={formData.vertical}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Select a topic</option>
                        {verticalOptions.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                        Inquiry type
                      </label>
                      <select
                        name="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Select an inquiry type</option>
                        {volumeOptions.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-[#1E293B] mb-2">
                      Message <span className="text-[#FB923C]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-[#E8E5DF] rounded-xl focus:ring-2 focus:ring-[#FB923C] focus:border-transparent outline-none transition resize-none bg-white"
                      placeholder="Share your question or feedback..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-5 h-5 text-[#FB923C] rounded border-[#E8E5DF] focus:ring-[#FB923C]"
                    />
                    <label className="text-sm text-[#475569]">
                      Send me occasional updates about auto insurance information
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FB923C] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#F97316] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Send Inquiry →'
                    )}
                  </button>
                  
                  <p className="text-xs text-[#94A3B8] text-center">
                    We use the details you submit to respond to your inquiry. Do not include sensitive personal or financial information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section - Orange Theme */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">What This <span className="text-[#FB923C]">Website Provides</span></h2>
            <div className="w-20 h-1 bg-[#FB923C] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAFAF8] rounded-xl p-6 text-center shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition hover:-translate-y-1 border border-[#E8E5DF] group">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FB923C] transition">
                <span className="text-2xl group-hover:text-white transition">📞</span>
              </div>
              <h3 className="font-bold text-[#1E293B] mb-2">General Information</h3>
              <p className="text-sm text-[#475569]">This website shares general auto insurance information.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl p-6 text-center shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition hover:-translate-y-1 border border-[#E8E5DF] group">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FB923C] transition">
                <span className="text-2xl group-hover:text-white transition">🔒</span>
              </div>
              <h3 className="font-bold text-[#1E293B] mb-2">Independent Website</h3>
              <p className="text-sm text-[#475569]">ZarvantaMedia is not an insurer or government agency.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl p-6 text-center shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition hover:-translate-y-1 border border-[#E8E5DF] group">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FB923C] transition">
                <span className="text-2xl group-hover:text-white transition">💰</span>
              </div>
              <h3 className="font-bold text-[#1E293B] mb-2">Provider Terms</h3>
              <p className="text-sm text-[#475569]">Rates, terms, and eligibility are set by each provider.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl p-6 text-center shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition hover:-translate-y-1 border border-[#E8E5DF] group">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FB923C] transition">
                <span className="text-2xl group-hover:text-white transition">⭐</span>
              </div>
              <h3 className="font-bold text-[#1E293B] mb-2">No Guarantees</h3>
              <p className="text-sm text-[#475569]">Quotes, savings, coverage, and approval are not guaranteed.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section - Soft Stone Theme */}
        <div className="mt-20 bg-[#FAFAF8] rounded-2xl p-8 md:p-12 border border-[#E8E5DF]">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">FAQ</span>
            </div>
            <h2 className="text-3xl font-black text-[#1E293B] mb-4">Frequently Asked <span className="text-[#FB923C]">Questions</span></h2>
            <div className="w-20 h-1 bg-[#FB923C] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#F5F5F0] rounded-xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <h3 className="font-bold text-[#1E293B] mb-2 flex items-center gap-2">❓ Is this an insurance company?</h3>
              <p className="text-[#475569] text-sm">No. ZarvantaMedia does not issue policies or decide provider rates, terms, or eligibility.</p>
            </div>
            <div className="bg-[#F5F5F0] rounded-xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <h3 className="font-bold text-[#1E293B] mb-2 flex items-center gap-2">❓ Does ZarvantaMedia sell insurance?</h3>
              <p className="text-[#475569] text-sm">No. ZarvantaMedia is an independent informational and marketing website, not an insurer. Any provider you contact sets its own terms and eligibility.</p>
            </div>
            <div className="bg-[#F5F5F0] rounded-xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <h3 className="font-bold text-[#1E293B] mb-2 flex items-center gap-2">❓ Are the details the same in every state?</h3>
              <p className="text-[#475569] text-sm">No. Laws and available products vary by location. Check with your state insurance department and provider.</p>
            </div>
            <div className="bg-[#F5F5F0] rounded-xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <h3 className="font-bold text-[#1E293B] mb-2 flex items-center gap-2">❓ Can you recommend a policy?</h3>
              <p className="text-[#475569] text-sm">We cannot recommend or bind coverage. Contact a licensed insurance professional for advice about your situation.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner - Orange Theme */}
        <div className="mt-16 bg-[#1E293B] rounded-2xl p-8 md:p-12 text-center text-white border border-[#2A3A4A]">
          <h3 className="text-2xl md:text-3xl font-black mb-3">Need to Reach ZarvantaMedia?</h3>
          <p className="text-[#94A3B8] mb-6 max-w-2xl mx-auto">Use the contact details above for general website inquiries. For policy questions, contact your insurer.</p>
          <a href="https://wa.me/18484671057" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FB923C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#F97316] transition shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            📞 Call Us Now: +18484671057
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;