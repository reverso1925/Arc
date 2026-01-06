import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-black'>
      {/* Grid Background Effect */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(50,50,50,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,50,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30'></div>
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black'></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center'
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='inline-flex items-center gap-2 mb-12 px-4 py-2 bg-purple-900/20 border-2 border-purple-500 text-purple-400 font-bold uppercase tracking-wider text-xs'
        >
          <Terminal className='w-4 h-4' />
          <span>Sistema Iniciado</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12 relative group flex flex-col items-center justify-center"
        >
            <div className="absolute inset-0 bg-purple-500 opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-500 rounded-full"></div>
            
            <h1 className="text-[6rem] sm:text-[9rem] md:text-[13rem] leading-[0.8] font-bold text-white relative z-10 select-none tracking-tighter"
                style={{
                  textShadow: '0 0 30px rgba(255,255,255,0.3), 0 0 60px rgba(168,85,247,0.3)'
                }}
            >
              Arc
            </h1>
            
            <div className="mt-2 md:mt-4 text-sm md:text-xl font-bold tracking-[0.6em] md:tracking-[0.8em] text-white/80 uppercase relative z-10"
                 style={{
                   textShadow: '0 0 10px rgba(255,255,255,0.5)'
                 }}
            >
              Comunidade
            </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-lg md:text-xl text-slate-400 font-medium mb-10 leading-relaxed max-w-2xl tracking-tight'
        >
          <span className='text-purple-400'>[</span> Onde comunidades convergem e a tecnologia prospera <span className='text-purple-400'>]</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-wrap gap-6 justify-center items-center text-xs uppercase tracking-widest text-slate-500 font-bold'
        >
          <div className='flex items-center gap-2 px-3 py-1 border border-slate-800 bg-slate-900/50'>
            <div className='w-2 h-2 bg-green-500 animate-pulse'></div>
            <span>Online</span>
          </div>
          <div className='flex items-center gap-2 px-3 py-1 border border-slate-800 bg-slate-900/50'>
             <span>v2.0.4</span>
          </div>
          <div className='flex items-center gap-2 px-3 py-1 border border-slate-800 bg-slate-900/50'>
             <span>Secure</span>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;
