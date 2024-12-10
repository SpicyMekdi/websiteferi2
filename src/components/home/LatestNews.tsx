import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '../../types';

const news: NewsItem[] = [
  {
    id: '1',
    title: 'BPDP Launches New Palm Oil Replanting Program',
    date: '2024-03-15',
    category: 'Programs',
    image: 'https://images.unsplash.com/photo-1598885511440-218a568f6481?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'New initiative to support smallholder farmers in sustainable palm oil cultivation.'
  },
  {
    id: '2',
    title: 'International Conference on Sustainable Palm Oil',
    date: '2024-03-10',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Global experts gather to discuss the future of sustainable palm oil industry.'
  },
  {
    id: '3',
    title: 'Research Grant Awards for Palm Oil Innovation',
    date: '2024-03-05',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'BPDP awards research grants to promote innovation in palm oil industry.'
  }
];

export default function LatestNews() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest News & Events</h2>
          <a
            href="/news"
            className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
          >
            View all news
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <div className="flex items-center ml-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <a
                  href={`/news/${item.id}`}
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                >
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}