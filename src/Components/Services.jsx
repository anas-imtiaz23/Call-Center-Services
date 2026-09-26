import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buyers');
  const handleGetFreeQuote = () => {
    navigate('/contact');
  };

  const verticals = [
    {
      id: 'auto',
      icon: '🚗',
      title: 'Auto Insurance Leads',
      description: 'Auto insurance inquiry and call campaign options. Availability and delivery terms depend on campaign setup.',
      features: ['Real-time call transfers', 'Live & aged leads', 'Nationwide coverage', 'Zip code targeting', 'Pay-per-call & CPL'],
      volume: 'Campaign-based',
      gradient: 'from-[#FB923C]/20 to-[#F97316]/20',
      borderColor: 'border-[#FB923C]/30'
    },
    {
      id: 'quotes',
      icon: '💬',
      title: 'Auto Insurance Quotes',
      description: 'Auto insurance quote inquiry campaigns. Provider availability and quote terms vary by location.',
      features: ['Quote inquiries', 'Provider availability varies', 'Location-based options', 'Campaign terms apply', 'Contact for details'],
      volume: 'Campaign-based',
      gradient: 'from-[#FB923C]/20 to-[#F97316]/20',
      borderColor: 'border-[#FB923C]/30'
    },
    {
      id: 'rates',
      icon: '📊',
      title: 'Car Insurance Rates',
      description: 'Information and campaigns related to auto insurance rate inquiries. Rates are set by providers.',
      features: ['Location-based campaigns', 'Vehicle information', 'Provider-set rates', 'Campaign terms apply', 'Contact for details'],
      volume: 'Campaign-based',
      gradient: 'from-[#FB923C]/20 to-[#F97316]/20',
      borderColor: 'border-[#FB923C]/30'
    },
    {
      id: 'coverage',
      icon: '🛡️',
      title: 'Insurance Coverage',
      description: 'Campaign inquiries may relate to common auto insurance coverage topics. Actual products vary by provider and state.',
      features: ['Liability information', 'Comprehensive information', 'Collision information', 'SR-22 information', 'Availability varies'],
      volume: 'Campaign-based',
      gradient: 'from-[#FB923C]/20 to-[#F97316]/20',
      borderColor: 'border-[#FB923C]/30'
    }
  ];

  const deliveryMethods = [
    { icon: '📞', title: 'Live Transfers', description: 'Phone transfer campaigns may be available subject to campaign configuration and written terms.', highlight: 'Availability varies' },
    { icon: '📧', title: 'Email Leads', description: 'Email-based inquiry delivery options may be discussed for a campaign.', highlight: 'Terms apply' },
    { icon: '📱', title: 'SMS Leads', description: 'Text-based inquiry delivery options may be discussed where permitted and appropriately consented.', highlight: 'Consent required' },
    { icon: '💻', title: 'API Integration', description: 'Technical integration options depend on campaign needs and system compatibility.', highlight: 'Discuss requirements' }
  ];

  const pricingModels = [
    { name: 'Pay Per Call', description: 'Pricing may be based on call criteria defined in a written agreement.', bestFor: 'Discuss campaign terms', icon: '📞' },
    { name: 'Cost Per Lead', description: 'Lead pricing and delivery terms are agreed before a campaign begins.', bestFor: 'Discuss campaign terms', icon: '📧' },
    { name: 'Revenue Share', description: 'Any revenue-sharing arrangement requires written terms between the parties.', bestFor: 'Discuss campaign terms', icon: '💰' },
    { name: 'Hybrid Model', description: 'A combination may be considered subject to written agreement.', bestFor: 'Discuss campaign terms', icon: '⚙️' }
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
          <h1 className="text-4xl md:text-6xl font-black text-[#1E293B]">ZarvantaMedia <span className="text-[#FB923C]">Solutions</span></h1>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto mt-4">
            Explore campaign and inquiry delivery options related to auto insurance. Product availability, pricing, and terms are determined by providers and written agreements.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#FAFAF8] border-b border-[#E8E5DF]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] border border-[#E8E5DF]">
              <div className="text-2xl font-black text-[#FB923C]">Campaign-based</div>
              <div className="text-[#475569] text-sm mt-1">Availability varies</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] border border-[#E8E5DF]">
              <div className="text-2xl font-black text-[#FB923C]">Terms agreed</div>
              <div className="text-[#475569] text-sm mt-1">Before a campaign starts</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-[0_4px_12px_rgba(30,41,59,0.06)] border border-[#E8E5DF]">
              <div className="text-2xl font-black text-[#FB923C]">No guarantee</div>
              <div className="text-[#475569] text-sm mt-1">of campaign outcomes</div>
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
              Campaign availability and performance depend on audience, location, setup, and provider requirements.
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
                    <button onClick={handleGetFreeQuote} className="text-[#FB923C] text-sm font-semibold hover:text-[#F97316] transition flex items-center gap-1 group-hover:gap-2">
                      Ask About Services →
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
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Campaign Inquiries</h3>
                  <p className="text-[#475569] mb-6">Discuss campaign scope, audience, delivery, consent records, pricing, and terms before making any commitment.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Real-time call routing</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Consent and screening terms to be agreed</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Exclusive & shared options</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Volume discounts available</span></div>
                  </div>
                  <button onClick={handleGetFreeQuote} className="bg-[#FB923C] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#F97316] transition shadow-md hover:shadow-lg">Contact About Campaigns →</button>
                </div>
                <div className="bg-[#1E293B] p-8 lg:p-10 text-white flex flex-col justify-center border-l border-[#2A3A4A]">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-lg font-semibold mb-2">Campaign terms, availability, and results vary.</p>
                  <p className="text-sm text-[#94A3B8]">Review scope and written terms before launch.</p>
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
                  <p className="text-[#475569] mb-6">Discuss publisher opportunities, traffic sources, permitted channels, consent practices, and written payment terms.</p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Payment timing defined by agreement</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Rates defined by campaign terms</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Real-time performance dashboard</span></div>
                    <div className="flex items-center gap-3"><span className="text-[#FB923C] text-xl">✓</span><span className="text-[#1E293B]">Dedicated account manager</span></div>
                  </div>
                  <button onClick={handleGetFreeQuote} className="bg-[#FB923C] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#F97316] transition shadow-md hover:shadow-lg">Publisher Inquiry →</button>
                </div>
                <div className="bg-[#1E293B] p-8 lg:p-10 text-white flex flex-col justify-center border-l border-[#2A3A4A]">
                  <div className="text-4xl mb-4">💰</div>
                  <p className="text-lg font-semibold mb-2">Publisher participation is subject to review and written terms.</p>
                  <p className="text-sm text-[#94A3B8]">No earnings or payment timing are guaranteed here.</p>
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
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Discuss Campaign Options</h3>
                  <p className="text-[#475569] mb-6">Availability, lead distribution, pricing, and cancellation terms depend on the written agreement.</p>
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
                  <p className="text-lg font-semibold mb-2">Review campaign details before deciding whether they fit your business.</p>
                  <p className="text-sm text-[#94A3B8]">Results and availability vary.</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Campaign <span className="text-[#FB923C]">Review</span></h2>
              <p className="text-[#475569] mb-6">Requirements depend on campaign details and applicable law. Participants should document responsibilities and verify requirements before launch.</p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#FB923C] text-xl">✓</span>
                  <div><span className="font-semibold text-[#1E293B]">Do Not Call</span><p className="text-[#475569] text-sm">Agree on screening responsibilities, applicable rules, and recordkeeping.</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FB923C] text-xl">✓</span>
                  <div><span className="font-semibold text-[#1E293B]">Consent</span><p className="text-[#475569] text-sm">Review consent language and evidence requirements for each campaign channel.</p></div>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#FB923C] text-xl">✓</span>
                  <div><span className="font-semibold text-[#1E293B]">State Rules</span><p className="text-[#475569] text-sm">Check state-specific laws with qualified counsel.</p></div>
                </div>
              </div>
            </div>
            <div className="bg-[#FAFAF8] rounded-2xl p-8 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)] border border-[#E8E5DF]">
              <div className="text-center">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">Review Before Launch</h3>
                <p className="text-[#475569] text-sm mb-4">Confirm campaign scope, consent, data handling, screening, pricing, and dispute terms in writing before launch.</p>
                <div className="bg-[#F5F5F0] rounded-lg p-4 border border-[#E8E5DF]">
                  <p className="text-xs text-[#475569]">No certification or third-party audit is claimed on this page.</p>
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
              Workflow and reporting options depend on the tools and campaign scope agreed with each partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5F0] text-center p-6 rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">Real-Time Routing</h3>
              <p className="text-[#475569] text-sm">Routing requirements and delivery timing should be defined in the campaign agreement.</p>
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
            Contact us to discuss campaign scope, pricing, data handling, consent requirements, and availability. No volume or performance outcome is guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleGetFreeQuote} className="inline-block bg-[#FB923C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F97316] transition shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Contact About Services →</button>
            <button onClick={handleGetFreeQuote} className="inline-block border-2 border-[#FB923C] text-[#FB923C] bg-transparent px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FB923C] hover:text-white transition hover:-translate-y-0.5">General Inquiry</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;