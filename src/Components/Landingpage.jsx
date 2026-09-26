// import React, { useEffect } from 'react';

// const LandingPage = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-[#F5F5F0] font-['Inter','Plus_Jakarta_Sans',system-ui] overflow-x-hidden">
      
//       {/* Top Navigation */}
//       <div className="sticky top-0 z-50 bg-[#F5F5F0]/95 backdrop-blur-sm border-b border-[#E8E5DF] py-3 px-4 md:py-4 md:px-8">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <a
//             href="/home"
//             className="bg-[#FB923C] text-white font-semibold text-xs md:text-sm py-1.5 px-4 md:py-2.5 md:px-6 rounded-full shadow-md hover:shadow-lg hover:bg-[#F97316] transition-all hover:-translate-y-0.5"
//           >
//             Home
//           </a>
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></span>
//             <span className="text-[#475569] text-xs font-medium">Live Agent Available</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section id="auto-insurance-quotes" className="relative min-h-screen flex items-center overflow-hidden px-4 py-8 md:p-8 bg-[#F5F5F0]">
//         <div className="absolute inset-0 w-full h-full">
//           <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F0]/90 via-[#F5F5F0]/70 to-[#FAFAF8]/50 z-10"></div>
//           <div className="absolute inset-0 w-full h-full" style={{ background: 'linear-gradient(135deg, #F5F5F0 0%, #FAFAF8 50%, #F0F2F0 100%)' }} />
//         </div>

