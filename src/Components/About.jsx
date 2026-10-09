import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleGetFreeQuote = () => {
    navigate('/lead-capture');
  };

  const coreValues = [
    {
      title: 'Trust & Transparency',
      description: 'We operate with complete honesty, ensuring every lead is compliant with DNC and TCPA regulations, delivered with full transparency across all verticals.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Speed & Efficiency',
      description: 'Real-time lead routing connects consumers with agents instantly, maximizing conversion opportunities for your call center across all campaigns.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      description: 'Multi-layer verification ensures every lead is legitimate, accurate, and ready for your agents to close — whether insurance, Medicare, or home improvement.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: 'Partnership Focus',
      description: 'We grow with you — dedicated account managers optimize your campaigns for maximum ROI and long-term success across every vertical.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  const verticals = [
    {
      title: 'Auto Insurance Quotes',
      icon: '🚗',
      description: 'High-intent drivers comparing affordable auto insurance coverage from licensed agents.',
      features: ['Rate comparison', 'Live transfers', 'Nationwide coverage']
    },
    {
      title: 'Car Insurance Rates',
      icon: '📊',
      description: 'Competitive car insurance rate requests matched to each driver\'s vehicle and driving profile.',
      features: ['Zip code targeting', 'Driving history review', 'Fast quote delivery']
    },
    {
      title: 'Cheap Auto Insurance',
      icon: '💰',
      description: 'Affordable coverage options and flexible payment plans for budget-conscious drivers.',
      features: ['Low monthly options', 'Payment flexibility', 'No-obligation quotes']
    },
    {
      title: 'Insurance Coverage',
      icon: '🛡️',
      description: 'Liability, comprehensive, collision, SR-22, and high-risk auto insurance coverage solutions.',
      features: ['Liability plans', 'Comprehensive coverage', 'SR-22 filing']
    }
  ];

  const milestones = [
    { year: '2020', title: 'Artist Media Founded', description: 'Launched with a mission to transform lead generation across insurance and home services through quality and compliance.' },
    { year: '2021', title: 'First 50 Call Centers', description: 'Reached milestone of 50+ active call center partners across auto, health, and final expense.' },
    { year: '2022', title: 'Proprietary Platform', description: 'Launched AI-powered lead routing and analytics dashboard for real-time campaign optimization across 5+ verticals.' },
    { year: '2023', title: '2M+ Leads Delivered', description: 'Surpassed two million high-intent leads delivered to partners nationwide.' },
    { year: '2024', title: 'Home Improvement Launch', description: 'Expanded into roofing, solar, and remodeling leads with verified homeowner data.' },
    { year: '2025', title: 'Industry Leadership', description: 'Recognized as top lead provider for conversion rates, quality, and compliance across all major verticals.' }
  ];

  const leadershipTeam = [
    {
      name: 'Michael Artist',
      position: 'Founder & CEO',
      bio: '20+ years in lead generation and call center operations. Passionate about connecting consumers with trusted agents.',
      image: null
    },
    {
      name: 'Jennifer Walsh',
      position: 'VP of Operations',
      bio: 'Former call center director with expertise in optimizing agent workflows and maximizing lead conversion rates across verticals.',
      image: null
    },
    {
      name: 'David Kim',
      position: 'Head of Technology',
      bio: 'Lead architect of our real-time routing engine and compliance verification systems for all verticals.',
      image: null
    },
    {
      name: 'Sarah Martinez',
      position: 'Director of Compliance',
      bio: 'Ensures all leads meet TCPA, DNC, and state-specific regulations for insurance, health, and home services.',
      image: null
    }
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
            <span className="text-[#FB923C] text-sm font-semibold tracking-wider">ABOUT US</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-[#1E293B]">
            About <span className="text-[#FB923C]">Artist Media</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Connecting drivers with trusted agents through premium, compliant Auto Insurance quote and call campaigns.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-[#FAFAF8] rounded-full px-6 py-2 text-sm font-medium text-[#1E293B] border border-[#E8E5DF] shadow-sm">🚗 2M+ Leads Delivered</div>
            <div className="bg-[#FAFAF8] rounded-full px-6 py-2 text-sm font-medium text-[#1E293B] border border-[#E8E5DF] shadow-sm">⭐ 98% Client Retention</div>
            <div className="bg-[#FAFAF8] rounded-full px-6 py-2 text-sm font-medium text-[#1E293B] border border-[#E8E5DF] shadow-sm">🏠 5+ Verticals</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1E293B] mb-4">Why <span className="text-[#FB923C]">Choose Us?</span></h2>
            <div className="w-24 h-1 bg-[#FB923C] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-[#475569] leading-relaxed">
              We understand that every Auto Insurance campaign has unique needs. That's why we offer customized quote and call solutions to fit your sales process and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-[#F5F5F0] rounded-2xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-6 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FB923C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">Customized Solutions</h3>
                    <p className="text-[#475569]">Whether you need quote requests or real-time transfers, our expert team helps every step of the Auto Insurance campaign.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F5F0] rounded-2xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-6 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FB923C]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">Trusted Industry Partners</h3>
                    <p className="text-[#475569]">With years of industry experience, we've built compliant Auto Insurance campaigns around licensed agents and trusted carrier options.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#F5F5F0] rounded-2xl p-8 border border-[#E8E5DF] shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)]">
                <div className="text-center">
                  <div className="text-5xl mb-4">📞🚀</div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-3">Start Your Journey to High-Quality Leads!</h3>
                  <p className="text-[#475569] mb-6">Complete a quick form and get a free, no-obligation Auto Insurance quote. Connect qualified drivers with licensed agents.</p>
                  <button onClick={handleGetFreeQuote} className="inline-block bg-[#FB923C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#F97316] transition shadow-lg hover:shadow-xl">Get Your Free Quote →</button>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FB923C]/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Verticals Section */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">LEAD VERTICALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E293B] mb-4">Lead Verticals We <span className="text-[#FB923C]">Specialize In</span></h2>
            <div className="w-24 h-1 bg-[#FB923C] mx-auto mb-6"></div>
            <p className="text-lg text-[#475569]">Diversified, compliant, and high-converting leads tailored for your call center's success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vertical, idx) => (
              <div key={idx} className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition-all duration-300 overflow-hidden group border border-[#E8E5DF] hover:border-[#FB923C]/30">
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{vertical.icon}</div>
                  <h3 className="text-xl font-bold text-[#1E293B] mb-2">{vertical.title}</h3>
                  <p className="text-[#475569] text-sm mb-4">{vertical.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {vertical.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs bg-[#FB923C]/10 text-[#1E293B] px-2 py-1 rounded-full">✓ {feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
                <span className="text-[#FB923C] text-sm font-semibold">OUR STORY</span>
              </div>
              <h2 className="text-4xl font-black text-[#1E293B] mb-6">Our <span className="text-[#FB923C]">Story</span></h2>
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  Founded in 2020, <span className="font-semibold text-[#1E293B]">Artist Media</span> emerged from a clear observation: call centers struggled with lead quality, compliance risks, and inconsistent volume across multiple verticals. We knew there had to be a better way.
                </p>
                <p>
                  Starting with a small team of industry veterans and technologists, we built a platform that combines real-time routing, DNC/TCPA-compliant verification, and predictive analytics. Today, we deliver over 200,000 high-intent leads monthly to call centers nationwide across Auto, Medicare, Final Expense, Home Improvement, and ACA.
                </p>
                <p className="font-medium text-[#FB923C]">
                  Our mission: Connect every consumer with trusted agents while empowering call centers to maximize conversions.
                </p>
              </div>
            </div>
            <div className="relative bg-[#1E293B] rounded-2xl overflow-hidden shadow-xl border border-[#2A3A4A]">
              <div className="p-6 md:p-8 text-white text-center">
                <div className="text-4xl md:text-6xl mb-4">📞🚗🏠⚰️🏥</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Artist Media at a Glance</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FB923C]">100+</div>
                    <div className="text-xs md:text-sm opacity-90">Active Call Centers</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FB923C]">2M+</div>
                    <div className="text-xs md:text-sm opacity-90">Leads Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FB923C]">98%</div>
                    <div className="text-xs md:text-sm opacity-90">Client Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FB923C]">24/7</div>
                    <div className="text-xs md:text-sm opacity-90">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-8 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition-all duration-300 border-b-4 border-[#FB923C]">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Our Mission</h3>
              <p className="text-[#475569] leading-relaxed">
                To empower call centers with high-intent, compliant leads across Auto, Medicare, Final Expense, Home Improvement, and ACA — driving measurable growth while maintaining the highest standards of transparency and quality.
              </p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-8 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition-all duration-300 border-b-4 border-[#FB923C]">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Our Vision</h3>
              <p className="text-[#475569] leading-relaxed">
                To become the most trusted multi-vertical lead partner in America, transforming how call centers acquire customers through innovation, integrity, and intelligent technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">CORE VALUES</span>
            </div>
            <h2 className="text-4xl font-black text-center text-[#1E293B] mb-4">Our Core <span className="text-[#FB923C]">Values</span></h2>
            <p className="text-center text-[#475569] max-w-2xl mx-auto text-lg">
              These principles guide our lead generation, client relationships, and technology across every vertical.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group p-6 rounded-xl hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition-all duration-300 bg-[#F5F5F0] border border-[#E8E5DF]">
                <div className="w-20 h-20 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FB923C] transition-colors duration-300">
                  <div className="text-[#FB923C] group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{value.title}</h3>
                <p className="text-[#475569]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">OUR JOURNEY</span>
            </div>
            <h2 className="text-4xl font-black text-center text-[#1E293B] mb-4">Our <span className="text-[#FB923C]">Journey</span></h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-[#FB923C] h-full hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}>
                  <div className="md:w-1/2"></div>
                  <div className="relative md:w-1/2 w-full">
                    <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-6 ml-8 md:ml-0 border-l-4 border-[#FB923C] hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition">
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FB923C] rounded-full border-4 border-white shadow-md hidden md:block" style={{left: '-8px'}}></div>
                      <div className="text-[#FB923C] font-bold text-sm mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#1E293B] mb-2">{milestone.title}</h3>
                      <p className="text-[#475569]">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Orange */}
      <section className="py-16 bg-[#1E293B] text-white border-t border-[#2A3A4A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl md:text-5xl font-bold text-[#FB923C]">100+</div><div className="text-sm text-[#94A3B8]">Call Center Partners</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-[#FB923C]">2M+</div><div className="text-sm text-[#94A3B8]">Leads Generated</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-[#FB923C]">98%</div><div className="text-sm text-[#94A3B8]">Client Satisfaction</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-[#FB923C]">5+</div><div className="text-sm text-[#94A3B8]">Lead Verticals</div></div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">LEADERSHIP</span>
            </div>
            <h2 className="text-4xl font-black text-center text-[#1E293B] mb-4">Meet Our <span className="text-[#FB923C]">Leadership</span></h2>
            <p className="text-center text-[#475569] max-w-2xl mx-auto">Industry experts dedicated to your call center's success across all verticals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-[#F5F5F0] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
                <div className="h-56 bg-gradient-to-br from-[#FB923C] to-[#F97316] flex items-center justify-center">
                  <span className="text-6xl font-bold text-white opacity-50">{member.name.charAt(0)}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#1E293B]">{member.name}</h3>
                  <p className="text-[#FB923C] font-semibold mb-3">{member.position}</p>
                  <p className="text-[#475569] text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">WHAT SETS US APART</span>
            </div>
            <h2 className="text-4xl font-black text-center text-[#1E293B] mb-4">What Sets <span className="text-[#FB923C]">Us Apart</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-6 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-12 h-12 bg-[#FB923C]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">Compliance First</h3>
              <p className="text-[#475569]">We prioritize DNC, TCPA, and state-specific compliance to ensure every lead is legitimate and valuable across all verticals.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-6 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-12 h-12 bg-[#FB923C]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">Real-Time Analytics</h3>
              <p className="text-[#475569]">Get instant insights with our comprehensive reporting dashboard and campaign-specific analytics for every vertical.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-6 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-12 h-12 bg-[#FB923C]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">Dedicated Support</h3>
              <p className="text-[#475569]">Your personal account manager works closely with you to optimize campaigns and maximize ROI across all verticals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Orange */}
      <section className="py-20 bg-[#1E293B] text-white border-t border-[#2A3A4A]">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4 border border-[#FB923C]/20">
            <span className="text-[#FB923C] text-sm font-semibold">GET STARTED</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Scale Your Call Center?</h2>
          <p className="text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Join 100+ successful call centers that trust Artist Media for premium, compliant leads across Auto, Medicare, Final Expense, Home Improvement, and ACA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleGetFreeQuote} className="inline-block bg-[#FB923C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F97316] transition shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Get Your Free Quote →</button>
            <a href="#verticals" className="inline-block border-2 border-[#FB923C] text-[#FB923C] bg-transparent px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FB923C] hover:text-white transition hover:-translate-y-0.5">View Lead Verticals</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;