import React from 'react';
import { Clock, Phone, Mail, MapPin, Bike } from 'lucide-react';
import { businessInfo } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Bike className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">MOTOP</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professionele rij-instructie voor motor en auto in Eindhoven. 
              Duidelijk en LEUK rijonderwijs.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{businessInfo.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{businessInfo.contact.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {businessInfo.location.city}, {businessInfo.location.region}
                </span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Openingstijden</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm">
                  <p>{businessInfo.hours.weekdays}</p>
                  <p className="mt-1">{businessInfo.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Links</h3>
            <div className="space-y-3">
              <a href="/motor-lessons" className="block text-gray-300 text-sm hover:text-yellow-500 transition-colors">
                Motor Lessen
              </a>
              <a href="/auto-lessons" className="block text-gray-300 text-sm hover:text-yellow-500 transition-colors">
                Auto Lessen
              </a>
              <a href="/contact" className="block text-gray-300 text-sm hover:text-yellow-500 transition-colors">
                Contact
              </a>
              <a href="/signup" className="block text-gray-300 text-sm hover:text-yellow-500 transition-colors">
                Inschrijven
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {businessInfo.name}. Alle rechten voorbehouden.
            </div>
            <div className="flex space-x-6">
              <a href="/legal" className="text-gray-400 text-sm hover:text-yellow-500 transition-colors">
                Privacybeleid
              </a>
              <a href="/legal" className="text-gray-400 text-sm hover:text-yellow-500 transition-colors">
                Algemene Voorwaarden
              </a>
              <a href="/legal" className="text-gray-400 text-sm hover:text-yellow-500 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;