//         <div className="relative z-20 w-full max-w-[1120px] mx-auto">
//           <div className="grid lg:grid-cols-[1.1fr_0.75fr] items-center gap-6 md:gap-8 lg:gap-12">
//             <div className="animate-fadeInUp text-center lg:text-left">
//               {/* Badges */}
//               <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
//                 <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#E8E5DF] text-xs md:text-sm text-[#475569] shadow-sm">
//                   <span className="font-semibold uppercase tracking-widest text-[#1E293B]">ZarvantaMedia</span>
//                 </div>
//                 <div className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#FB923C]/10 backdrop-blur-sm rounded-full border border-[#FB923C]/20">
//                   <span className="text-[#FB923C] text-[10px] md:text-sm font-semibold tracking-wider">TRUSTED BY 25,000+ DRIVERS</span>
//                 </div>
//               </div>
              
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-black leading-[1.2] sm:leading-[1.1] lg:leading-[1.02] tracking-[-1px] sm:tracking-[-2px] lg:tracking-[-3px] text-[#1E293B] px-2 sm:px-0">
//                 Premium Auto Insurance <br className="hidden sm:block" /><span className="text-[#FB923C]">At Competitive Rates</span>
//               </h1>
//               <p className="max-w-[520px] mt-3 md:mt-5 mb-5 md:mb-8 text-sm md:text-base lg:text-lg text-[#475569] leading-relaxed mx-auto lg:mx-0 px-4 sm:px-0">
//                 Partner with licensed insurance professionals who provide personalized guidance, comprehensive coverage options, and transparent pricing — all tailored to your unique driving profile.
//               </p>
//               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4">
//                 <a href="tel:+18484671057" className="inline-flex bg-[#FB923C] text-white font-bold text-xs sm:text-sm py-2.5 px-4 md:py-3.5 md:px-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:bg-[#F97316]">
//                   Speak With a Licensed Agent
//                 </a>
//                 <a href="#features" className="inline-flex bg-transparent text-[#FB923C] font-bold text-xs sm:text-sm py-2.5 px-4 md:py-3.5 md:px-6 rounded-full border-2 border-[#FB923C] hover:bg-[#FB923C] hover:text-white transition-all hover:-translate-y-1">
//                   Learn More
//                 </a>
//               </div>
//               <div className="flex flex-wrap gap-2 justify-center lg:justify-start mt-5 md:mt-8">
//                 <span className="bg-white/80 backdrop-blur-sm border border-[#E8E5DF] rounded-full px-2.5 py-1 md:px-4 md:py-2.5 text-[10px] md:text-[13px] font-semibold text-[#475569] shadow-sm">Rates from $30/mo</span>
//                 <span className="bg-white/80 backdrop-blur-sm border border-[#E8E5DF] rounded-full px-2.5 py-1 md:px-4 md:py-2.5 text-[10px] md:text-[13px] font-semibold text-[#475569] shadow-sm">No credit check</span>
//                 <span className="bg-white/80 backdrop-blur-sm border border-[#E8E5DF] rounded-full px-2.5 py-1 md:px-4 md:py-2.5 text-[10px] md:text-[13px] font-semibold text-[#475569] shadow-sm">All records accepted</span>
//               </div>
//             </div>

//             {/* Quote Card */}
//             <div className="relative bg-[#FAFAF8] backdrop-blur-md rounded-2xl p-5 md:p-8 text-center border border-[#E8E5DF] shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] animate-fadeInUp animation-delay-200 max-w-sm mx-auto lg:mx-0 w-full">
//               <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-5 rounded-full border border-[#FB923C]/30 bg-[#FB923C]/10 flex items-center justify-center text-2xl md:text-3xl">
//                 ☎
//               </div>
//               <h2 className="text-xl md:text-2xl font-bold tracking-[-1px] text-[#1E293B]">Request Your Complimentary Quote</h2>
//               <p className="mt-2 md:mt-3 mb-4 md:mb-6 text-[#475569] text-xs md:text-sm">Connect with a licensed agent for a no-obligation rate assessment.</p>
//               <a href="tel:+18484671057" className="block w-full bg-[#FB923C] text-white font-bold py-2.5 md:py-3.5 rounded-full mb-3 md:mb-5 hover:-translate-y-1 transition-all shadow-md hover:bg-[#F97316] text-sm md:text-base">
//                 Call Now
//               </a>
//               <a href="tel:+18484671057" className="block text-xl md:text-2xl font-black tracking-wide mb-3 md:mb-5 text-[#1E293B] hover:text-[#FB923C]">+18484671057</a>
//               <div className="pt-3 md:pt-4 border-t border-[#E8E5DF] text-[#94A3B8] text-[10px] md:text-xs font-semibold">Complimentary consultation • No obligation</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section id="car-insurance-rates" className="py-12 md:py-20 px-4 md:px-8 bg-[#FAFAF8]">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
//           <div className="order-2 md:order-1 text-center md:text-left">
//             <div className="inline-block px-3 py-1 md:px-4 bg-[#FB923C]/10 rounded-full mb-3 md:mb-4">
//               <span className="text-[#FB923C] text-xs md:text-sm font-semibold">OUR ADVANTAGE</span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-5 md:mb-7 text-[#1E293B]">Why Professional Drivers Choose Us</h2>
//             <div className="space-y-3 md:space-y-4">
//               {[
//                 "Comprehensive multi-carrier rate comparison",
//                 "Expedited access to preferred pricing tiers",
//                 "Dedicated support for high-risk profiles",
//                 "SR-22 filing and non-licensed solutions",
//                 "Instant same-day coverage activation"
//               ].map((item) => (
//                 <div key={item} className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-sm md:text-base font-medium text-[#475569]">
//                   <span className="text-[#FB923C] text-lg md:text-xl flex-shrink-0">✓</span>
//                   <span className="text-left">{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="order-1 md:order-2">
//             <img 
//               src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop" 
//               alt="Luxury professional vehicle on road"
//               className="rounded-2xl md:rounded-3xl shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] w-full object-cover border border-[#E8E5DF] h-[220px] sm:h-[300px] md:h-[400px]"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Steps */}
//       <section id="insurance-coverage" className="py-12 md:py-20 px-4 md:px-8 bg-[#F5F5F0]">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="inline-block px-3 py-1 md:px-4 bg-[#FB923C]/10 rounded-full mb-3 md:mb-4">
//             <span className="text-[#FB923C] text-xs md:text-sm font-semibold">STREAMLINED PROCESS</span>
//           </div>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mt-2 text-[#1E293B] px-2">Get Protected in Three Simple Steps</h2>
//           <p className="text-[#475569] mt-2 md:mt-4 max-w-xl mx-auto text-sm md:text-base px-4">Our efficient, agent-guided process ensures you receive the protection you need without delays.</p>
          
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mt-8 md:mt-12">
//             {[
//               { 
//                 num: "01", 
//                 icon: (
//                   <svg className="w-7 h-7 md:w-9 md:h-9 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 ),
//                 title: "Initial Consultation", 
//                 desc: "Connect with a licensed agent for a thorough needs assessment and driving history review." 
//               },
//               { 
//                 num: "02", 
//                 icon: (
//                   <svg className="w-7 h-7 md:w-9 md:h-9 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
//                   </svg>
//                 ),
//                 title: "Quote Comparison", 
//                 desc: "Review multiple carrier options side-by-side to find the most competitive solution." 
//               },
//               { 
//                 num: "03", 
//                 icon: (
//                   <svg className="w-7 h-7 md:w-9 md:h-9 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                   </svg>
//                 ),
//                 title: "Policy Activation", 
//                 desc: "Finalize your coverage and receive immediate digital proof of insurance." 
//               }
//             ].map((step) => (
//               <div key={step.num} className="group bg-[#FAFAF8] rounded-2xl p-6 md:p-8 text-left border border-[#E8E5DF] shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] hover:-translate-y-2 hover:border-[#FB923C]/30 transition-all duration-300">
//                 <div className="text-4xl md:text-5xl font-black text-[#FB923C]/10 mb-3 md:mb-4">
//                   {step.num}
//                 </div>
//                 <div className="mb-4 md:mb-6 text-[#FB923C]">
//                   {step.icon}
//                 </div>
//                 <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#1E293B] group-hover:text-[#FB923C] transition-colors">
//                   {step.title}
//                 </h3>
//                 <p className="text-[#475569] text-sm md:text-base leading-relaxed">
//                   {step.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-8 md:mt-10">
//             <a href="https://wa.me/18484671057" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FB923C] text-white font-bold py-2.5 px-5 md:py-3.5 md:px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-[#F97316] text-sm md:text-base">
//               Schedule Your Free Consultation
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Who Qualifies */}
//       <section className="py-12 md:py-20 px-4 md:px-8 bg-[#FAFAF8]">
//         <div className="relative max-w-6xl mx-auto">
//           <div className="relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-10 items-center">
//             <div className="text-center lg:text-left">
//               <div className="inline-block px-3 py-1 md:px-4 bg-[#FB923C]/10 rounded-full mb-3 md:mb-4">
//                 <span className="text-[#FB923C] text-xs md:text-sm font-semibold">ELIGIBILITY CRITERIA</span>
//               </div>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mt-2 md:mt-3 text-[#1E293B] px-2">You May Qualify For Coverage If:</h2>
//               <p className="text-[#475569] mt-2 md:mt-4 text-sm md:text-base leading-relaxed px-4 lg:px-0">Our flexible underwriting accommodates diverse driving situations across all 50 states.</p>
//               <a href="https://wa.me/18484671057" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 md:mt-6 bg-[#FB923C] text-white font-bold py-2 px-4 md:py-3.5 md:px-7 rounded-full shadow-md hover:-translate-y-1 transition-all hover:bg-[#F97316] text-sm md:text-base">
//                 Verify Your Eligibility Now
//               </a>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
//               {[
//                 { title: "Licensed & Non-Licensed Drivers", desc: "Coverage solutions regardless of your licensing status." },
//                 { title: "Flexible Payment Structures", desc: "Budget-friendly monthly payment plans available." },
//                 { title: "Prior Incidents or Violations", desc: "Specialized high-risk programs for drivers." },
//                 { title: "SR-22 Certificate Filing", desc: "Expedited SR-22 processing same-day available." }
//               ].map((item) => (
//                 <div key={item.title} className="bg-[#FAFAF8] backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-[#E8E5DF] shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] hover:border-[#FB923C]/30 transition-all">
//                   <div className="w-8 h-8 md:w-10 md:h-10 bg-[#FB923C]/10 rounded-full flex items-center justify-center text-[#FB923C] font-black text-base md:text-xl mb-2 md:mb-4">✓</div>
//                   <h3 className="text-sm md:text-lg font-bold text-[#1E293B]">{item.title}</h3>
//                   <p className="text-[#475569] text-[11px] md:text-sm mt-1 md:mt-2">{item.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Coverage Plans */}
//       <section id="cheap-auto-insurance" className="py-12 md:py-20 px-4 md:px-8 bg-[#F5F5F0]">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="inline-block px-3 py-1 md:px-4 bg-[#FB923C]/10 rounded-full mb-3 md:mb-4">
//             <span className="text-[#FB923C] text-xs md:text-sm font-semibold">PROTECTION OPTIONS</span>
//           </div>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mt-2 text-[#1E293B] px-2">Comprehensive Coverage Solutions</h2>
//           <p className="text-[#475569] mt-2 md:mt-3 text-sm md:text-base px-4">Choose from insurance products designed for your needs and budget.</p>
//         </div>
//         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5 mt-6 md:mt-12">
//           {[
//             { name: "Liability Coverage", desc: "State-minimum & enhanced" },
//             { name: "Full Comprehensive", desc: "Collision + comprehensive" },
//             { name: "SR-22 Filing", desc: "Certificate & monitoring" },
//             { name: "High-Risk Programs", desc: "Specialized non-standard" },
//             { name: "Low Down Payment", desc: "Affordable monthly options" }
//           ].map((plan, idx) => (
//             <div key={plan.name} className="bg-[#FAFAF8] backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-6 border border-[#E8E5DF] shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] hover:-translate-y-2 transition-all hover:border-[#FB923C]/30">
//               <span className="text-[#FB923C] text-[10px] md:text-xs font-black">{(idx+1).toString().padStart(2,'0')}</span>
//               <h3 className="text-xs sm:text-sm md:text-lg font-bold mt-2 md:mt-6 text-[#1E293B]">{plan.name}</h3>
//               <p className="text-[#475569] text-[9px] md:text-xs mt-1 md:mt-2">{plan.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Social Proof Carousel */}
//       <section className="py-12 md:py-20 px-4 md:px-8 overflow-hidden bg-[#FAFAF8]">
//         <div className="max-w-6xl mx-auto text-center mb-6 md:mb-12">
//           <div className="inline-block px-3 py-1 md:px-4 bg-[#FB923C]/10 rounded-full mb-3 md:mb-4">
//             <span className="text-[#FB923C] text-xs md:text-sm font-semibold">CLIENT TESTIMONIALS</span>
//           </div>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mt-2 text-[#1E293B] px-2">What Our Clients Say About Us</h2>
//           <p className="text-[#475569] mt-2 md:mt-3 text-sm md:text-base px-4">Professional service, transparent guidance, and meaningful savings — guaranteed.</p>
//         </div>
//         <div className="relative overflow-hidden">
//           <div className="flex gap-3 md:gap-5 w-max animate-[scrollTestimonial_28s_linear_infinite] hover:animation-pause">
//             {[
//               "The agent provided exceptional guidance and saved me over $840 annually.",
//               "I secured comprehensive coverage the same day with minimal hassle.",
//               "Despite my complex driving history, they found an affordable plan.",
//               "The consultation was thorough, all options explained clearly.",
//               "My SR-22 filing was handled seamlessly within hours.",
//               "No sales pressure. I highly recommend their services."
//             ].map((quote, i) => (
//               <div key={i} className="w-[280px] sm:w-[340px] md:w-[400px] shrink-0 bg-[#F5F5F0] backdrop-blur-sm border border-[#E8E5DF] rounded-xl md:rounded-2xl p-4 md:p-7 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)]">
//                 <div className="flex items-center gap-1 mb-2 md:mb-4">
//                   {[...Array(5)].map((_, star) => (
//                     <svg key={star} className="w-3 h-3 md:w-4 md:h-4 text-[#FB923C] fill-current" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-[#1E293B] text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed">“{quote}”</p>
//                 <h4 className="text-[#FB923C] text-[10px] md:text-sm font-bold mt-3 md:mt-6">— {["Jason M. • Verified","Maria L. • Verified","Kevin R. • Verified","Angela P. • Verified","Marcus T. • Verified","Nicole S. • Verified"][i % 6]}</h4>
//               </div>
//             ))}
//             {[
//               "The agent provided exceptional guidance and saved me over $840 annually.",
//               "I secured comprehensive coverage the same day with minimal hassle.",
//               "Despite my complex driving history, they found an affordable plan."
//             ].map((quote, i) => (
//               <div key={`dup-${i}`} className="w-[280px] sm:w-[340px] md:w-[400px] shrink-0 bg-[#F5F5F0] backdrop-blur-sm border border-[#E8E5DF] rounded-xl md:rounded-2xl p-4 md:p-7 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)]">
//                 <div className="flex items-center gap-1 mb-2 md:mb-4">
//                   {[...Array(5)].map((_, star) => (
//                     <svg key={star} className="w-3 h-3 md:w-4 md:h-4 text-[#FB923C] fill-current" viewBox="0 0 20 20">
//                       <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                     </svg>
//                   ))}
//                 </div>
//                 <p className="text-[#1E293B] text-[11px] sm:text-xs md:text-sm font-medium leading-relaxed">“{quote}”</p>
//                 <h4 className="text-[#FB923C] text-[10px] md:text-sm font-bold mt-3 md:mt-6">— {["Jason M. • Verified","Maria L. • Verified","Kevin R. • Verified"][i]}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//         <style>{`
//           @keyframes scrollTestimonial {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .hover\\:animation-pause:hover {
//             animation-play-state: paused;
//           }
//         `}</style>
//       </section>

