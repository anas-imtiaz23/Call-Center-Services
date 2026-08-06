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

  const verticals = [
    {
      id: 'auto',
      icon: '🚗',
      title: 'Auto Insurance Leads',
      description: 'High-intent drivers actively seeking affordable coverage. Real-time transfers and exclusive leads with DNC compliance.',
      features: ['Real-time call transfers', 'Live & aged leads', 'Nationwide coverage', 'Zip code targeting', 'Pay-per-call & CPL'],
      volume: '50,000+ monthly',
      conversion: '28% avg',
      gradient: 'from-[#FB923C]/20 to-[#F97316]/20',
      borderColor: 'border-[#FB923C]/30'
    },
    {
      id: 'final',
      icon: '⚰️',
      title: 'Final Expense Leads',
      description: 'Seniors seeking burial insurance and life insurance protection. High conversion rates for experienced agents.',
      features: ['Age 50-85 targeting', 'Low monthly budgets', 'TCPA compliant', 'Exclusive territories', 'Live transfers available'],
      volume: '25,000+ monthly',
      conversion: '32% avg',
      gradient: 'from-[#94A3B8]/20 to-[#64748B]/20',
      borderColor: 'border-[#94A3B8]/30'
    },
    {
      id: 'medicare',
      icon: '🏥',
      title: 'Medicare Leads',
      description: 'Seniors comparing Medicare Advantage, Supplement, and Part D plans during AEP and year-round.',
      features: ['T65 prospects', 'AEP/OEP targeting', 'Supplement & Advantage', 'Income verified', 'Prescription needs'],
      volume: '40,000+ monthly',
      conversion: '35% avg',
      gradient: 'from-[#F87171]/20 to-[#EF4444]/20',
      borderColor: 'border-[#F87171]/30'
    },
    {
      id: 'home',
      icon: '🏠',
      title: 'Home Improvement Leads',
      description: 'Homeowners actively seeking roofing, solar, windows, bathroom remodeling, and HVAC services.',
      features: ['Project-specific', 'Verified homeowners', 'High intent leads', 'Same-day delivery', 'Exclusive leads'],
      volume: '35,000+ monthly',
      conversion: '42% avg',
      gradient: 'from-[#FCD34D]/20 to-[#F59E0B]/20',
      borderColor: 'border-[#FCD34D]/30'
    },
    {
      id: 'pest',
      icon: '🐜',
      title: 'Pest Control Leads',
      description: 'Homeowners needing safe, effective pest inspection and elimination services nationwide.',
      features: ['Roaches, mice, termites, ants, spiders', 'Owner-occupied home targeting', 'Inspection & treatment booked', 'EPA-approved solutions', 'Flexible scheduling'],
      volume: '35,000+ monthly',
      conversion: '38% avg',
      gradient: 'from-[#6EE7B7]/20 to-[#34D399]/20',
      borderColor: 'border-[#6EE7B7]/30'
    },
    {
      id: 'aca',
      icon: '🛡️',
      title: 'Obama Care (ACA) Leads',
      description: 'Health insurance seekers during open enrollment and SEP. Qualified leads for ACA marketplace plans.',
      features: ['SEP & OEP', 'Income verified', 'Subsidy eligible', 'Family & individual', 'Live transfers'],
      volume: '30,000+ monthly',
      conversion: '30% avg',
      gradient: 'from-[#6EE7B7]/20 to-[#10B981]/20',
      borderColor: 'border-[#6EE7B7]/30'
    }
  ];

  const deliveryMethods = [
    { icon: '📞', title: 'Live Transfers', description: 'Real-time phone transfers to your agents. Pay only for connected calls.', highlight: 'Best for closing' },
    { icon: '📧', title: 'Email Leads', description: 'Verified leads delivered instantly to your CRM or inbox.', highlight: 'Best for follow-up' },
    { icon: '📱', title: 'SMS Leads', description: 'Text message alerts with lead details for immediate action.', highlight: 'Best for speed' },
    { icon: '💻', title: 'API Integration', description: 'Direct API feed to your existing systems for seamless automation.', highlight: 'Best for scale' }
  ];

  const pricingModels = [
    { name: 'Pay Per Call', description: 'You pay only for connected, qualified phone calls', bestFor: 'Live transfer campaigns', icon: '📞' },
    { name: 'Cost Per Lead', description: 'Fixed price per exclusive lead delivered', bestFor: 'Email and SMS campaigns', icon: '📧' },
    { name: 'Revenue Share', description: 'Split revenue on closed deals', bestFor: 'Enterprise partners', icon: '💰' },
    { name: 'Hybrid Model', description: 'Custom mix of pricing models', bestFor: 'High-volume call centers', icon: '⚙️' }
  ];

  return (
    <div className="bg-[#F5F5F0] min-h-screen">
      
      {/* Hero Section - Soft Stone with Orange */}
      <section className="relative bg-[#F5F5F0] py-24 overflow-hidden border-b border-[#E8E5DF]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#FB923C] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#FB923C] rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-[#FB923C]/10 backdrop-blur-sm rounded-full mb-6 border border-[#FB923C]/20">
            <span className="text-[#FB923C] text-sm font-semibold tracking-wider">OUR SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-[#1E293B]">Artist Media <span className="text-[#FB923C]">Solutions</span></h1>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto mt-4">
            Premium, compliant leads delivered in real-time. Scale your call center with our AI-powered platform across multiple verticals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 bg-[#FAFAF8] border-b border-[#E8E5DF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] border border-[#E8E5DF]">
              <div className="text-4xl font-black text-[#FB923C]"><span id="clients-counter">0</span>+</div>
              <div className="text-[#475569] text-sm mt-1">Active Call Centers</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] border border-[#E8E5DF]">
              <div className="text-4xl font-black text-[#FB923C]"><span id="leads-counter">0</span>+</div>
              <div className="text-[#475569] text-sm mt-1">Leads Delivered Monthly</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] border border-[#E8E5DF]">
              <div className="text-4xl font-black text-[#FB923C]"><span id="conversion-counter">0</span>%</div>
              <div className="text-[#475569] text-sm mt-1">Average Conversion Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Verticals Section */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">LEAD VERTICALS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Lead Verticals We <span className="text-[#FB923C]">Specialize In</span></h2>
            <div className="w-20 h-1 bg-[#FB923C] mx-auto rounded-full"></div>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
              High-intent, compliant leads across the most profitable verticals for USA call centers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {verticals.map((vertical, idx) => (
              <div key={idx} className="bg-[#FAFAF8] rounded-2xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition-all duration-300 hover:-translate-y-2 group border border-[#E8E5DF]">
                <div className={`bg-gradient-to-r ${vertical.gradient} p-4 border-b ${vertical.borderColor}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{vertical.icon}</span>
                      <h3 className="font-bold text-[#1E293B] text-lg">{vertical.title}</h3>
                    </div>
                    <div className="bg-[#FB923C]/10 rounded-full px-3 py-1 text-xs font-semibold text-[#FB923C]">
                      {vertical.volume}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#475569] text-sm mb-4">{vertical.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vertical.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs bg-[#F5F5F0] text-[#1E293B] px-2 py-1 rounded-full border border-[#E8E5DF]">✓ {feature}</span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-[#E8E5DF]">
                    <div>
                      <span className="text-xs text-[#94A3B8]">Avg. Conversion</span>
                      <div className="font-bold text-[#FB923C]">{vertical.conversion}</div>
                    </div>
                    <button onClick={handleGetFreeQuote} className="text-[#FB923C] text-sm font-semibold hover:text-[#F97316] transition flex items-center gap-1 group-hover:gap-2">
                      Get Quote → 
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Methods Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">DELIVERY METHODS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Lead <span className="text-[#FB923C]">Delivery Methods</span></h2>
            <div className="w-20 h-1 bg-[#FB923C] mx-auto rounded-full"></div>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
              Choose how you want to receive your leads — we optimize for your workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryMethods.map((method, idx) => (
              <div key={idx} className="bg-[#F5F5F0] rounded-xl p-6 text-center hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition-all duration-300 hover:-translate-y-1 group border border-[#E8E5DF]">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{method.icon}</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">{method.title}</h3>
                <p className="text-[#475569] text-sm mb-3">{method.description}</p>
                <span className="inline-block bg-[#FB923C]/10 text-[#FB923C] text-xs font-semibold px-3 py-1 rounded-full">{method.highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve - Tabs Section */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">WHO WE SERVE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Who We <span className="text-[#FB923C]">Serve</span></h2>
            <div className="w-20 h-1 bg-[#FB923C] mx-auto rounded-full"></div>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
              Tailored solutions for every type of call center operation
            </p>
          </div>

          {/* Tab Buttons - Orange Theme */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button onClick={() => setActiveTab('buyers')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'buyers' ? 'bg-[#FB923C] text-white shadow-lg hover:shadow-xl' : 'bg-[#FAFAF8] text-[#1E293B] hover:bg-[#F5F5F0] border border-[#E8E5DF]'}`}>
              📞 Lead Buyers
            </button>
            <button onClick={() => setActiveTab('sellers')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'sellers' ? 'bg-[#FB923C] text-white shadow-lg hover:shadow-xl' : 'bg-[#FAFAF8] text-[#1E293B] hover:bg-[#F5F5F0] border border-[#E8E5DF]'}`}>
              📱 Lead Sellers
            </button>
            <button onClick={() => setActiveTab('agents')} className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'agents' ? 'bg-[#FB923C] text-white shadow-lg hover:shadow-xl' : 'bg-[#FAFAF8] text-[#1E293B] hover:bg-[#F5F5F0] border border-[#E8E5DF]'}`}>
              👤 Individual Agents
            </button>
          </div>

          {/* Tab Content - Lead Buyers */}
          <div className={`transition-all duration-500 ${activeTab === 'buyers' ? 'block' : 'hidden'}`}>
            <div className="bg-[#FAFAF8] rounded-2xl shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] overflow-hidden border border-[#E8E5DF]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="inline-block px-3 py-1 bg-[#FB923C]/10 rounded-full mb-4">
                    <span className="text-[#FB923C] text-xs font-semibold">FOR CALL CENTERS & AGENCIES</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Buy High-Converting Leads</h3>
                  <p className="text-[#475569] mb-6">Access premium, compliant leads across multiple verticals. Scale your call center with predictable volume and quality.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Real-time call routing</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">DNC & TCPA compliant</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Exclusive & shared options</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Volume discounts available</span></div>
                  </div>
                  <button onClick={handleGetFreeQuote} className="bg-[#FB923C] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#F97316] transition shadow-md hover:shadow-lg">Start Buying Leads →</button>
                </div>
                <div className="bg-[#1E293B] p-8 lg:p-10 text-white flex flex-col justify-center border-l border-[#2A3A4A]">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-lg font-semibold mb-2">"Artist Media delivers the highest quality leads we've ever purchased."</p>
                  <p className="text-sm text-[#94A3B8]">— Summit Insurance Group • 350% ROI increase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content - Lead Sellers */}
          <div className={`transition-all duration-500 ${activeTab === 'sellers' ? 'block' : 'hidden'}`}>
            <div className="bg-[#FAFAF8] rounded-2xl shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] overflow-hidden border border-[#E8E5DF]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="inline-block px-3 py-1 bg-[#FB923C]/10 rounded-full mb-4">
                    <span className="text-[#FB923C] text-xs font-semibold">FOR PUBLISHERS & AFFILIATES</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Monetize Your Traffic</h3>
                  <p className="text-[#475569] mb-6">Turn your website traffic, email lists, and social media into revenue. Access 30,000+ advertisers with premium offers.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Weekly payouts, no holds</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">High CPM & CPA rates</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Real-time performance dashboard</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Dedicated account manager</span></div>
                  </div>
                  <button onClick={handleGetFreeQuote} className="bg-[#FB923C] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#F97316] transition shadow-md hover:shadow-lg">Apply as Publisher →</button>
                </div>
                <div className="bg-[#1E293B] p-8 lg:p-10 text-white flex flex-col justify-center border-l border-[#2A3A4A]">
                  <div className="text-4xl mb-4">💰</div>
                  <p className="text-lg font-semibold mb-2">"Artist Media doubled our RPM overnight. Best partner we've worked with."</p>
                  <p className="text-sm text-[#94A3B8]">— Digital Media Publisher • $50K+ monthly earnings</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Content - Individual Agents */}
          <div className={`transition-all duration-500 ${activeTab === 'agents' ? 'block' : 'hidden'}`}>
            <div className="bg-[#FAFAF8] rounded-2xl shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] overflow-hidden border border-[#E8E5DF]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="inline-block px-3 py-1 bg-[#FB923C]/10 rounded-full mb-4">
                    <span className="text-[#FB923C] text-xs font-semibold">FOR SOLO AGENTS & SMALL TEAMS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Get Quality Leads Without Overhead</h3>
                  <p className="text-[#475569] mb-6">Start getting live transfers and exclusive leads today. No contracts, pause anytime.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Live transfers to your phone</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Pay only for connected calls</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">No long-term contracts</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Exclusive territories available</span></div>
                  </div>
                  <button onClick={handleGetFreeQuote} className="bg-[#FB923C] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#F97316] transition shadow-md hover:shadow-lg">Start Getting Leads →</button>
                </div>
                <div className="bg-[#1E293B] p-8 lg:p-10 text-white flex flex-col justify-center border-l border-[#2A3A4A]">
                  <div className="text-4xl mb-4">⭐</div>
                  <p className="text-lg font-semibold mb-2">"I've tried 5 lead providers — Artist Media is the only one that delivers."</p>
                  <p className="text-sm text-[#94A3B8]">— Independent Agent • 200+ closed deals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Models Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">PRICING MODELS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Flexible <span className="text-[#FB923C]">Pricing Models</span></h2>
            <div className="w-20 h-1 bg-[#FB923C] mx-auto rounded-full"></div>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
              Choose the pricing structure that works best for your business model
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingModels.map((model, idx) => (
              <div key={idx} className="bg-[#F5F5F0] rounded-xl p-6 text-center hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition-all duration-300 hover:-translate-y-2 border border-[#E8E5DF]">
                <div className="text-4xl mb-3">{model.icon}</div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">{model.name}</h3>
                <p className="text-[#475569] text-sm mb-3">{model.description}</p>
                <div className="inline-block bg-[#FB923C]/10 rounded-full px-3 py-1">
                  <span className="text-[#FB923C] text-xs font-semibold">Best for: {model.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
                <span className="text-[#FB923C] text-sm font-semibold">COMPLIANCE FIRST</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Fully <span className="text-[#FB923C]">Compliant</span> Lead Generation</h2>
              <p className="text-[#475569] mb-6">We take compliance seriously. Every lead is scrubbed against DNC and TCPA regulations to protect your call center.</p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#FB923C] text-xl">✓</span>
                  <div><span className="font-semibold text-[#1E293B]">DNC Scrub</span><p className="text-[#475569] text-sm">All leads checked against National & State DNC registries</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FB923C] text-xl">✓</span>
                  <div><span className="font-semibold text-[#1E293B]">TCPA Compliance</span><p className="text-[#475569] text-sm">Express written consent for all marketing communications</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FB923C] text-xl">✓</span>
                  <div><span className="font-semibold text-[#1E293B]">State-Specific</span><p className="text-[#475569] text-sm">Compliant with individual state regulations</p></div>
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] border border-[#E8E5DF]">
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">Our Compliance Guarantee</h3>
                <p className="text-[#475569] text-sm mb-4">100% compliant leads or your money back. We stand behind our quality and compliance standards.</p>
                <div className="bg-[#F5F5F0] rounded-lg p-4 border border-[#E8E5DF]">
                  <p className="text-xs text-[#475569]">✓ Certified by leading compliance partners</p>
                  <p className="text-xs text-[#475569] mt-1">✓ Regular third-party audits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Platform Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">TECHNOLOGY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Our <span className="text-[#FB923C]">Technology Platform</span></h2>
            <div className="w-20 h-1 bg-[#FB923C] mx-auto rounded-full"></div>
            <p className="text-[#475569] mt-4 max-w-2xl mx-auto">
              AI-powered lead routing and analytics for maximum conversion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F0] text-center p-6 rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">Real-Time Routing</h3>
              <p className="text-[#475569] text-sm">Sub-second lead delivery to your agents based on availability and performance</p>
            </div>
            <div className="bg-[#F5F5F0] text-center p-6 rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">Analytics Dashboard</h3>
              <p className="text-[#475569] text-sm">Real-time reporting, conversion tracking, and campaign optimization insights</p>
            </div>
            <div className="bg-[#F5F5F0] text-center p-6 rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔌</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">API Integration</h3>
              <p className="text-[#475569] text-sm">Seamless integration with your CRM, dialer, or existing systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Orange Theme */}
      <section className="py-20 bg-[#1E293B] text-white border-t border-[#2A3A4A]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4 border border-[#FB923C]/20">
            <span className="text-[#FB923C] text-sm font-semibold">GET STARTED</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">Ready to Scale Your Call Center?</h2>
          <p className="text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Get started with premium, compliant leads today. Request your free quote and volume pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleGetFreeQuote} className="inline-block bg-[#FB923C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F97316] transition shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Get Free Quote →</button>
            <button onClick={handleGetFreeQuote} className="inline-block border-2 border-[#FB923C] text-[#FB923C] bg-transparent px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FB923C] hover:text-white transition hover:-translate-y-0.5">Talk to Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;