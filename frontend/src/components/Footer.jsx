import React from 'react';
import { Heart, Mail, Phone, MapPin, BookOpen, Users, MessageCircle, Award } from 'lucide-react';
import { mockData } from '../mock';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">{mockData.navigation.logo}</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                {mockData.footer.description}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">{mockData.contact.email}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400 mt-0.5" />
                  <span className="text-sm">{mockData.contact.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {mockData.footer.quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Resources</h3>
              <ul className="space-y-3">
                {mockData.footer.resources.map((resource, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(resource.href)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      {resource.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {mockData.about.stats.map((stat, index) => {
                const icons = [Award, BookOpen, Users, MapPin];
                const Icon = icons[index];
                
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <div className="flex items-center mb-4 md:mb-0">
                <span>© {currentYear} AAItoai. Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500" />
                <span>for rural communities worldwide.</span>
              </div>
              
              <div className="flex items-center space-x-6">
                {mockData.contact.socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {social.platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};