//       {/* Final CTA */}
//       <section className="py-12 md:py-20 px-4 md:px-8 bg-[#F5F5F0]">
//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
//           <div className="text-center lg:text-left">
//             <div className="inline-block px-3 py-1 md:px-4 bg-[#FB923C]/10 rounded-full mb-3 md:mb-4">
//               <span className="text-[#FB923C] text-xs md:text-sm font-semibold">TAKE ACTION TODAY</span>
//             </div>
//             <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black tracking-tighter mt-2 md:mt-3 text-[#1E293B] px-2">Stop Overpaying For Inadequate Coverage</h2>
//             <p className="text-[#475569] text-sm md:text-base lg:text-lg mt-3 md:mt-5 px-4 lg:px-0">Secure quality protection at competitive rates with professional guidance every step of the way. Your satisfaction is guaranteed.</p>
//             <div className="flex flex-wrap gap-3 md:gap-4 mt-4 md:mt-6 justify-center lg:justify-start">
//               <a href="https://wa.me/18484671057" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#FB923C] text-white font-bold py-2.5 px-5 md:py-4 md:px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-[#F97316] text-sm md:text-base">
//                 Call Now For Your Rate Assessment
//               </a>
//             </div>
//             <p className="text-[#94A3B8] text-[9px] md:text-xs mt-3 md:mt-4">Licensed in all 50 states • 24/7 claims support • A-rated carriers</p>
//           </div>
//           <div className="relative flex items-center justify-center">
//             <div className="animate-float w-full max-w-md mx-auto lg:max-w-full">
//               {/* Car SVG with Light Orange Accents */}
//               <svg width="100%" height="auto" viewBox="0 0 600 220" preserveAspectRatio="xMidYMid meet" className="max-w-full h-auto">
//                 <defs>
//                   <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
//                     <stop offset="0%" stopColor="#FB923C" stopOpacity="0.15" />
//                     <stop offset="100%" stopColor="#FB923C" stopOpacity="0" />
//                   </radialGradient>
//                   <linearGradient id="carBody" x1="0%" y1="0%" x2="0%" y2="100%">
//                     <stop offset="0%" stopColor="#4A5A6A" />
//                     <stop offset="50%" stopColor="#3A4A5A" />
//                     <stop offset="100%" stopColor="#2A3A4A" />
//                   </linearGradient>
//                   <linearGradient id="windowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#7AB8E6" stopOpacity="0.5" />
//                     <stop offset="100%" stopColor="#4A7AAA" stopOpacity="0.3" />
//                   </linearGradient>
//                 </defs>
                
