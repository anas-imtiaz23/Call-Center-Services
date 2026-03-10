// // // import React, { useState, useEffect, useRef } from 'react';

// // // const Home = () => {
// // //   const [activeSlide, setActiveSlide] = useState('first');
// // //   const [activeSlideMobile, setActiveSlideMobile] = useState('first');
// // //   const [countersStarted, setCountersStarted] = useState(false);
// // //   const statsRef = useRef(null);

// // //   // Handle slide navigation
// // //   const showSlide = (slide) => {
// // //     setActiveSlide(slide);
// // //   };

// // //   const showSlideMobile = (slide) => {
// // //     setActiveSlideMobile(slide);
// // //   };

// // //   // Counter animation
// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting && !countersStarted) {
// // //             setCountersStarted(true);
// // //             startCounters();
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.5 }
// // //     );

// // //     if (statsRef.current) {
// // //       observer.observe(statsRef.current);
// // //     }

// // //     return () => observer.disconnect();
// // //   }, [countersStarted]);

// // //   const startCounters = () => {
// // //     const counters = [
// // //       { element: document.getElementById('campaigns-counter'), target: 150, suffix: '+' },
// // //       { element: document.getElementById('earnings-counter'), target: 500000, prefix: '$', suffix: '+' },
// // //       { element: document.getElementById('calls-counter'), target: 20000, suffix: '+' }
// // //     ];

// // //     counters.forEach(counter => {
// // //       if (!counter.element) return;
      
// // //       let current = 0;
// // //       const increment = Math.ceil(counter.target / 100);
// // //       const timer = setInterval(() => {
// // //         current += increment;
// // //         if (current >= counter.target) {
// // //           counter.element.textContent = counter.target.toLocaleString();
// // //           clearInterval(timer);
// // //         } else {
// // //           counter.element.textContent = current.toLocaleString();
// // //         }
// // //       }, 20);
// // //     });
// // //   };

// // //   return (
// // //     <div className="home-page">
// // //       {/* Hero Section with Video Background - Single instance */}
// // //       <section className="relative min-h-screen flex items-center overflow-hidden">
// // //         {/* Video Background */}
// // //         <div className="absolute inset-0 w-full h-full">
// // //           <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for better text visibility */}
// // //           <iframe 
// // //             src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
// // //             frameBorder="0"
// // //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// // //             allowFullScreen
// // //             title="Globe"
// // //             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
// // //             style={{ filter: 'brightness(0.7)' }}
// // //           />
// // //         </div>

// // //         {/* Content */}
// // //         <div className="relative z-20 container mx-auto px-4 py-20">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // //             {/* Left Column - Text Content */}
// // //             <div className="text-white">
// // //               <h1 className="text-[#00BCA2] text-lg font-semibold tracking-wider mb-4">#1 MEDIA SOLUTION</h1>
// // //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
// // //                 Empower Your <br />Business. <br />Scale Your Reach.
// // //               </h2>
// // //               <div className="text-gray-200 text-base leading-relaxed max-w-xl mb-8">
// // //                 <p className="mb-4">At EDM Lead Network, we don't just deliver leads — we deliver results you can count on. Whether you're a brand, broker, or agency, our platform is engineered to scale campaigns with surgical precision and strict adherence to YOUR compliance standards.</p>
// // //                 <p>We specialize in high-intent traffic, form fills, and call generation across industries like Insurance, Financial Services, Home Services, Legal, Travel, Real Estate, and more — where every click and call matters.</p>
// // //               </div>
// // //               <a href="#anchor-form" className="inline-block bg-[#00BCA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008f7b] transition">
// // //                 GET STARTED
// // //               </a>
// // //             </div>

// // //             {/* Right Column - Interactive Questionnaire */}
// // //             <div className="lg:ml-auto w-full max-w-md">
// // //               {/* Top colored bar */}
// // //               <div className="bg-gradient-to-b from-[#00BCA2] to-[#007C62] h-2 rounded-t-lg"></div>
              
// // //               {/* Questionnaire Card */}
// // //               <div className="bg-white rounded-b-lg shadow-2xl p-6 md:p-8">
                
// // //                 {/* First Slide - Are you selling or buying */}
// // //                 <div className={`${activeSlide === 'first' ? 'block' : 'hidden'}`}>
// // //                   <div className="text-center">
// // //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you selling or <br />buying calls/leads?</h3>
// // //                     <div className="space-y-3">
// // //                       <button 
// // //                         className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// // //                         onClick={() => showSlide('buy')}
// // //                       >
// // //                         Buy
// // //                       </button>
// // //                       <button 
// // //                         className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// // //                         onClick={() => showSlide('sell')}
// // //                       >
// // //                         Sell
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Sell Slide - Apply to Be a Publisher */}
// // //                 <div className={`${activeSlide === 'sell' ? 'block' : 'hidden'}`}>
// // //                   <div className="text-center">
// // //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Be a <br />Publisher Today!</h3>
// // //                     <a 
// // //                       href="https://publishers.edmleadnetwork.com/" 
// // //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                     >
// // //                       Apply Now
// // //                     </a>
// // //                   </div>
// // //                 </div>

// // //                 {/* Buy Slide - US or Non-US */}
// // //                 <div className={`${activeSlide === 'buy' ? 'block' : 'hidden'}`}>
// // //                   <div className="text-center">
// // //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you US based <br />or non-US based?</h3>
// // //                     <div className="space-y-3">
// // //                       <button 
// // //                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// // //                         onClick={() => showSlide('individuals')}
// // //                       >
// // //                         US based
// // //                       </button>
// // //                       <button 
// // //                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// // //                         onClick={() => showSlide('nonUsa')}
// // //                       >
// // //                         Non-US based
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Individuals Slide */}
// // //                 <div className={`${activeSlide === 'individuals' ? 'block' : 'hidden'}`}>
// // //                   <div className="text-center">
// // //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">How many individuals <br />do you have on <br />your sales team?</h3>
// // //                     <div className="space-y-3 mb-3">
// // //                       <button 
// // //                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// // //                         onClick={() => showSlide('marketplace')}
// // //                       >
// // //                         Individual Agent
// // //                       </button>
// // //                     </div>
// // //                     <div className="grid grid-cols-2 gap-3">
// // //                       <button 
// // //                         className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// // //                         onClick={() => showSlide('salesTeam')}
// // //                       >
// // //                         2-10
// // //                       </button>
// // //                       <button 
// // //                         className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// // //                         onClick={() => showSlide('advertise')}
// // //                       >
// // //                         10+
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>

// // //                 {/* Marketplace Section */}
// // //                 <div className={`${activeSlide === 'marketplace' ? 'block' : 'hidden'}`}>
// // //                   <div className="text-center">
// // //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Checkout Our <br /> Marketplace!</h3>
// // //                     <a 
// // //                       href="https://advertiser.edmleadnetwork.com/"
// // //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                     >
// // //                       Learn More
// // //                     </a>
// // //                   </div>
// // //                 </div>

// // //                 {/* Sales Team Section */}
// // //                 <div className={`${activeSlide === 'salesTeam' ? 'block' : 'hidden'}`}>
// // //                   <div className="text-center">
// // //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch with <br />Our Sales Team</h3>
// // //                     <a 
// // //                       href="https://advertiser.edmleadnetwork.com/"
// // //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                     >
// // //                       Learn More
// // //                     </a>
// // //                   </div>
// // //                 </div>

// // //                 {/* Apply to Be an Advertiser */}
// // //                 <div className={`${activeSlide === 'advertise' ? 'block' : 'hidden'}`}>
// // //                   <div className="text-center">
// // //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Be an <br />Advertiser Today!</h3>
// // //                     <a 
// // //                       href="https://advertiser.edmleadnetwork.com/"
// // //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                     >
// // //                       Learn More
// // //                     </a>
// // //                   </div>
// // //                 </div>

// // //                 {/* Non-US Based */}
// // //                 <div className={`${activeSlide === 'nonUsa' ? 'block' : 'hidden'}`}>
// // //                   <div className="text-center">
// // //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch <br />with Our Team</h3>
// // //                     <a 
// // //                       href="https://advertiser.edmleadnetwork.com/"
// // //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// // //                       target="_blank"
// // //                       rel="noopener noreferrer"
// // //                     >
// // //                       Contact Us
// // //                     </a>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Mobile Hero Section - Single instance for mobile */}
// // //       <section className="lg:hidden relative min-h-screen flex items-center overflow-hidden">
// // //         {/* Video Background */}
// // //         <div className="absolute inset-0 w-full h-full">
// // //           <div className="absolute inset-0 bg-black/50 z-10"></div>
// // //           <iframe 
// // //             src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
// // //             frameBorder="0"
// // //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// // //             allowFullScreen
// // //             title="Globe"
// // //             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
// // //             style={{ filter: 'brightness(0.7)' }}
// // //           />
// // //         </div>

// // //         {/* Content */}
// // //         <div className="relative z-20 container mx-auto px-4 py-16">
// // //           <div className="text-white mb-8">
// // //             <h1 className="text-[#00BCA2] text-base font-semibold tracking-wider mb-3">#1 MEDIA SOLUTION</h1>
// // //             <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
// // //               Empower Your <br />Business. <br />Scale Your Reach.
// // //             </h2>
// // //             <div className="text-gray-200 text-sm leading-relaxed">
// // //               <p className="mb-3">At EDM Lead Network, we don't just deliver leads — we deliver results you can count on. Whether you're a brand, broker, or agency, our platform is engineered to scale campaigns with surgical precision and strict adherence to YOUR compliance standards.</p>
// // //               <p>We specialize in high-intent traffic, form fills, and call generation across industries like Insurance, Financial Services, Home Services, Legal, Travel, Real Estate, and more — where every click and call matters.</p>
// // //             </div>
// // //           </div>

