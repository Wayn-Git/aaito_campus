import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Globe, Users } from 'lucide-react';
import { mockData } from '../mock';

export const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/80 rounded-full border border-blue-200 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-700">Empowering Rural Education</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="block">{mockData.hero.title}</span>
                <span className="text-blue-600 block text-2xl lg:text-3xl font-semibold mt-2">
                  {mockData.hero.subtitle}
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                {mockData.hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('#programs')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                >
                  {mockData.hero.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('#about')}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  {mockData.hero.secondaryCtaText}
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
                {mockData.about.stats.slice(0, 3).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Elements */}
            <div className="relative lg:pl-8">
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Reach</h3>
                    <p className="text-gray-600 text-sm">25+ Countries Served</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  "AAItoai transformed our community's understanding of technology. Now our farmers use AI to optimize crops!"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Maria Santos</p>
                    <p className="text-gray-600 text-sm">Rural Educator, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};