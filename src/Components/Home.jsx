import React from 'react';

const Home = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const guideCategories = [
    { name: 'Auto Insurance Basics', icon: '🚗', detail: 'Start with the essentials' },
    { name: 'Coverage Types', icon: '🛡️', detail: 'Understand common options' },
    { name: 'SR-22 & High-Risk', icon: '📋', detail: 'Learn about special filings' },
    { name: 'Costs & Discounts', icon: '💰', detail: 'What may affect a quote' },
    { name: 'State Requirements', icon: '🗺️', detail: 'Rules vary by location' },
    { name: 'Claims Process', icon: '📝', detail: 'Know what to ask' }
  ];

  const featuredGuides = [
    { 
      title: 'Understanding Minimum Coverage Requirements', 
      desc: 'Learn about common minimums and where to verify current requirements in your state.',
      category: 'Basics',
      readTime: '5 min read'
    },
    { 
      title: 'How to Compare Insurance Quotes Effectively', 
      desc: 'Compare equivalent limits, deductibles, exclusions, and payment terms across policies.',
      category: 'Guides',
      readTime: '8 min read'
    },
    { 
      title: 'SR-22 Filing: What You Need to Know', 
      desc: 'An introduction to SR-22 certificates. Filing rules and timing depend on state requirements.',
      category: 'Special Cases',
      readTime: '6 min read'
    },
    { 
      title: 'Liability vs. Full Coverage: Which Do You Need?', 
      desc: 'Review how liability and physical-damage coverages differ before speaking with a provider.',
      category: 'Coverage',
      readTime: '7 min read'
    }
  ];

  const whyItMatters = [
    { 
      icon: '⚖️', 
      title: 'Legal Requirement', 
      desc: 'Many states require insurance or other financial responsibility. Check current rules with your state insurance department.' 
    },
    { 
      icon: '💰', 
      title: 'Financial Protection', 
      desc: 'A policy may help pay covered costs subject to its limits, exclusions, and deductibles. Review the policy documents for details.' 
    },
    { 
      icon: '🧘', 
      title: 'Peace of Mind', 
      desc: 'Understanding selected coverages and exclusions helps you know what questions to ask before choosing a policy.' 
    },
    { 
      icon: '📉', 
      title: 'Cost Savings', 
      desc: 'Comparing similar coverage and deductibles can help you evaluate quotes. Rates and discounts vary by insurer and situation.' 
    }
  ];

  const keyConsiderations = [
    { 
      title: 'Your Driving Record', 
      desc: 'A clean record can earn you lower rates. Accidents, tickets, and violations may increase your premium significantly. Be honest about your history when comparing quotes.' 
    },
    { 
      title: 'Your Vehicle', 
      desc: 'The make, model, year, and safety features of your car affect insurance costs. Newer, safer cars often cost less to insure. Sports cars and luxury vehicles typically cost more.' 
    },
    { 
      title: 'Your Location', 
      desc: 'Rates vary by state, city, and even neighborhood. Areas with high theft rates or heavy traffic may have higher premiums. Urban drivers often pay more than rural drivers.' 
    },
    { 
      title: 'Your Deductible', 
      desc: 'A higher deductible means lower monthly premiums, but more out-of-pocket costs if you file a claim. Choose a deductible you can comfortably afford.' 
    },
    { 
      title: 'Coverage Limits', 
      desc: 'Higher limits provide more protection but cost more. State minimums are often insufficient. Consider your assets and risk tolerance when choosing limits.' 
    },
    { 
      title: 'Discounts', 
      desc: 'Many insurers offer discounts for safe driving, bundling policies, low mileage, good grades, and more. Always ask what discounts you qualify for.' 
    }
  ];

  return (
    <div className="home-page overflow-x-hidden">

      {/* ===== HERO SECTION ===== */}
      <section className="home-hero relative py-16 md:py-24 px-4 md:px-8 overflow-hidden">
        <div className="home-hero-inner relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="home-hero-copy text-center lg:text-left">
            <div className="home-eyebrow inline-block px-4 py-1.5 rounded-full mb-6">
              <span className="text-xs md:text-sm font-semibold tracking-wide uppercase">An independent guide</span>
            </div>
            <h1 className="home-title text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              Make sense of auto insurance <span>before you choose.</span>
            </h1>
            <p className="home-intro text-base md:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Clear starting points for understanding coverage, comparing policy details, and checking requirements with official sources.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('guides')}
                className="home-primary-action font-bold py-3 px-8 transition-all"
              >
                Read Our Guides
              </button>
              <button 
                onClick={() => scrollToSection('coverage')}
                className="home-secondary-action font-bold py-3 px-8 transition-all"
              >
                Explore Coverage
              </button>
            </div>
          </div>
          <div className="home-hero-media relative flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1100&h=900&fit=crop" 
              alt="Red car parked beside a mountain road"
              className="home-feature-image w-full max-w-md lg:max-w-full object-cover h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ===== TRUST INDICATORS ===== */}
      <section className="home-proof py-8 px-4 md:px-8 border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-lg md:text-xl font-black text-[#FB923C]">Coverage</div>
            <div className="text-sm text-[#475569] mt-1 font-medium">Common policy terms</div>
          </div>
          <div>
            <div className="text-lg md:text-xl font-black text-[#FB923C]">Requirements</div>
            <div className="text-sm text-[#475569] mt-1 font-medium">Check your state rules</div>
          </div>
          <div>
            <div className="text-lg md:text-xl font-black text-[#FB923C]">Comparisons</div>
            <div className="text-sm text-[#475569] mt-1 font-medium">Review similar options</div>
          </div>
          <div>
            <div className="text-lg md:text-xl font-black text-[#FB923C]">Independent</div>
            <div className="text-sm text-[#475569] mt-1 font-medium">Not an insurance company</div>
          </div>
        </div>
      </section>

      {/* ===== WHY IT MATTERS SECTION ===== */}
      <section className="home-section home-why py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-xs md:text-sm font-semibold tracking-wide uppercase">The essentials</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Why Understanding Auto Insurance Is Important</h2>
            <p className="text-[#475569] max-w-3xl mx-auto leading-relaxed">
              Rules and coverages vary by location and provider. Start with the basics, then check current requirements and policy details with a qualified source.
            </p>
          </div>
          <div className="home-reason-grid grid md:grid-cols-2 gap-5">
            {whyItMatters.map((item) => (
              <div key={item.title} className="home-reason p-6 md:p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3">{item.title}</h3>
                <p className="text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GUIDE CATEGORIES SECTION ===== */}
      <section id="guides" className="home-section home-categories py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-xs md:text-sm font-semibold tracking-wide uppercase">Educational Resources</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Explore Our Guide Categories</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">Browse introductory topics, then confirm location-specific details with official sources.</p>
          </div>
          <div className="home-category-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {guideCategories.map((category, idx) => (
              <div key={idx} className="home-category p-5 text-center transition-all duration-300 group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="font-bold text-[#1E293B] text-sm mb-1">{category.name}</h3>
                <p className="text-xs font-medium">{category.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED GUIDES SECTION ===== */}
      <section className="home-section home-featured py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-xs md:text-sm font-semibold tracking-wide uppercase">Latest Articles</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Featured Insurance Guides</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">A selection of starting points for comparing coverages and understanding common terms.</p>
          </div>
          <div className="home-guide-grid grid md:grid-cols-2 gap-6">
            {featuredGuides.map((guide, idx) => (
              <div key={idx} className="home-guide p-6 md:p-8 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-[#FB923C] uppercase tracking-wider">{guide.category}</span>
                  <span className="text-xs text-[#94A3B8]">•</span>
                  <span className="text-xs text-[#94A3B8]">{guide.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-[#1E293B] mb-3 group-hover:text-[#FB923C] transition-colors">{guide.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-4">{guide.desc}</p>
                <span className="inline-block text-[#FB923C] font-semibold text-sm cursor-pointer hover:underline">Read Full Article →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COVERAGE OPTIONS SECTION ===== */}
      <section id="coverage" className="home-section home-coverage py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-xs md:text-sm font-semibold tracking-wide uppercase">Coverage Types</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">Explore Coverage Options</h2>
            <p className="text-[#475569] max-w-2xl mx-auto">Learn about different types of auto insurance coverage available to you.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Liability Coverage", desc: "Covers damage you cause to others. Required in most states." },
              { title: "Collision Coverage", desc: "Covers damage to your vehicle in an accident, regardless of fault." },
              { title: "Comprehensive Coverage", desc: "Covers theft, weather, vandalism, and other non-collision incidents." },
              { title: "SR-22 Filing", desc: "Required for high-risk drivers in some states. We explain the process." }
            ].map((item) => (
              <div key={item.title} className="home-coverage-item p-6 text-left transition-all">
                <div className="w-12 h-12 bg-[#FB923C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#FB923C] text-xl">✓</span>
                </div>
                <h3 className="text-lg font-bold text-[#1E293B] mb-2">{item.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KEY CONSIDERATIONS SECTION ===== */}
      <section id="considerations" className="home-section home-considerations py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1.5 bg-[#FB923C]/10 rounded-full mb-4">
              <span className="text-[#FB923C] text-xs md:text-sm font-semibold tracking-wide uppercase">Key Considerations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#1E293B] mb-4">What to Consider When Choosing a Policy</h2>
            <p className="text-[#475569] max-w-3xl mx-auto leading-relaxed">
              Every driver's situation is unique. Here are the most important factors to evaluate before committing to any auto insurance policy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyConsiderations.map((item) => (
              <div key={item.title} className="home-consideration p-6 md:p-8 transition-all">
                <h3 className="text-lg font-bold text-[#1E293B] mb-3">{item.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SCROLL TO TOP BUTTON ===== */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-6 right-6 bg-white text-[#1E293B] w-10 h-10 rounded-full shadow-lg hover:bg-[#F3F4F6] transition-colors border border-[#E8E5DF] flex items-center justify-center z-50"
      >
        ↑
      </button>

      {/* ===== CSS STYLES ===== */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;