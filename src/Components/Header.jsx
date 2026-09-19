import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    { title: 'Home', link: '/', hasDropdown: false },
    { title: 'About Us', link: '/about-us', hasDropdown: false },
    { title: 'Services', link: '/services', hasDropdown: false },
    { title: 'Contact', link: '/contact', hasDropdown: false },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header className={`w-full transition-all duration-300 bg-[#F5F5F0] ${
        isScrolled ? 'fixed top-0 shadow-[0_4px_20px_rgba(30,41,59,0.08)] z-50 border-b border-[#E8E5DF]' : 'border-b border-[#E8E5DF]'
      }`}>
        
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <span className="text-[#1E293B] text-2xl md:text-3xl font-black tracking-tight">
                Artist<span className="text-[#FB923C] group-hover:text-[#F97316] transition">Media</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center px-4 py-2 text-sm font-medium text-[#475569] hover:text-[#FB923C] transition rounded-lg hover:bg-[#FB923C]/5"
                      >
                        {item.title}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute left-0 mt-2 w-56 bg-[#FAFAF8] border border-[#E8E5DF] shadow-[0_10px_30px_-10px_rgba(30,41,59,0.12)] rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {item.dropdownItems && item.dropdownItems.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={dropdownItem.link}
                            className="block px-4 py-2.5 text-sm text-[#475569] hover:bg-[#F5F5F0] hover:text-[#FB923C] transition mx-1 rounded-lg"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      className={`px-4 py-2 text-sm font-medium transition rounded-lg ${
                        isActive(item.link) 
                          ? 'text-[#FB923C] bg-[#FB923C]/10' 
                          : 'text-[#475569] hover:text-[#FB923C] hover:bg-[#FB923C]/5'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:+18484671057" 
                className="flex items-center space-x-2 text-[#1E293B] hover:text-[#FB923C] transition group"
              >
                <div className="w-9 h-9 bg-[#FB923C]/10 rounded-full flex items-center justify-center group-hover:bg-[#FB923C] transition">
                  <svg className="w-4 h-4 text-[#FB923C] group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold text-sm">848-467-1057</span>
              </a>

              <span className="w-px h-6 bg-[#E8E5DF]"></span>

              {/* Facebook - Orange */}
              <a 
                href="https://www.facebook.com/share/1LDuTEw6J2/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 bg-[#FB923C] rounded-full flex items-center justify-center hover:bg-[#F97316] transition hover:scale-105 shadow-sm hover:shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <span className="w-px h-6 bg-[#E8E5DF]"></span>

              <a 
                href="tel:+18484671057" 
                className="bg-[#FB923C] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#F97316] transition hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1E293B] hover:text-[#FB923C] hover:bg-[#FB923C]/5 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-[#FAFAF8] border-t border-[#E8E5DF] px-4 pb-4 shadow-[0_10px_30px_-10px_rgba(30,41,59,0.08)]">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-[#E8E5DF] last:border-0">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full py-3 px-2 text-[#1E293B] hover:text-[#FB923C] transition"
                    >
                      <span className="font-medium">{item.title}</span>
                      <svg className={`w-4 h-4 transform transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === index && (
                      <div className="bg-[#F5F5F0] py-2 pl-4 rounded-lg mb-2">
                        {item.dropdownItems && item.dropdownItems.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={dropdownItem.link}
                            className="block py-2 px-2 text-sm text-[#475569] hover:text-[#FB923C] transition"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.link}
                    className={`block py-3 px-2 transition font-medium ${
                      isActive(item.link) 
                        ? 'text-[#FB923C]' 
                        : 'text-[#1E293B] hover:text-[#FB923C]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="mt-4 pt-4 border-t border-[#E8E5DF] space-y-3">
              <a 
                  href="tel:+18484671057" 
                  className="flex items-center gap-3 text-[#1E293B] hover:text-[#FB923C] transition"
                >
                <div className="w-10 h-10 bg-[#FB923C]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold">848-467-1057</span>
              </a>

              <div className="flex items-center gap-3">
                <a 
                  href="https://www.facebook.com/share/1LDuTEw6J2/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-[#FB923C] rounded-full flex items-center justify-center hover:bg-[#F97316] transition"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                <a 
                  href="tel:+18484671057" 
                  className="flex-1 bg-[#FB923C] text-white px-4 py-3 rounded-full font-bold text-center hover:bg-[#F97316] transition shadow-md hover:shadow-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {isScrolled && <div className="h-16 md:h-20"></div>}
    </>
  );
};

export default Header;