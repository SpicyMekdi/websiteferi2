import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">BPDP</span>
            </div>
            <p className="text-gray-400 mb-6">
              Palm Oil Fund Management Organization under the Ministry of Finance of the Republic of Indonesia
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">News & Events</Link></li>
              <li><Link to="/information" className="text-gray-400 hover:text-white">Public Information</Link></li>
              <li><Link to="/career" className="text-gray-400 hover:text-white">Career</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><Link to="/programs/replanting" className="text-gray-400 hover:text-white">Palm Oil Replanting</Link></li>
              <li><Link to="/programs/infrastructure" className="text-gray-400 hover:text-white">Infrastructure Development</Link></li>
              <li><Link to="/programs/research" className="text-gray-400 hover:text-white">Research & Development</Link></li>
              <li><Link to="/programs/hr" className="text-gray-400 hover:text-white">Human Resources</Link></li>
              <li><Link to="/programs/biofuel" className="text-gray-400 hover:text-white">Biofuel Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Gedung Graha Mandiri Lt. 5, Jl. Imam Bonjol No.61, Jakarta Pusat 10310</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">+62 21 3900 459</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-400">info@bpdp.or.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} BPDP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}