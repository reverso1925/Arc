import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-zinc-900 bg-black'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-8 bg-purple-600 flex items-center justify-center font-bold text-white text-lg'>
              A
            </div>
            <span className='text-2xl font-bold text-white tracking-tighter uppercase font-["Pixelify_Sans"]'>
              Arc
            </span>
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs font-mono text-slate-500 uppercase tracking-wider'>
            <span>Hub Digital</span>
            <div className='w-1 h-1 bg-slate-700 hidden sm:block'></div>
            <span>Tech • Art • Culture</span>
          </div>

          <p className='text-xs text-slate-600 font-mono'>
            © {currentYear} ARC_SYSTEMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