//                 <ellipse cx="300" cy="180" rx="250" ry="50" fill="url(#glowGradient)" />
//                 <ellipse cx="300" cy="195" rx="230" ry="10" fill="rgba(30,41,59,0.15)" />
                
//                 <path d="M50 120 L85 80 L200 72 L400 72 L515 80 L550 120 L550 155 L50 155 Z" fill="url(#carBody)" stroke="#6A7A8A" strokeWidth="1.5"/>
                
//                 <path d="M160 78 L190 48 L265 38 L335 38 L410 48 L440 78 Z" fill="#3A4A5A" stroke="#6A7A8A" strokeWidth="1"/>
                
//                 <path d="M220 45 L280 40 L320 40 L370 45 L360 55 L230 55 Z" fill="#4A5A6A" opacity="0.5" stroke="#7A8A9A" strokeWidth="0.8"/>
                
//                 <path d="M190 50 L265 40 L285 75 L195 75 Z" fill="url(#windowGradient)" stroke="#6A9ABE" strokeWidth="0.5"/>
//                 <path d="M315 75 L330 75 L410 48 L435 78 Z" fill="url(#windowGradient)" stroke="#6A9ABE" strokeWidth="0.5"/>
//                 <rect x="290" y="42" width="10" height="34" fill="#2A3A4A"/>
//                 <path d="M200 75 L195 52 L262 42 L285 75 Z" fill="url(#windowGradient)" stroke="#6A9ABE" strokeWidth="0.5"/>
//                 <path d="M300 75 L295 52 L395 46 L420 75 Z" fill="url(#windowGradient)" stroke="#6A9ABE" strokeWidth="0.5"/>
                
