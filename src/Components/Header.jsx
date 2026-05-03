import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [fbError, setFbError] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle dropdown toggles
  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    { title: 'Home', link: '/', hasDropdown: false },
    { title: 'About Us', link: '/about-us', hasDropdown: false },
    { title: 'Services', link: '/services', hasDropdown: false },
    { title: 'Contact', link: '/contact', hasDropdown: false },
  ];

  // Helper to check if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Main Header */}
      <header className={`w-full transition-all duration-300 bg-black ${
        isScrolled ? 'fixed top-0 shadow-md z-50' : ''
      }`}>
        {/* Logo and Main Navigation */}
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Company Logo */}
            <Link to="/" className="flex-shrink-0">
              <span className="text-white text-2xl font-bold tracking-tight">
                Artist<span className="text-[#00BCA2]">Media</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-[#00BCA2] transition"
                      >
                        {item.title}
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 mt-2 w-56 bg-black border border-gray-800 shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        {item.dropdownItems && item.dropdownItems.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={dropdownItem.link}
                            className="block px-4 py-2 text-sm text-white hover:bg-gray-900 hover:text-[#00BCA2] transition"
                          >
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.link}
                      className={`px-3 py-2 text-sm font-medium transition ${
                        isActive(item.link) 
                          ? 'text-[#00BCA2] border-b-2 border-[#00BCA2]' 
                          : 'text-white hover:text-[#00BCA2]'
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:text-[#00BCA2] hover:bg-gray-900"
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
        </nav>

        {/* Social Media Icons and Call Button */}
        <div className="border-t border-gray-800 py-2 px-4 hidden lg:block">
          <div className="container mx-auto">
            <div className="flex justify-end items-center space-x-4">
              {/* Facebook Icon - With Fallback */}
              <a href="https://www.facebook.com/share/1LDuTEw6J2/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                {!fbError ? (
                  <img 
                    src="/facebook-icon.png" 
                    alt="Facebook" 
                    className="w-8 h-8"
                    onError={() => setFbError(true)}
                  />
                ) : (
                  <span className="text-white text-sm bg-[#1877F2] w-8 h-8 rounded-full flex items-center justify-center">f</span>
                )}
              </a>
              
              {/* Call Button */}
              <a href="tel:+13135817026" className="flex items-center space-x-2 bg-[#007C62] px-4 py-2 rounded-lg hover:bg-[#006b53] transition">
                <svg width="20" height="20" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_159_82)">
                    <path d="M15.5609 0H17.6853C17.7739 0.0256091 17.8641 0.0452239 17.9553 0.0587113C19.6814 0.183962 21.3528 0.56676 22.9193 1.294C28.6587 3.95557 31.9177 8.43094 32.5554 14.7506C32.8019 17.1821 32.4248 19.5469 31.5273 21.8163C28.7831 28.7505 21.8489 32.8321 14.4474 31.8567C11.7923 31.5193 9.27181 30.4921 7.1368 28.8773C3.63028 26.2434 1.52256 22.7568 0.813642 18.4173C0.740872 17.9672 0.690011 17.5132 0.629761 17.0615V14.9377C0.678274 14.5463 0.720528 14.1549 0.777648 13.7674C1.16341 11.1285 2.11255 8.71197 3.70566 6.57018C6.34103 3.02715 9.84338 0.898152 14.2127 0.183179C14.6579 0.110377 15.1102 0.0602769 15.5609 0ZM12.4764 14.9518L13.7651 14.3256C14.5155 13.9631 14.7041 13.4778 14.3535 12.7302C13.6782 11.2836 13.3235 9.70808 13.3136 8.11155C13.3074 7.40702 12.9044 7.00543 12.2057 7.00152C11.0502 6.99682 9.8945 6.99682 8.73853 7.00152C8.02882 7.00152 7.59924 7.43207 7.63367 8.1413C7.67358 8.95151 7.70566 9.76721 7.82851 10.568C8.27452 13.4605 9.36998 16.0924 11.1931 18.386C14.582 22.65 19.0179 24.8474 24.4654 25.0008C25.1955 25.0212 25.6165 24.6055 25.6188 23.8751C25.6188 22.7189 25.6243 21.5627 25.6188 20.4073C25.6149 19.7278 25.2041 19.3207 24.5233 19.3113C22.9174 19.3011 21.3328 18.9427 19.8786 18.2608C19.1517 17.9218 18.6603 18.1113 18.3043 18.844C18.0961 19.2714 17.8888 19.6996 17.672 20.1442C15.513 18.9001 13.7207 17.1075 12.4764 14.9479V14.9518Z" fill="white"/>
                    <path d="M12.4764 14.9479C13.7202 17.1087 15.5126 18.9024 17.672 20.1474C17.8887 19.7028 18.0961 19.2746 18.3042 18.8472C18.6603 18.1144 19.1517 17.925 19.8786 18.264C21.333 18.9448 22.9176 19.3021 24.5233 19.3114C25.2025 19.3176 25.6133 19.7247 25.6188 20.4073C25.6258 21.5628 25.6235 22.719 25.6188 23.8752C25.6188 24.6056 25.1955 25.0212 24.4654 25.0009C19.0202 24.8443 14.582 22.6524 11.1931 18.3861C9.36996 16.0924 8.2745 13.4606 7.82849 10.5681C7.70564 9.76883 7.672 8.95313 7.63366 8.14135C7.59923 7.43212 8.02489 7.00548 8.73851 7.00157C9.89448 6.99687 11.0502 6.99687 12.2056 7.00157C12.9044 7.00157 13.3074 7.4102 13.3136 8.1116C13.3235 9.70813 13.6782 11.2837 14.3535 12.7302C14.7009 13.4778 14.5155 13.9632 13.7651 14.3256L12.4764 14.9479Z" fill="#00BCA2"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_159_82">
                      <rect width="32" height="32" fill="white" transform="translate(0.629761)"/>
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-white font-medium">(152) 34567893</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800 px-4 pb-4">
            {menuItems.map((item, index) => (
              <div key={index} className="border-b border-gray-800 last:border-0">
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between w-full py-3 px-2 text-white hover:text-[#00BCA2]"
                    >
                      <span>{item.title}</span>
                      <svg className={`w-4 h-4 transform transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === index && (
                      <div className="bg-gray-900 py-2 pl-4">
                        {item.dropdownItems && item.dropdownItems.map((dropdownItem, idx) => (
                          <Link
                            key={idx}
                            to={dropdownItem.link}
                            className="block py-2 px-2 text-sm text-gray-300 hover:text-[#00BCA2]"
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
                    className={`block py-3 px-2 transition ${
                      isActive(item.link) 
                        ? 'text-[#00BCA2] font-medium' 
                        : 'text-white hover:text-[#00BCA2]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-gray-800">
              <a href="https://www.facebook.com/share/1LDuTEw6J2/" target="_blank" rel="noopener noreferrer" className="p-2 hover:opacity-80 transition">
                <img 
                  src="/facebook-icon.png" 
                  alt="Facebook" 
                  className="w-8 h-8"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </a>
            </div>
            
            {/* Mobile Call Button */}
            <a href="tel:+13135817026" className="flex items-center justify-center space-x-2 mt-4 bg-[#007C62] text-white px-4 py-3 rounded-lg hover:bg-[#006b53] transition">
              <svg width="20" height="20" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5609 0H17.6853C17.7739 0.0256091 17.8641 0.0452239 17.9553 0.0587113C19.6814 0.183962 21.3528 0.56676 22.9193 1.294C28.6587 3.95557 31.9177 8.43094 32.5554 14.7506C32.8019 17.1821 32.4248 19.5469 31.5273 21.8163C28.7831 28.7505 21.8489 32.8321 14.4474 31.8567C11.7923 31.5193 9.27181 30.4921 7.1368 28.8773C3.63028 26.2434 1.52256 22.7568 0.813642 18.4173C0.740872 17.9672 0.690011 17.5132 0.629761 17.0615V14.9377C0.678274 14.5463 0.720528 14.1549 0.777648 13.7674C1.16341 11.1285 2.11255 8.71197 3.70566 6.57018C6.34103 3.02715 9.84338 0.898152 14.2127 0.183179C14.6579 0.110377 15.1102 0.0602769 15.5609 0ZM12.4764 14.9518L13.7651 14.3256C14.5155 13.9631 14.7041 13.4778 14.3535 12.7302C13.6782 11.2836 13.3235 9.70808 13.3136 8.11155C13.3074 7.40702 12.9044 7.00543 12.2057 7.00152C11.0502 6.99682 9.8945 6.99682 8.73853 7.00152C8.02882 7.00152 7.59924 7.43207 7.63367 8.1413C7.67358 8.95151 7.70566 9.76721 7.82851 10.568C8.27452 13.4605 9.36998 16.0924 11.1931 18.386C14.582 22.65 19.0179 24.8474 24.4654 25.0008C25.1955 25.0212 25.6165 24.6055 25.6188 23.8751C25.6188 22.7189 25.6243 21.5627 25.6188 20.4073C25.6149 19.7278 25.2041 19.3207 24.5233 19.3113C22.9174 19.3011 21.3328 18.9427 19.8786 18.2608C19.1517 17.9218 18.6603 18.1113 18.3043 18.844C18.0961 19.2714 17.8888 19.6996 17.672 20.1442C15.513 18.9001 13.7207 17.1075 12.4764 14.9479V14.9518Z" fill="white"/>
                <path d="M12.4764 14.9479C13.7202 17.1087 15.5126 18.9024 17.672 20.1474C17.8887 19.7028 18.0961 19.2746 18.3042 18.8472C18.6603 18.1144 19.1517 17.925 19.8786 18.264C21.333 18.9448 22.9176 19.3021 24.5233 19.3114C25.2025 19.3176 25.6133 19.7247 25.6188 20.4073C25.6258 21.5628 25.6235 22.719 25.6188 23.8752C25.6188 24.6056 25.1955 25.0212 24.4654 25.0009C19.0202 24.8443 14.582 22.6524 11.1931 18.3861C9.36996 16.0924 8.2745 13.4606 7.82849 10.5681C7.70564 9.76883 7.672 8.95313 7.63366 8.14135C7.59923 7.43212 8.02489 7.00548 8.73851 7.00157C9.89448 6.99687 11.0502 6.99687 12.2056 7.00157C12.9044 7.00157 13.3074 7.4102 13.3136 8.1116C13.3235 9.70813 13.6782 11.2837 14.3535 12.7302C14.7009 13.4778 14.5155 13.9632 13.7651 14.3256L12.4764 14.9479Z" fill="#00BCA2"/>
              </svg>
              <span>(313) 581-7026</span>
            </a>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      {isScrolled && <div className="h-32 lg:h-40"></div>}
    </>
  );
};

export default Header;