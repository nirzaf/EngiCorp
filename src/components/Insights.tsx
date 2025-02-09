import React from 'react';
import { Calendar, User, ArrowRight, BookOpen, Newspaper, Video } from 'lucide-react';

const insights = [
  {
    type: 'Article',
    icon: BookOpen,
    title: 'The Future of Sustainable Engineering',
    excerpt: 'Exploring innovative approaches to sustainable engineering and their impact on urban development.',
    author: 'Dr. Sarah Chen',
    date: 'Mar 15, 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80'
  },
  {
    type: 'News',
    icon: Newspaper,
    title: 'EngiCorp Wins Innovation Award',
    excerpt: "Our team's groundbreaking work in renewable energy systems receives international recognition.",
    author: 'James Wilson',
    date: 'Mar 10, 2024',
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80'
  },
  {
    type: 'Video',
    icon: Video,
    title: 'Digital Twin Technology Explained',
    excerpt: 'A comprehensive guide to implementing digital twin technology in industrial applications.',
    author: 'Michael Roberts',
    date: 'Mar 5, 2024',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80'
  }
];

const categories = [
  'Engineering Trends',
  'Sustainability',
  'Innovation',
  'Technology',
  'Case Studies',
  'Industry News'
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Engineering Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest thoughts on engineering innovation, industry trends, and technical insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-48">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/90 text-blue-600 backdrop-blur-sm">
                    <insight.icon className="w-4 h-4 mr-1" />
                    {insight.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {insight.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-4">{insight.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{insight.date}</span>
                </div>
                <button className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors flex items-center">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-white rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Browse by Category
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Updated with Engineering Insights
            </h3>
            <p className="mb-6 text-blue-100">
              Subscribe to our newsletter for the latest engineering news, insights, and innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;