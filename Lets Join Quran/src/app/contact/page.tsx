"use client";

import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcf9] font-sans selection:bg-teal-200 selection:text-teal-900 overflow-hidden">
      
      {/* 1. IMMERSIVE HERO WITH FORM COMPOSITION */}
      <section className="relative min-h-[90vh] pt-32 pb-24 perspective-1000">
        {/* Deep Abstract Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#081a33] via-[#0b2342] to-[#0e2a4d] border-none rounded-none md:rounded-b-[6rem] h-[65vh] shadow-[0_20px_60px_rgba(8,26,51,0.5)] z-0"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-400/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.05] mix-blend-overlay pointer-events-none h-[65vh] z-0"></div>
        
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 preserve-3d">
          
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16 pt-8">
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-sm">
              Let&apos;s start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 italic font-medium">conversation.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-teal-50/80 max-w-2xl mx-auto leading-relaxed font-medium">
              Have questions about our classes, pricing, or timings? We are here to help you make the best choice for your learning journey.
            </motion.p>
          </motion.div>

          {/* Main Layered Bento Grid (LIGHT Theme) */}
          <div className="grid lg:grid-cols-12 gap-8 relative z-20 preserve-3d">
            
            {/* Contact Info (Left) */}
            <motion.div initial={{ opacity: 0, rotateY: 10, x: -30 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} transition={{ duration: 1, ease: "easeOut" }} className="lg:col-span-4 flex flex-col gap-8 preserve-3d">
              
              {/* Primary Contact Card */}
              <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-[0_20px_50px_rgba(8,26,51,0.06)] flex-1 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
                <div className="absolute inset-0 bg-teal-50 blur-[80px] opacity-[0.5] group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <h3 className="text-2xl font-extrabold text-[#081a33] mb-10 relative z-10 drop-shadow-sm">Get in Touch</h3>
                
                <div className="space-y-10 relative z-10">
                  <div className="flex gap-5 group/item">
                    <div className="w-14 h-14 bg-teal-50 rounded-[1.2rem] flex items-center justify-center shrink-0 border border-teal-100 group-hover/item:border-teal-200 transition-colors duration-300 shadow-sm">
                      <Phone className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">WhatsApp / Phone</h4>
                      <a href="https://wa.me/923161610705" target="_blank" rel="noopener noreferrer" className="text-[#081a33] font-bold text-lg hover:text-teal-600 transition-colors block">
                        +92 316 161 0705
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 group/item">
                    <div className="w-14 h-14 bg-cyan-50 rounded-[1.2rem] flex items-center justify-center shrink-0 border border-cyan-100 group-hover/item:border-cyan-200 transition-colors duration-300 shadow-sm">
                      <Mail className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Support</h4>
                      <a href="mailto:info@letsjoinquran.com" className="text-[#081a33] font-bold text-lg hover:text-cyan-600 transition-colors block break-all">
                        info@letsjoinquran.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-5 group/item">
                    <div className="w-14 h-14 bg-amber-50 rounded-[1.2rem] flex items-center justify-center shrink-0 border border-amber-100 shadow-sm">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="pt-1">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Availability</h4>
                      <p className="text-[#081a33] font-bold text-lg">Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Action Card */}
              <div className="bg-gradient-to-br from-[#25D366] to-[#20bd5a] rounded-[2.5rem] p-8 text-white shadow-[0_15px_40px_rgba(37,211,102,0.3)] relative overflow-hidden hover:-translate-y-2 transition-transform duration-500 border border-[#25D366]/30">
                <div className="absolute inset-0 bg-white/10 blur-[20px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                   <h4 className="font-bold text-xl mb-4 drop-shadow-sm text-white">Fastest Response</h4>
                   <a 
                    href="https://wa.me/923161610705?text=Assalamu%20Alaikum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-white text-[#25D366] py-4 rounded-xl font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all text-lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Message on WhatsApp
                  </a>
                </div>
              </div>

            </motion.div>

            {/* Form (Right - LIGHT Theme) */}
            <motion.div initial={{ opacity: 0, rotateY: -10, x: 30 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="lg:col-span-8 bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-200/60 shadow-[0_20px_50px_rgba(8,26,51,0.06)] relative overflow-hidden h-full flex flex-col hover:shadow-[0_30px_60px_rgba(8,26,51,0.1)] transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none mix-blend-multiply"></div>
              
              <div className="mb-10 relative z-10">
                <h2 className="text-3xl font-extrabold text-[#081a33] mb-3">Send us a Message</h2>
                <p className="text-slate-600 font-medium text-lg">Fill out the form below and our academic coordinator will reply shortly.</p>
              </div>
              <div className="relative z-10 flex-1">
                <ContactForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. FAQ TEASER (LIGHT THEME) */}
      <section className="py-24 relative perspective-1000 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#f4f7fb] to-[#edf2f7]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10 preserve-3d">
           <motion.div whileHover={{ rotateY: 10, scale: 1.05 }} className="inline-flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-teal-50 border border-teal-100 mb-8 shadow-sm">
             <Sparkles className="w-8 h-8 text-teal-600" />
           </motion.div>
           <h2 className="text-3xl md:text-5xl font-extrabold text-[#081a33] mb-8">Not sure yet?</h2>
           <p className="text-xl text-slate-600 font-medium mb-10 leading-relaxed max-w-3xl mx-auto">
             We understand you might have questions before committing. We recommend booking a free trial first, so you can ask the teacher directly and experience the class environment.
           </p>
           <Link href="/free-trial" className="inline-block bg-teal-500 hover:bg-teal-400 text-white px-10 py-5 rounded-full font-black shadow-[0_10px_30px_rgba(20,184,166,0.3)] hover:-translate-y-1 transition-all text-lg">
             Book Free Trial Now
           </Link>
        </div>
      </section>

    </div>
  );
}
