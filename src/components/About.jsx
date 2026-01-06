import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, HeartHandshake, UserCheck, Lock } from 'lucide-react';

const differentials = [
  {
    icon: UserCheck,
    title: "Zero Autoritarismo",
    description: "Governança descentralizada. Sem power trips."
  },
  {
    icon: Lock,
    title: "Privacidade",
    description: "Seus dados criptografados. Operações transparentes."
  },
  {
    icon: HeartHandshake,
    title: "Regras Humanas",
    description: "Lógica > Burocracia. Contexto é rei."
  },
  {
    icon: ShieldCheck,
    title: "Staff Confiável",
    description: "Equipe vetted. Servir > Comandar."
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className='py-24 px-4 bg-black border-y border-slate-900 relative'>
      {/* Scanline decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-50"></div>

      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-white text-glow'>CORE_VALUES</h2>
          <p className='text-sm text-purple-500 font-bold uppercase tracking-[0.2em] mb-8'>// Protocolo de Comunidade</p>
          <p className='text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed font-light'>
            Arc é um santuário digital. Removemos o ruído para focar no sinal: tecnologia, criatividade e conexão humana real.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className='bg-zinc-950 border-2 border-zinc-800 p-6 hover:border-purple-500 transition-colors duration-200 group relative overflow-hidden'
              >
                <div className="absolute top-0 right-0 p-2 opacity-20 font-bold text-4xl text-white group-hover:opacity-10 transition-opacity">0{index + 1}</div>
                <div className='w-12 h-12 bg-purple-900/20 border border-purple-500/50 flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-black transition-colors'>
                  <Icon className='w-6 h-6 text-purple-400 group-hover:text-black' />
                </div>
                <h3 className='text-lg font-bold mb-3 text-white uppercase tracking-tight'>{item.title}</h3>
                <p className='text-slate-400 text-sm leading-relaxed'>{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
