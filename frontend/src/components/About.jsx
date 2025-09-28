import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Heart, Target, Users, Lightbulb, Award, Globe, BookOpen, TrendingUp } from 'lucide-react';
import { mockData } from '../mock';

export const About = () => {
  const iconMap = {
    0: Heart,
    1: Users,
    2: Lightbulb,
    3: TrendingUp
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {mockData.about.title}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {mockData.about.mission}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {mockData.about.vision}
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {mockData.about.stats.map((stat, index) => {
              const icons = [Award, Globe, BookOpen, Users];
              const Icon = icons[index];
              
              return (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-lg text-gray-600">
                The principles that guide our mission to democratize AI education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockData.about.values.map((value, index) => {
                const Icon = iconMap[index] || Target;
                
                return (
                  <Card key={value.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-teal-50">
                    <CardHeader className="pb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Programs Preview */}
          <div id="programs" className="bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive AI education programs designed specifically for rural and underserved communities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {mockData.programs.map((program) => (
                <Card key={program.id} className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900 mb-2">
                      {program.title}
                    </CardTitle>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};