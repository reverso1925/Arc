import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Code, Gamepad2, Mic } from 'lucide-react';

const events = [
  {
    icon: Mic,
    title: "Workshops",
    price: "R$ 5-15",
    description: "Debates técnicos ao vivo."
  },
  {
    icon: Gamepad2,
    title: "Game_Nights",
    price: "R$ 5-10",
    description: "Torneios PvP."
  },
  {
    icon: Code,
    title: "Hackathons",
    price: "R$ 10-20",
    description: "Desafios de código 48h."
  }
];

const Events = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className='py-24 px-4 bg-black relative'>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-10'>
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
          className='lg:w-1/2'
        >
          <div className='flex items-center gap-2 text-pink-500 font-bold mb-4 uppercase tracking-widest text-xs'>
            <Calendar className='w-4 h-4' />
            <span>Eventos.exe</span>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-glow'>CONEXÃO EM REAL-TIME</h2>
          <p className='text-slate-400 text-lg mb-8 leading-relaxed font-mono'>
            Logue no sistema para eventos estruturados. Aprendizado, competição e networking em alta velocidade.
          </p>
          <div className='inline-block bg-zinc-900 border border-pink-500/50 p-4 shadow-[4px_4px_0px_0px_rgba(236,72,153,0.3)]'>
             <div className='text-xs text-pink-500 mb-1 font-bold uppercase'>Próximo Evento</div>
             <div className='text-white font-bold font-mono text-xl'>&lt;Winter_Code_Jam /&gt;</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='lg:w-1/2 w-full grid gap-4'
        >
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <div key={index} className='bg-black border-2 border-zinc-800 p-5 flex items-center gap-5 hover:border-pink-500 transition-colors group'>
                <div className='w-12 h-12 bg-pink-900/20 flex items-center justify-center shrink-0 border border-pink-500/30 group-hover:bg-pink-500 group-hover:text-black transition-colors'>
                  <Icon className='w-6 h-6 text-pink-500 group-hover:text-black' />
                </div>
                <div>
                  <h4 className='text-lg font-bold text-white uppercase'>{event.title}</h4>
                  <p className='text-slate-500 text-sm font-mono'>{event.description}</p>
                </div>
                <div className='ml-auto text-right shrink-0'>
                  <span className='block text-sm font-bold text-pink-500 font-mono'>{event.price}</span>
                  <span className='text-[10px] uppercase text-slate-600 font-bold'>ticket</span>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Events;
