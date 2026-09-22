import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Icon = ({ name, className = 'w-5 h-5' }) => {
  const icons = {
    phone: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    email: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    facebook: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  };
  return icons[name] || null;
};

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleGetFreeQuote = () => {
    navigate('/lead-capture');
  };

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/share/1LDuTEw6J2/', icon: 'facebook' },
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
    { name: 'Services', url: '/services' },
    { name: 'Contact Us', url: '/contact' },
  ];

  const autoInsuranceLinks = [
    { name: 'Auto Insurance Quotes', url: '/#auto-insurance-quotes' },
    { name: 'Car Insurance Rates', url: '/#car-insurance-rates' },
    { name: 'Cheap Auto Insurance', url: '/#cheap-auto-insurance' },
    { name: 'Insurance Coverage', url: '/#insurance-coverage' }
  ];

  return (
    <footer className="bg-[#1E293B] text-[#94A3B8] border-t border-[#2A3A4A]">
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Column */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-black tracking-tight">
              Artist<span className="text-[#FB923C]">Media</span>
            </h3>
            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-xs">
              #1 Media Solution for high-intent traffic, form fills, and call generation. 
              We deliver results you can count on with surgical precision and strict compliance standards.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#FB923C] rounded-full flex items-center justify-center text-white hover:bg-[#F97316] transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="text-sm text-[#94A3B8] hover:text-[#FB923C] transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#FB923C] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Auto Insurance</h4>
            <div className="grid grid-cols-1 gap-2">
              {autoInsuranceLinks.map((link) => (
                <Link key={link.name} to={link.url} className="text-sm text-[#94A3B8] hover:text-[#FB923C] transition-colors duration-300 flex items-center">
                  <span className="w-1 h-1 bg-[#FB923C]/30 rounded-full mr-2"></span>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info Column */}
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-center space-x-3 group">
                <div className="w-9 h-9 bg-[#FB923C]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FB923C] transition">
                  <Icon name="phone" className="w-4 h-4 text-[#FB923C] group-hover:text-white transition" />
                </div>
                <div className="text-sm text-[#94A3B8]">
                  <span className="block">+18484671057</span>
                  <a href="tel:+18484671057" className="text-[#FB923C] hover:text-white transition-colors">
                    Call +18484671057
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3 group">
                <div className="w-9 h-9 bg-[#FB923C]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#FB923C] transition">
                  <Icon name="email" className="w-4 h-4 text-[#FB923C] group-hover:text-white transition" />
                </div>
                <a href="mailto:artistmedia.digital@gmail.com" className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                  artistmedia.digital@gmail.com
                </a>
              </li>
            </ul>
            
            {/* CTA Button */}
            <div className="mt-6">
              <button
                onClick={handleGetFreeQuote}
                className="bg-[#FB923C] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#F97316] transition-all duration-300 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              >
                Get Started Today →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2A3A4A]">
        <div className="container mx-auto px-4 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#64748B]">
            <p className="text-center md:text-left">
              &copy; {currentYear} <span className="text-white font-semibold">Artist Media</span>. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <a href="/privacy-policy" className="hover:text-[#FB923C] transition-colors">Privacy Policy</a>
              <span className="text-[#2A3A4A]">|</span>
              <a href="/terms-of-service" className="hover:text-[#FB923C] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 