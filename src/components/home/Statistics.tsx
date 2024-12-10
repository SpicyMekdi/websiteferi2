import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Statistic } from '../../types';

const statistics: Statistic[] = [
  {
    value: 500000,
    label: 'Hectares Replanted',
    suffix: '+'
  },
  {
    value: 25000,
    label: 'Farmers Supported',
    suffix: '+'
  },
  {
    value: 1000,
    label: 'Research Projects',
    suffix: '+'
  },
  {
    value: 15,
    label: 'Billion USD Export Value',
    prefix: '$'
  }
];

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-green-600">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl font-bold mb-2">
                {stat.prefix}
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                  />
                )}
                {stat.suffix}
              </div>
              <p className="text-green-100">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}