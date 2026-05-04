"use client";

import TrialForm from "@/components/TrialForm";
import { Star, ShieldCheck, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function FreeTrialPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcf9] font-sans selection:bg-teal-200 selection:text-teal-900 overflow-hidden">
      
      {/* IMMERSIVE HEADER */}
      <section className="pt-32 pb-16 relative perspective-1000">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081a33] via-[#0b2342] to-[#0e2a4d] -z-10 rounded-b-[4rem] md:rounded-b-[6rem] shadow-[0_20px_60px_rgba(8,26,51,0.5)]"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-400/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 preserve-3d">
          
          {/* Header Typography */}
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center max-w-3xl mx-auto mb-16 pt-10 preserve-3d">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-500/30 mb-6 text-teal-100 text-sm font-bold uppercase tracking-widest shadow-sm bg-white/5 backdrop-blur-md">
              <Star className="w-4 h-4 text-teal-400 fill-teal-400/20 drop-shadow-sm" /> No Credit Card Required
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-sm">
              Start your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 italic font-medium">3-Day Free Trial.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
              Experience our teaching quality firsthand. Fill the form below or message us directly on WhatsApp to get started immediately.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PRICING & FORM LAYERED (LIGHT BENTO) */}
      <section className="-mt-16 pb-24 relative z-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#f4f7fb] to-[#edf2f7]">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 preserve-3d">
          <div className="grid lg:grid-cols-12 gap-8 items-start relative z-20 preserve-3d">
            
            {/* Left Side: Editorial Info Box (LIGHT) */}
            <motion.div initial={{ opacity: 0, rotateY: 10, x: -30 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="lg:col-span-5 bg-white rounded-[2.5rem] border border-slate-200/60 p-10 md:p-12 shadow-[0_20px_50px_rgba(8,26,51,0.06)] flex flex-col justify-between hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-50 blur-[100px] opacity-[0.5] group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-[#081a33] mb-10 drop-shadow-sm">What happens next?</h3>
                <ul className="space-y-10 relative before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-slate-200">
                  <li className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-[0.8rem] bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 font-bold z-10 shadow-sm border border-teal-100">1</div>
                    <div className="pt-1.5">
                      <h4 className="font-bold text-[#081a33] mb-2 text-lg">We Contact You</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Our coordinator will reach out to schedule a time that works perfectly for your timezone.</p>
                    </div>
                  </li>
                  <li className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-[0.8rem] bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 font-bold z-10 shadow-sm border border-cyan-100">2</div>
                    <div className="pt-1.5">
                      <h4 className="font-bold text-[#081a33] mb-2 text-lg">Class Setup</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">We will pair you with the right male or female tutor based on your level and needs.</p>
                    </div>
                  </li>
                  <li className="relative flex items-start gap-6">
                    <div className="w-10 h-10 rounded-[0.8rem] bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 font-bold z-10 shadow-sm border border-amber-100">3</div>
                    <div className="pt-1.5">
                      <h4 className="font-bold text-[#081a33] mb-2 text-lg">Begin Learning</h4>
                      <p className="text-slate-600 font-medium leading-relaxed">Enjoy 3 days of completely free classes. If you love it, you can officially enroll.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-14 p-8 bg-slate-50 rounded-2xl border border-slate-200 relative overflow-hidden group-hover:border-slate-300 transition-colors z-10">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#25D366]/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#25D366]/20 transition-colors"></div>
                <h4 className="font-bold text-[#081a33] mb-3 relative z-10 text-lg">Want a faster response?</h4>
                <p className="text-slate-600 font-medium text-sm mb-6 relative z-10 leading-relaxed">Skip the form and message us directly on WhatsApp to setup your trial instantly.</p>
                <a 
                  href="https://wa.me/923161610705?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20book%20a%20free%20trial."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:-translate-y-1 transition-all text-lg"
                >
                  <MessageCircle className="w-6 h-6 drop-shadow-sm" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Right Side: The Form Container (LIGHT Theme) */}
            <motion.div initial={{ opacity: 0, rotateY: -10, x: 30 }} animate={{ opacity: 1, rotateY: 0, x: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.4 }} className="lg:col-span-7 bg-white rounded-[2.5rem] border border-slate-200/60 p-8 md:p-14 shadow-[0_20px_50px_rgba(8,26,51,0.06)] relative overflow-hidden hover:shadow-[0_30px_60px_rgba(8,26,51,0.1)] transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none mix-blend-multiply"></div>
              
              <div className="mb-10 relative z-10">
                <h2 className="text-3xl font-extrabold text-[#081a33] mb-3">Trial Application Form</h2>
                <p className="text-slate-600 font-medium text-lg">Please fill in your details and we will get back to you within 24 hours.</p>
              </div>
              
              <div className="relative z-10">
                <TrialForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Trust Badges (LIGHT) */}
      <section className="pb-24 pt-10 relative z-10 bg-[#f4f7fb]">
         <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
               <div className="flex items-center gap-4 bg-white px-8 py-5 border border-slate-200/60 shadow-[0_10px_30px_rgba(8,26,51,0.03)] rounded-2xl hover:-translate-y-1 transition-transform"><ShieldCheck className="w-7 h-7 text-teal-600"/><span className="font-bold text-[#081a33] text-lg">100% Secure</span></div>
               <div className="flex items-center gap-4 bg-white px-8 py-5 border border-slate-200/60 shadow-[0_10px_30px_rgba(8,26,51,0.03)] rounded-2xl hover:-translate-y-1 transition-transform"><Clock className="w-7 h-7 text-cyan-600"/><span className="font-bold text-[#081a33] text-lg">24/7 Support</span></div>
               <div className="flex items-center gap-4 bg-white px-8 py-5 border border-slate-200/60 shadow-[0_10px_30px_rgba(8,26,51,0.03)] rounded-2xl hover:-translate-y-1 transition-transform"><Star className="w-7 h-7 text-amber-500 fill-amber-100"/><span className="font-bold text-[#081a33] text-lg">Top Rated Tutors</span></div>
            </div>
         </div>
      </section>

    </div>
  );
}
