import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Command, Layout, ArrowUpRight } from 'lucide-react';

const products = [
  {
    icon: Command,
    title: "Prompts_IA",
    price: "R$5-20",
    desc: "Bibliotecas de injeção de código para Midjourney & ChatGPT."
  },
  {
    icon: Layout,
    title: "Templates.sys",
    price: "R$20-45",
    desc: "Sistemas operacionais de produtividade para Notion."
  },
  {
    icon: FileText,
    title: "Guias_Binary",
    price: "R$15-60",
    desc: "Documentação técnica sobre comunidades e tech stacks."
  }
];

const Labs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className='py-24 px-4 bg-black border-y border-zinc-900'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
             transition={{ duration: 0.6 }}
          >
            <h2 className='text-3xl md:text-5xl font-bold mb-4 text-glow'>ARC_LABS</h2>
            <p className='text-slate-400 max-w-xl text-lg font-mono'>// Ferramentas para turbinar seu fluxo de dados.</p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-purple-400 hover:text-white font-bold uppercase tracking-wider flex items-center gap-2 group border-b-2 border-purple-500 hover:border-white transition-colors pb-1'
          >
            Acessar Terminal <ArrowUpRight className='w-4 h-4' />
          </motion.button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='group bg-zinc-950 p-8 border-2 border-zinc-800 hover:border-purple-500 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
              >
                <div className='flex justify-between items-start mb-6'>
                    <div className='w-14 h-14 bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-400 transition-colors duration-300'>
                        <Icon className='w-7 h-7 text-white' />
                    </div>
                     <span className='text-xs font-bold text-black bg-purple-400 px-2 py-1 uppercase'>{product.price}</span>
                </div>
                
                <h3 className='text-xl font-bold text-white mb-2 font-mono'>{product.title}</h3>
                <p className='text-slate-400 text-sm leading-relaxed'>{product.desc}</p>
                <div className='mt-6 w-full h-1 bg-zinc-800 group-hover:bg-purple-500 transition-colors'></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Labs;
