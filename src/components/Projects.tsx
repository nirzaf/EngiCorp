import React from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Sustainable Urban Development',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80',
    description: 'Award-winning sustainable urban development project incorporating green infrastructure and smart city technologies.',
    stats: {
      'Project Value': '$250M',
      'Completion': '2024',
      'Sustainability': 'LEED Platinum'
    }
  },
  {
    title: 'Advanced Manufacturing Facility',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
    description: 'State-of-the-art manufacturing facility optimized for Industry 4.0 integration and maximum efficiency.',
    stats: {
      'Project Value': '$180M',
      'Completion': '2023',
      'Size': '500,000 sq ft'
    }
  },
  {
    title: 'Renewable Energy Complex',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80',
    description: 'Innovative renewable energy complex combining solar, wind, and energy storage technologies.',
    stats: {
      'Project Value': '$320M',
      'Completion': '2024',
      'Capacity': '250MW'
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of innovative engineering solutions that have transformed industries and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-sm font-medium text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value], idx) => (
                    <div key={idx}>
                      <p className="text-sm text-gray-500">{key}</p>
                      <p className="font-semibold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>
                <button className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center">
                  View Project Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium group">
            View All Projects
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;