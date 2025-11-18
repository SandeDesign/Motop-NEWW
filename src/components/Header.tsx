import React, { memo, useState } from 'react';
import { Menu, X, Bike } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
}

const Header: React.FC<HeaderProps> = memo(({ currentPage = 'home' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'Motor', href: '/motor-lessons', id: 'motor-lessons' },
    { name: 'Auto', href: '/auto-lessons', id: 'auto-lessons' },
    { name: 'Contact', href: '/contact', id: 'contact' }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Bike className="h-8 w-8 text-yellow-500" />
            <span className="text-2xl font-bold text-black">MOTOP</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-black bg-yellow-100'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="/signup"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm md:text-base"
            >
              INSCHRIJVEN
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 px-4 animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-base font-medium px-4 py-3 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'text-black bg-yellow-100'
                      : 'text-gray-700 hover:text-black hover:bg-gray-100'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;