// // //           {/* Mobile Interactive Slides */}
// // //           <div className="bg-white rounded-lg shadow-lg p-6">
// // //             {/* First Slide Mobile */}
// // //             <div className={`${activeSlideMobile === 'first' ? 'block' : 'hidden'}`}>
// // //               <div className="text-center">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Are you selling or <br />buying calls/leads?</h3>
// // //                 <div className="space-y-2">
// // //                   <button 
// // //                     className="w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// // //                     onClick={() => showSlideMobile('buy')}
// // //                   >
// // //                     Buy
// // //                   </button>
// // //                   <button 
// // //                     className="w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// // //                     onClick={() => showSlideMobile('sell')}
// // //                   >
// // //                     Sell
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Sell Slide Mobile */}
// // //             <div className={`${activeSlideMobile === 'sell' ? 'block' : 'hidden'}`}>
// // //               <div className="text-center">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Apply to Be a <br />Publisher Today!</h3>
// // //                 <a 
// // //                   href="https://publishers.edmleadnetwork.com/"
// // //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                 >
// // //                   Apply Now
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* Buy Slide Mobile */}
// // //             <div className={`${activeSlideMobile === 'buy' ? 'block' : 'hidden'}`}>
// // //               <div className="text-center">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Are you US based <br />or non-US based?</h3>
// // //                 <div className="space-y-2">
// // //                   <button 
// // //                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// // //                     onClick={() => showSlideMobile('individuals')}
// // //                   >
// // //                     US based
// // //                   </button>
// // //                   <button 
// // //                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// // //                     onClick={() => showSlideMobile('nonUsa')}
// // //                   >
// // //                     Non-US based
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Individuals Slide Mobile */}
// // //             <div className={`${activeSlideMobile === 'individuals' ? 'block' : 'hidden'}`}>
// // //               <div className="text-center">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">How many individuals <br />do you have on <br />your sales team?</h3>
// // //                 <div className="space-y-2 mb-2">
// // //                   <button 
// // //                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// // //                     onClick={() => showSlideMobile('marketplace')}
// // //                   >
// // //                     Individual Agent
// // //                   </button>
// // //                 </div>
// // //                 <div className="grid grid-cols-2 gap-2">
// // //                   <button 
// // //                     className="bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// // //                     onClick={() => showSlideMobile('salesTeam')}
// // //                   >
// // //                     2-10
// // //                   </button>
// // //                   <button 
// // //                     className="bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// // //                     onClick={() => showSlideMobile('advertise')}
// // //                   >
// // //                     10+
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Marketplace Section Mobile */}
// // //             <div className={`${activeSlideMobile === 'marketplace' ? 'block' : 'hidden'}`}>
// // //               <div className="text-center">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Checkout Our <br /> Marketplace!</h3>
// // //                 <a 
// // //                   href="https://advertiser.edmleadnetwork.com/"
// // //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                 >
// // //                   Learn More
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* Sales Team Section Mobile */}
// // //             <div className={`${activeSlideMobile === 'salesTeam' ? 'block' : 'hidden'}`}>
// // //               <div className="text-center">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch with <br />Our Sales Team</h3>
// // //                 <a 
// // //                   href="https://advertiser.edmleadnetwork.com/"
// // //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                 >
// // //                   Learn More
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* Apply to Be an Advertiser Mobile */}
// // //             <div className={`${activeSlideMobile === 'advertise' ? 'block' : 'hidden'}`}>
// // //               <div className="text-center">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Apply to Be an <br />Advertiser Today!</h3>
// // //                 <a 
// // //                   href="https://advertiser.edmleadnetwork.com/"
// // //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                 >
// // //                   Learn More
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* Non-US Based Mobile */}
// // //             <div className={`${activeSlideMobile === 'nonUsa' ? 'block' : 'hidden'}`}>
// // //               <div className="text-center">
// // //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch <br />with Our Team</h3>
// // //                 <a 
// // //                   href="https://advertiser.edmleadnetwork.com/"
// // //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                 >
// // //                   Contact Us
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Stats Section */}
// // //       <section 
// // //         ref={statsRef}
// // //         className="bg-gray-50 py-16"
// // //       >
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
// // //             <div className="md:col-span-1"></div>
            
// // //             {/* Active Campaigns */}
// // //             <div className="md:col-span-1 text-center">
// // //               <div className="mb-4">
// // //                 <img src="/active compaing.png" alt="Active Campaigns" className="mx-auto w-16 h-16" />
// // //               </div>
// // //               <div>
// // //                 <div className="text-gray-600 text-sm mb-2"><br />Active Campaigns</div>
// // //                 <div className="text-4xl font-bold text-[#00BCA2]">
// // //                   <span className="counter" id="campaigns-counter">0</span>+
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Weekly Earnings */}
// // //             <div className="md:col-span-1 text-center">
// // //               <div className="mb-4">
// // //                 <img src="/Dollar image.png" alt="Weekly Earnings" className="mx-auto w-16 h-16" />
// // //               </div>
// // //               <div>
// // //                 <div className="text-gray-600 text-sm mb-2"><br />Earned weekly by publishers</div>
// // //                 <div className="text-4xl font-bold text-[#00BCA2]">
// // //                   $<span className="counter" id="earnings-counter">0</span>+
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Calls Per Day */}
// // //             <div className="md:col-span-1 text-center">
// // //               <div className="mb-4">
// // //                 <img src="/Call image.png" alt="Calls Per Day" className="mx-auto w-16 h-16" />
// // //               </div>
// // //               <div>
// // //                 <div className="text-gray-600 text-sm mb-2"><br />Calls Per Day</div>
// // //                 <div className="text-4xl font-bold text-[#00BCA2]">
// // //                   <span className="counter" id="calls-counter">0</span>+
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="md:col-span-1"></div>
// // //           </div>
// // //           <div className="text-center mt-8">
// // //             <img src="/dictorate.png" alt="Decorative" className="inline-block" />
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Publications Section */}
// // //       <section className="bg-[#1a2c3e] py-16" id="publications">
// // //         <div className="container mx-auto px-4">
// // //           <h2 className="text-center text-white text-3xl font-bold mb-12">PUBLICATIONS</h2>
// // //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
// // //             {/* Publication 1 - Inc. */}
// // //             <a href="https://www.inc.com/profile/edm-lead-network" target="_blank" rel="noopener noreferrer" className="block">
// // //               <img src="/images/publication-inc.png" alt="Inc. Magazine" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// // //             </a>
// // //             {/* Publication 2 - Canadian SME */}
// // //             <a href="https://canadiansme.ca/edm-networks-founder-shares-top-5-strategies-to-generate-more-leads-for-small-businesses-with-a-small-budget/" target="_blank" rel="noopener noreferrer" className="block">
// // //               <img src="/images/publication-canadian-sme.png" alt="Canadian SME" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// // //             </a>
// // //             {/* Publication 3 - Medium */}
// // //             <a href="https://medium.com/authority-magazine/jamal-english-of-edm-network-on-how-to-effectively-leverage-the-power-of-digital-marketing-ppc-4eaeb433e693" target="_blank" rel="noopener noreferrer" className="block">
// // //               <img src="/images/publication-medium.png" alt="Medium" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// // //             </a>
// // //             {/* Publication 4 - Tech Times */}
// // //             <a href="https://www.techtimes.com/articles/284535/20221207/growing-and-scaling-a-business-in-a-remote-work-model.htm" target="_blank" rel="noopener noreferrer" className="block">
// // //               <img src="/images/publication-tech-times.png" alt="Tech Times" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// // //             </a>
// // //             {/* Publication 5 - Cal Biz Journal */}
// // //             <a href="https://calbizjournal.com/why-investing-into-lead-prospecting-is-important-for-business-development/" target="_blank" rel="noopener noreferrer" className="block">
// // //               <img src="/images/publication-cbj.png" alt="California Business Journal" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// // //             </a>
// // //             {/* Publication 6 - The Next Scoop */}
// // //             <a href="https://thenextscoop.com/podcast/how-to-generate-leads-for-insurance-interview-with-jamal/" target="_blank" rel="noopener noreferrer" className="block">
// // //               <img src="/images/publication-next-scoop.png" alt="The Next Scoop" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// // //             </a>
// // //             {/* Publication 7 - NY Weekly */}
// // //             <a href="https://nyweekly.com/business/an-inside-look-of-lead-generation-for-insurance-agents/" target="_blank" rel="noopener noreferrer" className="block">
// // //               <img src="/images/publication-ny-weekly.png" alt="NY Weekly" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Flip Cards Section */}
// // //       <section className="bg-white py-16">
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
// // //             {/* Publisher Flip Card */}
// // //             <div className="flip-card h-96">
// // //               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
// // //                 {/* Front */}
// // //                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
// // //                   <img src="/icon-02.png" alt="Publisher" className="w-20 h-20 mb-4" />
// // //                   <h3 className="text-white text-2xl font-bold">PUBLISHER</h3>
// // //                 </div>
// // //                 {/* Back */}
// // //                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
// // //                   <img src="/images/icon-02.png" alt="Publisher Icon" className="w-12 h-12 mb-3 mx-auto" />
// // //                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">PUBLISHER</h3>
// // //                   <p className="text-sm mb-3">Partnering with EDM Network offers publishers a multitude of benefits. Our extensive network of advertisers provides access to big budgets and 30,000 businesses actively seeking quality leads.</p>
// // //                   <p className="text-sm mb-3">Publishers can monetize their website traffic by collaborating with top-notch brands and introducing their audience to relevant products and services.</p>
// // //                   <p className="text-sm mb-4">Benefit from unmatched access to specialized brands, global campaigns, real-time tracking, monitored compliance systems, transparent performance metrics, weekly payouts, and consistent and faster payments.</p>
// // //                   <a href="https://publishers.edmleadnetwork.com/auth/login" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
// // //                     Apply Now
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Enterprise Advertiser Flip Card */}
// // //             <div className="flip-card h-96">
// // //               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
// // //                 {/* Front */}
// // //                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
// // //                   <img src="/icon-01.png" alt="Enterprise Advertiser" className="w-20 h-20 mb-4" />
// // //                   <h3 className="text-white text-2xl font-bold">ENTERPRISE ADVERTISER</h3>
// // //                 </div>
// // //                 {/* Back */}
// // //                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
// // //                   <img src="/images/icon-01.png" alt="Advertiser Icon" className="w-12 h-12 mb-3 mx-auto" />
// // //                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">ENTERPRISE ADVERTISER</h3>
// // //                   <p className="text-sm mb-3">Advertisers can benefit from partnering with EDM Network for their marketing needs. We provide online and offline marketing solutions that connect advertisers with their target customers based on data-driven decisions.</p>
// // //                   <p className="text-sm mb-3">We offer high-quality publishers for targeted marketing campaigns. With a diverse network and global reach, EDM Network helps advertisers improve their sales pipeline and generate revenue faster.</p>
// // //                   <p className="text-sm mb-4">Contact us at +1 (833) 711-8975 to discuss your success metrics and launch a custom campaign tailored to your business goals.</p>
// // //                   <a href="https://advertiser.edmleadnetwork.com/auth/login" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
// // //                     Apply Now
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Individual Agent Flip Card */}
// // //             <div className="flip-card h-96">
// // //               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
// // //                 {/* Front */}
// // //                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
// // //                   <img src="/icon-03.png" alt="Individual Agent" className="w-20 h-20 mb-4" />
// // //                   <h3 className="text-white text-2xl font-bold">INDIVIDUAL AGENT</h3>
// // //                 </div>
// // //                 {/* Back */}
// // //                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
// // //                   <img src="/images/icon-03.png" alt="Agent Icon" className="w-12 h-12 mb-3 mx-auto" />
// // //                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">INDIVIDUAL AGENT</h3>
// // //                   <p className="text-sm mb-3">Individual agents can greatly benefit from partnering with EDM Network for their lead generation needs.</p>
// // //                   <p className="text-sm mb-3">Agents can receive calls directly to their phone, ensuring prompt and efficient communication with potential clients. The flexibility to pause and start campaigns when needed allows agents to adapt their marketing efforts to their specific requirements.</p>
// // //                   <p className="text-sm mb-4">We prioritize top-quality leads that are scrubbed against DNC (Do Not Call) lists, ensuring compliance and minimizing wasted time on unqualified prospects.</p>
// // //                   <a href="/edm-marketplace/" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
// // //                     Apply Now
// // //                   </a>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Why EDM Network Section */}
// // //       <section className="bg-white py-16">
// // //         <div className="container mx-auto px-4">
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
// // //             {/* Left Column */}
// // //             <div className="md:col-span-1">
// // //               <h2 className="text-3xl font-bold mb-6"><span className="text-[#00BCA2]">WHY</span> EDM NETWORK?</h2>
// // //               <div className="text-gray-700 space-y-4 mb-8">
// // //                 <p>At EDM Network we specialize in providing top-notch lead-generation services that can help take your business to the next level! Our team of industry experts uses the latest pay-per-call marketing technologies and strategies to efficiently identify and target potential leads, delivering unrivaled performance in the industry.</p>
// // //                 <p>We're dedicated to helping your company grow faster and more efficiently through our effective lead-generation solutions. So, if you're looking for a reliable partner to help you drive new business, look no further than EDM Network!</p>
// // //               </div>
              
