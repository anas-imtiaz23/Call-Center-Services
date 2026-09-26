import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleGetFreeQuote = () => {
    navigate('/contact');
  };

  const coreValues = [
    {
      title: 'Trust & Transparency',
      description: 'We aim to present general insurance information clearly and encourage readers to confirm details with providers and official state resources.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Speed & Efficiency',
      description: 'Information on this site is educational and does not replace advice from a licensed insurance professional.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Quality Assurance',
      description: 'Coverage, prices, eligibility, and availability are determined by individual providers and vary by location and circumstance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      title: 'Partnership Focus',
      description: 'We encourage readers to compare policy terms and verify current requirements before making a decision.',
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
      description: 'An overview of common auto insurance coverage and factors providers may consider.',
      features: ['Coverage basics', 'Quote comparison', 'Provider questions']
    },
    {
      title: 'Car Insurance Rates',
      icon: '📊',
      description: 'General information about how vehicle, location, and driving history may affect quotes.',
      features: ['Location', 'Vehicle details', 'Driving history']
    },
    {
      title: 'Cheap Auto Insurance',
      icon: '💰',
      description: 'Ways to compare policy costs without assuming a particular price or discount.',
      features: ['Premiums', 'Deductibles', 'Discount questions']
    },
    {
      title: 'Insurance Coverage',
      icon: '🛡️',
      description: 'Plain-language introductions to common coverage types and SR-22 certificates.',
      features: ['Liability', 'Comprehensive', 'SR-22 basics']
    }
  ];

  const milestones = [
    { year: '01', title: 'Learn the basics', description: 'Review common auto insurance terms and coverage types.' },
    { year: '02', title: 'Check local rules', description: 'Confirm current requirements with your state insurance department.' },
    { year: '03', title: 'Compare like for like', description: 'Review similar limits, deductibles, exclusions, and payment terms.' },
    { year: '04', title: 'Ask the provider', description: 'Confirm the quote, eligibility, and policy terms directly with the insurer.' }
  ];

  const leadershipTeam = [
    {
      name: 'Coverage',
      position: 'Understand options',
      bio: 'Learn what common coverage terms mean and what questions to ask.',
      image: null
    },
    {
      name: 'Requirements',
      position: 'Check your location',
      bio: 'State laws and insurance requirements can change; use official local sources.',
      image: null
    },
    {
      name: 'Quotes',
      position: 'Compare details',
      bio: 'Compare equivalent limits, deductibles, and terms from providers.',
      image: null
    },
    {
      name: 'Providers',
      position: 'Verify directly',
      bio: 'Insurers determine pricing, eligibility, coverage, and availability.',
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
            About <span className="text-[#FB923C]">ZarvantaMedia</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
            An independent resource with general information about auto insurance coverage, requirements, and provider options.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-[#FAFAF8] rounded-full px-6 py-2 text-sm font-medium text-[#1E293B] border border-[#E8E5DF] shadow-sm">Independent resource</div>
            <div className="bg-[#FAFAF8] rounded-full px-6 py-2 text-sm font-medium text-[#1E293B] border border-[#E8E5DF] shadow-sm">General information</div>
            <div className="bg-[#FAFAF8] rounded-full px-6 py-2 text-sm font-medium text-[#1E293B] border border-[#E8E5DF] shadow-sm">Provider terms vary</div>
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
              Auto insurance details vary by provider and location. This site offers general explanations to help readers prepare questions and compare policies.
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
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">Coverage Guides</h3>
                    <p className="text-[#475569]">Review general explanations of common auto insurance coverage types and policy terms.</p>
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
                    <h3 className="text-xl font-bold text-[#1E293B] mb-2">Independent Information</h3>
                    <p className="text-[#475569]">ZarvantaMedia is not an insurer. Confirm current rates, availability, and policy terms directly with providers.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#F5F5F0] rounded-2xl p-8 border border-[#E8E5DF] shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)]">
                <div className="text-center">
                  <div className="text-5xl mb-4">📞🚀</div>
                  <h3 className="text-2xl font-bold text-[#1E293B] mb-3">Review your options carefully</h3>
                  <p className="text-[#475569] mb-6">Compare policy details with providers. Quotes, savings, eligibility, and coverage are not guaranteed.</p>
                  <button onClick={handleGetFreeQuote} className="inline-block bg-[#FB923C] text-white px-8 py-3 rounded-full font-bold hover:bg-[#F97316] transition shadow-lg hover:shadow-xl">Request Information →</button>
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
              <span className="text-[#FB923C] text-sm font-semibold">INSURANCE TOPICS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E293B] mb-4">Auto Insurance <span className="text-[#FB923C]">Topics</span></h2>
            <div className="w-24 h-1 bg-[#FB923C] mx-auto mb-6"></div>
            <p className="text-lg text-[#475569]">General educational information; coverage and rules depend on the provider and your location.</p>
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
                  <span className="font-semibold text-[#1E293B]">ZarvantaMedia</span> provides general information about auto insurance coverage and related provider options. This website is independent and is not an insurance company or government agency.
                </p>
                <p>
                  Insurance laws, rates, eligibility, and available products vary. Content here is educational, may not reflect current rules, and should be checked with an insurer or official state resource.
                </p>
                <p className="font-medium text-[#FB923C]">
                  Our purpose: Help readers understand common terms and identify questions to ask before contacting an insurance provider.
                </p>
              </div>
            </div>
            <div className="relative bg-[#1E293B] rounded-2xl overflow-hidden shadow-xl border border-[#2A3A4A]">
              <div className="p-6 md:p-8 text-white text-center">
                <div className="text-4xl md:text-6xl mb-4">📞🚗🏠⚰️🏥</div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">About This Resource</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FB923C]">Independent</div>
                    <div className="text-xs md:text-sm opacity-90">Informational resource</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FB923C]">Varies</div>
                    <div className="text-xs md:text-sm opacity-90">Provider terms</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FB923C]">No</div>
                    <div className="text-xs md:text-sm opacity-90">Coverage guarantee</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FB923C]">Verify</div>
                    <div className="text-xs md:text-sm opacity-90">With providers</div>
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
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Our Purpose</h3>
              <p className="text-[#475569] leading-relaxed">
                To explain common auto insurance terms and encourage readers to confirm current details with providers and official resources.
              </p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-8 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition-all duration-300 border-b-4 border-[#FB923C]">
              <div className="w-16 h-16 bg-[#FB923C]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Our Scope</h3>
              <p className="text-[#475569] leading-relaxed">
                This website provides general information only. It does not issue policies, determine eligibility, or provide insurance advice.
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
              These principles guide how we present general insurance information and third-party provider options.
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
              <span className="text-[#FB923C] text-sm font-semibold">A PRACTICAL GUIDE</span>
            </div>
              <h2 className="text-4xl font-black text-center text-[#1E293B] mb-4">How to Use This <span className="text-[#FB923C]">Guide</span></h2>
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
            <div><div className="text-4xl md:text-5xl font-bold text-[#FB923C]">Learn</div><div className="text-sm text-[#94A3B8]">Coverage basics</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-[#FB923C]">Compare</div><div className="text-sm text-[#94A3B8]">Policy details</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-[#FB923C]">Verify</div><div className="text-sm text-[#94A3B8]">With providers</div></div>
            <div><div className="text-4xl md:text-5xl font-bold text-[#FB923C]">Check</div><div className="text-sm text-[#94A3B8]">Official sources</div></div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-sm font-semibold">HOW TO USE THIS SITE</span>
            </div>
            <h2 className="text-4xl font-black text-center text-[#1E293B] mb-4">Using This <span className="text-[#FB923C]">Resource</span></h2>
            <p className="text-center text-[#475569] max-w-2xl mx-auto">Use this introductory information as a starting point, then verify details with providers.</p>
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
              <span className="text-[#FB923C] text-sm font-semibold">INFORMATIONAL RESOURCE</span>
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
              <p className="text-[#475569]">Insurance rules vary by location. Verify current requirements with your state insurance department.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-6 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-12 h-12 bg-[#FB923C]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">Policy Comparisons</h3>
              <p className="text-[#475569]">Compare equivalent coverages, limits, deductibles, and exclusions with the provider.</p>
            </div>
            <div className="bg-[#FAFAF8] rounded-xl shadow-[0_4px_12px_rgba(30,41,59,0.06)] p-6 hover:shadow-[0_20px_40px_-15px_rgba(30,41,59,0.12)] transition border border-[#E8E5DF]">
              <div className="w-12 h-12 bg-[#FB923C]/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#1E293B] mb-2">Provider Questions</h3>
              <p className="text-[#475569]">Ask insurers directly about rates, eligibility, coverage, and policy terms.</p>
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
          <h2 className="text-4xl md:text-5xl font-black mb-4">Need Advice About a Policy?</h2>
          <p className="text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Review general auto insurance information, then confirm your options directly with an insurer or licensed insurance professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleGetFreeQuote} className="inline-block bg-[#FB923C] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F97316] transition shadow-xl hover:shadow-2xl hover:-translate-y-0.5">Request Information →</button>
            <a href="/#coverage" className="inline-block border-2 border-[#FB923C] text-[#FB923C] bg-transparent px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FB923C] hover:text-white transition hover:-translate-y-0.5">Explore Coverage Types</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;