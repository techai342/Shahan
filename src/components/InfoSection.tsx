import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Zap, Layers, HelpCircle } from 'lucide-react';

export default function InfoSection() {
  const QAS = [
    {
      q: "Who are you?",
      a: "I am Shahan Ali from Pakistan. I love exploring and creating digital things like apps, graphics, websites, etc."
    },
    {
      q: "What do you love doing?",
      a: "I love researching different topics, especially tech and coding. Most of my time is spent on GitHub searching for new ideas and building attractive projects."
    },
    {
      q: "What is your biggest strength?",
      a: "My biggest strength is honesty and my belief in Allah, knowing that He will handle everything."
    },
    {
      q: "What are you currently working on?",
      a: "I am currently working on Shopify stores, Facebook accounts, TikTok and YouTube monetization, and website ad displays."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-8 md:p-12 rounded-[2rem] relative overflow-hidden border border-blue-500/30 bg-gradient-to-br from-[#0a1930]/80 to-[#030816]/90 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full mix-blend-screen filter blur-[80px] pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-300 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Personal Insights</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-white tracking-wide">
              Who is <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Shahan Ali?</span>
            </h2>
            
            <div className="flex flex-col gap-5 pt-4">
              {QAS.map((qa, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-blue-900/20 border border-blue-500/10 backdrop-blur-sm">
                  <div className="p-2 rounded-lg bg-blue-900/50 border border-blue-500/20 text-blue-400 shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{qa.q}</h4>
                    <p className="text-sm text-blue-100/70 leading-relaxed">{qa.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 relative flex justify-center items-center w-full mt-12 md:mt-0">
            {/* 3D Elements */}
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rounded-full blur-3xl"></div>
              
              <motion.img 
                src="https://ik.imagekit.io/19imy4f1u/lite_1775631536462_1zXspa75G.png" 
                alt="3D element representation"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-48 md:w-64 h-auto drop-shadow-[0_0_40px_rgba(59,130,246,0.5)] animate-[float_6s_ease-in-out_infinite] relative z-10"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
