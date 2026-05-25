import React, { useEffect } from 'react';

const LandingPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e] font-['Inter','Plus_Jakarta_Sans',system-ui] text-white">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 bg-transparent py-4 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-start">
          <a
            href="/home"
            className="bg-[#FF224D] text-white font-medium text-sm py-2.5 px-6 rounded-full shadow-md hover:shadow-lg hover:bg-[#e01e45] transition-all hover:-translate-y-0.5"
          >
            Home
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden p-4 md:p-8">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/50 z-10"></div>
          <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(90deg, #071020 0%, #0f1724 100%)' }} />
        </div>

        <div className="relative z-20 w-full max-w-[1120px] mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.75fr] items-center gap-12">
            <div className="animate-fadeInUp">
              {/* Badges with proper gap */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-sm text-gray-200">
                  <span className="font-semibold uppercase tracking-widest">Artist Media</span>
                </div>
                <div className="inline-block px-4 py-2 bg-[#FF224D]/20 backdrop-blur-sm rounded-full border border-[#FF224D]/30">
                  <span className="text-[#FF224D] text-sm font-semibold tracking-wider">TRUSTED BY 25,000+ DRIVERS NATIONWIDE</span>
                </div>
              </div>
              
              <h1 className="text-[42px] sm:text-5xl lg:text-[72px] font-black leading-[1.02] tracking-[-3px] text-white">
                Premium Auto Insurance <br /><span className="text-[#FF224D]">At Competitive Rates</span>
              </h1>
              <p className="max-w-[520px] mt-5 mb-8 text-lg text-gray-300 leading-relaxed">
                Partner with licensed insurance professionals who provide personalized guidance, comprehensive coverage options, and transparent pricing — all tailored to your unique driving profile.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a href="tel:+15234567893" className="inline-flex bg-[#FF224D] text-white font-extrabold text-sm py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-[#e01e45]">
                  Speak With a Licensed Agent
                </a>
              </div>
              <div className="flex flex-wrap gap-2.5 mt-8">
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2.5 text-[13px] font-semibold text-gray-200 shadow-sm">Rates starting at $29/month</span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2.5 text-[13px] font-semibold text-gray-200 shadow-sm">No credit check required</span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2.5 text-[13px] font-semibold text-gray-200 shadow-sm">All driving records accepted</span>
              </div>
            </div>

            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 shadow-2xl animate-fadeInUp animation-delay-200">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-[#FF224D]/40 bg-[#FF224D]/20 flex items-center justify-center text-3xl">
                ☎
              </div>
              <h2 className="text-2xl font-bold tracking-[-1px] text-white">Request Your Complimentary Quote</h2>
              <p className="mt-3 mb-6 text-gray-300 text-sm">Connect with a licensed agent for a no-obligation rate assessment.</p>
              <a href="tel:+15234567893" className="block w-full bg-[#FF224D] text-white font-extrabold py-3.5 rounded-full mb-5 hover:-translate-y-1 transition-all shadow-md hover:bg-[#e01e45]">
                Call Now
              </a>
              <div className="text-2xl font-black tracking-wide mb-5 text-white">(523) 456-7893</div>
              <div className="pt-4 border-t border-white/20 text-gray-400 text-xs font-semibold">Complimentary consultation • No purchase obligation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop" 
              alt="Luxury professional vehicle on road"
              className="rounded-3xl shadow-2xl w-full object-cover border border-white/20 h-[400px]"
            />
          </div>
          <div>
            <div className="inline-block px-4 py-1 bg-[#FF224D]/10 rounded-full mb-4">
              <span className="text-[#FF224D] text-sm font-semibold">OUR ADVANTAGE</span>
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-7 text-white">Why Professional Drivers Choose Us</h2>
            <div className="space-y-4">
              {[
                "Comprehensive multi-carrier rate comparison",
                "Expedited access to preferred pricing tiers",
                "Dedicated support for high-risk profiles",
                "SR-22 filing and non-licensed operator solutions",
                "Instant same-day coverage activation available"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-base font-medium text-gray-200">
                  <span className="text-[#FF224D] text-xl">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-[#0a1622] to-[#152434]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-[#FF224D]/10 rounded-full mb-4">
            <span className="text-[#FF224D] text-sm font-semibold">STREAMLINED PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-2 text-white">Get Protected in Three Simple Steps</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">Our efficient, agent-guided process ensures you receive the protection you need without unnecessary delays or complications.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { num: "01", icon: "📞", title: "Initial Consultation", desc: "Connect with a licensed agent who will conduct a thorough needs assessment and review your driving history to identify optimal coverage options." },
              { num: "02", icon: "📊", title: "Quote Comparison", desc: "Review multiple carrier options side-by-side and identify the most competitive solution for your specific requirements and budget." },
              { num: "03", icon: "✅", title: "Policy Activation", desc: "Finalize your selected coverage and receive immediate digital proof of insurance documentation for instant protection." }
            ].map((step) => (
              <div key={step.num} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-left border border-white/10 shadow-lg hover:-translate-y-2 transition-all duration-300 hover:border-[#FF224D]/30">
                <div className="text-5xl font-black text-[#FF224D]/20 mb-4">{step.num}</div>
                <div className="w-14 h-14 bg-[#FF224D] rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg">{step.icon}</div>
                <h3 className="text-xl font-extrabold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href="tel:+15234567893" className="inline-block bg-[#FF224D] text-white font-extrabold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-[#e01e45]">
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e]">
        <div className="relative max-w-6xl mx-auto">
          <div className="relative z-10 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#FF224D]/10 rounded-full mb-4">
                <span className="text-[#FF224D] text-sm font-semibold">ELIGIBILITY CRITERIA</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-3 text-white">You May Qualify For Coverage If:</h2>
              <p className="text-gray-400 mt-4 text-base leading-relaxed">Our flexible underwriting approach accommodates diverse driving situations, payment preferences, and insurance requirements across all 50 states.</p>
              <a href="tel:+15234567893" className="inline-block mt-6 bg-[#FF224D] text-white font-extrabold py-3.5 px-7 rounded-full shadow-md hover:-translate-y-1 transition-all hover:bg-[#e01e45]">
                Verify Your Eligibility Now
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Licensed & Non-Licensed Drivers", desc: "Coverage solutions available regardless of your current licensing status." },
                { title: "Flexible Payment Structures", desc: "Budget-friendly monthly plans designed to accommodate your financial preferences." },
                { title: "Prior Incidents or Violations", desc: "Specialized high-risk programs for drivers with past tickets or accidents." },
                { title: "SR-22 Certificate Filing", desc: "Expedited SR-22 processing and state filing coordination available same-day." }
              ].map((item) => (
                <div key={item.title} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-md hover:border-[#FF224D]/30 transition-all">
                  <div className="w-10 h-10 bg-[#FF224D]/20 rounded-full flex items-center justify-center text-[#FF224D] font-black text-xl mb-4">✓</div>
                  <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Plans */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-[#0a1622] to-[#152434]">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-[#FF224D]/10 rounded-full mb-4">
            <span className="text-[#FF224D] text-sm font-semibold">PROTECTION OPTIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-2 text-white">Comprehensive Coverage Solutions</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">Choose from a wide range of insurance products designed to meet your specific needs and budget.</p>
        </div>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
          {[
            { name: "Liability Coverage", desc: "State-minimum & enhanced" },
            { name: "Full Comprehensive", desc: "Collision + comprehensive" },
            { name: "SR-22 Filing", desc: "Certificate & monitoring" },
            { name: "High-Risk Programs", desc: "Specialized non-standard" },
            { name: "Low Down Payment", desc: "Affordable monthly options" }
          ].map((plan, idx) => (
            <div key={plan.name} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-md hover:-translate-y-2 transition-all hover:border-[#FF224D]/30">
              <span className="text-[#FF224D] text-xs font-black">{(idx+1).toString().padStart(2,'0')}</span>
              <h3 className="text-lg font-extrabold mt-6 text-white">{plan.name}</h3>
              <p className="text-gray-400 text-xs mt-2">{plan.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social Proof Carousel */}
      <section className="py-20 px-6 md:px-8 overflow-hidden bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 bg-[#FF224D]/10 rounded-full mb-4">
            <span className="text-[#FF224D] text-sm font-semibold">CLIENT TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mt-2 text-white">What Our Clients Say About Us</h2>
          <p className="text-gray-400 mt-3">Professional service, transparent guidance, and meaningful savings — guaranteed.</p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-5 w-max animate-[scrollTestimonial_28s_linear_infinite] hover:animation-pause">
            {[
              "The agent provided exceptional guidance and saved me over $840 annually. The entire process was professional, efficient, and completely transparent.",
              "I secured comprehensive coverage the same day with minimal hassle. The team's expertise and responsiveness were evident throughout.",
              "Despite my complex driving history, they identified an affordable plan that met all my requirements. Truly outstanding service from start to finish.",
              "The consultation was thorough, and all policy options were explained clearly. I felt completely confident in my coverage selection.",
              "My SR-22 filing was handled seamlessly. I received my documentation within hours of our initial conversation — remarkably efficient.",
              "The payment structure fit my budget perfectly, and the agent never applied any sales pressure. I highly recommend their services."
            ].map((quote, i) => (
              <div key={i} className="w-[400px] shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm font-medium leading-relaxed">“{quote}”</p>
                <h4 className="text-[#FF224D] text-sm font-extrabold mt-6">— {["Jason M. • Verified Client","Maria L. • Verified Client","Kevin R. • Verified Client","Angela P. • Verified Client","Marcus T. • Verified Client","Nicole S. • Verified Client"][i % 6]}</h4>
              </div>
            ))}
            {[
              "The agent provided exceptional guidance and saved me over $840 annually.",
              "I secured comprehensive coverage the same day with minimal hassle.",
              "Despite my complex driving history, they identified an affordable plan."
            ].map((quote, i) => (
              <div key={`dup-${i}`} className="w-[400px] shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7 shadow-md">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white text-sm font-medium leading-relaxed">“{quote}”</p>
                <h4 className="text-[#FF224D] text-sm font-extrabold mt-6">— {["Jason M. • Verified Client","Maria L. • Verified Client","Kevin R. • Verified Client"][i]}</h4>
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

      {/* Final CTA */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-br from-[#0a1622] to-[#152434]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1 bg-[#FF224D]/10 rounded-full mb-4">
              <span className="text-[#FF224D] text-sm font-semibold">TAKE ACTION TODAY</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-3 text-white">Stop Overpaying For Inadequate Coverage</h2>
            <p className="text-gray-300 text-lg mt-5">Secure quality protection at competitive rates with professional guidance every step of the way. Your satisfaction is guaranteed.</p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a href="tel:+15234567893" className="inline-block bg-[#FF224D] text-white font-extrabold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-[#e01e45]">
                Call Now For Your Rate Assessment
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">Licensed in all 50 states • 24/7 claims support • A-rated carriers</p>
          </div>
          <div className="relative h-64 flex items-center justify-center">
            <div className="animate-float">
              <svg width="340" viewBox="0 0 400 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="42" width="300" height="58" rx="22" fill="#FF224D" />
                <rect x="98" y="18" width="150" height="42" rx="28" fill="#FF224D" />
                <rect x="126" y="30" width="94" height="28" rx="14" fill="#ffffff" />
                <circle cx="100" cy="90" r="26" fill="#1a1a2e" stroke="white" strokeWidth="8" />
                <circle cx="280" cy="90" r="26" fill="#1a1a2e" stroke="white" strokeWidth="8" />
                <rect x="48" y="66" width="60" height="8" rx="4" fill="white" opacity="0.8" />
                <rect x="280" y="66" width="40" height="8" rx="4" fill="white" opacity="0.8" />
                <circle cx="42" cy="68" r="4" fill="white" opacity="0.6" />
                <circle cx="358" cy="68" r="4" fill="white" opacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Floating buttons */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col gap-3">
        <a href="tel:+15234567893" className="bg-[#FF224D] text-white font-bold py-3 px-5 rounded-full shadow-lg flex items-center gap-2 hover:bg-[#e01e45] transition-all">
          📞 Call Now
        </a>
        <button onClick={scrollToTop} className="bg-white/10 backdrop-blur-sm text-white w-11 h-11 rounded-full text-2xl shadow-lg hover:bg-white/20 transition-colors border border-white/20">
          ↑
        </button>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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