//                 <path d="M190 50 L265 40 L335 38 L410 48" stroke="#C0C8D0" strokeWidth="1.5" fill="none" opacity="0.6"/>
//                 <path d="M90 95 L510 95" stroke="#FB923C" strokeWidth="2.5" opacity="0.6"/>
                
//                 <path d="M490 95 L515 85 L525 110 L505 115 Z" fill="#1A2A3A" stroke="#FB923C" strokeWidth="2"/>
//                 <line x1="498" y1="95" x2="512" y2="90" stroke="#FB923C" strokeWidth="1"/>
//                 <line x1="496" y1="100" x2="515" y2="95" stroke="#FB923C" strokeWidth="1"/>
//                 <line x1="494" y1="105" x2="518" y2="100" stroke="#FB923C" strokeWidth="1"/>
//                 <line x1="493" y1="110" x2="520" y2="105" stroke="#FB923C" strokeWidth="1"/>
                
//                 <rect x="522" y="88" width="22" height="28" rx="5" fill="#F5E56A" opacity="0.8" stroke="#D4B84A" strokeWidth="1.5"/>
//                 <rect x="525" y="92" width="14" height="20" rx="3" fill="#FFFFFF" opacity="0.7"/>
//                 <circle cx="532" cy="102" r="5" fill="#FFFFFF" opacity="0.8"/>
//                 <path d="M522 86 L542 86" stroke="#FB923C" strokeWidth="2" opacity="0.6"/>
                