// // //               {/* Expand your business card */}
// // //               <div className="bg-gradient-to-r from-[#00BCA2] to-[#007C62] rounded-lg p-6 text-white">
// // //                 <h3 className="text-xl font-bold mb-4">Expand your business</h3>
// // //                 <a href="tel:+18337118975" className="block w-full bg-white text-[#00BCA2] text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
// // //                   Click here
// // //                 </a>
// // //               </div>
// // //             </div>

// // //             {/* Middle Column */}
// // //             <div className="md:col-span-1">
// // //               <div className="mb-8">
// // //                 <img src="/1.png" alt="High and timely payouts" className="w-full h-auto" />
// // //               </div>
// // //               <h3 className="text-xl font-bold mb-4">High and timely payouts</h3>
// // //               <p className="text-gray-700 mb-8">Our affiliate partner program offers top-performing lead generation opportunities across various verticals, with a focus on maximizing profits for our partners. We prioritize fast and reliable payout processing without any hidden fees, so our partners can expect prompt payouts and transparent payment processing.</p>
              
// // //               <div className="mb-8">
// // //                 <img src="/31.png" alt="High intent inbound leads" className="w-full h-auto" />
// // //               </div>
// // //               <h3 className="text-xl font-bold mb-4">High intent inbound leads</h3>
// // //               <p className="text-gray-700">Our exclusive inbound lead service delivers high-quality, pre-screened calls from highly qualified prospective customers. This helps you save time and resources by focusing only on leads that are more likely to convert into sales. With our customer-centric approach, you can trust that you're receiving the best and most qualified leads for your business.</p>
// // //             </div>

// // //             {/* Right Column */}
// // //             <div className="md:col-span-1">
// // //               <div className="mb-8">
// // //                 <img src="/21.png" alt="Dedicated staff" className="w-full h-auto" />
// // //               </div>
// // //               <h3 className="text-xl font-bold mb-4">Dedicated staff for client services</h3>
// // //               <p className="text-gray-700 mb-8">Your dedicated account manager and client services team are always available to assist you in meeting your objectives and maximizing profit. We take pride in our attention to detail and dedication to our clients.</p>
              
// // //               <div className="mb-8">
// // //                 <img src="/4.png" alt="Actionable analytics" className="w-full h-auto" />
// // //               </div>
// // //               <h3 className="text-xl font-bold mb-4">Actionable analytics</h3>
// // //               <p className="text-gray-700">With our lead generation services, you won't have to guess if your campaigns are effective. Our real-time reporting and campaign-specific insights provide you with detailed information about recent activity and campaign success, making it easy to optimize your strategies and make data-driven decisions. We believe in transparency, so you can count on our reporting system to give you the information you need to succeed.</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // import React, { useState, useEffect, useRef } from 'react';

// // const Home = () => {
// //   const [activeSlide, setActiveSlide] = useState('first');
// //   const [activeSlideMobile, setActiveSlideMobile] = useState('first');
// //   const [countersStarted, setCountersStarted] = useState(false);
// //   const statsRef = useRef(null);

// //   // Handle slide navigation
// //   const showSlide = (slide) => {
// //     setActiveSlide(slide);
// //   };

// //   const showSlideMobile = (slide) => {
// //     setActiveSlideMobile(slide);
// //   };

// //   // Counter animation
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting && !countersStarted) {
// //             setCountersStarted(true);
// //             startCounters();
// //           }
// //         });
// //       },
// //       { threshold: 0.5 }
// //     );

// //     if (statsRef.current) {
// //       observer.observe(statsRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, [countersStarted]);

// //   const startCounters = () => {
// //     const counters = [
// //       { element: document.getElementById('campaigns-counter'), target: 150, suffix: '+' },
// //       { element: document.getElementById('earnings-counter'), target: 500000, prefix: '$', suffix: '+' },
// //       { element: document.getElementById('calls-counter'), target: 20000, suffix: '+' }
// //     ];

// //     counters.forEach(counter => {
// //       if (!counter.element) return;
      
// //       let current = 0;
// //       const increment = Math.ceil(counter.target / 100);
// //       const timer = setInterval(() => {
// //         current += increment;
// //         if (current >= counter.target) {
// //           counter.element.textContent = counter.target.toLocaleString();
// //           clearInterval(timer);
// //         } else {
// //           counter.element.textContent = current.toLocaleString();
// //         }
// //       }, 20);
// //     });
// //   };

// //   return (
// //     <div className="home-page">
// //       {/* Hero Section with Video Background - Single instance */}
// //       <section className="relative min-h-screen flex items-center overflow-hidden">
// //         {/* Video Background */}
// //         <div className="absolute inset-0 w-full h-full">
// //           <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for better text visibility */}
// //           <iframe 
// //             src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
// //             frameBorder="0"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //             allowFullScreen
// //             title="Globe"
// //             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
// //             style={{ filter: 'brightness(0.7)' }}
// //           />
// //         </div>

// //         {/* Content */}
// //         <div className="relative z-20 container mx-auto px-4 py-20">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             {/* Left Column - Text Content */}
// //             <div className="text-white">
// //               <h1 className="text-[#00BCA2] text-lg font-semibold tracking-wider mb-4">#1 MEDIA SOLUTION</h1>
// //               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
// //                 Empower Your <br />Business. <br />Scale Your Reach.
// //               </h2>
// //               <div className="text-gray-200 text-base leading-relaxed max-w-xl mb-8">
// //                 <p className="mb-4">At EDM Lead Network, we don't just deliver leads — we deliver results you can count on. Whether you're a brand, broker, or agency, our platform is engineered to scale campaigns with surgical precision and strict adherence to YOUR compliance standards.</p>
// //                 <p>We specialize in high-intent traffic, form fills, and call generation across industries like Insurance, Financial Services, Home Services, Legal, Travel, Real Estate, and more — where every click and call matters.</p>
// //               </div>
// //               <a href="#anchor-form" className="inline-block bg-[#00BCA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008f7b] transition">
// //                 GET STARTED
// //               </a>
// //             </div>

// //             {/* Right Column - Interactive Questionnaire */}
// //             <div className="lg:ml-auto w-full max-w-md">
// //               {/* Top colored bar */}
// //               <div className="bg-gradient-to-b from-[#00BCA2] to-[#007C62] h-2 rounded-t-lg"></div>
              
// //               {/* Questionnaire Card */}
// //               <div className="bg-white rounded-b-lg shadow-2xl p-6 md:p-8">
                
// //                 {/* First Slide - Are you selling or buying */}
// //                 <div className={`${activeSlide === 'first' ? 'block' : 'hidden'}`}>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you selling or <br />buying calls/leads?</h3>
// //                     <div className="space-y-3">
// //                       <button 
// //                         className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// //                         onClick={() => showSlide('buy')}
// //                       >
// //                         Buy
// //                       </button>
// //                       <button 
// //                         className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// //                         onClick={() => showSlide('sell')}
// //                       >
// //                         Sell
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Sell Slide - Apply to Be a Publisher */}
// //                 <div className={`${activeSlide === 'sell' ? 'block' : 'hidden'}`}>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Be a <br />Publisher Today!</h3>
// //                     <a 
// //                       href="https://publishers.edmleadnetwork.com/" 
// //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       Apply Now
// //                     </a>
// //                   </div>
// //                 </div>

// //                 {/* Buy Slide - US or Non-US */}
// //                 <div className={`${activeSlide === 'buy' ? 'block' : 'hidden'}`}>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you US based <br />or non-US based?</h3>
// //                     <div className="space-y-3">
// //                       <button 
// //                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// //                         onClick={() => showSlide('individuals')}
// //                       >
// //                         US based
// //                       </button>
// //                       <button 
// //                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// //                         onClick={() => showSlide('nonUsa')}
// //                       >
// //                         Non-US based
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Individuals Slide */}
// //                 <div className={`${activeSlide === 'individuals' ? 'block' : 'hidden'}`}>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">How many individuals <br />do you have on <br />your sales team?</h3>
// //                     <div className="space-y-3 mb-3">
// //                       <button 
// //                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// //                         onClick={() => showSlide('marketplace')}
// //                       >
// //                         Individual Agent
// //                       </button>
// //                     </div>
// //                     <div className="grid grid-cols-2 gap-3">
// //                       <button 
// //                         className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// //                         onClick={() => showSlide('salesTeam')}
// //                       >
// //                         2-10
// //                       </button>
// //                       <button 
// //                         className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
// //                         onClick={() => showSlide('advertise')}
// //                       >
// //                         10+
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* Marketplace Section */}
// //                 <div className={`${activeSlide === 'marketplace' ? 'block' : 'hidden'}`}>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Checkout Our <br /> Marketplace!</h3>
// //                     <a 
// //                       href="https://advertiser.edmleadnetwork.com/"
// //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       Learn More
// //                     </a>
// //                   </div>
// //                 </div>

// //                 {/* Sales Team Section */}
// //                 <div className={`${activeSlide === 'salesTeam' ? 'block' : 'hidden'}`}>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch with <br />Our Sales Team</h3>
// //                     <a 
// //                       href="https://advertiser.edmleadnetwork.com/"
// //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       Learn More
// //                     </a>
// //                   </div>
// //                 </div>

// //                 {/* Apply to Be an Advertiser */}
// //                 <div className={`${activeSlide === 'advertise' ? 'block' : 'hidden'}`}>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Be an <br />Advertiser Today!</h3>
// //                     <a 
// //                       href="https://advertiser.edmleadnetwork.com/"
// //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       Learn More
// //                     </a>
// //                   </div>
// //                 </div>

// //                 {/* Non-US Based */}
// //                 <div className={`${activeSlide === 'nonUsa' ? 'block' : 'hidden'}`}>
// //                   <div className="text-center">
// //                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch <br />with Our Team</h3>
// //                     <a 
// //                       href="https://advertiser.edmleadnetwork.com/"
// //                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
// //                       target="_blank"
// //                       rel="noopener noreferrer"
// //                     >
// //                       Contact Us
// //                     </a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Mobile Hero Section - Single instance for mobile */}
// //       <section className="lg:hidden relative min-h-screen flex items-center overflow-hidden">
// //         {/* Video Background */}
// //         <div className="absolute inset-0 w-full h-full">
// //           <div className="absolute inset-0 bg-black/50 z-10"></div>
// //           <iframe 
// //             src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
// //             frameBorder="0"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //             allowFullScreen
// //             title="Globe"
// //             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
// //             style={{ filter: 'brightness(0.7)' }}
// //           />
// //         </div>

// //         {/* Content */}
// //         <div className="relative z-20 container mx-auto px-4 py-16">
// //           <div className="text-white mb-8">
// //             <h1 className="text-[#00BCA2] text-base font-semibold tracking-wider mb-3">#1 MEDIA SOLUTION</h1>
// //             <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
// //               Empower Your <br />Business. <br />Scale Your Reach.
// //             </h2>
// //             <div className="text-gray-200 text-sm leading-relaxed">
// //               <p className="mb-3">At EDM Lead Network, we don't just deliver leads — we deliver results you can count on. Whether you're a brand, broker, or agency, our platform is engineered to scale campaigns with surgical precision and strict adherence to YOUR compliance standards.</p>
// //               <p>We specialize in high-intent traffic, form fills, and call generation across industries like Insurance, Financial Services, Home Services, Legal, Travel, Real Estate, and more — where every click and call matters.</p>
// //             </div>
// //           </div>

