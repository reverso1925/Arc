import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Users, Zap, MessageSquare, Trophy } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Tech Discussions',
    description: 'Dive deep into programming, AI, web development, and emerging technologies with fellow enthusiasts.'
  },
  {
    icon: Palette,
    title: 'Creative Showcase',
    description: 'Share your art, designs, music, and creative projects. Get feedback and inspiration from the community.'
  },
  {
    icon: Users,
    title: 'Active Community',
    description: 'Connect with like-minded individuals from around the world in our welcoming, inclusive environment.'
  },
  {
    icon: Zap,
    title: 'Events & Challenges',
    description: 'Participate in coding challenges, creative competitions, and community events that push your skills.'
  },
  {
    icon: MessageSquare,
    title: 'Real-time Chat',
    description: 'Engage in lively discussions, get help with projects, or just hang out in our active voice and text channels.'
  },
  {
    icon: Trophy,
    title: 'Growth & Learning',
    description: 'Access resources, tutorials, and mentorship opportunities to level up your skills and knowledge.'
  }
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className='py-24 px-4'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>Why Join Arc?</h2>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8'></div>
          <p className='text-slate-400 text-lg max-w-2xl mx-auto'>
            Discover what makes our community the perfect place for tech enthusiasts, creators, and digital explorers
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group relative p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10'
              >
                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl'></div>
                
                <div className='relative z-10'>
                  <div className='w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300'>
                    <Icon className='w-6 h-6 text-purple-400' />
                  </div>
                  
                  <h3 className='text-xl font-semibold mb-3 text-white'>{feature.title}</h3>
                  <p className='text-slate-400 leading-relaxed'>{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
