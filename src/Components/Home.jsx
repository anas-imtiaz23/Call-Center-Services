import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState('first');
  const [activeSlideMobile, setActiveSlideMobile] = useState('first');
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  const showSlide = (slide) => setActiveSlide(slide);
  const showSlideMobile = (slide) => setActiveSlideMobile(slide);

  // Navigation handlers
  const handleGetFreeQuote = () => {
    navigate('/lead-capture');
  };

  const handleExploreVerticals = () => {
    const verticalsSection = document.getElementById('verticals');
    if (verticalsSection) {
      verticalsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [countersStarted]);

  const startCounters = () => {
    const counters = [
      { element: document.getElementById('campaigns-counter'), target: 250, suffix: '+' },
      { element: document.getElementById('earnings-counter'), target: 750000, prefix: '$', suffix: '+' },
      { element: document.getElementById('calls-counter'), target: 35000, suffix: '+' }
    ];
    counters.forEach(counter => {
      if (!counter.element) return;
      let current = 0;
      const increment = Math.ceil(counter.target / 80);
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

  // Client success stories
  const successStories = [
    { initials: 'JS', name: 'James Sullivan', company: 'Summit Insurance Group', result: '350% ROI increase', quote: 'Artist Media transformed our lead flow. Quality improved dramatically and our closing rate doubled within 60 days.' },
    { initials: 'MR', name: 'Maria Rodriguez', company: 'Rodriguez Agency', result: '2,000+ leads/month', quote: 'The consistency and quality of leads from Artist Media is unmatched. Our agents are finally busy every single day.' },
    { initials: 'TW', name: 'Thomas Wright', company: 'Wright Home Solutions', result: '85% conversion rate', quote: 'Home improvement leads are actually qualified! We\'ve scaled from 2 to 12 agents in just 8 months.' },
    { initials: 'LC', name: 'Linda Chen', company: 'Chen Financial Group', result: '#1 in region', quote: 'Medicare and Final Expense leads convert like clockwork. Artist Media is our exclusive partner now.' }
  ];

  // Trust badges / achievements (no external links)
  const trustAchievements = [
    { icon: '🏆', title: 'Industry Leader', description: 'Recognized as top lead generation platform 2024', color: 'from-amber-500 to-orange-600' },
    { icon: '⭐', title: '4.9/5 Rating', description: 'Based on 500+ verified client reviews', color: 'from-yellow-500 to-amber-600' },
    { icon: '🔒', title: 'Fully Compliant', description: 'TCPA & DNC certified operations', color: 'from-emerald-500 to-green-600' },
    { icon: '🚀', title: '100+ Partners', description: 'Trusted by call centers nationwide', color: 'from-blue-500 to-indigo-600' },
    { icon: '⚡', title: 'Real-Time Delivery', description: 'Sub-second lead routing', color: 'from-purple-500 to-pink-600' },
    { icon: '💰', title: 'Weekly Payouts', description: 'Fast & transparent payments', color: 'from-cyan-500 to-teal-600' }
  ];

  // Industries / Verticals
  const industries = [
    { name: 'Auto Insurance', icon: '🚗', leads: '50K+ monthly', bg: 'from-blue-50 to-blue-100' },
    { name: 'Final Expense', icon: '⚰️', leads: '25K+ monthly', bg: 'from-gray-50 to-gray-100' },
    { name: 'Medicare', icon: '🏥', leads: '40K+ monthly', bg: 'from-red-50 to-red-100' },
    { name: 'Home Improvement', icon: '🏠', leads: '35K+ monthly', bg: 'from-amber-50 to-amber-100' },
    { name: 'Obama Care (ACA)', icon: '🛡️', leads: '30K+ monthly', bg: 'from-green-50 to-green-100' }
  ];

  return (
    <div className="home-page overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/50 z-10"></div>
          <iframe 
            src="https://www.youtube-nocookie.com/embed/ZV8s1ba8FWc?autoplay=1&mute=1&loop=1&playlist=ZV8s1ba8FWc&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&fs=0&playsinline=1" 
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Artist Media Background"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover pointer-events-none"
            style={{ filter: 'brightness(0.5)' }}
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fadeInUp">
              <div className="inline-block px-4 py-2 bg-[#00BCA2]/20 backdrop-blur-sm rounded-full mb-6 border border-[#00BCA2]/30">
                <span className="text-[#00BCA2] text-sm font-semibold tracking-wider">#1 LEAD GENERATION PLATFORM</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Empower Your Business <br />With <span className="text-[#00BCA2]">Artist Media</span>
              </h1>
              <div className="text-gray-200 text-base leading-relaxed max-w-xl mb-8">
                <p className="mb-4">Artist Media delivers high-intent, compliant leads across Auto Insurance, Medicare, Final Expense, Home Improvement, and ACA. Our AI-powered platform connects you with ready-to-convert consumers in real-time.</p>
                <p>Trusted by 100+ call centers nationwide — we don't just deliver leads, we deliver predictable revenue growth.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGetFreeQuote}
                  className="inline-block bg-[#00BCA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008f7b] transition transform hover:scale-105 duration-300 shadow-lg text-center"
                >
                  Get Free Quote
                </button>
                <button 
                  onClick={handleExploreVerticals}
                  className="inline-block border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition text-center backdrop-blur-sm"
                >
                  Explore Verticals
                </button>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-[#00BCA2] text-lg">✓</span>
                  <span className="text-xs text-white">DNC Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-[#00BCA2] text-lg">✓</span>
                  <span className="text-xs text-white">TCPA Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-[#00BCA2] text-lg">✓</span>
                  <span className="text-xs text-white">Real-Time Routing</span>
                </div>
              </div>
            </div>

            {/* Interactive Questionnaire */}
            <div className="lg:ml-auto w-full max-w-md animate-fadeInUp animation-delay-200">
              <div className="bg-gradient-to-b from-[#00BCA2] to-[#007C62] h-2 rounded-t-lg"></div>
              <div className="bg-white rounded-b-lg shadow-2xl p-6 md:p-8">
                <div className={`${activeSlide === 'first' ? 'block' : 'hidden'} animate-fadeIn`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you selling or <br />buying calls/leads?</h3>
                    <div className="space-y-3">
                      <button className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition transform hover:scale-105" onClick={() => showSlide('buy')}>Buy Leads</button>
                      <button className="w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition transform hover:scale-105" onClick={() => showSlide('sell')}>Sell Leads</button>
                    </div>
                  </div>
                </div>
                <div className={`${activeSlide === 'sell' ? 'block' : 'hidden'} animate-fadeIn`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Become a Publisher Partner</h3>
                    <p className="text-gray-600 mb-6 text-sm">Monetize your traffic with our premium ad network</p>
                    <button className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition text-center">Apply as Publisher</button>
                    <button className="mt-3 text-sm text-gray-500 hover:text-[#00BCA2]" onClick={() => showSlide('first')}>← Back</button>
                  </div>
                </div>
                <div className={`${activeSlide === 'buy' ? 'block' : 'hidden'} animate-fadeIn`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Are you US based or non-US based?</h3>
                    <div className="space-y-3">
                      <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition" onClick={() => showSlide('individuals')}>US Based</button>
                      <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition" onClick={() => showSlide('nonUsa')}>Non-US Based</button>
                      <button className="mt-3 text-sm text-gray-500 hover:text-[#00BCA2]" onClick={() => showSlide('first')}>← Back</button>
                    </div>
                  </div>
                </div>
                <div className={`${activeSlide === 'individuals' ? 'block' : 'hidden'} animate-fadeIn`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">How many agents on your sales team?</h3>
                    <div className="space-y-3">
                      <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition" onClick={() => showSlide('marketplace')}>Individual Agent</button>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition" onClick={() => showSlide('salesTeam')}>2-10 Agents</button>
                        <button className="bg-gray-100 text-gray-800 py-3 rounded-md font-semibold hover:bg-[#00BCA2] hover:text-white transition" onClick={() => showSlide('advertise')}>10+ Agents</button>
                      </div>
                      <button className="mt-3 text-sm text-gray-500 hover:text-[#00BCA2]" onClick={() => showSlide('buy')}>← Back</button>
                    </div>
                  </div>
                </div>
                <div className={`${activeSlide === 'marketplace' ? 'block' : 'hidden'} animate-fadeIn`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Marketplace</h3>
                    <p className="text-gray-600 mb-6 text-sm">Access 200+ exclusive lead campaigns</p>
                    <button className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition text-center">Browse Campaigns</button>
                    <button className="mt-3 text-sm text-gray-500 hover:text-[#00BCA2]" onClick={() => showSlide('individuals')}>← Back</button>
                  </div>
                </div>
                <div className={`${activeSlide === 'salesTeam' ? 'block' : 'hidden'} animate-fadeIn`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Get a Custom Quote</h3>
                    <p className="text-gray-600 mb-6 text-sm">Our sales team will design a campaign for your team size</p>
                    <button className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition text-center">Contact Sales</button>
                    <button className="mt-3 text-sm text-gray-500 hover:text-[#00BCA2]" onClick={() => showSlide('individuals')}>← Back</button>
                  </div>
                </div>
                <div className={`${activeSlide === 'advertise' ? 'block' : 'hidden'} animate-fadeIn`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Enterprise Advertising</h3>
                    <p className="text-gray-600 mb-6 text-sm">Volume discounts & dedicated account manager</p>
                    <button className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition text-center">Request Demo</button>
                    <button className="mt-3 text-sm text-gray-500 hover:text-[#00BCA2]" onClick={() => showSlide('individuals')}>← Back</button>
                  </div>
                </div>
                <div className={`${activeSlide === 'nonUsa' ? 'block' : 'hidden'} animate-fadeIn`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">International Inquiries</h3>
                    <p className="text-gray-600 mb-6 text-sm">Our global team is ready to assist you</p>
                    <button className="inline-block w-full bg-[#00BCA2] text-white py-3 rounded-md font-semibold hover:bg-[#008f7b] transition text-center">Contact Global Team</button>
                    <button className="mt-3 text-sm text-gray-500 hover:text-[#00BCA2]" onClick={() => showSlide('buy')}>← Back</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Impact in <span className="text-[#00BCA2]">Numbers</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">📊</div>
              <div className="text-gray-300 text-sm mb-2">Active Campaigns</div>
              <div className="text-4xl font-bold text-[#00BCA2]"><span id="campaigns-counter">0</span>+</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">💰</div>
              <div className="text-gray-300 text-sm mb-2">Weekly Publisher Earnings</div>
              <div className="text-4xl font-bold text-[#00BCA2]">$<span id="earnings-counter">0</span>+</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition duration-300">📞</div>
              <div className="text-gray-300 text-sm mb-2">Calls Per Day</div>
              <div className="text-4xl font-bold text-[#00BCA2]"><span id="calls-counter">0</span>+</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries / Verticals Section */}
      <section className="py-20 bg-white" id="verticals">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#00BCA2]/10 rounded-full mb-4">
              <span className="text-[#00BCA2] text-sm font-semibold">LEAD VERTICALS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We Deliver <span className="text-[#00BCA2]">High-Converting Leads</span> Across</h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
            {industries.map((industry, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${industry.bg} rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 cursor-pointer group`}>
                <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="font-bold text-gray-800 text-base">{industry.name}</h3>
                <p className="text-xs text-[#00BCA2] mt-2 font-semibold">{industry.leads}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Recognition Section - Replaces "As Featured In" */}
      <section className="py-20 bg-gradient-to-br from-[#0f1e2e] to-[#1a2c3e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00BCA2]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00BCA2]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#00BCA2]/20 rounded-full mb-4 backdrop-blur-sm">
              <span className="text-[#00BCA2] text-sm font-semibold tracking-wider">WHY PARTNERS TRUST US</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Recognized Excellence</h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
            <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
              Industry-leading compliance, real-time delivery, and unmatched lead quality — trusted by 100+ call centers nationwide.
            </p>
          </div>

          {/* Trust Badges Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {trustAchievements.map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default`}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-bold text-sm">{item.title}</div>
                <div className="text-white/70 text-xs mt-1">{item.description}</div>
              </div>
            ))}
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-white text-2xl font-bold mb-2">Client Success Stories</h3>
              <p className="text-gray-400 text-sm">Real results from real partners</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {successStories.map((story, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-[#00BCA2]/30 transition-all duration-300 hover:transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#00BCA2]/20 rounded-full flex items-center justify-center">
                      <span className="text-[#00BCA2] font-bold text-sm">{story.initials}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{story.name}</div>
                      <div className="text-gray-400 text-xs">{story.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm italic mb-3">"{story.quote}"</p>
                  <div className="inline-block bg-[#00BCA2]/20 rounded-full px-3 py-1">
                    <span className="text-[#00BCA2] text-xs font-semibold">📈 {story.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rating Summary */}
          <div className="mt-12 text-center">
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Rated 4.9/5 by 500+ verified call center partners</p>
            <p className="text-gray-500 text-xs mt-2">⭐ "Best lead quality in the industry" — Verified Review</p>
          </div>
        </div>
      </section>

      {/* Flip Cards Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We <span className="text-[#00BCA2]">Partner With You</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Publisher Card */}
            <div className="flip-card h-96 perspective">
              <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-xl p-8 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-white text-2xl font-bold">PUBLISHER</h3>
                  <p className="text-white/80 text-sm mt-4">Monetize your traffic</p>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-xl p-6 text-white rotate-y-180 overflow-y-auto shadow-xl">
                  <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">Publisher Benefits</h3>
                  <ul className="text-sm space-y-2 mb-4">
                    <li className="flex items-center gap-2">✓ Access to 30,000+ advertisers</li>
                    <li className="flex items-center gap-2">✓ High CPM & CPA payouts</li>
                    <li className="flex items-center gap-2">✓ Weekly payments, no holds</li>
                    <li className="flex items-center gap-2">✓ Real-time performance dashboard</li>
                    <li className="flex items-center gap-2">✓ Dedicated account manager</li>
                  </ul>
                  <button onClick={handleGetFreeQuote} className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition w-full">Apply Now</button>
                </div>
              </div>
            </div>

            {/* Advertiser Card */}
            <div className="flip-card h-96 perspective">
              <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-xl p-8 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-white text-2xl font-bold">ADVERTISER</h3>
                  <p className="text-white/80 text-sm mt-4">Scale your campaigns</p>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-xl p-6 text-white rotate-y-180 overflow-y-auto shadow-xl">
                  <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">Advertiser Benefits</h3>
                  <ul className="text-sm space-y-2 mb-4">
                    <li className="flex items-center gap-2">✓ High-intent, exclusive leads</li>
                    <li className="flex items-center gap-2">✓ Real-time call routing</li>
                    <li className="flex items-center gap-2">✓ DNC/TCPA compliant</li>
                    <li className="flex items-center gap-2">✓ Customizable budgets</li>
                    <li className="flex items-center gap-2">✓ Dedicated campaign manager</li>
                  </ul>
                  <button onClick={handleGetFreeQuote} className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition w-full">Start Campaign</button>
                </div>
              </div>
            </div>

            {/* Agent Card */}
            <div className="flip-card h-96 perspective">
              <div className="flip-card-inner relative w-full h-full text-center transition-transform duration-700 transform-style-3d hover:rotate-y-180">
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-gradient-to-br from-[#00BCA2] to-[#007C62] rounded-xl p-8 flex flex-col items-center justify-center shadow-xl">
                  <div className="text-6xl mb-4">👤</div>
                  <h3 className="text-white text-2xl font-bold">INDIVIDUAL AGENT</h3>
                  <p className="text-white/80 text-sm mt-4">Get quality leads</p>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-gradient-to-br from-[#007C62] to-[#004d3d] rounded-xl p-6 text-white rotate-y-180 overflow-y-auto shadow-xl">
                  <h3 className="text-xl font-bold mb-3 border-b border-[#00BCA2] pb-2">Agent Benefits</h3>
                  <ul className="text-sm space-y-2 mb-4">
                    <li className="flex items-center gap-2">✓ Live transfers to your phone</li>
                    <li className="flex items-center gap-2">✓ Pay only for connected calls</li>
                    <li className="flex items-center gap-2">✓ Pause/resume anytime</li>
                    <li className="flex items-center gap-2">✓ No long-term contracts</li>
                    <li className="flex items-center gap-2">✓ Exclusive territories available</li>
                  </ul>
                  <button onClick={handleGetFreeQuote} className="inline-block bg-white text-[#00BCA2] px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition w-full">Get Leads</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Artist Media Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#00BCA2]/10 rounded-full mb-4">
                <span className="text-[#00BCA2] text-sm font-semibold">WHY CHOOSE US</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why <span className="text-[#00BCA2]">Artist Media</span>?</h2>
              <div className="space-y-6">
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#00BCA2] transition-colors duration-300">
                    <span className="text-[#00BCA2] text-xl group-hover:text-white transition-colors">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Compliance First Approach</h3>
                    <p className="text-gray-600 text-sm">Every lead is scrubbed against DNC and TCPA lists — we protect your reputation and ensure regulatory compliance.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#00BCA2] transition-colors duration-300">
                    <span className="text-[#00BCA2] text-xl group-hover:text-white transition-colors">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Real-Time Lead Routing</h3>
                    <p className="text-gray-600 text-sm">Connect with consumers instantly — our AI-powered system delivers leads to your agents in milliseconds.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#00BCA2] transition-colors duration-300">
                    <span className="text-[#00BCA2] text-xl group-hover:text-white transition-colors">📊</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Actionable Analytics</h3>
                    <p className="text-gray-600 text-sm">Real-time dashboard with campaign performance, conversion rates, and ROI tracking — full transparency.</p>
                  </div>
                </div>
                <div className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#00BCA2] transition-colors duration-300">
                    <span className="text-[#00BCA2] text-xl group-hover:text-white transition-colors">🤝</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Dedicated Support Team</h3>
                    <p className="text-gray-600 text-sm">Your personal account manager works with you daily to optimize campaigns and maximize your ROI.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#00BCA2]/10 to-[#0F2B3D]/10 rounded-2xl p-8 border border-[#00BCA2]/20 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <div className="text-7xl mb-4 animate-bounce">📞🚀</div>
                <h3 className="text-2xl font-bold text-[#0F2B3D] mb-3">Ready to Scale Your Call Center?</h3>
                <p className="text-gray-600 mb-6">Get a free, no-obligation quote tailored to your vertical and volume requirements.</p>
                <button 
                  onClick={handleGetFreeQuote}
                  className="inline-block bg-[#00BCA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008f7b] transition shadow-lg hover:shadow-xl"
                >
                  Get Your Free Quote →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-[#0F2B3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Transform Your Lead Generation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 100+ successful call centers that trust Artist Media for premium, compliant leads across all major verticals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetFreeQuote}
              className="inline-block bg-[#00BCA2] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#008f7b] transition shadow-xl hover:scale-105 transform duration-300"
            >
              Get Free Quote →
            </button>
            <button 
              onClick={handleExploreVerticals}
              className="inline-block border-2 border-[#00BCA2] text-[#00BCA2] bg-transparent px-10 py-4 rounded-full font-bold text-lg hover:bg-[#00BCA2] hover:text-white transition hover:scale-105 transform duration-300"
            >
              Explore Verticals
            </button>
          </div>
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-bounce { animation: bounce 2s ease-in-out infinite; }
        .animation-delay-200 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .hover\\:rotate-y-180:hover { transform: rotateY(180deg); }
        .perspective { perspective: 1000px; }
        .bg-grid-pattern { background-image: radial-gradient(circle, #00BCA2 1px, transparent 1px); background-size: 30px 30px; }
      `}</style>
    </div>
  );
};

export default Home;