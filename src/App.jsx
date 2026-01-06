import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Premium from '@/components/Premium';
import Labs from '@/components/Labs';
import Studio from '@/components/Studio';
import Events from '@/components/Events';
import Network from '@/components/Network';
import JoinSection from '@/components/JoinSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Arc - Hub Digital & Serviços</title>
        <meta name="description" content="Arc é um hub digital impulsionado pela comunidade, oferecendo acesso premium, produtos digitais, serviços profissionais e eventos exclusivos. Junte-se ao futuro da cultura da internet." />
      </Helmet>
      <div className='min-h-screen bg-black text-white selection:bg-purple-500 selection:text-black'>
        <div className="fixed inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-50 mix-blend-overlay"></div>
        <Hero />
        <About />
        <Premium />
        <Labs />
        <Studio />
        <Events />
        <Network />
        <JoinSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
