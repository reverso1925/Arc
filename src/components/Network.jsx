import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Users2 } from 'lucide-react';

const Network = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className='py-20 px-4 border-t border-zinc-900 bg-black'>
      <div className='max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <div className='flex items-center justify-center gap-2 mb-6 text-slate-500'>
            <Globe className='w-5 h-5' />
            <span className='uppercase tracking-widest text-sm font-bold font-mono'>ARC_NETWORK</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-bold mb-8 text-white text-glow'>CONSTRUINDO PONTES DIGITAIS</h2>
          
          <div className='flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500'>
             <div className='flex items-center gap-2 text-slate-300 font-bold text-xl font-mono border border-zinc-800 px-4 py-2 bg-zinc-950'>
                <Users2 className='w-6 h-6' /> [Parceiro_01]
             </div>
             <div className='flex items-center gap-2 text-slate-300 font-bold text-xl font-mono border border-zinc-800 px-4 py-2 bg-zinc-950'>
                <Users2 className='w-6 h-6' /> [Studio_X]
             </div>
             <div className='flex items-center gap-2 text-slate-300 font-bold text-xl font-mono border border-zinc-800 px-4 py-2 bg-zinc-950'>
                <Users2 className='w-6 h-6' /> [Tech_Hub]
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Network;
