import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const benefits = [
  "Cargos [Exclusivos]",
  "Canais [Fechados]",
  "Acesso [Antecipado]",
  "Voto de [Governança]",
  "Chat da [Equipe]",
  "Descontos [Eventos]"
];

const Premium = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();

  const handleSubscribe = () => {
    toast({
      title: "ERRO DE SISTEMA: 404",
      description: "Módulo de pagamento não encontrado. Aguarde atualizações.",
      variant: "destructive",
      className: "bg-black border-2 border-red-500 text-white font-mono"
    });
  };

  return (
    <section ref={ref} className='py-24 px-4 relative overflow-hidden bg-zinc-950'>
      
      <div className='max-w-5xl mx-auto relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-20'>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className='flex-1 text-center lg:text-left'
          >
            <div className='inline-flex items-center gap-2 px-3 py-1 border border-amber-500/50 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6 bg-amber-900/10'>
              <Crown className='w-4 h-4' />
              <span>Acesso Root</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold mb-6 text-white text-glow'>ARC PREMIUM</h2>
            <p className='text-slate-400 text-lg mb-8 leading-relaxed font-mono'>
              >> Upgrade seu nível de acesso.<br/>
              >> Desbloqueie recursos do sistema.<br/>
              >> Suporte o servidor.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8'>
               <div className='text-3xl font-bold text-white font-mono border-b-4 border-amber-500 pb-2'>
                 R$10-25<span className='text-sm text-slate-500'>/mo</span>
               </div>
            </div>
             <Button 
                onClick={handleSubscribe}
                className='bg-white text-black hover:bg-amber-400 hover:text-black rounded-none border-2 border-transparent hover:border-white px-8 py-6 text-lg font-bold uppercase tracking-wider transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:translate-y-1 hover:shadow-none'
              >
                <Zap className="mr-2 w-5 h-5" /> Iniciar Upgrade
              </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='flex-1 w-full max-w-md bg-black border-2 border-zinc-800 p-8 shadow-2xl relative group hover:border-amber-500 transition-colors duration-300'
          >
            <div className="absolute top-0 right-0 bg-amber-500 text-black text-xs font-bold px-2 py-1">VIP</div>
            <h3 className='text-xl font-bold mb-6 text-white uppercase border-b border-zinc-800 pb-4'>Features.log</h3>
            <ul className='space-y-4'>
              {benefits.map((benefit, idx) => (
                <li key={idx} className='flex items-center gap-3 text-slate-300 font-mono text-sm'>
                  <div className='flex-shrink-0 w-5 h-5 border border-green-500/50 flex items-center justify-center bg-green-900/20'>
                    <Check className='w-3 h-3 text-green-400' />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Premium;