// //           {/* Mobile Interactive Slides */}
// //           <div className="bg-white rounded-lg shadow-lg p-6">
// //             {/* First Slide Mobile */}
// //             <div className={`${activeSlideMobile === 'first' ? 'block' : 'hidden'}`}>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Are you selling or <br />buying calls/leads?</h3>
// //                 <div className="space-y-2">
// //                   <button 
// //                     className="w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// //                     onClick={() => showSlideMobile('buy')}
// //                   >
// //                     Buy
// //                   </button>
// //                   <button 
// //                     className="w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// //                     onClick={() => showSlideMobile('sell')}
// //                   >
// //                     Sell
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Sell Slide Mobile */}
// //             <div className={`${activeSlideMobile === 'sell' ? 'block' : 'hidden'}`}>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Apply to Be a <br />Publisher Today!</h3>
// //                 <a 
// //                   href="https://publishers.edmleadnetwork.com/"
// //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Apply Now
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Buy Slide Mobile */}
// //             <div className={`${activeSlideMobile === 'buy' ? 'block' : 'hidden'}`}>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Are you US based <br />or non-US based?</h3>
// //                 <div className="space-y-2">
// //                   <button 
// //                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// //                     onClick={() => showSlideMobile('individuals')}
// //                   >
// //                     US based
// //                   </button>
// //                   <button 
// //                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// //                     onClick={() => showSlideMobile('nonUsa')}
// //                   >
// //                     Non-US based
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Individuals Slide Mobile */}
// //             <div className={`${activeSlideMobile === 'individuals' ? 'block' : 'hidden'}`}>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">How many individuals <br />do you have on <br />your sales team?</h3>
// //                 <div className="space-y-2 mb-2">
// //                   <button 
// //                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// //                     onClick={() => showSlideMobile('marketplace')}
// //                   >
// //                     Individual Agent
// //                   </button>
// //                 </div>
// //                 <div className="grid grid-cols-2 gap-2">
// //                   <button 
// //                     className="bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// //                     onClick={() => showSlideMobile('salesTeam')}
// //                   >
// //                     2-10
// //                   </button>
// //                   <button 
// //                     className="bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
// //                     onClick={() => showSlideMobile('advertise')}
// //                   >
// //                     10+
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Marketplace Section Mobile */}
// //             <div className={`${activeSlideMobile === 'marketplace' ? 'block' : 'hidden'}`}>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Checkout Our <br /> Marketplace!</h3>
// //                 <a 
// //                   href="https://advertiser.edmleadnetwork.com/"
// //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Learn More
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Sales Team Section Mobile */}
// //             <div className={`${activeSlideMobile === 'salesTeam' ? 'block' : 'hidden'}`}>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch with <br />Our Sales Team</h3>
// //                 <a 
// //                   href="https://advertiser.edmleadnetwork.com/"
// //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Learn More
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Apply to Be an Advertiser Mobile */}
// //             <div className={`${activeSlideMobile === 'advertise' ? 'block' : 'hidden'}`}>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Apply to Be an <br />Advertiser Today!</h3>
// //                 <a 
// //                   href="https://advertiser.edmleadnetwork.com/"
// //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Learn More
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Non-US Based Mobile */}
// //             <div className={`${activeSlideMobile === 'nonUsa' ? 'block' : 'hidden'}`}>
// //               <div className="text-center">
// //                 <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch <br />with Our Team</h3>
// //                 <a 
// //                   href="https://advertiser.edmleadnetwork.com/"
// //                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   Contact Us
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Stats Section */}
// //       <section 
// //         ref={statsRef}
// //         className="bg-gray-50 py-16"
// //       >
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
// //             <div className="md:col-span-1"></div>
            
// //             {/* Active Campaigns */}
// //             <div className="md:col-span-1 text-center">
// //               <div className="mb-4">
// //                 <img src="/active compaing.png" alt="Active Campaigns" className="mx-auto w-16 h-16" />
// //               </div>
// //               <div>
// //                 <div className="text-gray-600 text-sm mb-2"><br />Active Campaigns</div>
// //                 <div className="text-4xl font-bold text-[#00BCA2]">
// //                   <span className="counter" id="campaigns-counter">0</span>+
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Weekly Earnings */}
// //             <div className="md:col-span-1 text-center">
// //               <div className="mb-4">
// //                 <img src="/Dollar image.png" alt="Weekly Earnings" className="mx-auto w-16 h-16" />
// //               </div>
// //               <div>
// //                 <div className="text-gray-600 text-sm mb-2"><br />Earned weekly by publishers</div>
// //                 <div className="text-4xl font-bold text-[#00BCA2]">
// //                   $<span className="counter" id="earnings-counter">0</span>+
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Calls Per Day */}
// //             <div className="md:col-span-1 text-center">
// //               <div className="mb-4">
// //                 <img src="/Call image.png" alt="Calls Per Day" className="mx-auto w-16 h-16" />
// //               </div>
// //               <div>
// //                 <div className="text-gray-600 text-sm mb-2"><br />Calls Per Day</div>
// //                 <div className="text-4xl font-bold text-[#00BCA2]">
// //                   <span className="counter" id="calls-counter">0</span>+
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="md:col-span-1"></div>
// //           </div>
// //           <div className="text-center mt-8">
// //             <img src="/dictorate.png" alt="Decorative" className="inline-block" />
// //           </div>
// //         </div>
// //       </section>

// //       {/* Publications Section */}
// //       <section className="bg-[#1a2c3e] py-16" id="publications">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-center text-white text-3xl font-bold mb-12">PUBLICATIONS</h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
// //             {/* Publication 1 - Inc. */}
// //             <a href="https://www.inc.com/profile/edm-lead-network" target="_blank" rel="noopener noreferrer" className="block">
// //               <img src="/images/publication-inc.png" alt="Inc. Magazine" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// //             </a>
// //             {/* Publication 2 - Canadian SME */}
// //             <a href="https://canadiansme.ca/edm-networks-founder-shares-top-5-strategies-to-generate-more-leads-for-small-businesses-with-a-small-budget/" target="_blank" rel="noopener noreferrer" className="block">
// //               <img src="/images/publication-canadian-sme.png" alt="Canadian SME" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// //             </a>
// //             {/* Publication 3 - Medium */}
// //             <a href="https://medium.com/authority-magazine/jamal-english-of-edm-network-on-how-to-effectively-leverage-the-power-of-digital-marketing-ppc-4eaeb433e693" target="_blank" rel="noopener noreferrer" className="block">
// //               <img src="/images/publication-medium.png" alt="Medium" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// //             </a>
// //             {/* Publication 4 - Tech Times */}
// //             <a href="https://www.techtimes.com/articles/284535/20221207/growing-and-scaling-a-business-in-a-remote-work-model.htm" target="_blank" rel="noopener noreferrer" className="block">
// //               <img src="/images/publication-tech-times.png" alt="Tech Times" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// //             </a>
// //             {/* Publication 5 - Cal Biz Journal */}
// //             <a href="https://calbizjournal.com/why-investing-into-lead-prospecting-is-important-for-business-development/" target="_blank" rel="noopener noreferrer" className="block">
// //               <img src="/images/publication-cbj.png" alt="California Business Journal" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// //             </a>
// //             {/* Publication 6 - The Next Scoop */}
// //             <a href="https://thenextscoop.com/podcast/how-to-generate-leads-for-insurance-interview-with-jamal/" target="_blank" rel="noopener noreferrer" className="block">
// //               <img src="/images/publication-next-scoop.png" alt="The Next Scoop" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// //             </a>
// //             {/* Publication 7 - NY Weekly */}
// //             <a href="https://nyweekly.com/business/an-inside-look-of-lead-generation-for-insurance-agents/" target="_blank" rel="noopener noreferrer" className="block">
// //               <img src="/images/publication-ny-weekly.png" alt="NY Weekly" className="w-full h-auto grayscale hover:grayscale-0 transition" />
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Flip Cards Section */}
// //       <section className="bg-white py-16">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
// //             {/* Publisher Flip Card */}
// //             <div className="flip-card h-96">
// //               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
// //                 {/* Front */}
// //                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
// //                   <img src="/icon-02.png" alt="Publisher" className="w-20 h-20 mb-4" />
// //                   <h3 className="text-white text-2xl font-bold">PUBLISHER</h3>
// //                 </div>
// //                 {/* Back */}
// //                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
// //                   <img src="/images/icon-02.png" alt="Publisher Icon" className="w-12 h-12 mb-3 mx-auto" />
// //                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">PUBLISHER</h3>
// //                   <p className="text-sm mb-3">Partnering with EDM Network offers publishers a multitude of benefits. Our extensive network of advertisers provides access to big budgets and 30,000 businesses actively seeking quality leads.</p>
// //                   <p className="text-sm mb-3">Publishers can monetize their website traffic by collaborating with top-notch brands and introducing their audience to relevant products and services.</p>
// //                   <p className="text-sm mb-4">Benefit from unmatched access to specialized brands, global campaigns, real-time tracking, monitored compliance systems, transparent performance metrics, weekly payouts, and consistent and faster payments.</p>
// //                   <a href="https://publishers.edmleadnetwork.com/auth/login" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
// //                     Apply Now
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Enterprise Advertiser Flip Card */}
// //             <div className="flip-card h-96">
// //               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
// //                 {/* Front */}
// //                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
// //                   <img src="/icon-01.png" alt="Enterprise Advertiser" className="w-20 h-20 mb-4" />
// //                   <h3 className="text-white text-2xl font-bold">ENTERPRISE ADVERTISER</h3>
// //                 </div>
// //                 {/* Back */}
// //                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
// //                   <img src="/images/icon-01.png" alt="Advertiser Icon" className="w-12 h-12 mb-3 mx-auto" />
// //                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">ENTERPRISE ADVERTISER</h3>
// //                   <p className="text-sm mb-3">Advertisers can benefit from partnering with EDM Network for their marketing needs. We provide online and offline marketing solutions that connect advertisers with their target customers based on data-driven decisions.</p>
// //                   <p className="text-sm mb-3">We offer high-quality publishers for targeted marketing campaigns. With a diverse network and global reach, EDM Network helps advertisers improve their sales pipeline and generate revenue faster.</p>
// //                   <p className="text-sm mb-4">Contact us at +1 (833) 711-8975 to discuss your success metrics and launch a custom campaign tailored to your business goals.</p>
// //                   <a href="https://advertiser.edmleadnetwork.com/auth/login" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
// //                     Apply Now
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Individual Agent Flip Card */}
// //             <div className="flip-card h-96">
// //               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
// //                 {/* Front */}
// //                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
// //                   <img src="/icon-03.png" alt="Individual Agent" className="w-20 h-20 mb-4" />
// //                   <h3 className="text-white text-2xl font-bold">INDIVIDUAL AGENT</h3>
// //                 </div>
// //                 {/* Back */}
// //                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
// //                   <img src="/images/icon-03.png" alt="Agent Icon" className="w-12 h-12 mb-3 mx-auto" />
// //                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">INDIVIDUAL AGENT</h3>
// //                   <p className="text-sm mb-3">Individual agents can greatly benefit from partnering with EDM Network for their lead generation needs.</p>
// //                   <p className="text-sm mb-3">Agents can receive calls directly to their phone, ensuring prompt and efficient communication with potential clients. The flexibility to pause and start campaigns when needed allows agents to adapt their marketing efforts to their specific requirements.</p>
// //                   <p className="text-sm mb-4">We prioritize top-quality leads that are scrubbed against DNC (Do Not Call) lists, ensuring compliance and minimizing wasted time on unqualified prospects.</p>
// //                   <a href="/edm-marketplace/" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
// //                     Apply Now
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why EDM Network Section */}
// //       <section className="bg-white py-16">
// //         <div className="container mx-auto px-4">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
// //             {/* Left Column */}
// //             <div className="md:col-span-1">
// //               <h2 className="text-3xl font-bold mb-6"><span className="text-[#00BCA2]">WHY</span> EDM NETWORK?</h2>
// //               <div className="text-gray-700 space-y-4 mb-8">
// //                 <p>At EDM Network we specialize in providing top-notch lead-generation services that can help take your business to the next level! Our team of industry experts uses the latest pay-per-call marketing technologies and strategies to efficiently identify and target potential leads, delivering unrivaled performance in the industry.</p>
// //                 <p>We're dedicated to helping your company grow faster and more efficiently through our effective lead-generation solutions. So, if you're looking for a reliable partner to help you drive new business, look no further than EDM Network!</p>
// //               </div>
              
