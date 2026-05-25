import React, { useEffect } from 'react';

const LandingPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e] font-['Inter','Plus_Jakarta_Sans',system-ui] text-white overflow-x-hidden">
      {/* Top Navigation - Responsive */}
      <div className="sticky top-0 z-50 bg-transparent py-3 px-4 md:py-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-start">
          <a
            href="/home"
            className="bg-[#00BCA2] text-white font-medium text-xs md:text-sm py-1.5 px-4 md:py-2.5 md:px-6 rounded-full shadow-md hover:shadow-lg hover:bg-[#008f7b] transition-all hover:-translate-y-0.5"
          >
            Home
          </a>
        </div>
      </div>

      {/* Hero Section - Fully Responsive */}
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 py-8 md:p-8">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/50 z-10"></div>
          <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(90deg, #071020 0%, #0f1724 100%)' }} />
        </div>

        <div className="relative z-20 w-full max-w-[1120px] mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.75fr] items-center gap-6 md:gap-8 lg:gap-12">
            <div className="animate-fadeInUp text-center lg:text-left">
              {/* Badges - Responsive */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-xs md:text-sm text-gray-200">
                  <span className="font-semibold uppercase tracking-widest">Artist Media</span>
                </div>
                <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#00BCA2]/20 backdrop-blur-sm rounded-full border border-[#00BCA2]/30">
                  <span className="text-[#00BCA2] text-[10px] md:text-sm font-semibold tracking-wider">TRUSTED BY 25,000+ DRIVERS</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-black leading-[1.2] sm:leading-[1.1] lg:leading-[1.02] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3px] text-white px-2 sm:px-0">
                Premium Auto Insurance <br className="hidden sm:block" /><span className="text-[#00BCA2]">At Competitive Rates</span>
              </h1>
              <p className="max-w-[520px] mt-3 md:mt-5 mb-5 md:mb-8 text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed mx-auto lg:mx-0 px-4 sm:px-0">
                Partner with licensed insurance professionals who provide personalized guidance, comprehensive coverage options, and transparent pricing — all tailored to your unique driving profile.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
                <a href="tel:+15234567893" className="inline-flex bg-[#00BCA2] text-white font-extrabold text-xs sm:text-sm py-2.5 px-4 md:py-3.5 md:px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-[#008f7b]">
                  Speak With a Licensed Agent
                </a>
              </div>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-5 md:mt-8">
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1 md:px-4 md:py-2.5 text-[10px] md:text-[13px] font-semibold text-gray-200 shadow-sm">Rates from $30/mo</span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1 md:px-4 md:py-2.5 text-[10px] md:text-[13px] font-semibold text-gray-200 shadow-sm">No credit check</span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1 md:px-4 md:py-2.5 text-[10px] md:text-[13px] font-semibold text-gray-200 shadow-sm">All records accepted</span>
              </div>
            </div>

            {/* Quote Card - Responsive */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-5 md:p-8 text-center border border-white/20 shadow-2xl animate-fadeInUp animation-delay-200 max-w-sm mx-auto lg:mx-0 w-full">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-5 rounded-full border border-[#00BCA2]/40 bg-[#00BCA2]/20 flex items-center justify-center text-2xl md:text-3xl">
                ☎
              </div>
              <h2 className="text-xl md:text-2xl font-bold tracking-[-1px] text-white">Request Your Complimentary Quote</h2>
              <p className="mt-2 md:mt-3 mb-4 md:mb-6 text-gray-300 text-xs md:text-sm">Connect with a licensed agent for a no-obligation rate assessment.</p>
              <a href="tel:+15234567893" className="block w-full bg-[#00BCA2] text-white font-extrabold py-2.5 md:py-3.5 rounded-full mb-3 md:mb-5 hover:-translate-y-1 transition-all shadow-md hover:bg-[#008f7b] text-sm md:text-base">
                Call Now
              </a>
              <div className="text-xl md:text-2xl font-black tracking-wide mb-3 md:mb-5 text-white">(523) 456-7893</div>
              <div className="pt-3 md:pt-4 border-t border-white/20 text-gray-400 text-[10px] md:text-xs font-semibold">Complimentary consultation • No obligation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Responsive */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="inline-block px-3 py-1 md:px-4 bg-[#00BCA2]/10 rounded-full mb-3 md:mb-4">
              <span className="text-[#00BCA2] text-xs md:text-sm font-semibold">OUR ADVANTAGE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-5 md:mb-7 text-white">Why Professional Drivers Choose Us</h2>
            <div className="space-y-3 md:space-y-4">
              {[
                "Comprehensive multi-carrier rate comparison",
                "Expedited access to preferred pricing tiers",
                "Dedicated support for high-risk profiles",
                "SR-22 filing and non-licensed solutions",
                "Instant same-day coverage activation"
              ].map((item) => (
                <div key={item} className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-sm md:text-base font-medium text-gray-200">
                  <span className="text-[#00BCA2] text-lg md:text-xl flex-shrink-0">✓</span>
                  <span className="text-left">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop" 
              alt="Luxury professional vehicle on road"
              className="rounded-2xl md:rounded-3xl shadow-2xl w-full object-cover border border-white/20 h-[220px] sm:h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Steps - Responsive */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#0a1622] to-[#152434]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-3 py-1 md:px-4 bg-[#00BCA2]/10 rounded-full mb-3 md:mb-4">
            <span className="text-[#00BCA2] text-xs md:text-sm font-semibold">STREAMLINED PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mt-2 text-white px-2">Get Protected in Three Simple Steps</h2>
          <p className="text-gray-400 mt-2 md:mt-4 max-w-xl mx-auto text-sm md:text-base px-4">Our efficient, agent-guided process ensures you receive the protection you need without delays.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              { num: "01", icon: "📞", title: "Initial Consultation", desc: "Connect with a licensed agent for a thorough needs assessment and driving history review." },
              { num: "02", icon: "📊", title: "Quote Comparison", desc: "Review multiple carrier options side-by-side to find the most competitive solution." },
              { num: "03", icon: "✅", title: "Policy Activation", desc: "Finalize your coverage and receive immediate digital proof of insurance." }
            ].map((step) => (
              <div key={step.num} className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 md:p-8 text-left border border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300 hover:border-[#00BCA2]/30">
                <div className="text-3xl md:text-5xl font-black text-[#00BCA2]/20 mb-2 md:mb-4">{step.num}</div>
                <div className="w-10 h-10 md:w-14 md:h-14 bg-[#00BCA2] rounded-xl flex items-center justify-center text-xl md:text-3xl mb-3 md:mb-6 shadow-lg">{step.icon}</div>
                <h3 className="text-base md:text-xl font-extrabold mb-2 md:mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 md:mt-10">
            <a href="tel:+15234567893" className="inline-block bg-[#00BCA2] text-white font-extrabold py-2.5 px-5 md:py-3.5 md:px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-[#008f7b] text-sm md:text-base">
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Who Qualifies - Responsive */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e]">
        <div className="relative max-w-6xl mx-auto">
          <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-3 py-1 md:px-4 bg-[#00BCA2]/10 rounded-full mb-3 md:mb-4">
                <span className="text-[#00BCA2] text-xs md:text-sm font-semibold">ELIGIBILITY CRITERIA</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mt-2 md:mt-3 text-white px-2">You May Qualify For Coverage If:</h2>
              <p className="text-gray-400 mt-2 md:mt-4 text-sm md:text-base leading-relaxed px-4 lg:px-0">Our flexible underwriting accommodates diverse driving situations across all 50 states.</p>
              <a href="tel:+15234567893" className="inline-block mt-4 md:mt-6 bg-[#00BCA2] text-white font-extrabold py-2 px-4 md:py-3.5 md:px-7 rounded-full shadow-md hover:-translate-y-1 transition-all hover:bg-[#008f7b] text-sm md:text-base">
                Verify Your Eligibility Now
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: "Licensed & Non-Licensed Drivers", desc: "Coverage solutions regardless of your licensing status." },
                { title: "Flexible Payment Structures", desc: "Budget-friendly monthly payment plans available." },
                { title: "Prior Incidents or Violations", desc: "Specialized high-risk programs for drivers." },
                { title: "SR-22 Certificate Filing", desc: "Expedited SR-22 processing same-day available." }
              ].map((item) => (
                <div key={item.title} className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/10 shadow-md hover:border-[#00BCA2]/30 transition-all">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#00BCA2]/20 rounded-full flex items-center justify-center text-[#00BCA2] font-black text-base md:text-xl mb-2 md:mb-4">✓</div>
                  <h3 className="text-sm md:text-lg font-extrabold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-[11px] md:text-sm mt-1 md:mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Plans - Responsive */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#0a1622] to-[#152434]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-3 py-1 md:px-4 bg-[#00BCA2]/10 rounded-full mb-3 md:mb-4">
            <span className="text-[#00BCA2] text-xs md:text-sm font-semibold">PROTECTION OPTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mt-2 text-white px-2">Comprehensive Coverage Solutions</h2>
          <p className="text-gray-400 mt-2 md:mt-3 text-sm md:text-base px-4">Choose from insurance products designed for your needs and budget.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 mt-6 md:mt-12">
          {[
            { name: "Liability Coverage", desc: "State-minimum & enhanced" },
            { name: "Full Comprehensive", desc: "Collision + comprehensive" },
            { name: "SR-22 Filing", desc: "Certificate & monitoring" },
            { name: "High-Risk Programs", desc: "Specialized non-standard" },
            { name: "Low Down Payment", desc: "Affordable monthly options" }
          ].map((plan, idx) => (
            <div key={plan.name} className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/10 shadow-md hover:-translate-y-2 transition-all hover:border-[#00BCA2]/30">
              <span className="text-[#00BCA2] text-[10px] md:text-xs font-black">{(idx+1).toString().padStart(2,'0')}</span>
              <h3 className="text-xs sm:text-sm md:text-lg font-extrabold mt-2 md:mt-6 text-white">{plan.name}</h3>
              <p className="text-gray-400 text-[9px] md:text-xs mt-1 md:mt-2">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Carousel - Responsive */}
      <section className="py-12 md:py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e]">
        <div className="max-w-6xl mx-auto text-center mb-6 md:mb-12">
          <div className="inline-block px-3 py-1 md:px-4 bg-[#00BCA2]/10 rounded-full mb-3 md:mb-4">
            <span className="text-[#00BCA2] text-xs md:text-sm font-semibold">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mt-2 text-white px-2">What Our Clients Say About Us</h2>
          <p className="text-gray-400 mt-2 md:mt-3 text-sm md:text-base px-4">Professional service, transparent guidance, and meaningful savings — guaranteed.</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-3 md:gap-5 w-max animate-[scrollTestimonial_28s_linear_infinite] hover:animation-pause">
            {[
              "The agent provided exceptional guidance and saved me over $840 annually.",
              "I secured comprehensive coverage the same day with minimal hassle.",
              "Despite my complex driving history, they found an affordable plan.",
              "The consultation was thorough, all options explained clearly.",
              "My SR-22 filing was handled seamlessly within hours.",
              "No sales pressure. I highly recommend their services."
            ].map((quote, i) => (
              <div key={i} className="w-[280px] sm:w-[340px] md:w-[400px] shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-7 shadow-md">
                <div className="flex items-center gap-1 mb-2 md:mb-4">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed">“{quote}”</p>
                <h4 className="text-[#00BCA2] text-[10px] md:text-sm font-extrabold mt-3 md:mt-6">— {["Jason M. • Verified","Maria L. • Verified","Kevin R. • Verified","Angela P. • Verified","Marcus T. • Verified","Nicole S. • Verified"][i % 6]}</h4>
              </div>
            ))}
            {[
              "The agent provided exceptional guidance and saved me over $840 annually.",
              "I secured comprehensive coverage the same day with minimal hassle.",
              "Despite my complex driving history, they found an affordable plan."
            ].map((quote, i) => (
              <div key={`dup-${i}`} className="w-[280px] sm:w-[340px] md:w-[400px] shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-7 shadow-md">
                <div className="flex items-center gap-1 mb-2 md:mb-4">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed">“{quote}”</p>
                <h4 className="text-[#00BCA2] text-[10px] md:text-sm font-extrabold mt-3 md:mt-6">— {["Jason M. • Verified","Maria L. • Verified","Kevin R. • Verified"][i]}</h4>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scrollTestimonial {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .hover\\:animation-pause:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Final CTA with Car SVG - Responsive */}
      <section className="py-12 md:py-20 px-4 md:px-8 bg-gradient-to-br from-[#0a1622] to-[#152434]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-3 py-1 md:px-4 bg-[#00BCA2]/10 rounded-full mb-3 md:mb-4">
              <span className="text-[#00BCA2] text-xs md:text-sm font-semibold">TAKE ACTION TODAY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter mt-2 md:mt-3 text-white px-2">Stop Overpaying For Inadequate Coverage</h2>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg mt-3 md:mt-5 px-4 lg:px-0">Secure quality protection at competitive rates with professional guidance every step of the way. Your satisfaction is guaranteed.</p>
            <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6 justify-center lg:justify-start">
              <a href="tel:+15234567893" className="inline-block bg-[#00BCA2] text-white font-extrabold py-2.5 px-5 md:py-4 md:px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-[#008f7b] text-sm md:text-base">
                Call Now For Your Rate Assessment
              </a>
            </div>
            <p className="text-gray-500 text-[9px] md:text-xs mt-3 md:mt-4">Licensed in all 50 states • 24/7 claims support • A-rated carriers</p>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="animate-float w-full max-w-md mx-auto lg:max-w-full">
              {/* Responsive Car SVG */}
              <svg width="100%" height="auto" viewBox="0 0 600 220" preserveAspectRatio="xMidYMid meet" className="max-w-full h-auto">
                <defs>
                  <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00BCA2" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#00BCA2" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="carBody" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2a3a4a" />
                    <stop offset="50%" stopColor="#1a2a3a" />
                    <stop offset="100%" stopColor="#0a1220" />
                  </linearGradient>
                  <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#5dade2" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#2a5a8a" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                
                <ellipse cx="300" cy="180" rx="250" ry="50" fill="url(#glowGradient)" opacity="0.3" />
                <ellipse cx="300" cy="195" rx="230" ry="10" fill="black" opacity="0.35" />
                
                <path d="M50 120 L85 80 L200 72 L400 72 L515 80 L550 120 L550 155 L50 155 Z" fill="url(#carBody)" stroke="#3a5a6a" strokeWidth="1.5"/>
                
                <path d="M160 78 L190 48 L265 38 L335 38 L410 48 L440 78 Z" fill="#1a2a3a" stroke="#3a5a6a" strokeWidth="1"/>
                
                <path d="M220 45 L280 40 L320 40 L370 45 L360 55 L230 55 Z" fill="#1a3a4a" opacity="0.6" stroke="#4a7a8a" strokeWidth="0.8"/>
                
                <path d="M190 50 L265 40 L285 75 L195 75 Z" fill="url(#windowGradient)" stroke="#5a9abe" strokeWidth="0.5"/>
                <path d="M315 75 L330 75 L410 48 L435 78 Z" fill="url(#windowGradient)" stroke="#5a9abe" strokeWidth="0.5"/>
                <rect x="290" y="42" width="10" height="34" fill="#0a1220"/>
                <path d="M200 75 L195 52 L262 42 L285 75 Z" fill="url(#windowGradient)" stroke="#5a9abe" strokeWidth="0.5"/>
                <path d="M300 75 L295 52 L395 46 L420 75 Z" fill="url(#windowGradient)" stroke="#5a9abe" strokeWidth="0.5"/>
                
                <path d="M190 50 L265 40 L335 38 L410 48" stroke="#c0c0c0" strokeWidth="1.5" fill="none" opacity="0.8"/>
                <path d="M90 95 L510 95" stroke="#00BCA2" strokeWidth="2.5" opacity="0.85"/>
                
                <path d="M490 95 L515 85 L525 110 L505 115 Z" fill="#050a12" stroke="#00BCA2" strokeWidth="2"/>
                <line x1="498" y1="95" x2="512" y2="90" stroke="#00BCA2" strokeWidth="1"/>
                <line x1="496" y1="100" x2="515" y2="95" stroke="#00BCA2" strokeWidth="1"/>
                <line x1="494" y1="105" x2="518" y2="100" stroke="#00BCA2" strokeWidth="1"/>
                <line x1="493" y1="110" x2="520" y2="105" stroke="#00BCA2" strokeWidth="1"/>
                
                <rect x="522" y="88" width="22" height="28" rx="5" fill="#ffee88" opacity="0.9" stroke="#ddaa44" strokeWidth="1.5"/>
                <rect x="525" y="92" width="14" height="20" rx="3" fill="#ffffff" opacity="0.85"/>
                <circle cx="532" cy="102" r="5" fill="#ffffff" opacity="0.95"/>
                <path d="M522 86 L542 86" stroke="#00BCA2" strokeWidth="2" opacity="0.85"/>
                
                <path d="M60 92 L78 86 L85 102 L75 112 L58 108 Z" fill="#ff2222" opacity="0.85" stroke="#cc0000" strokeWidth="1"/>
                <path d="M62 96 L72 90 L78 102 L70 108 L60 104 Z" fill="#ff6666" opacity="0.6"/>
                
                <circle cx="170" cy="158" r="36" fill="#050505" stroke="#1a1a2e" strokeWidth="4"/>
                <circle cx="170" cy="158" r="28" fill="#0a0a0a" stroke="#2a2a3e" strokeWidth="2"/>
                <circle cx="170" cy="158" r="14" fill="#111111" stroke="#3a3a4e" strokeWidth="1.5"/>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 170 + 20 * Math.cos(rad);
                  const y1 = 158 + 20 * Math.sin(rad);
                  const x2 = 170 + 32 * Math.cos(rad);
                  const y2 = 158 + 32 * Math.sin(rad);
                  return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a3a4e" strokeWidth="2"/>;
                })}
                <circle cx="170" cy="158" r="7" fill="#00BCA2" opacity="0.9"/>
                <circle cx="170" cy="158" r="3" fill="#ffffff" opacity="0.8"/>
                
                <circle cx="430" cy="158" r="36" fill="#050505" stroke="#1a1a2e" strokeWidth="4"/>
                <circle cx="430" cy="158" r="28" fill="#0a0a0a" stroke="#2a2a3e" strokeWidth="2"/>
                <circle cx="430" cy="158" r="14" fill="#111111" stroke="#3a3a4e" strokeWidth="1.5"/>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 430 + 20 * Math.cos(rad);
                  const y1 = 430 + 20 * Math.sin(rad);
                  const x2 = 430 + 32 * Math.cos(rad);
                  const y2 = 430 + 32 * Math.sin(rad);
                  return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#3a3a4e" strokeWidth="2"/>;
                })}
                <circle cx="430" cy="158" r="7" fill="#00BCA2" opacity="0.9"/>
                <circle cx="430" cy="158" r="3" fill="#ffffff" opacity="0.8"/>
                
                <line x1="15" y1="115" x2="50" y2="115" stroke="#00BCA2" strokeWidth="2" opacity="0.5" strokeLinecap="round"/>
                <line x1="5" y1="128" x2="50" y2="128" stroke="#00BCA2" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
                <line x1="20" y1="103" x2="50" y2="103" stroke="#00BCA2" strokeWidth="1.5" opacity="0.35" strokeLinecap="round"/>
                <line x1="10" y1="141" x2="50" y2="141" stroke="#00BCA2" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons - Responsive */}
      <div className="fixed bottom-4 md:bottom-6 right-3 md:right-5 z-50 flex flex-col gap-2 md:gap-3">
        <a href="tel:+15234567893" className="bg-[#00BCA2] text-white font-bold py-2 px-3 md:py-3 md:px-5 rounded-full shadow-lg flex items-center gap-1 md:gap-2 hover:bg-[#008f7b] transition-all text-xs md:text-sm">
          📞 Call Now
        </a>
        <button onClick={scrollToTop} className="bg-white/10 backdrop-blur-sm text-white w-8 h-8 md:w-11 md:h-11 rounded-full text-base md:text-2xl shadow-lg hover:bg-white/20 transition-colors border border-white/20">
          ↑
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-float {
          animation: float 2.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

