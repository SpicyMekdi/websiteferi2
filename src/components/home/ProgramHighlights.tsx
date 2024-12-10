import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Building, BookOpen, Users, Megaphone, Droplet, ArrowRight } from 'lucide-react';
import { Program } from '../../types';

const programs: Program[] = [
  {
    title: 'Palm Oil Replanting',
    description: 'Supporting smallholder farmers in replanting their palm oil plantations.',
    icon: 'Sprout',
    link: '/programs/replanting'
  },
  {
    title: 'Infrastructure Development',
    description: 'Developing essential infrastructure for palm oil industry.',
    icon: 'Building',
    link: '/programs/infrastructure'
  },
  {
    title: 'Research & Development',
    description: 'Advancing palm oil research and innovation.',
    icon: 'BookOpen',
    link: '/programs/research'
  },
  {
    title: 'Human Resources',
    description: 'Developing competent human resources in palm oil sector.',
    icon: 'Users',
    link: '/programs/hr'
  },
  {
    title: 'Promotion',
    description: 'Promoting Indonesian palm oil products globally.',
    icon: 'Megaphone',
    link: '/programs/promotion'
  },
  {
    title: 'Biofuel Development',
    description: 'Supporting renewable energy from palm oil.',
    icon: 'Droplet',
    link: '/programs/biofuel'
  }
];

const iconComponents = {
  Sprout,
  Building,
  BookOpen,
  Users,
  Megaphone,
  Droplet
};

export default function ProgramHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive programs designed to support and develop the sustainable palm oil industry in Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = iconComponents[program.icon as keyof typeof iconComponents];
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <a
                  href={program.link}
                  className="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}