// //               {/* Expand your business card */}
// //               <div className="bg-gradient-to-r from-[#00BCA2] to-[#007C62] rounded-lg p-6 text-white">
// //                 <h3 className="text-xl font-bold mb-4">Expand your business</h3>
// //                 <a href="tel:+18337118975" className="block w-full bg-white text-[#00BCA2] text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
// //                   Click here
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Middle Column */}
// //             <div className="md:col-span-1">
// //               <div className="mb-8">
// //                 <img src="/1.png" alt="High and timely payouts" className="w-full h-auto" />
// //               </div>
// //               <h3 className="text-xl font-bold mb-4">High and timely payouts</h3>
// //               <p className="text-gray-700 mb-8">Our affiliate partner program offers top-performing lead generation opportunities across various verticals, with a focus on maximizing profits for our partners. We prioritize fast and reliable payout processing without any hidden fees, so our partners can expect prompt payouts and transparent payment processing.</p>
              
// //               <div className="mb-8">
// //                 <img src="/31.png" alt="High intent inbound leads" className="w-full h-auto" />
// //               </div>
// //               <h3 className="text-xl font-bold mb-4">High intent inbound leads</h3>
// //               <p className="text-gray-700">Our exclusive inbound lead service delivers high-quality, pre-screened calls from highly qualified prospective customers. This helps you save time and resources by focusing only on leads that are more likely to convert into sales. With our customer-centric approach, you can trust that you're receiving the best and most qualified leads for your business.</p>
// //             </div>

// //             {/* Right Column */}
// //             <div className="md:col-span-1">
// //               <div className="mb-8">
// //                 <img src="/21.png" alt="Dedicated staff" className="w-full h-auto" />
// //               </div>
// //               <h3 className="text-xl font-bold mb-4">Dedicated staff for client services</h3>
// //               <p className="text-gray-700 mb-8">Your dedicated account manager and client services team are always available to assist you in meeting your objectives and maximizing profit. We take pride in our attention to detail and dedication to our clients.</p>
              
// //               <div className="mb-8">
// //                 <img src="/4.png" alt="Actionable analytics" className="w-full h-auto" />
// //               </div>
// //               <h3 className="text-xl font-bold mb-4">Actionable analytics</h3>
// //               <p className="text-gray-700">With our lead generation services, you won't have to guess if your campaigns are effective. Our real-time reporting and campaign-specific insights provide you with detailed information about recent activity and campaign success, making it easy to optimize your strategies and make data-driven decisions. We believe in transparency, so you can count on our reporting system to give you the information you need to succeed.</p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;
// import React, { useState, useEffect, useRef } from 'react';

// const Home = () => {
//   const [activeSlide, setActiveSlide] = useState('first');
//   const [activeSlideMobile, setActiveSlideMobile] = useState('first');
//   const [countersStarted, setCountersStarted] = useState(false);
//   const statsRef = useRef(null);

//   // Handle slide navigation
//   const showSlide = (slide) => {
//     setActiveSlide(slide);
//   };

//   const showSlideMobile = (slide) => {
//     setActiveSlideMobile(slide);
//   };

//   // Counter animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting && !countersStarted) {
//             setCountersStarted(true);
//             startCounters();
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (statsRef.current) {
//       observer.observe(statsRef.current);
//     }

//     return () => observer.disconnect();
//   }, [countersStarted]);

//   const startCounters = () => {
//     const counters = [
//       { element: document.getElementById('campaigns-counter'), target: 150, suffix: '+' },
//       { element: document.getElementById('earnings-counter'), target: 500000, prefix: '$', suffix: '+' },
//       { element: document.getElementById('calls-counter'), target: 20000, suffix: '+' }
//     ];

//     counters.forEach(counter => {
//       if (!counter.element) return;
      
//       let current = 0;
//       const increment = Math.ceil(counter.target / 100);
//       const timer = setInterval(() => {
//         current += increment;
//         if (current >= counter.target) {
//           counter.element.textContent = counter.target.toLocaleString();
//           clearInterval(timer);
//         } else {
//           counter.element.textContent = current.toLocaleString();
//         }
//       }, 20);
//     });
//   };

//   return (
//     <div className="home-page">
//       {/* Hero Section with Video Background - Single instance */}
//       <section className="relative min-h-screen flex items-center overflow-hidden">
//         {/* Video Background */}
//         <div className="absolute inset-0 w-full h-full">
//           <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for better text visibility */}
//           <iframe 
//             src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//             title="Globe"
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
//             style={{ filter: 'brightness(0.7)' }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-20 container mx-auto px-4 py-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Column - Text Content */}
//             <div className="text-white">
//               <h1 className="text-[#00BCA2] text-lg font-semibold tracking-wider mb-4">#1 MEDIA SOLUTION</h1>
//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//                 Empower Your <br />Business. <br />Scale Your Reach.
//               </h2>
//               <div className="text-gray-200 text-base leading-relaxed max-w-xl mb-8">
//                 <p className="mb-4">At EDM Lead Network, we don't just deliver leads — we deliver results you can count on. Whether you're a brand, broker, or agency, our platform is engineered to scale campaigns with surgical precision and strict adherence to YOUR compliance standards.</p>
//                 <p>We specialize in high-intent traffic, form fills, and call generation across industries like Insurance, Financial Services, Home Services, Legal, Travel, Real Estate, and more — where every click and call matters.</p>
//               </div>
//               <a href="#anchor-form" className="inline-block bg-[#00BCA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008f7b] transition">
//                 GET STARTED
//               </a>
//             </div>

//             {/* Right Column - Interactive Questionnaire */}
//             <div className="lg:ml-auto w-full max-w-md">
//               {/* Top colored bar */}
//               <div className="bg-gradient-to-b from-[#00BCA2] to-[#007C62] h-2 rounded-t-lg"></div>
              
//               {/* Questionnaire Card */}
//               <div className="bg-white rounded-b-lg shadow-2xl p-6 md:p-8">
                
//                 {/* First Slide - Are you selling or buying */}
//                 <div className={`${activeSlide === 'first' ? 'block' : 'hidden'}`}>
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you selling or <br />buying calls/leads?</h3>
//                     <div className="space-y-3">
//                       <button 
//                         className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
//                         onClick={() => showSlide('buy')}
//                       >
//                         Buy
//                       </button>
//                       <button 
//                         className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
//                         onClick={() => showSlide('sell')}
//                       >
//                         Sell
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Sell Slide - Apply to Be a Publisher */}
//                 <div className={`${activeSlide === 'sell' ? 'block' : 'hidden'}`}>
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Be a <br />Publisher Today!</h3>
//                     <a 
//                       href="https://publishers.edmleadnetwork.com/" 
//                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Apply Now
//                     </a>
//                   </div>
//                 </div>

//                 {/* Buy Slide - US or Non-US */}
//                 <div className={`${activeSlide === 'buy' ? 'block' : 'hidden'}`}>
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you US based <br />or non-US based?</h3>
//                     <div className="space-y-3">
//                       <button 
//                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
//                         onClick={() => showSlide('individuals')}
//                       >
//                         US based
//                       </button>
//                       <button 
//                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
//                         onClick={() => showSlide('nonUsa')}
//                       >
//                         Non-US based
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Individuals Slide */}
//                 <div className={`${activeSlide === 'individuals' ? 'block' : 'hidden'}`}>
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">How many individuals <br />do you have on <br />your sales team?</h3>
//                     <div className="space-y-3 mb-3">
//                       <button 
//                         className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
//                         onClick={() => showSlide('marketplace')}
//                       >
//                         Individual Agent
//                       </button>
//                     </div>
//                     <div className="grid grid-cols-2 gap-3">
//                       <button 
//                         className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
//                         onClick={() => showSlide('salesTeam')}
//                       >
//                         2-10
//                       </button>
//                       <button 
//                         className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
//                         onClick={() => showSlide('advertise')}
//                       >
//                         10+
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Marketplace Section */}
//                 <div className={`${activeSlide === 'marketplace' ? 'block' : 'hidden'}`}>
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Checkout Our <br /> Marketplace!</h3>
//                     <a 
//                       href="https://advertiser.edmleadnetwork.com/"
//                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Learn More
//                     </a>
//                   </div>
//                 </div>

//                 {/* Sales Team Section */}
//                 <div className={`${activeSlide === 'salesTeam' ? 'block' : 'hidden'}`}>
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch with <br />Our Sales Team</h3>
//                     <a 
//                       href="https://advertiser.edmleadnetwork.com/"
//                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Learn More
//                     </a>
//                   </div>
//                 </div>

//                 {/* Apply to Be an Advertiser */}
//                 <div className={`${activeSlide === 'advertise' ? 'block' : 'hidden'}`}>
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Be an <br />Advertiser Today!</h3>
//                     <a 
//                       href="https://advertiser.edmleadnetwork.com/"
//                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Learn More
//                     </a>
//                   </div>
//                 </div>

//                 {/* Non-US Based */}
//                 <div className={`${activeSlide === 'nonUsa' ? 'block' : 'hidden'}`}>
//                   <div className="text-center">
//                     <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch <br />with Our Team</h3>
//                     <a 
//                       href="https://advertiser.edmleadnetwork.com/"
//                       className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       Contact Us
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mobile Hero Section - Single instance for mobile */}
//       <section className="lg:hidden relative min-h-screen flex items-center overflow-hidden">
//         {/* Video Background */}
//         <div className="absolute inset-0 w-full h-full">
//           <div className="absolute inset-0 bg-black/50 z-10"></div>
//           <iframe 
//             src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowFullScreen
//             title="Globe"
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
//             style={{ filter: 'brightness(0.7)' }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-20 container mx-auto px-4 py-16">
//           <div className="text-white mb-8">
//             <h1 className="text-[#00BCA2] text-base font-semibold tracking-wider mb-3">#1 MEDIA SOLUTION</h1>
//             <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
//               Empower Your <br />Business. <br />Scale Your Reach.
//             </h2>
//             <div className="text-gray-200 text-sm leading-relaxed">
//               <p className="mb-3">At EDM Lead Network, we don't just deliver leads — we deliver results you can count on. Whether you're a brand, broker, or agency, our platform is engineered to scale campaigns with surgical precision and strict adherence to YOUR compliance standards.</p>
//               <p>We specialize in high-intent traffic, form fills, and call generation across industries like Insurance, Financial Services, Home Services, Legal, Travel, Real Estate, and more — where every click and call matters.</p>
//             </div>
//           </div>

