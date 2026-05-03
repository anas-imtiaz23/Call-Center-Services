import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buyers');
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef(null);

  const handleGetFreeQuote = () => {
    navigate('/lead-capture');
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
      { element: document.getElementById('clients-counter'), target: 100, suffix: '+' },
      { element: document.getElementById('leads-counter'), target: 2000000, suffix: '+' },
      { element: document.getElementById('conversion-counter'), target: 35, suffix: '%' }
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

  // Service verticals
  const verticals = [
    {
      id: 'auto',
      icon: '🚗',
      title: 'Auto Insurance Leads',
      description: 'High-intent drivers actively seeking affordable coverage. Real-time transfers and exclusive leads with DNC compliance.',
      features: ['Real-time call transfers', 'Live & aged leads', 'Nationwide coverage', 'Zip code targeting', 'Pay-per-call & CPL'],
      volume: '50,000+ monthly',
      conversion: '28% avg',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 'final',
      icon: '⚰️',
      title: 'Final Expense Leads',
      description: 'Seniors seeking burial insurance and life insurance protection. High conversion rates for experienced agents.',
      features: ['Age 50-85 targeting', 'Low monthly budgets', 'TCPA compliant', 'Exclusive territories', 'Live transfers available'],
      volume: '25,000+ monthly',
      conversion: '32% avg',
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 'medicare',
      icon: '🏥',
      title: 'Medicare Leads',
      description: 'Seniors comparing Medicare Advantage, Supplement, and Part D plans during AEP and year-round.',
      features: ['T65 prospects', 'AEP/OEP targeting', 'Supplement & Advantage', 'Income verified', 'Prescription needs'],
      volume: '40,000+ monthly',
      conversion: '35% avg',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 'home',
      icon: '🏠',
      title: 'Home Improvement Leads',
      description: 'Homeowners actively seeking roofing, solar, windows, bathroom remodeling, and HVAC services.',
      features: ['Project-specific', 'Verified homeowners', 'High intent leads', 'Same-day delivery', 'Exclusive leads'],
      volume: '35,000+ monthly',
      conversion: '42% avg',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 'pest',
      icon: '🐜',
      title: 'Pest Control Leads',
      description: 'Homeowners needing safe, effective pest inspection and elimination services nationwide.',
      features: ['Roaches, mice, termites, ants, spiders', 'Owner-occupied home targeting', 'Inspection & treatment booked', 'EPA-approved solutions', 'Flexible scheduling'],
      volume: '35,000+ monthly',
      conversion: '38% avg',
      color: 'from-emerald-500 to-teal-700'
    },
    {
      id: 'aca',
      icon: '🛡️',
      title: 'Obama Care (ACA) Leads',
      description: 'Health insurance seekers during open enrollment and SEP. Qualified leads for ACA marketplace plans.',
      features: ['SEP & OEP', 'Income verified', 'Subsidy eligible', 'Family & individual', 'Live transfers'],
      volume: '30,000+ monthly',
      conversion: '30% avg',
      color: 'from-green-500 to-green-700'
    }
  ];

  // Delivery methods
  const deliveryMethods = [
    { icon: '📞', title: 'Live Transfers', description: 'Real-time phone transfers to your agents. Pay only for connected calls.', highlight: 'Best for closing' },
    { icon: '📧', title: 'Email Leads', description: 'Verified leads delivered instantly to your CRM or inbox.', highlight: 'Best for follow-up' },
    { icon: '📱', title: 'SMS Leads', description: 'Text message alerts with lead details for immediate action.', highlight: 'Best for speed' },
    { icon: '💻', title: 'API Integration', description: 'Direct API feed to your existing systems for seamless automation.', highlight: 'Best for scale' }
  ];

  // Pricing models
  const pricingModels = [
    { name: 'Pay Per Call', description: 'You pay only for connected, qualified phone calls', bestFor: 'Live transfer campaigns', icon: '📞' },
    { name: 'Cost Per Lead', description: 'Fixed price per exclusive lead delivered', bestFor: 'Email and SMS campaigns', icon: '📧' },
    { name: 'Revenue Share', description: 'Split revenue on closed deals', bestFor: 'Enterprise partners', icon: '💰' },
    { name: 'Hybrid Model', description: 'Custom mix of pricing models', bestFor: 'High-volume call centers', icon: '⚙️' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0F2B3D] to-[#1A4A6F] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#00BCA2] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#00BCA2] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-[#00BCA2]/20 backdrop-blur-sm rounded-full mb-6 border border-[#00BCA2]/30">
            <span className="text-[#00BCA2] text-sm font-semibold tracking-wider">OUR SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Artist Media<span className="text-[#00BCA2]">Solutions</span></h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium, compliant leads delivered in real-time. Scale your call center with our AI-powered platform across multiple verticals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BCA2]"><span id="clients-counter">0</span>+</div>
              <div className="text-gray-500 text-sm mt-1">Active Call Centers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BCA2]"><span id="leads-counter">0</span>+</div>
              <div className="text-gray-500 text-sm mt-1">Leads Delivered Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BCA2]"><span id="conversion-counter">0</span></div>
              <div className="text-gray-500 text-sm mt-1">Average Conversion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Verticals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lead Verticals We <span className="text-[#00BCA2]">Specialize In</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              High-intent, compliant leads across the most profitable verticals for USA call centers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {verticals.map((vertical, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`bg-gradient-to-r ${vertical.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{vertical.icon}</span>
                      <h3 className="font-bold text-lg">{vertical.title}</h3>
                    </div>
                    <div className="bg-white/20 rounded-full px-3 py-1 text-xs font-semibold">
                      {vertical.volume}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4">{vertical.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vertical.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">✓ {feature}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div>
                      <span className="text-xs text-gray-400">Avg. Conversion</span>
                      <div className="font-bold text-[#00BCA2]">{vertical.conversion}</div>
                    </div>
                    <button onClick={handleGetFreeQuote} className="text-[#00BCA2] text-sm font-semibold hover:underline">Get Quote →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Lead <span className="text-[#00BCA2]">Delivery Methods</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose how you want to receive your leads — we optimize for your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryMethods.map((method, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{method.description}</p>
                <span className="inline-block bg-[#00BCA2]/10 text-[#00BCA2] text-xs font-semibold px-3 py-1 rounded-full">{method.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve - Tabs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Who We <span className="text-[#00BCA2]">Serve</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Tailored solutions for every type of call center operation
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button onClick={() => setActiveTab('buyers')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === 'buyers' ? 'bg-[#00BCA2] text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              📞 Lead Buyers
            </button>
            <button onClick={() => setActiveTab('sellers')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === 'sellers' ? 'bg-[#00BCA2] text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              📱 Lead Sellers (Publishers)
            </button>
            <button onClick={() => setActiveTab('agents')} className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === 'agents' ? 'bg-[#00BCA2] text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'}`}>
              👤 Individual Agents
            </button>
          </div>

          {/* Tab Content - Lead Buyers */}
          <div className={`transition-all duration-500 ${activeTab === 'buyers' ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="inline-block px-3 py-1 bg-[#00BCA2]/10 rounded-full mb-4">
                    <span className="text-[#00BCA2] text-xs font-semibold">FOR CALL CENTERS & AGENCIES</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Buy High-Converting Leads</h3>
                  <p className="text-gray-600 mb-6">Access premium, compliant leads across multiple verticals. Scale your call center with predictable volume and quality.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Real-time call routing</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">DNC & TCPA compliant</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Exclusive & shared options</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Volume discounts available</span></div>
                  </div>
                  <button className="bg-[#00BCA2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#008f7b] transition">Start Buying Leads →</button>
                </div>
                <div className="bg-gradient-to-br from-[#0F2B3D] to-[#1A4A6F] p-8 lg:p-10 text-white flex flex-col justify-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-lg font-semibold mb-2">"Artist Media delivers the highest quality leads we've ever purchased."</p>
                  <p className="text-sm opacity-80">— Summit Insurance Group • 350% ROI increase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content - Lead Sellers */}
          <div className={`transition-all duration-500 ${activeTab === 'sellers' ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="inline-block px-3 py-1 bg-[#00BCA2]/10 rounded-full mb-4">
                    <span className="text-[#00BCA2] text-xs font-semibold">FOR PUBLISHERS & AFFILIATES</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Monetize Your Traffic</h3>
                  <p className="text-gray-600 mb-6">Turn your website traffic, email lists, and social media into revenue. Access 30,000+ advertisers with premium offers.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Weekly payouts, no holds</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">High CPM & CPA rates</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Real-time performance dashboard</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Dedicated account manager</span></div>
                  </div>
                  <button className="bg-[#00BCA2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#008f7b] transition">Apply as Publisher →</button>
                </div>
                <div className="bg-gradient-to-br from-[#007C62] to-[#004d3d] p-8 lg:p-10 text-white flex flex-col justify-center">
                  <div className="text-4xl mb-4">💰</div>
                  <p className="text-lg font-semibold mb-2">"Artist Media doubled our RPM overnight. Best partner we've worked with."</p>
                  <p className="text-sm opacity-80">— Digital Media Publisher • $50K+ monthly earnings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content - Individual Agents */}
          <div className={`transition-all duration-500 ${activeTab === 'agents' ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="inline-block px-3 py-1 bg-[#00BCA2]/10 rounded-full mb-4">
                    <span className="text-[#00BCA2] text-xs font-semibold">FOR SOLO AGENTS & SMALL TEAMS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Get Quality Leads Without Overhead</h3>
                  <p className="text-gray-600 mb-6">Start getting live transfers and exclusive leads today. No contracts, pause anytime.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Live transfers to your phone</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Pay only for connected calls</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">No long-term contracts</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#00BCA2] text-xl">✓</span><span className="text-gray-700">Exclusive territories available</span></div>
                  </div>
                  <button className="bg-[#00BCA2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#008f7b] transition">Start Getting Leads →</button>
                </div>
                <div className="bg-gradient-to-br from-[#00BCA2] to-[#007C62] p-8 lg:p-10 text-white flex flex-col justify-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <p className="text-lg font-semibold mb-2">"I've tried 5 lead providers — Artist Media is the only one that delivers."</p>
                  <p className="text-sm opacity-80">— Independent Agent • 200+ closed deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Flexible <span className="text-[#00BCA2]">Pricing Models</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Choose the pricing structure that works best for your business model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingModels.map((model, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl mb-3">{model.icon}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{model.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{model.description}</p>
                <div className="inline-block bg-[#00BCA2]/10 rounded-full px-3 py-1">
                  <span className="text-[#00BCA2] text-xs font-semibold">Best for: {model.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section - Critical for USA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#00BCA2]/10 rounded-full mb-4">
                <span className="text-[#00BCA2] text-sm font-semibold">COMPLIANCE FIRST</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Fully <span className="text-[#00BCA2]">Compliant</span> Lead Generation</h2>
              <p className="text-gray-600 mb-6">We take compliance seriously. Every lead is scrubbed against DNC and TCPA regulations to protect your call center.</p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#00BCA2] text-xl">✓</span>
                  <div><span className="font-semibold text-gray-800">DNC Scrub</span><p className="text-gray-500 text-sm">All leads checked against National & State DNC registries</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#00BCA2] text-xl">✓</span>
                  <div><span className="font-semibold text-gray-800">TCPA Compliance</span><p className="text-gray-500 text-sm">Express written consent for all marketing communications</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#00BCA2] text-xl">✓</span>
                  <div><span className="font-semibold text-gray-800">State-Specific</span><p className="text-gray-500 text-sm">Compliant with individual state regulations</p></div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Compliance Guarantee</h3>
                <p className="text-gray-600 text-sm mb-4">100% compliant leads or your money back. We stand behind our quality and compliance standards.</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500">✓ Certified by leading compliance partners</p>
                  <p className="text-xs text-gray-500 mt-1">✓ Regular third-party audits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Platform Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our <span className="text-[#00BCA2]">Technology Platform</span></h2>
            <div className="w-20 h-1 bg-[#00BCA2] mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              AI-powered lead routing and analytics for maximum conversion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Real-Time Routing</h3>
              <p className="text-gray-500 text-sm">Sub-second lead delivery to your agents based on availability and performance</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-500 text-sm">Real-time reporting, conversion tracking, and campaign optimization insights</p>
            </div>
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">API Integration</h3>
              <p className="text-gray-500 text-sm">Seamless integration with your CRM, dialer, or existing systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F2B3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Scale Your Call Center?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with premium, compliant leads today. Request your free quote and volume pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleGetFreeQuote} className="inline-block bg-[#00BCA2] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#008f7b] transition shadow-xl">Get Free Quote →</button>
            <button onClick={handleGetFreeQuote} className="inline-block border-2 border-[#00BCA2] text-[#00BCA2] bg-transparent px-10 py-4 rounded-full font-bold text-lg hover:bg-[#00BCA2] hover:text-white transition">Talk to Sales</button>
            <button onClick={handleGetFreeQuote} className="inline-block bg-white text-[#00BCA2] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition border border-[#00BCA2]">Get Started Today</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;