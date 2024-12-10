import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1598885511440-218a568f6481?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sustainable Palm Oil Management for Indonesia's Future
          </h1>
          <p className="text-xl mb-8">
            Supporting the development of sustainable palm oil industry through funding, research, and innovation.
          </p>
          <div className="flex space-x-4">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg transition-colors">
              Our Programs
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}