//           {/* Mobile Interactive Slides */}
//           <div className="bg-white rounded-lg shadow-lg p-6">
//             {/* First Slide Mobile */}
//             <div className={`${activeSlideMobile === 'first' ? 'block' : 'hidden'}`}>
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Are you selling or <br />buying calls/leads?</h3>
//                 <div className="space-y-2">
//                   <button 
//                     className="w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
//                     onClick={() => showSlideMobile('buy')}
//                   >
//                     Buy
//                   </button>
//                   <button 
//                     className="w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
//                     onClick={() => showSlideMobile('sell')}
//                   >
//                     Sell
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Sell Slide Mobile */}
//             <div className={`${activeSlideMobile === 'sell' ? 'block' : 'hidden'}`}>
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Apply to Be a <br />Publisher Today!</h3>
//                 <a 
//                   href="https://publishers.edmleadnetwork.com/"
//                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Apply Now
//                 </a>
//               </div>
//             </div>

//             {/* Buy Slide Mobile */}
//             <div className={`${activeSlideMobile === 'buy' ? 'block' : 'hidden'}`}>
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Are you US based <br />or non-US based?</h3>
//                 <div className="space-y-2">
//                   <button 
//                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
//                     onClick={() => showSlideMobile('individuals')}
//                   >
//                     US based
//                   </button>
//                   <button 
//                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
//                     onClick={() => showSlideMobile('nonUsa')}
//                   >
//                     Non-US based
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Individuals Slide Mobile */}
//             <div className={`${activeSlideMobile === 'individuals' ? 'block' : 'hidden'}`}>
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">How many individuals <br />do you have on <br />your sales team?</h3>
//                 <div className="space-y-2 mb-2">
//                   <button 
//                     className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
//                     onClick={() => showSlideMobile('marketplace')}
//                   >
//                     Individual Agent
//                   </button>
//                 </div>
//                 <div className="grid grid-cols-2 gap-2">
//                   <button 
//                     className="bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
//                     onClick={() => showSlideMobile('salesTeam')}
//                   >
//                     2-10
//                   </button>
//                   <button 
//                     className="bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
//                     onClick={() => showSlideMobile('advertise')}
//                   >
//                     10+
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Marketplace Section Mobile */}
//             <div className={`${activeSlideMobile === 'marketplace' ? 'block' : 'hidden'}`}>
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Checkout Our <br /> Marketplace!</h3>
//                 <a 
//                   href="https://advertiser.edmleadnetwork.com/"
//                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>

//             {/* Sales Team Section Mobile */}
//             <div className={`${activeSlideMobile === 'salesTeam' ? 'block' : 'hidden'}`}>
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch with <br />Our Sales Team</h3>
//                 <a 
//                   href="https://advertiser.edmleadnetwork.com/"
//                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>

//             {/* Apply to Be an Advertiser Mobile */}
//             <div className={`${activeSlideMobile === 'advertise' ? 'block' : 'hidden'}`}>
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Apply to Be an <br />Advertiser Today!</h3>
//                 <a 
//                   href="https://advertiser.edmleadnetwork.com/"
//                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             </div>

//             {/* Non-US Based Mobile */}
//             <div className={`${activeSlideMobile === 'nonUsa' ? 'block' : 'hidden'}`}>
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch <br />with Our Team</h3>
//                 <a 
//                   href="https://advertiser.edmleadnetwork.com/"
//                   className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section 
//         ref={statsRef}
//         className="bg-gray-50 py-16"
//       >
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
//             <div className="md:col-span-1"></div>
            
//             {/* Active Campaigns */}
//             <div className="md:col-span-1 text-center">
//               <div className="mb-4">
//                 <img src="/active compaing.png" alt="Active Campaigns" className="mx-auto w-16 h-16" />
//               </div>
//               <div>
//                 <div className="text-gray-600 text-sm mb-2"><br />Active Campaigns</div>
//                 <div className="text-4xl font-bold text-[#00BCA2]">
//                   <span className="counter" id="campaigns-counter">0</span>+
//                 </div>
//               </div>
//             </div>

//             {/* Weekly Earnings */}
//             <div className="md:col-span-1 text-center">
//               <div className="mb-4">
//                 <img src="/Dollar image.png" alt="Weekly Earnings" className="mx-auto w-16 h-16" />
//               </div>
//               <div>
//                 <div className="text-gray-600 text-sm mb-2"><br />Earned weekly by publishers</div>
//                 <div className="text-4xl font-bold text-[#00BCA2]">
//                   $<span className="counter" id="earnings-counter">0</span>+
//                 </div>
//               </div>
//             </div>

//             {/* Calls Per Day */}
//             <div className="md:col-span-1 text-center">
//               <div className="mb-4">
//                 <img src="/Call image.png" alt="Calls Per Day" className="mx-auto w-16 h-16" />
//               </div>
//               <div>
//                 <div className="text-gray-600 text-sm mb-2"><br />Calls Per Day</div>
//                 <div className="text-4xl font-bold text-[#00BCA2]">
//                   <span className="counter" id="calls-counter">0</span>+
//                 </div>
//               </div>
//             </div>

//             <div className="md:col-span-1"></div>
//           </div>
//           <div className="text-center mt-8">
//             <img src="/dictorate.png" alt="Decorative" className="inline-block" />
//           </div>
//         </div>
//       </section>

//       {/* Publications Section */}
//       <section className="bg-[#1a2c3e] py-16" id="publications">
//         <div className="container mx-auto px-4">
//           <h2 className="text-center text-white text-3xl font-bold mb-12">PUBLICATIONS</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
//             {/* Publication 1 - Inc. */}
//             <a href="https://www.inc.com/profile/edm-lead-network" target="_blank" rel="noopener noreferrer" className="block">
//               <img src="/images/publication-inc.png" alt="Inc. Magazine" className="w-full h-auto grayscale hover:grayscale-0 transition" />
//             </a>
//             {/* Publication 2 - Canadian SME */}
//             <a href="https://canadiansme.ca/edm-networks-founder-shares-top-5-strategies-to-generate-more-leads-for-small-businesses-with-a-small-budget/" target="_blank" rel="noopener noreferrer" className="block">
//               <img src="/images/publication-canadian-sme.png" alt="Canadian SME" className="w-full h-auto grayscale hover:grayscale-0 transition" />
//             </a>
//             {/* Publication 3 - Medium */}
//             <a href="https://medium.com/authority-magazine/jamal-english-of-edm-network-on-how-to-effectively-leverage-the-power-of-digital-marketing-ppc-4eaeb433e693" target="_blank" rel="noopener noreferrer" className="block">
//               <img src="/images/publication-medium.png" alt="Medium" className="w-full h-auto grayscale hover:grayscale-0 transition" />
//             </a>
//             {/* Publication 4 - Tech Times */}
//             <a href="https://www.techtimes.com/articles/284535/20221207/growing-and-scaling-a-business-in-a-remote-work-model.htm" target="_blank" rel="noopener noreferrer" className="block">
//               <img src="/images/publication-tech-times.png" alt="Tech Times" className="w-full h-auto grayscale hover:grayscale-0 transition" />
//             </a>
//             {/* Publication 5 - Cal Biz Journal */}
//             <a href="https://calbizjournal.com/why-investing-into-lead-prospecting-is-important-for-business-development/" target="_blank" rel="noopener noreferrer" className="block">
//               <img src="/images/publication-cbj.png" alt="California Business Journal" className="w-full h-auto grayscale hover:grayscale-0 transition" />
//             </a>
//             {/* Publication 6 - The Next Scoop */}
//             <a href="https://thenextscoop.com/podcast/how-to-generate-leads-for-insurance-interview-with-jamal/" target="_blank" rel="noopener noreferrer" className="block">
//               <img src="/images/publication-next-scoop.png" alt="The Next Scoop" className="w-full h-auto grayscale hover:grayscale-0 transition" />
//             </a>
//             {/* Publication 7 - NY Weekly */}
//             <a href="https://nyweekly.com/business/an-inside-look-of-lead-generation-for-insurance-agents/" target="_blank" rel="noopener noreferrer" className="block">
//               <img src="/images/publication-ny-weekly.png" alt="NY Weekly" className="w-full h-auto grayscale hover:grayscale-0 transition" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Flip Cards Section */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
//             {/* Publisher Flip Card */}
//             <div className="flip-card h-96">
//               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
//                 {/* Front */}
//                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
//                   <img src="/icon-02.png" alt="Publisher" className="w-20 h-20 mb-4" />
//                   <h3 className="text-white text-2xl font-bold">PUBLISHER</h3>
//                 </div>
//                 {/* Back */}
//                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
//                   <img src="/images/icon-02.png" alt="Publisher Icon" className="w-12 h-12 mb-3 mx-auto" />
//                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">PUBLISHER</h3>
//                   <p className="text-sm mb-3">Partnering with EDM Network offers publishers a multitude of benefits. Our extensive network of advertisers provides access to big budgets and 30,000 businesses actively seeking quality leads.</p>
//                   <p className="text-sm mb-3">Publishers can monetize their website traffic by collaborating with top-notch brands and introducing their audience to relevant products and services.</p>
//                   <p className="text-sm mb-4">Benefit from unmatched access to specialized brands, global campaigns, real-time tracking, monitored compliance systems, transparent performance metrics, weekly payouts, and consistent and faster payments.</p>
//                   <a href="https://publishers.edmleadnetwork.com/auth/login" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
//                     Apply Now
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Enterprise Advertiser Flip Card */}
//             <div className="flip-card h-96">
//               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
//                 {/* Front */}
//                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
//                   <img src="/icon-01.png" alt="Enterprise Advertiser" className="w-20 h-20 mb-4" />
//                   <h3 className="text-white text-2xl font-bold">ENTERPRISE ADVERTISER</h3>
//                 </div>
//                 {/* Back */}
//                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
//                   <img src="/images/icon-01.png" alt="Advertiser Icon" className="w-12 h-12 mb-3 mx-auto" />
//                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">ENTERPRISE ADVERTISER</h3>
//                   <p className="text-sm mb-3">Advertisers can benefit from partnering with EDM Network for their marketing needs. We provide online and offline marketing solutions that connect advertisers with their target customers based on data-driven decisions.</p>
//                   <p className="text-sm mb-3">We offer high-quality publishers for targeted marketing campaigns. With a diverse network and global reach, EDM Network helps advertisers improve their sales pipeline and generate revenue faster.</p>
//                   <p className="text-sm mb-4">Contact us at +1 (833) 711-8975 to discuss your success metrics and launch a custom campaign tailored to your business goals.</p>
//                   <a href="https://advertiser.edmleadnetwork.com/auth/login" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
//                     Apply Now
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Individual Agent Flip Card */}
//             <div className="flip-card h-96">
//               <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
//                 {/* Front */}
//                 <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
//                   <img src="/icon-03.png" alt="Individual Agent" className="w-20 h-20 mb-4" />
//                   <h3 className="text-white text-2xl font-bold">INDIVIDUAL AGENT</h3>
//                 </div>
//                 {/* Back */}
//                 <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
//                   <img src="/images/icon-03.png" alt="Agent Icon" className="w-12 h-12 mb-3 mx-auto" />
//                   <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">INDIVIDUAL AGENT</h3>
//                   <p className="text-sm mb-3">Individual agents can greatly benefit from partnering with EDM Network for their lead generation needs.</p>
//                   <p className="text-sm mb-3">Agents can receive calls directly to their phone, ensuring prompt and efficient communication with potential clients. The flexibility to pause and start campaigns when needed allows agents to adapt their marketing efforts to their specific requirements.</p>
//                   <p className="text-sm mb-4">We prioritize top-quality leads that are scrubbed against DNC (Do Not Call) lists, ensuring compliance and minimizing wasted time on unqualified prospects.</p>
//                   <a href="/edm-marketplace/" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
//                     Apply Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why EDM Network Section - Images only with embedded text */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
//             {/* Left Column - WHY heading and expand card */}
//             <div className="md:col-span-1">
//               <h2 className="text-3xl font-bold mb-6"><span className="text-[#00BCA2]">WHY</span> EDM NETWORK?</h2>
//               <div className="text-gray-700 space-y-4 mb-8">
//                 <p>At EDM Network we specialize in providing top-notch lead-generation services that can help take your business to the next level! Our team of industry experts uses the latest pay-per-call marketing technologies and strategies to efficiently identify and target potential leads, delivering unrivaled performance in the industry.</p>
//                 <p>We're dedicated to helping your company grow faster and more efficiently through our effective lead-generation solutions. So, if you're looking for a reliable partner to help you drive new business, look no further than EDM Network!</p>
//               </div>
              
