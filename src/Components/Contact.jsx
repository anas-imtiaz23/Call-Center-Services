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
      // Insert lead into Supabase
      const { data, error } = await supabase
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

      // If user opted for newsletter, add to subscribers
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
        message: 'Thank you! Our team will contact you within 24 hours.'
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
        message: 'Something went wrong. Please try again or call us directly at (833) 711-8975.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const verticalOptions = [
    'Auto Insurance',
    'Medicare',
    'Final Expense',
    'Home Improvement',
    'ACA / Obama Care',
    'Multiple Verticals',
    'Other'
  ];

  const volumeOptions = [
    'Under 500 leads/month',
    '500 - 2,000 leads/month',
    '2,000 - 5,000 leads/month',
    '5,000 - 10,000 leads/month',
    '10,000+ leads/month'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0F2B3D] to-[#1A4A6F] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#00BCA2] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00BCA2] rounded-full blur-3xl"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-2 bg-[#00BCA2]/20 backdrop-blur-sm rounded-full mb-6 border border-[#00BCA2]/30">
            <span className="text-[#00BCA2] text-sm font-semibold tracking-wider">GET IN TOUCH</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's <span className="text-[#00BCA2]">Scale</span> Your Business</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your lead generation? Our team is here to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Information - Left Side */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Contact Card */}
            <div className="bg-gradient-to-br from-[#0F2B3D] to-[#1A4A6F] rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>📞</span> Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#00BCA2] transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Phone (Toll-Free)</p>
                    <a href="tel:+13135817026" className="text-xl font-semibold hover:text-[#00BCA2] transition">(313) 581-7026</a>
                    <p className="text-xs text-gray-400 mt-1">Mon-Fri: 9am - 8pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#00BCA2] transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Email</p>
                    <a href="mailto:artistmedia.digital@gmail.com" className="hover:text-[#00BCA2] transition break-all">artistmedia.digital@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-[#00BCA2] transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Headquarters</p>
                    <p className="font-medium">Michigan, USA</p>
                    <p className="text-sm text-gray-400">United States</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Live Chat Support</h4>
                  <p className="text-sm text-gray-500">Available 24/7 for urgent inquiries</p>
                  <button className="text-[#00BCA2] text-sm font-semibold mt-1 hover:underline">Start Chat →</button>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center gap-2">🕒 Business Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-800">9:00 AM - 8:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-800">10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-800">Closed</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">24/7 Support Available for Enterprise Clients</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm">🔒 DNC Compliant</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm">✓ TCPA Certified</span>
              </div>
              <div className="bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                <span className="text-sm">⭐ 4.9/5 Rating</span>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-[#00BCA2] to-[#007C62] h-2"></div>
              <div className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Request a <span className="text-[#00BCA2]">Free Quote</span></h2>
                  <p className="text-gray-500 mt-2">Fill out the form below and our team will respond within 24 hours</p>
                </div>
                
                {formStatus.submitted && (
                  <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${formStatus.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                    <span className="text-2xl">{formStatus.success ? '✅' : '❌'}</span>
                    <div>
                      <p className={`font-semibold ${formStatus.success ? 'text-green-800' : 'text-red-800'}`}>
                        {formStatus.success ? 'Success!' : 'Error'}
                      </p>
                      <p className={`text-sm ${formStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                        {formStatus.message}
                      </p>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BCA2] focus:border-transparent outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BCA2] focus:border-transparent outline-none transition"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BCA2] focus:border-transparent outline-none transition"
                        placeholder="(313) 581-7026"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BCA2] focus:border-transparent outline-none transition"
                        placeholder="Your Call Center"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Lead Vertical Interested In <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="vertical"
                        value={formData.vertical}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BCA2] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Select a vertical</option>
                        {verticalOptions.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated Monthly Volume
                      </label>
                      <select
                        name="monthlyVolume"
                        value={formData.monthlyVolume}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BCA2] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Select volume range</option>
                        {volumeOptions.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#00BCA2] focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your call center, goals, and what you're looking for..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="w-5 h-5 text-[#00BCA2] rounded border-gray-300 focus:ring-[#00BCA2]"
                    />
                    <label className="text-sm text-gray-600">
                      Subscribe to our newsletter for lead generation tips and industry insights
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#00BCA2] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#008f7b] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
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
                      'Get Your Free Quote →'
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Call Centers <span className="text-[#00BCA2]">Choose Artist Media</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00BCA2] transition">
                <span className="text-2xl group-hover:text-white transition">📞</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Real-Time Delivery</h3>
              <p className="text-sm text-gray-500">Leads delivered instantly to your agents in milliseconds</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00BCA2] transition">
                <span className="text-2xl group-hover:text-white transition">🔒</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">100% Compliant</h3>
              <p className="text-sm text-gray-500">DNC & TCPA scrubbed leads for peace of mind</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00BCA2] transition">
                <span className="text-2xl group-hover:text-white transition">💰</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Flexible Pricing</h3>
              <p className="text-sm text-gray-500">Pay-per-call, CPL, or revenue share models</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00BCA2] transition">
                <span className="text-2xl group-hover:text-white transition">⭐</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Dedicated Support</h3>
              <p className="text-sm text-gray-500">Personal account manager for every client</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked <span className="text-[#00BCA2]">Questions</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">❓ How quickly can I start receiving leads?</h3>
              <p className="text-gray-600 text-sm">Most clients start receiving leads within 24-48 hours after account setup and campaign configuration.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">❓ Are your leads compliant with DNC regulations?</h3>
              <p className="text-gray-600 text-sm">Yes! All leads are scrubbed against National and State DNC registries, and we maintain full TCPA compliance.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">❓ What verticals do you offer?</h3>
              <p className="text-gray-600 text-sm">Auto Insurance, Medicare, Final Expense, Home Improvement, ACA/Obama Care, and more. Contact us for custom verticals.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">❓ Is there a minimum budget requirement?</h3>
              <p className="text-gray-600 text-sm">We work with call centers of all sizes. Contact us to discuss your budget and we'll find a solution that works for you.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#00BCA2] to-[#007C62] rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Scale Your Call Center?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">Join 100+ successful call centers that trust Artist Media for premium, compliant leads.</p>
          <a href="tel:+13135817026" className="inline-flex items-center gap-2 bg-white text-[#00BCA2] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg">
            📞 Call Us Now: (313) 581-7026
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;