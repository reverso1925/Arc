import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const handleJoinClick = () => {
    toast({
      title: "LINK NOT FOUND",
      description: "Integração Discord pendente. Tente novamente mais tarde.",
      className: "bg-black border-2 border-purple-500 text-white font-mono"
    });
  };

  return (
    <section ref={ref} className='py-24 px-4 relative overflow-hidden bg-black border-y-4 border-double border-purple-900'>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
        className='max-w-4xl mx-auto text-center relative z-10'
      >
        <div className='mb-8'>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            className='inline-flex items-center justify-center w-20 h-20 bg-purple-900/20 border-2 border-purple-500 mb-6'
          >
            <MessageSquare className='w-10 h-10 text-purple-400' />
          </motion.div>
        </div>

        <h2 className='text-4xl md:text-6xl font-bold mb-6 text-glow'>
          READY_PLAYER_ONE?
        </h2>
        
        <p className='text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-mono'>
          Inicialize sua jornada no Arc. Conecte-se com a rede neural da comunidade.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <Button
            onClick={handleJoinClick}
            size='lg'
            className='bg-purple-600 hover:bg-purple-500 text-white rounded-none border-2 border-transparent hover:border-white text-lg px-8 py-6 font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] transition-all duration-300'
          >
            Connect to Discord
            <ArrowRight className='ml-2 w-5 h-5' />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-12 flex items-center justify-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-500'
        >
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-green-500'></div>
            <span>Free Access</span>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-2 h-2 bg-blue-500'></div>
            <span>24/7 Uptime</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default JoinSection;
