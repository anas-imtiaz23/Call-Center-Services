import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  // Navigation handlers
  const handleGetFreeQuote = () => {
    navigate('/lead-capture');
  };
  // Core values tailored for multi-vertical call center
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

  // Verticals / Services we offer
  const verticals = [
    {
      title: 'Auto Insurance',
      icon: '🚗',
      description: 'High-intent drivers actively seeking affordable coverage. Real-time transfers and exclusive leads with DNC compliance.',
      features: ['Real-time transfers', 'Live & aged leads', 'Nationwide coverage']
    },
    {
      title: 'Final Expense',
      icon: '⚰️',
      description: 'Seniors seeking burial insurance and life insurance protection. High conversion rates for experienced agents.',
      features: ['Aged 50-85', 'Low monthly budgets', 'TCPA compliant']
    },
    {
      title: 'Medicare',
      icon: '🏥',
      description: 'Seniors comparing Medicare Advantage, Supplement, and Part D plans during AEP and year-round.',
      features: ['T65 prospects', 'AEP/ OEP targeting', 'Supplement & Advantage']
    },
    {
      title: 'Home Improvement',
      icon: '🏠',
      description: 'Homeowners actively seeking roofing, solar, windows, bathroom remodeling, and HVAC services.',
      features: ['Project-specific', 'Verified homeowners', 'High intent leads']
    },
    {
      title: 'Pest Control',
      icon: '🐜',
      description: 'Homeowners needing safe, effective pest inspection and elimination services nationwide.',
      features: ['Roaches, mice, termites, ants, spiders', 'Owner-occupied home targeting', 'Inspection appointments booked']
    },
    {
      title: 'Obama Care (ACA)',
      icon: '🛡️',
      description: 'Health insurance seekers during open enrollment and SEP. Qualified leads for ACA marketplace plans.',
      features: ['SEP & OEP', 'Income verified', 'Subsidy eligible']
    }
  ];

  // Company milestones
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0F2B3D] to-[#1A4A6F] text-white py-24">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">About <span className="text-[#00BCA2]">Artist Media</span></h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Connecting consumers with trusted agents — empowering call centers with premium, compliant leads across Auto, Medicare, Final Expense, Home Improvement, and ACA.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">🚗 2M+ Leads Delivered</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">⭐ 98% Client Retention</div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-sm font-medium">🏠 5+ Verticals</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - inspired by your image */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F2B3D] mb-4">Why <span className="text-[#00BCA2]">Choose Us?</span></h2>
            <div className="w-24 h-1 bg-[#00BCA2] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We understand that every call center has unique needs. That's why we offer customized lead solutions across multiple verticals to fit your sales process and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#00BCA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2B3D] mb-2">Customized Solutions</h3>
                    <p className="text-gray-600">Whether you need basic buyer interest or comprehensive real-time transfers, our expert team helps every step of the way — across all verticals.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#00BCA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0F2B3D] mb-2">Trusted Industry Partners</h3>
                    <p className="text-gray-600">With years of industry experience, we've partnered with top-rated insurance carriers, Medicare providers, and home improvement networks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#00BCA2]/10 to-[#0F2B3D]/10 rounded-2xl p-8 border border-[#00BCA2]/20">
                <div className="text-center">
                  <div className="text-5xl mb-4">📞🚀</div>
                  <h3 className="text-2xl font-bold text-[#0F2B3D] mb-3">Start Your Journey to High-Quality Leads!</h3>
                  <p className="text-gray-600 mb-6">Complete a quick form and get a free, no-obligation quote. Protect your call center revenue, save on acquisition costs, and scale with peace of mind across all verticals.</p>
                  <button onClick={handleGetFreeQuote} className="inline-block bg-[#00BCA2] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008f7b] transition shadow-lg hover:shadow-xl">Get Your Free Quote →</button>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#00BCA2]/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Verticals Section - NEW */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2B3D] mb-4">Lead Verticals We <span className="text-[#00BCA2]">Specialize In</span></h2>
            <div className="w-24 h-1 bg-[#00BCA2] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">Diversified, compliant, and high-converting leads tailored for your call center's success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vertical, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border-b-3 border-transparent hover:border-[#00BCA2]">
                <div className="p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{vertical.icon}</div>
                  <h3 className="text-xl font-bold text-[#0F2B3D] mb-2">{vertical.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{vertical.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {vertical.features.map((feature, fIdx) => (
                      <span key={fIdx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">✓ {feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0F2B3D] mb-6">Our <span className="text-[#00BCA2]">Story</span></h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, <span className="font-semibold text-[#0F2B3D]">Artist Media</span> emerged from a clear observation: call centers struggled with lead quality, compliance risks, and inconsistent volume across multiple verticals. We knew there had to be a better way.
                </p>
                <p>
                  Starting with a small team of industry veterans and technologists, we built a platform that combines real-time routing, DNC/TCPA-compliant verification, and predictive analytics. Today, we deliver over 200,000 high-intent leads monthly to call centers nationwide across Auto, Medicare, Final Expense, Home Improvement, and ACA.
                </p>
                <p className="font-medium text-[#00BCA2]">
                  Our mission: Connect every consumer with trusted agents while empowering call centers to maximize conversions.
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#00BCA2] to-[#0F2B3D] rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 md:p-8 text-white text-center">
                <div className="text-4xl md:text-6xl mb-4">📞🚗🏠⚰️🏥</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Artist Media at a Glance</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">100+</div>
                    <div className="text-xs md:text-sm opacity-90">Active Call Centers</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">2M+</div>
                    <div className="text-xs md:text-sm opacity-90">Leads Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">98%</div>
                    <div className="text-xs md:text-sm opacity-90">Client Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold">24/7</div>
                    <div className="text-xs md:text-sm opacity-90">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-b-4 border-[#00BCA2]">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00BCA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0F2B3D] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower call centers with high-intent, compliant leads across Auto, Medicare, Final Expense, Home Improvement, and ACA — driving measurable growth while maintaining the highest standards of transparency and quality.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-b-4 border-[#00BCA2]">
              <div className="w-16 h-16 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#00BCA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#0F2B3D] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted multi-vertical lead partner in America, transforming how call centers acquire customers through innovation, integrity, and intelligent technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#0F2B3D] mb-4">Our Core <span className="text-[#00BCA2]">Values</span></h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            These principles guide our lead generation, client relationships, and technology across every vertical.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group p-6 rounded-xl hover:shadow-soft transition-all duration-300 bg-white">
                <div className="w-20 h-20 bg-[#00BCA2]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#00BCA2] transition-colors duration-300">
                  <div className="text-[#00BCA2] group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0F2B3D] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#0F2B3D] mb-12">Our <span className="text-[#00BCA2]">Journey</span></h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-[#00BCA2] h-full hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6`}>
                  <div className="md:w-1/2"></div>
                  <div className="relative md:w-1/2 w-full">
                    <div className="bg-white rounded-xl shadow-lg p-6 ml-8 md:ml-0 border-l-4 border-[#00BCA2]">
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00BCA2] rounded-full border-4 border-white shadow-md hidden md:block" style={{left: '-8px'}}></div>
                      <div className="text-[#00BCA2] font-bold text-sm mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-[#0F2B3D] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#00BCA2] to-[#008f7b] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl md:text-5xl font-bold">100+</div><div className="text-sm opacity-90">Call Center Partners</div></div>
            <div><div className="text-4xl md:text-5xl font-bold">2M+</div><div className="text-sm opacity-90">Leads Generated</div></div>
            <div><div className="text-4xl md:text-5xl font-bold">98%</div><div className="text-sm opacity-90">Client Satisfaction</div></div>
            <div><div className="text-4xl md:text-5xl font-bold">5+</div><div className="text-sm opacity-90">Lead Verticals</div></div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#0F2B3D] mb-4">Meet Our <span className="text-[#00BCA2]">Leadership</span></h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Industry experts dedicated to your call center's success across all verticals</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="h-56 bg-gradient-to-br from-[#00BCA2] to-[#0F2B3D] flex items-center justify-center">
                  <span className="text-6xl font-bold text-white opacity-50">{member.name.charAt(0)}</span>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-[#0F2B3D]">{member.name}</h3>
                  <p className="text-[#00BCA2] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#0F2B3D] mb-12">What Sets <span className="text-[#00BCA2]">Us Apart</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00BCA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0F2B3D] mb-2">Compliance First</h3>
              <p className="text-gray-600">We prioritize DNC, TCPA, and state-specific compliance to ensure every lead is legitimate and valuable across all verticals.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00BCA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0F2B3D] mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">Get instant insights with our comprehensive reporting dashboard and campaign-specific analytics for every vertical.</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="w-12 h-12 bg-[#00BCA2]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00BCA2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0F2B3D] mb-2">Dedicated Support</h3>
              <p className="text-gray-600">Your personal account manager works closely with you to optimize campaigns and maximize ROI across all verticals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F2B3D] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Scale Your Call Center?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 100+ successful call centers that trust Artist Media for premium, compliant leads across Auto, Medicare, Final Expense, Home Improvement, and ACA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleGetFreeQuote} className="inline-block bg-[#00BCA2] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#008f7b] transition shadow-xl">Get Your Free Quote →</button>
            <a href="#" className="inline-block border-2 border-[#00BCA2] text-[#00BCA2] bg-transparent px-10 py-4 rounded-full font-bold text-lg hover:bg-[#00BCA2] hover:text-white transition">View Lead Verticals</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;