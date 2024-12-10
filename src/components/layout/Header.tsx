import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { NavItem } from '../../types';

const navigation: NavItem[] = [
  {
    title: 'About Us',
    href: '/about',
    submenu: [
      { title: 'Overview', href: '/about/overview' },
      { title: 'Vision & Mission', href: '/about/vision-mission' },
      { title: 'Organization Structure', href: '/about/organization' },
      { title: 'Annual Report', href: '/about/annual-report' },
    ],
  },
  {
    title: 'Programs',
    href: '/programs',
    submenu: [
      { title: 'Palm Oil Replanting', href: '/programs/replanting' },
      { title: 'Infrastructure Development', href: '/programs/infrastructure' },
      { title: 'Research & Development', href: '/programs/research' },
      { title: 'Human Resources', href: '/programs/hr' },
      { title: 'Promotion', href: '/programs/promotion' },
      { title: 'Biofuel Development', href: '/programs/biofuel' },
    ],
  },
  { title: 'News & Events', href: '/news' },
  { title: 'Public Information', href: '/information' },
  { title: 'Career', href: '/career' },
  { title: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-green-600" />
            <span className="text-xl font-bold text-gray-800">BPDP</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.title)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center text-gray-600 hover:text-green-600"
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.submenu && activeSubmenu === item.title && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        to={subitem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50"
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-green-600">
              EN | ID
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4">
            {navigation.map((item) => (
              <div key={item.title}>
                <Link
                  to={item.href}
                  className="block py-2 text-gray-600 hover:text-green-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="pl-4">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.title}
                        to={subitem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-green-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}