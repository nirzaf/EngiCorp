import React from 'react';
import { Users, Target, Award, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '25+' },
  { label: 'Completed Projects', value: '500+' },
  { label: 'Expert Engineers', value: '150+' },
  { label: 'Industry Awards', value: '40+' }
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'We pursue excellence in every project, delivering innovative solutions that exceed expectations.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in the power of collaboration, working closely with clients to achieve shared goals.'
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We maintain the highest standards of professional integrity and ethical conduct.'
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We embrace innovation and creative thinking to solve complex engineering challenges.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Engineering Excellence Since 2000
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate engineers and innovators dedicated to solving the world's most complex engineering challenges.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To deliver innovative and sustainable engineering solutions that transform industries, improve communities, and shape a better future for generations to come.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the global leader in engineering innovation, recognized for our commitment to excellence, sustainability, and positive impact on society.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Image */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
            alt="Our Team"
            className="w-full h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Our Team</h3>
              <p className="max-w-2xl">
                A diverse team of experienced engineers, innovators, and problem-solvers committed to delivering excellence in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;