//               {/* Expand your business card */}
//               <div className="bg-gradient-to-r from-[#00BCA2] to-[#007C62] rounded-lg p-6 text-white">
//                 <h3 className="text-xl font-bold mb-4">Expand your business</h3>
//                 <a href="tel:+18337118975" className="block w-full bg-white text-[#00BCA2] text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
//                   Click here
//                 </a>
//               </div>
//             </div>

//             {/* Middle Column - Images only (text is inside the images) */}
//             <div className="md:col-span-1">
//               <div className="mb-8">
//                 <img src="/1.png" alt="High and timely payouts" className="w-full h-auto" />
//               </div>
//               <div className="mb-8">
//                 <img src="/31.png" alt="High intent inbound leads" className="w-full h-auto" />
//               </div>
//             </div>

//             {/* Right Column - Images only (text is inside the images) */}
//             <div className="md:col-span-1">
//               <div className="mb-8">
//                 <img src="/21.png" alt="Dedicated staff" className="w-full h-auto" />
//               </div>
//               <div className="mb-8">
//                 <img src="/4.png" alt="Actionable analytics" className="w-full h-auto" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState('first');
  const [activeSlideMobile, setActiveSlideMobile] = useState('first');
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  // Handle slide navigation
  const showSlide = (slide) => {
    setActiveSlide(slide);
  };

  const showSlideMobile = (slide) => {
    setActiveSlideMobile(slide);
  };

  // Counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted) {
            setCountersStarted(true);
            startCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [countersStarted]);

  const startCounters = () => {
    const counters = [
      { element: document.getElementById('campaigns-counter'), target: 150, suffix: '+' },
      { element: document.getElementById('earnings-counter'), target: 500000, prefix: '$', suffix: '+' },
      { element: document.getElementById('calls-counter'), target: 20000, suffix: '+' }
    ];

    counters.forEach(counter => {
      if (!counter.element) return;
      
      let current = 0;
      const increment = Math.ceil(counter.target / 100);
      const timer = setInterval(() => {
        current += increment;
        if (current >= counter.target) {
          counter.element.textContent = counter.target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.element.textContent = current.toLocaleString();
        }
      }, 20);
    });
  };

  return (
    <div className="home-page">
      {/* Hero Section with Video Background - Single instance */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay for better text visibility */}
          <iframe 
            src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Globe"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
            style={{ filter: 'brightness(0.7)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-white">
              <h1 className="text-[#00BCA2] text-lg font-semibold tracking-wider mb-4">#1 MEDIA SOLUTION</h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Empower Your <br />Business. <br />Scale Your Reach.
              </h2>
              <div className="text-gray-200 text-base leading-relaxed max-w-xl mb-8">
                <p className="mb-4">At EDM Lead Network, we don't just deliver leads — we deliver results you can count on. Whether you're a brand, broker, or agency, our platform is engineered to scale campaigns with surgical precision and strict adherence to YOUR compliance standards.</p>
                <p>We specialize in high-intent traffic, form fills, and call generation across industries like Insurance, Financial Services, Home Services, Legal, Travel, Real Estate, and more — where every click and call matters.</p>
              </div>
              <a href="#anchor-form" className="inline-block bg-[#00BCA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008f7b] transition">
                GET STARTED
              </a>
            </div>

            {/* Right Column - Interactive Questionnaire */}
            <div className="lg:ml-auto w-full max-w-md">
              {/* Top colored bar */}
              <div className="bg-gradient-to-b from-[#00BCA2] to-[#007C62] h-2 rounded-t-lg"></div>
              
              {/* Questionnaire Card */}
              <div className="bg-white rounded-b-lg shadow-2xl p-6 md:p-8">
                
                {/* First Slide - Are you selling or buying */}
                <div className={`${activeSlide === 'first' ? 'block' : 'hidden'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you selling or <br />buying calls/leads?</h3>
                    <div className="space-y-3">
                      <button 
                        className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
                        onClick={() => showSlide('buy')}
                      >
                        Buy
                      </button>
                      <button 
                        className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
                        onClick={() => showSlide('sell')}
                      >
                        Sell
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sell Slide - Apply to Be a Publisher */}
                <div className={`${activeSlide === 'sell' ? 'block' : 'hidden'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Be a <br />Publisher Today!</h3>
                    <a 
                      href="https://publishers.edmleadnetwork.com/" 
                      className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                {/* Buy Slide - US or Non-US */}
                <div className={`${activeSlide === 'buy' ? 'block' : 'hidden'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you US based <br />or non-US based?</h3>
                    <div className="space-y-3">
                      <button 
                        className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
                        onClick={() => showSlide('individuals')}
                      >
                        US based
                      </button>
                      <button 
                        className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
                        onClick={() => showSlide('nonUsa')}
                      >
                        Non-US based
                      </button>
                    </div>
                  </div>
                </div>

                {/* Individuals Slide */}
                <div className={`${activeSlide === 'individuals' ? 'block' : 'hidden'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">How many individuals <br />do you have on <br />your sales team?</h3>
                    <div className="space-y-3 mb-3">
                      <button 
                        className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
                        onClick={() => showSlide('marketplace')}
                      >
                        Individual Agent
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <button 
                        className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
                        onClick={() => showSlide('salesTeam')}
                      >
                        2-10
                      </button>
                      <button 
                        className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition"
                        onClick={() => showSlide('advertise')}
                      >
                        10+
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketplace Section */}
                <div className={`${activeSlide === 'marketplace' ? 'block' : 'hidden'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Checkout Our <br /> Marketplace!</h3>
                    <a 
                      href="https://advertiser.edmleadnetwork.com/"
                      className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Sales Team Section */}
                <div className={`${activeSlide === 'salesTeam' ? 'block' : 'hidden'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch with <br />Our Sales Team</h3>
                    <a 
                      href="https://advertiser.edmleadnetwork.com/"
                      className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Apply to Be an Advertiser */}
                <div className={`${activeSlide === 'advertise' ? 'block' : 'hidden'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply to Be an <br />Advertiser Today!</h3>
                    <a 
                      href="https://advertiser.edmleadnetwork.com/"
                      className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn More
                    </a>
                  </div>
                </div>

                {/* Non-US Based */}
                <div className={`${activeSlide === 'nonUsa' ? 'block' : 'hidden'}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch <br />with Our Team</h3>
                    <a 
                      href="https://advertiser.edmleadnetwork.com/"
                      className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Hero Section - Single instance for mobile */}
      <section className="lg:hidden relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <iframe 
            src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Globe"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
            style={{ filter: 'brightness(0.7)' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 py-16">
          <div className="text-white mb-8">
            <h1 className="text-[#00BCA2] text-base font-semibold tracking-wider mb-3">#1 MEDIA SOLUTION</h1>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Empower Your <br />Business. <br />Scale Your Reach.
            </h2>
            <div className="text-gray-200 text-sm leading-relaxed">
              <p className="mb-3">At EDM Lead Network, we don't just deliver leads — we deliver results you can count on. Whether you're a brand, broker, or agency, our platform is engineered to scale campaigns with surgical precision and strict adherence to YOUR compliance standards.</p>
              <p>We specialize in high-intent traffic, form fills, and call generation across industries like Insurance, Financial Services, Home Services, Legal, Travel, Real Estate, and more — where every click and call matters.</p>
            </div>
          </div>

          {/* Mobile Interactive Slides */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* First Slide Mobile */}
            <div className={`${activeSlideMobile === 'first' ? 'block' : 'hidden'}`}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Are you selling or <br />buying calls/leads?</h3>
                <div className="space-y-2">
                  <button 
                    className="w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
                    onClick={() => showSlideMobile('buy')}
                  >
                    Buy
                  </button>
                  <button 
                    className="w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
                    onClick={() => showSlideMobile('sell')}
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>

            {/* Sell Slide Mobile */}
            <div className={`${activeSlideMobile === 'sell' ? 'block' : 'hidden'}`}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Apply to Be a <br />Publisher Today!</h3>
                <a 
                  href="https://publishers.edmleadnetwork.com/"
                  className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </div>
            </div>

            {/* Buy Slide Mobile */}
            <div className={`${activeSlideMobile === 'buy' ? 'block' : 'hidden'}`}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Are you US based <br />or non-US based?</h3>
                <div className="space-y-2">
                  <button 
                    className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
                    onClick={() => showSlideMobile('individuals')}
                  >
                    US based
                  </button>
                  <button 
                    className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
                    onClick={() => showSlideMobile('nonUsa')}
                  >
                    Non-US based
                  </button>
                </div>
              </div>
            </div>

            {/* Individuals Slide Mobile */}
            <div className={`${activeSlideMobile === 'individuals' ? 'block' : 'hidden'}`}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">How many individuals <br />do you have on <br />your sales team?</h3>
                <div className="space-y-2 mb-2">
                  <button 
                    className="w-full bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
                    onClick={() => showSlideMobile('marketplace')}
                  >
                    Individual Agent
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    className="bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
                    onClick={() => showSlideMobile('salesTeam')}
                  >
                    2-10
                  </button>
                  <button 
                    className="bg-gray-100 text-gray-800 py-2.5 rounded-md font-semibold"
                    onClick={() => showSlideMobile('advertise')}
                  >
                    10+
                  </button>
                </div>
              </div>
            </div>

            {/* Marketplace Section Mobile */}
            <div className={`${activeSlideMobile === 'marketplace' ? 'block' : 'hidden'}`}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Checkout Our <br /> Marketplace!</h3>
                <a 
                  href="https://advertiser.edmleadnetwork.com/"
                  className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Sales Team Section Mobile */}
            <div className={`${activeSlideMobile === 'salesTeam' ? 'block' : 'hidden'}`}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch with <br />Our Sales Team</h3>
                <a 
                  href="https://advertiser.edmleadnetwork.com/"
                  className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Apply to Be an Advertiser Mobile */}
            <div className={`${activeSlideMobile === 'advertise' ? 'block' : 'hidden'}`}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Apply to Be an <br />Advertiser Today!</h3>
                <a 
                  href="https://advertiser.edmleadnetwork.com/"
                  className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Non-US Based Mobile */}
            <div className={`${activeSlideMobile === 'nonUsa' ? 'block' : 'hidden'}`}>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch <br />with Our Team</h3>
                <a 
                  href="https://advertiser.edmleadnetwork.com/"
                  className="inline-block w-full bg-[#00BCA2] text-white py-2.5 rounded-md font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef}
        className="bg-gray-50 py-16"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-1"></div>
            
            {/* Active Campaigns */}
            <div className="md:col-span-1 text-center">
              <div className="mb-4">
                <img src="/active compaing.png" alt="Active Campaigns" className="mx-auto w-16 h-16" />
              </div>
              <div>
                <div className="text-gray-600 text-sm mb-2"><br />Active Campaigns</div>
                <div className="text-4xl font-bold text-[#00BCA2]">
                  <span className="counter" id="campaigns-counter">0</span>+
                </div>
              </div>
            </div>

            {/* Weekly Earnings */}
            <div className="md:col-span-1 text-center">
              <div className="mb-4">
                <img src="/Dollar image.png" alt="Weekly Earnings" className="mx-auto w-16 h-16" />
              </div>
              <div>
                <div className="text-gray-600 text-sm mb-2"><br />Earned weekly by publishers</div>
                <div className="text-4xl font-bold text-[#00BCA2]">
                  $<span className="counter" id="earnings-counter">0</span>+
                </div>
              </div>
            </div>

            {/* Calls Per Day */}
            <div className="md:col-span-1 text-center">
              <div className="mb-4">
                <img src="/Call image.png" alt="Calls Per Day" className="mx-auto w-16 h-16" />
              </div>
              <div>
                <div className="text-gray-600 text-sm mb-2"><br />Calls Per Day</div>
                <div className="text-4xl font-bold text-[#00BCA2]">
                  <span className="counter" id="calls-counter">0</span>+
                </div>
              </div>
            </div>

            <div className="md:col-span-1"></div>
          </div>
          <div className="text-center mt-8">
            <img src="/dictorate.png" alt="Decorative" className="inline-block" />
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="bg-[#1a2c3e] py-16" id="publications">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-white text-3xl font-bold mb-12">PUBLICATIONS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {/* Publication 1 - Inc. */}
            <a href="https://www.inc.com/profile/edm-lead-network" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/publication-inc.png" alt="Inc. Magazine" className="w-full h-auto grayscale hover:grayscale-0 transition" />
            </a>
            {/* Publication 2 - Canadian SME */}
            <a href="https://canadiansme.ca/edm-networks-founder-shares-top-5-strategies-to-generate-more-leads-for-small-businesses-with-a-small-budget/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/publication-canadian-sme.png" alt="Canadian SME" className="w-full h-auto grayscale hover:grayscale-0 transition" />
            </a>
            {/* Publication 3 - Medium */}
            <a href="https://medium.com/authority-magazine/jamal-english-of-edm-network-on-how-to-effectively-leverage-the-power-of-digital-marketing-ppc-4eaeb433e693" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/publication-medium.png" alt="Medium" className="w-full h-auto grayscale hover:grayscale-0 transition" />
            </a>
            {/* Publication 4 - Tech Times */}
            <a href="https://www.techtimes.com/articles/284535/20221207/growing-and-scaling-a-business-in-a-remote-work-model.htm" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/publication-tech-times.png" alt="Tech Times" className="w-full h-auto grayscale hover:grayscale-0 transition" />
            </a>
            {/* Publication 5 - Cal Biz Journal */}
            <a href="https://calbizjournal.com/why-investing-into-lead-prospecting-is-important-for-business-development/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/publication-cbj.png" alt="California Business Journal" className="w-full h-auto grayscale hover:grayscale-0 transition" />
            </a>
            {/* Publication 6 - The Next Scoop */}
            <a href="https://thenextscoop.com/podcast/how-to-generate-leads-for-insurance-interview-with-jamal/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/publication-next-scoop.png" alt="The Next Scoop" className="w-full h-auto grayscale hover:grayscale-0 transition" />
            </a>
            {/* Publication 7 - NY Weekly */}
            <a href="https://nyweekly.com/business/an-inside-look-of-lead-generation-for-insurance-agents/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="/images/publication-ny-weekly.png" alt="NY Weekly" className="w-full h-auto grayscale hover:grayscale-0 transition" />
            </a>
          </div>
        </div>
      </section>

      {/* Flip Cards Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Publisher Flip Card */}
            <div className="flip-card h-96">
              <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
                  <img src="/icon-02.png" alt="Publisher" className="w-20 h-20 mb-4" />
                  <h3 className="text-white text-2xl font-bold">PUBLISHER</h3>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
                  <img src="/images/icon-02.png" alt="Publisher Icon" className="w-12 h-12 mb-3 mx-auto" />
                  <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">PUBLISHER</h3>
                  <p className="text-sm mb-3">Partnering with EDM Network offers publishers a multitude of benefits. Our extensive network of advertisers provides access to big budgets and 30,000 businesses actively seeking quality leads.</p>
                  <p className="text-sm mb-3">Publishers can monetize their website traffic by collaborating with top-notch brands and introducing their audience to relevant products and services.</p>
                  <p className="text-sm mb-4">Benefit from unmatched access to specialized brands, global campaigns, real-time tracking, monitored compliance systems, transparent performance metrics, weekly payouts, and consistent and faster payments.</p>
                  <a href="https://publishers.edmleadnetwork.com/auth/login" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            {/* Enterprise Advertiser Flip Card */}
            <div className="flip-card h-96">
              <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
                  <img src="/icon-01.png" alt="Enterprise Advertiser" className="w-20 h-20 mb-4" />
                  <h3 className="text-white text-2xl font-bold">ENTERPRISE ADVERTISER</h3>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
                  <img src="/images/icon-01.png" alt="Advertiser Icon" className="w-12 h-12 mb-3 mx-auto" />
                  <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">ENTERPRISE ADVERTISER</h3>
                  <p className="text-sm mb-3">Advertisers can benefit from partnering with EDM Network for their marketing needs. We provide online and offline marketing solutions that connect advertisers with their target customers based on data-driven decisions.</p>
                  <p className="text-sm mb-3">We offer high-quality publishers for targeted marketing campaigns. With a diverse network and global reach, EDM Network helps advertisers improve their sales pipeline and generate revenue faster.</p>
                  <p className="text-sm mb-4">Contact us at +1 (833) 711-8975 to discuss your success metrics and launch a custom campaign tailored to your business goals.</p>
                  <a href="https://advertiser.edmleadnetwork.com/auth/login" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            {/* Individual Agent Flip Card */}
            <div className="flip-card h-96">
              <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-500 transform-style-3d hover:rotate-y-180">
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-lg p-8 flex flex-col items-center justify-center">
                  <img src="/icon-03.png" alt="Individual Agent" className="w-20 h-20 mb-4" />
                  <h3 className="text-white text-2xl font-bold">INDIVIDUAL AGENT</h3>
                </div>
                {/* Back */}
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-lg p-6 text-white rotate-y-180 overflow-y-auto">
                  <img src="/images/icon-03.png" alt="Agent Icon" className="w-12 h-12 mb-3 mx-auto" />
                  <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">INDIVIDUAL AGENT</h3>
                  <p className="text-sm mb-3">Individual agents can greatly benefit from partnering with EDM Network for their lead generation needs.</p>
                  <p className="text-sm mb-3">Agents can receive calls directly to their phone, ensuring prompt and efficient communication with potential clients. The flexibility to pause and start campaigns when needed allows agents to adapt their marketing efforts to their specific requirements.</p>
                  <p className="text-sm mb-4">We prioritize top-quality leads that are scrubbed against DNC (Do Not Call) lists, ensuring compliance and minimizing wasted time on unqualified prospects.</p>
                  <a href="/edm-marketplace/" className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EDM Network Section - Text inside image boxes */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold mb-6"><span className="text-[#00BCA2]">WHY</span> EDM NETWORK?</h2>
              <div className="text-gray-700 space-y-4 mb-8">
                <p>At EDM Network we specialize in providing top-notch lead-generation services that can help take your business to the next level! Our team of industry experts uses the latest pay-per-call marketing technologies and strategies to efficiently identify and target potential leads, delivering unrivaled performance in the industry.</p>
                <p>We're dedicated to helping your company grow faster and more efficiently through our effective lead-generation solutions. So, if you're looking for a reliable partner to help you drive new business, look no further than EDM Network!</p>
              </div>
              
              {/* Expand your business card */}
              <div className="bg-gradient-to-r from-[#00BCA2] to-[#007C62] rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Expand your business</h3>
                <a href="tel:+18337118975" className="block w-full bg-white text-[#00BCA2] text-center py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  Click here
                </a>
              </div>
            </div>

            {/* Middle Column - Images with text overlay */}
            <div className="md:col-span-1">
              {/* First Image Box with text overlay */}
              <div className="relative mb-8">
                <img src="/1.png" alt="Box background" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">High and timely payouts</h3>
                  <p className="text-sm leading-relaxed text-gray-900">
                    Our affiliate partner program offers top-performing lead generation opportunities across various verticals, with a focus on maximizing profits for our partners. We prioritize fast and reliable payout processing without any hidden fees, so our partners can expect prompt payouts and transparent payment processing.
                  </p>
                </div>
              </div>
              
              {/* Second Image Box with text overlay */}
              <div className="relative mb-8">
                <img src="/31.png" alt="Box background" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">High intent inbound leads</h3>
                  <p className="text-sm leading-relaxed text-gray-900">
                    Our exclusive inbound lead service delivers high-quality, pre-screened calls from highly qualified prospective customers. This helps you save time and resources by focusing only on leads that are more likely to convert into sales. With our customer-centric approach, you can trust that you're receiving the best and most qualified leads for your business.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Images with text overlay */}
            <div className="md:col-span-1">
              {/* Third Image Box with text overlay */}
              <div className="relative mb-8">
                <img src="/21.png" alt="Box background" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Dedicated staff for client services</h3>
                  <p className="text-sm leading-relaxed text-gray-900">
                    Your dedicated account manager and client services team are always available to assist you in meeting your objectives and maximizing profit. We take pride in our attention to detail and dedication to our clients.
                  </p>
                </div>
              </div>
              
              {/* Fourth Image Box with text overlay */}
              <div className="relative mb-8">
                <img src="/4.png" alt="Box background" className="w-full h-auto" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Actionable analytics</h3>
                  <p className="text-sm leading-relaxed text-gray-900">
                    With our lead generation services, you won't have to guess if your campaigns are effective. Our real-time reporting and campaign-specific insights provide you with detailed information about recent activity and campaign success, making it easy to optimize your strategies and make data-driven decisions. We believe in transparency, so you can count on our reporting system to give you the information you need to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;