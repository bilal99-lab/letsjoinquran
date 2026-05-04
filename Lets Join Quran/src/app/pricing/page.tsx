"use client";

import Link from "next/link";
import Image from "next/image";
import { Check, Star, ShieldCheck, CreditCard, Gift, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcf9] font-sans selection:bg-teal-200 selection:text-teal-900 overflow-hidden">
      
      {/* 1. IMMERSIVE HERO WITH 3D IMAGE */}
      <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 px-4 perspective-1000 bg-gradient-to-br from-[#081a33] via-[#0b2342] to-[#0e2a4d] overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-400/20 rounded-full blur-[120px] mix-blend-screen opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.05] mix-blend-overlay"></div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 preserve-3d">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="w-full lg:w-[50%]">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark border-teal-500/30 mb-8 shadow-sm bg-white/5 backdrop-blur-md">
                <Star className="w-4 h-4 text-teal-400 fill-teal-400" />
                <span className="text-sm font-bold text-teal-100 tracking-wide uppercase drop-shadow-sm">Simple & Transparent Pricing</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-sm">
                Invest in your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 italic font-medium">spiritual growth.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mb-8">
                Affordable, high-quality 1-on-1 Quran classes. No hidden fees. Cancel anytime.
              </motion.p>
              <motion.div variants={fadeUp} className="flex gap-4">
                <Link href="#pricing-plans" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all shadow-md bg-teal-500 hover:bg-teal-400 text-white hover:shadow-[0_10px_30px_rgba(20,184,166,0.3)] hover:-translate-y-1">
                  View Plans
                </Link>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="w-full lg:w-[45%] relative h-[450px] lg:h-[550px] preserve-3d">
               <motion.div animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute inset-0 glass-dark shadow-[0_20px_60px_-15px_rgba(20,184,166,0.15)] flex items-center justify-center border border-white/10 rounded-[3rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent mix-blend-overlay"></div>
                  <Image src="/pricing-hero-3d.png" alt="Premium Pricing Illustration" fill className="object-cover" priority />
               </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 2. PRICING BENTO LAYOUT (LIGHT THEME) */}
      <section id="pricing-plans" className="py-24 lg:py-32 relative z-20 perspective-1000 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#f4f7fb] to-[#edf2f7]">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-center preserve-3d">
            
            {/* Standard Plan (Left) */}
            <motion.div variants={fadeUp} className="group bg-white rounded-[2.5rem] border border-slate-200/60 p-10 flex flex-col h-[95%] justify-between shadow-[0_10px_40px_rgba(8,26,51,0.04)] hover:-translate-y-2 hover:border-teal-300 hover:shadow-[0_25px_60px_rgba(8,26,51,0.08)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-teal-500 blur-[80px] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-[#081a33] mb-2">Basic Plan</h3>
                <p className="text-slate-600 font-medium mb-8 text-[15px]">Perfect for beginners and busy schedules.</p>
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">$40</span>
                  <span className="text-slate-500 font-medium"> /month</span>
                </div>
                <ul className="space-y-5 mb-10">
                  {["3 Days a Week", "30 Min Sessions", "1-on-1 Classes", "Monthly Report"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                      <div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 border border-teal-100 shadow-sm">
                        <Check className="w-3.5 h-3.5 text-teal-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/free-trial" className="relative z-10 block w-full py-4 text-center rounded-2xl font-bold border border-slate-200 text-[#081a33] bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                Start with this plan
              </Link>
            </motion.div>

            {/* Premium/Intensive Plan (Center - Highlighted - Keep dark for emphasis) */}
            <motion.div variants={fadeUp} className="bg-gradient-to-br from-[#081a33] via-[#0b2342] to-[#081a33] rounded-[3rem] p-12 relative overflow-hidden transform lg:scale-105 z-20 border border-teal-400/40 h-full flex flex-col justify-between shadow-[0_30px_60px_rgba(8,26,51,0.25)] hover:-translate-y-2 transition-transform duration-500 group">
              <div className="absolute inset-0 bg-teal-400 blur-[100px] opacity-[0.15] pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
              <div className="absolute top-6 right-8 bg-gradient-to-r from-teal-400 to-cyan-400 text-[#081a33] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-[0_5px_15px_rgba(45,212,191,0.4)]">Most Popular</div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-2 drop-shadow-sm">Standard Plan</h3>
                <p className="text-teal-100/80 font-medium mb-8 text-[15px]">For consistent learning and solid progress.</p>
                <div className="mb-8 border-b border-teal-500/30 pb-8">
                  <span className="text-6xl font-black text-white drop-shadow-md">$60</span>
                  <span className="text-teal-200/60 font-medium"> /month</span>
                </div>
                <ul className="space-y-5 mb-10">
                  {["5 Days a Week", "30 Min Sessions", "1-on-1 Classes", "Priority Support", "Detailed Tracking"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-white font-medium text-[15px]">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center shrink-0 border border-teal-300/50 shadow-md">
                        <Check className="w-3.5 h-3.5 text-[#081a33]" strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/free-trial" className="relative z-10 block w-full py-5 text-center rounded-2xl font-black bg-gradient-to-r from-teal-400 to-cyan-400 text-[#081a33] shadow-[0_10px_30px_rgba(45,212,191,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(45,212,191,0.6)] transition-all text-lg">
                Choose Standard
              </Link>
            </motion.div>

            {/* Premium Plan (Right) */}
            <motion.div variants={fadeUp} className="group bg-white rounded-[2.5rem] border border-slate-200/60 p-10 flex flex-col h-[95%] justify-between shadow-[0_10px_40px_rgba(8,26,51,0.04)] hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_25px_60px_rgba(8,26,51,0.08)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-amber-500 blur-[80px] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-[#081a33] mb-2">Premium Plan</h3>
                <p className="text-slate-600 font-medium mb-8 text-[15px]">For faster learning and Hifz students.</p>
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">$75</span>
                  <span className="text-slate-500 font-medium"> /month</span>
                </div>
                <ul className="space-y-5 mb-10">
                  {["5 Days a Week + Support", "30 Min Sessions", "1-on-1 Classes", "Hifz Tracking", "Extra Revisions"].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4 text-slate-700 font-medium text-[15px]">
                      <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100 shadow-sm">
                        <Check className="w-3.5 h-3.5 text-amber-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/free-trial" className="relative z-10 block w-full py-4 text-center rounded-2xl font-bold border border-slate-200 text-[#081a33] bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
                Start with this plan
              </Link>
            </motion.div>

          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
             <motion.div variants={fadeUp} className="group relative bg-white rounded-[2.5rem] border border-slate-200/60 p-10 text-center hover:-translate-y-1 transition-all overflow-hidden shadow-[0_10px_40px_rgba(8,26,51,0.04)] hover:shadow-[0_20px_50px_rgba(8,26,51,0.08)]">
                <div className="absolute inset-0 bg-blue-500 blur-[80px] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"></div>
                <h3 className="text-xl font-bold text-[#081a33] mb-2 relative z-10">Weekend Plan</h3>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mb-4 relative z-10">$35<span className="text-base text-slate-500 font-medium">/mo</span></div>
                <p className="text-slate-600 font-medium mb-6 relative z-10">Saturday & Sunday<br/>30 Min Sessions</p>
                <Link href="/free-trial" className="text-blue-600 font-bold hover:text-blue-500 transition-colors relative z-10">Select Plan</Link>
             </motion.div>
             <motion.div variants={fadeUp} className="group relative bg-white rounded-[2.5rem] border border-slate-200/60 p-10 text-center hover:-translate-y-1 transition-all overflow-hidden shadow-[0_10px_40px_rgba(8,26,51,0.04)] hover:shadow-[0_20px_50px_rgba(8,26,51,0.08)]">
                <div className="absolute inset-0 bg-emerald-500 blur-[80px] opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"></div>
                <h3 className="text-xl font-bold text-[#081a33] mb-2 relative z-10">Hifz Support Intensive</h3>
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400 mb-4 relative z-10">$100<span className="text-base text-slate-500 font-medium">/mo</span></div>
                <p className="text-slate-600 font-medium mb-6 relative z-10">5 Days a Week<br/>1 Hour Sessions</p>
                <Link href="/free-trial" className="text-emerald-600 font-bold hover:text-emerald-500 transition-colors relative z-10">Select Plan</Link>
             </motion.div>
          </motion.div>

        </div>
      </section>

      {/* 3. SPECIAL DISCOUNTS & FEATURES */}
      <section className="py-24 relative bg-[#fcfcf9] border-t border-slate-100">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            
            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] border border-slate-200/60 p-10 flex items-start gap-6 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(8,26,51,0.03)] hover:shadow-[0_20px_40px_rgba(8,26,51,0.06)]">
              <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100 shadow-sm">
                <Gift className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#081a33] mb-3">Sibling Discount</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">We offer a generous 10% discount for the 2nd child and 15% for the 3rd child onwards to make learning affordable for large families.</p>
                <a href="https://wa.me/923161610705" target="_blank" rel="noopener noreferrer" className="text-cyan-600 font-bold hover:text-cyan-500 transition-colors inline-flex items-center gap-1">Ask about discounts <ArrowRight className="w-4 h-4" /></a>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-white rounded-[2rem] border border-slate-200/60 p-10 flex items-start gap-6 hover:-translate-y-1 transition-transform shadow-[0_10px_30px_rgba(8,26,51,0.03)] hover:shadow-[0_20px_40px_rgba(8,26,51,0.06)]">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#081a33] mb-3">100% Satisfaction</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">Start with a 3-day free trial. If you are not completely satisfied with the tutor, we will arrange a different tutor immediately.</p>
                <Link href="/free-trial" className="text-teal-600 font-bold hover:text-teal-500 transition-colors inline-flex items-center gap-1">Start Free Trial <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. TRUST & PAYMENTS */}
      <section className="py-20 bg-[#081a33] text-center px-4 overflow-hidden relative border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="w-full max-w-[1320px] mx-auto relative z-10">
          <p className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-8 drop-shadow-sm">Secure & Easy Payments</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2 text-white font-bold text-xl"><CreditCard className="w-8 h-8" /> Visa / Mastercard</div>
            <div className="flex items-center gap-2 text-white font-bold text-xl"><CreditCard className="w-8 h-8" /> PayPal</div>
            <div className="flex items-center gap-2 text-white font-bold text-xl"><CreditCard className="w-8 h-8" /> Stripe</div>
          </div>
        </div>
      </section>

    </div>
  );
}
