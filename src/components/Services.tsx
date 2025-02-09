import React from 'react';
import { 
  Lightbulb, 
  Building2, 
  Factory, 
  Leaf, 
  Shield, 
  Cpu,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: 'Innovation Consulting',
    description: 'Transform your engineering challenges into opportunities with our strategic innovation consulting services.',
    details: ['R&D Strategy', 'Technology Roadmapping', 'Innovation Workshops']
  },
  {
    icon: Building2,
    title: 'Structural Engineering',
    description: 'Comprehensive structural analysis and design solutions for complex architectural projects.',
    details: ['Structural Analysis', 'Seismic Design', 'Building Information Modeling']
  },
  {
    icon: Factory,
    title: 'Industrial Engineering',
    description: 'Optimize your manufacturing processes and improve operational efficiency.',
    details: ['Process Optimization', 'Facility Planning', 'Quality Control Systems']
  },
  {
    icon: Leaf,
    title: 'Sustainable Engineering',
    description: 'Develop eco-friendly solutions that reduce environmental impact while maintaining performance.',
    details: ['Green Building Design', 'Energy Efficiency', 'Sustainable Materials']
  },
  {
    icon: Shield,
    title: 'Safety Engineering',
    description: 'Ensure compliance and safety with our comprehensive risk assessment and management services.',
    details: ['Risk Assessment', 'Safety Audits', 'Compliance Management']
  },
  {
    icon: Cpu,
    title: 'Digital Engineering',
    description: 'Leverage digital technologies to transform your engineering processes and capabilities.',
    details: ['Digital Twin Development', 'IoT Integration', 'Smart Systems Design']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Engineering Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions tailored to meet the complex challenges of modern industry and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <ArrowRight className="w-4 h-4 text-blue-600 mr-2" />
                    {detail}
                  </li>
                ))}
              </ul>
              <button className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;