//                 <path d="M60 92 L78 86 L85 102 L75 112 L58 108 Z" fill="#EF4444" opacity="0.7" stroke="#DC2626" strokeWidth="1"/>
//                 <path d="M62 96 L72 90 L78 102 L70 108 L60 104 Z" fill="#F87171" opacity="0.4"/>
                
//                 <circle cx="170" cy="158" r="36" fill="#2A2A3A" stroke="#4A4A5A" strokeWidth="4"/>
//                 <circle cx="170" cy="158" r="28" fill="#3A3A4A" stroke="#5A5A6A" strokeWidth="2"/>
//                 <circle cx="170" cy="158" r="14" fill="#4A4A5A" stroke="#6A6A7A" strokeWidth="1.5"/>
//                 {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
//                   const rad = (angle * Math.PI) / 180;
//                   const x1 = 170 + 20 * Math.cos(rad);
//                   const y1 = 158 + 20 * Math.sin(rad);
//                   const x2 = 170 + 32 * Math.cos(rad);
//                   const y2 = 158 + 32 * Math.sin(rad);
//                   return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5A5A6A" strokeWidth="2"/>;
//                 })}
//                 <circle cx="170" cy="158" r="7" fill="#FB923C" opacity="0.8"/>
//                 <circle cx="170" cy="158" r="3" fill="#FFFFFF" opacity="0.6"/>
                
//                 <circle cx="430" cy="158" r="36" fill="#2A2A3A" stroke="#4A4A5A" strokeWidth="4"/>
//                 <circle cx="430" cy="158" r="28" fill="#3A3A4A" stroke="#5A5A6A" strokeWidth="2"/>
//                 <circle cx="430" cy="158" r="14" fill="#4A4A5A" stroke="#6A6A7A" strokeWidth="1.5"/>
//                 {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
//                   const rad = (angle * Math.PI) / 180;
//                   const x1 = 430 + 20 * Math.cos(rad);
//                   const y1 = 430 + 20 * Math.sin(rad);
//                   const x2 = 430 + 32 * Math.cos(rad);
//                   const y2 = 430 + 32 * Math.sin(rad);
//                   return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#5A5A6A" strokeWidth="2"/>;
//                 })}
//                 <circle cx="430" cy="158" r="7" fill="#FB923C" opacity="0.8"/>
//                 <circle cx="430" cy="158" r="3" fill="#FFFFFF" opacity="0.6"/>
                
//                 <line x1="15" y1="115" x2="50" y2="115" stroke="#FB923C" strokeWidth="2" opacity="0.3" strokeLinecap="round"/>
//                 <line x1="5" y1="128" x2="50" y2="128" stroke="#FB923C" strokeWidth="1.5" opacity="0.25" strokeLinecap="round"/>
//                 <line x1="20" y1="103" x2="50" y2="103" stroke="#FB923C" strokeWidth="1.5" opacity="0.2" strokeLinecap="round"/>
//                 <line x1="10" y1="141" x2="50" y2="141" stroke="#FB923C" strokeWidth="1" opacity="0.15" strokeLinecap="round"/>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Floating Buttons */}
//       <div className="fixed bottom-4 md:bottom-6 right-3 md:right-5 z-50 flex flex-col gap-2 md:gap-3">
//         <a href="https://wa.me/18484671057" target="_blank" rel="noopener noreferrer" className="bg-[#FB923C] text-white font-bold py-2 px-3 md:py-3 md:px-5 rounded-full shadow-lg flex items-center gap-1 md:gap-2 hover:bg-[#F97316] transition-all text-xs md:text-sm">
//           📞 Call Now
//         </a>
//         <button onClick={scrollToTop} className="bg-white/80 backdrop-blur-sm text-[#1E293B] w-8 h-8 md:w-11 md:h-11 rounded-full text-base md:text-2xl shadow-md hover:bg-white transition-colors border border-[#E8E5DF]">
//           ↑
//         </button>
//       </div>

