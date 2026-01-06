import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Server, Bot, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Server,
    title: "Deploy de Servidor",
    price: "> R$ 50",
    features: ["Arquitetura", "Permissões.config", "Firewall"]
  },
  {
    icon: Palette,
    title: "Design_System",
    price: "> R$ 100",
    features: ["Assets Pixelados", "Identidade.vis", "Banners"]
  },
  {
    icon: Bot,
    title: "Bot_Engineering",
    price: "> R$ 200",
    features: ["Comandos Custom", "Automação", "API Hooks"]
  }
];

const Studio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className='py-24 px-4 bg-zinc-950'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-5xl font-bold mb-6 text-glow'>ARC_STUDIO</h2>
          <p className='text-slate-400 max-w-2xl mx-auto text-lg font-mono'>
            Serviços profissionais compilados para sua comunidade.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='flex flex-col bg-black border-2 border-zinc-800 p-6 hover:border-white transition-colors group'
              >
                <div className='mb-6 border-b-2 border-zinc-900 pb-6 group-hover:border-white/20 transition-colors'>
                  <div className='w-12 h-12 bg-white text-black flex items-center justify-center mb-4'>
                    <Icon className='w-6 h-6' />
                  </div>
                  <h3 className='text-xl font-bold text-white mb-1 uppercase'>{service.title}</h3>
                  <p className='text-purple-400 font-bold font-mono'>{service.price}</p>
                </div>
                
                <ul className='space-y-3 mb-8 flex-grow'>
                  {service.features.map((feat, i) => (
                    <li key={i} className='text-slate-400 text-sm flex items-center gap-2 font-mono'>
                      <span className='text-purple-500'>&gt;</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className='w-full rounded-none border-2 border-zinc-700 text-slate-300 hover:text-black hover:bg-white hover:border-white font-bold uppercase tracking-wider transition-all'>
                  Execute_Order_66
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Studio;