//       <style>{`
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-8px); }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.5; }
//         }
//         .animate-fadeInUp {
//           animation: fadeInUp 0.6s ease-out forwards;
//         }
//         .animation-delay-200 {
//           animation-delay: 0.2s;
//           opacity: 0;
//           animation-fill-mode: forwards;
//         }
//         .animate-float {
//           animation: float 2.2s ease-in-out infinite;
//         }
//         .animate-pulse {
//           animation: pulse 2s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;






import React from 'react';

const LandingPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-['Inter',system-ui] overflow-x-hidden">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E5E7EB] px-4 py-3 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-end">
          <a
            href="/home"
            className="inline-flex items-center rounded-full bg-[#3B82F6] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            Home
          </a>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="relative bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF] to-[#F9FAFB] z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-6">
              <span className="text-[#2563EB] text-xs md:text-sm font-semibold tracking-wide uppercase">Independent Auto Insurance Guide</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#111827] mb-6">
              Understand Your Auto Insurance <span className="text-[#3B82F6]">Before You Buy</span>
            </h1>
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Explore general information about auto insurance coverage, state requirements, and common policy options. Compare details directly with insurers before making a decision.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href="#guides" className="bg-[#3B82F6] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg hover:bg-[#2563EB] transition-all">
                Read Our Guides
              </a>
              <a href="#coverage" className="bg-white text-[#3B82F6] font-semibold py-3 px-8 rounded-full border-2 border-[#3B82F6] hover:bg-[#3B82F6] hover:text-white transition-all">
                Explore Coverage
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop" 
              alt="Car on the road"
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-full object-cover h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 md:px-8 bg-[#F9FAFB] border-y border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
            { number: "State-by-state", label: "Requirements can vary" },
            { number: "Coverage", label: "Common policy terms" },
            { number: "Independent", label: "Not an insurance company" },
            { number: "General", label: "Educational information" }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl md:text-3xl font-bold text-[#1F2937]">{stat.number}</div>
              <div className="text-sm text-[#6B7280] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-4">
              <span className="text-[#2563EB] text-xs md:text-sm font-semibold tracking-wide uppercase">Why It Matters</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Why Understanding Auto Insurance Is Important</h2>
            <p className="text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              Auto insurance requirements and policy terms vary by location and provider. Learning the basics can help you ask informed questions when reviewing coverage with an insurer.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { 
                title: "Legal Requirement", 
                desc: "Many states require drivers to maintain a minimum level of auto insurance or other financial responsibility. Check current requirements with your state insurance department."
              },
              { 
                title: "Financial Protection", 
                desc: "A policy may help cover certain costs after a covered event, subject to its terms, limits, exclusions, and deductibles. Review the policy documents to understand what applies."
              },
              { 
                title: "Peace of Mind", 
                desc: "Understanding your selected coverages and exclusions can help you know what questions to ask before choosing a policy."
              },
              { 
                title: "Cost Savings", 
                desc: "Comparing equivalent coverage limits and deductibles can help you evaluate quotes. Rates and discounts depend on each insurer's rules and your circumstances."
              }
            ].map((item) => (
              <div key={item.title} className="bg-[#F9FAFB] p-6 md:p-8 rounded-2xl border border-[#E5E7EB] hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-[#1F2937] mb-3">{item.title}</h3>
                <p className="text-[#4B5563] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-16 md:py-24 px-4 md:px-8 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-4">
              <span className="text-[#2563EB] text-xs md:text-sm font-semibold tracking-wide uppercase">Educational Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Latest Insurance Guides</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto">Introductory information about auto insurance requirements, coverage types, and quote comparisons.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Understanding Minimum Coverage Requirements", 
                desc: "Learn about common state minimums and where to check your local requirements. Rules and available coverages vary by state.",
                image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop",
                category: "Basics"
              },
              { 
                title: "How to Compare Insurance Quotes Effectively", 
                desc: "Review coverage limits, deductibles, exclusions, and provider terms when comparing quotes.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
                category: "Guides"
              },
              { 
                title: "SR-22 Filing: What You Need to Know", 
                desc: "An overview of SR-22 certificates, which may be required in some situations. Confirm filing rules and timing with your state and insurer.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
                category: "Special Cases"
              }
            ].map((article) => (
              <div key={article.title} className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] hover:shadow-lg transition-all duration-300 group">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-lg font-bold text-[#1F2937] mt-2 mb-3 group-hover:text-[#3B82F6] transition-colors">{article.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{article.desc}</p>
                  <a href="#coverage" className="inline-block mt-4 text-[#3B82F6] font-semibold text-sm hover:underline">Explore coverage types →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section id="coverage" className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-4">
              <span className="text-[#2563EB] text-xs md:text-sm font-semibold tracking-wide uppercase">Coverage Types</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">Explore Coverage Options</h2>
            <p className="text-[#4B5563] max-w-2xl mx-auto">Learn about different types of auto insurance coverage available to you.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Liability Coverage", desc: "May help pay for covered injuries or property damage you cause, up to the policy limits." },
              { title: "Collision Coverage", desc: "May help pay to repair or replace your vehicle after a covered collision, subject to your deductible." },
              { title: "Comprehensive Coverage", desc: "May cover certain non-collision losses, as described in the policy and subject to its deductible." },
              { title: "SR-22 Filing", desc: "A certificate some drivers may need to file. Requirements vary by state and circumstance." }
            ].map((item) => (
              <div key={item.title} className="bg-[#F9FAFB] p-6 rounded-2xl border border-[#E5E7EB] hover:border-[#3B82F6]/50 hover:shadow-md transition-all text-center">
                <div className="w-12 h-12 bg-[#DBEAFE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#3B82F6] text-xl">✓</span>
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2">{item.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Informative Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#DBEAFE] rounded-full mb-4">
              <span className="text-[#2563EB] text-xs md:text-sm font-semibold tracking-wide uppercase">Key Considerations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">What to Consider When Choosing a Policy</h2>
            <p className="text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
              Every driver's situation is different. Review these factors and confirm details with the insurer before choosing a policy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Your Driving Record", 
                desc: "Insurers may consider driving history when setting rates. Provide accurate information and ask providers how incidents affect an individual quote."
              },
              { 
                title: "Your Vehicle", 
                desc: "Vehicle details and safety features can affect quotes. Pricing methods differ, so confirm the information each insurer uses."
              },
              { 
                title: "Your Location", 
                desc: "Location may affect rates and available coverage. Check current rules and pricing with providers serving your area."
              },
              { 
                title: "Your Deductible", 
                desc: "A deductible is the amount you may pay toward a covered claim. Premium effects vary; review the policy and choose an amount that fits your budget."
              },
              { 
                title: "Coverage Limits", 
                desc: "Limits define how much a policy may pay for covered claims. Compare options and consider getting advice from a licensed insurance professional."
              },
              { 
                title: "Discounts", 
                desc: "Discounts and eligibility vary by insurer, location, and customer. Ask each provider which discounts may apply to your quote."
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 md:p-8 rounded-2xl border border-[#E5E7EB] hover:shadow-md transition-all">
                <h3 className="text-lg font-bold text-[#1F2937] mb-3">{item.title}</h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 bg-white border-t border-[#E5E7EB]">
        <div className="max-w-6xl mx-auto text-sm text-[#4B5563] leading-relaxed">
          <h2 className="text-lg font-bold text-[#111827] mb-2">Advertising and Insurance Disclaimer</h2>
          <p>
            ZarvantaMedia is an independent informational and marketing website, not an insurer or government agency. This content is general information, not insurance, legal, or financial advice. We do not issue policies or guarantee quotes, savings, eligibility, coverage, or approval. Some links or calls may connect you with third-party providers, and ZarvantaMedia may receive compensation for referrals. Providers set their own prices, terms, eligibility, and availability; confirm details directly with them and consult official state resources for current requirements.
          </p>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="fixed bottom-6 right-6 bg-white text-[#1F2937] w-10 h-10 rounded-full shadow-lg hover:bg-[#F3F4F6] transition-colors border border-[#E5E7EB] flex items-center justify-center">
        ↑
      </button>
    </div>
  );
};

export default LandingPage;