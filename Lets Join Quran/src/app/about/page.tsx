"use client";

import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Heart, BookOpen, Star, Users, Clock, ShieldCheck, Award, Sparkles, Globe } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcf9] font-sans selection:bg-teal-200 selection:text-teal-900 overflow-hidden">
      
      {/* 1. IMMERSIVE HERO WITH 3D IMAGE */}
      <section className="relative min-h-[70vh] flex flex-col justify-center pt-32 pb-20 px-4 perspective-1000 bg-gradient-to-br from-[#081a33] via-[#0b2342] to-[#0e2a4d] overflow-hidden">
        {/* Soft Background Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-teal-400/20 rounded-full blur-[120px] mix-blend-screen opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.05] mix-blend-overlay"></div>
        </div>

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 preserve-3d">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="preserve-3d">
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark border-teal-500/30 mb-8 shadow-sm bg-white/5 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-teal-100 tracking-wide uppercase">Our Story</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-sm">
                More than just <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 italic font-medium">an academy.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-slate-300 leading-relaxed font-medium mb-10 max-w-lg">
                We are a global community dedicated to connecting families with the timeless beauty of the Quran, ensuring that distance is never a barrier to authentic, structured learning.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/free-trial" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_30px_rgba(20,184,166,0.3)] bg-teal-500 hover:bg-teal-400 text-white hover:-translate-y-1">
                  Join Our Community
                </Link>
              </motion.div>
            </div>
            
            <motion.div variants={fadeUp} className="relative h-[450px] lg:h-[550px] w-full preserve-3d">
               <motion.div animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} className="absolute inset-0 glass-dark shadow-[0_20px_60px_-15px_rgba(20,184,166,0.15)] flex items-center justify-center border border-white/10 rounded-[3rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent mix-blend-overlay"></div>
                  <Image src="/about-hero-3d.png" alt="Premium Academy Illustration" fill className="object-cover" priority />
                  
                  <div className="absolute bottom-10 left-10 right-10 glass-dark p-6 rounded-2xl border border-white/10 shadow-xl transform translate-z-12 bg-[#0a2140]/80 backdrop-blur-lg">
                     <p className="text-white font-bold text-lg mb-1">Authentic Transmission</p>
                     <p className="text-sm font-medium text-slate-300">Connecting hearts to the book of Allah, one Ayah at a time.</p>
                  </div>
               </motion.div>
               
               {/* Floating Decor */}
               <motion.div animate={floatAnimation} className="absolute -top-6 -right-6 glass-dark text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 bg-[#081a33]/80 backdrop-blur-md" style={{ transform: "translateZ(30px)" }}>
                 <Globe className="w-6 h-6 text-teal-400" />
                 <span className="font-bold text-sm drop-shadow-sm">Global Reach</span>
               </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 2. THE FOUNDER / EXPERT LEADERSHIP (LIGHT SECTION) */}
      <section className="py-24 relative z-20 perspective-1000 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#f4f7fb] to-[#edf2f7]">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="flex flex-col md:flex-row gap-16 items-center preserve-3d"
          >
            <motion.div variants={fadeUp} className="w-full md:w-5/12">
               <div className="aspect-[4/5] bg-white rounded-[3rem] relative overflow-hidden flex items-center justify-center border border-slate-200/60 shadow-[0_20px_50px_rgba(8,26,51,0.06)] group hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-50 to-transparent opacity-50"></div>
                  <div className="absolute inset-4 border border-teal-200 rounded-[2rem] border-dashed group-hover:border-teal-300 transition-colors"></div>
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-teal-50 to-white flex items-center justify-center shadow-sm relative z-10 border border-teal-100 group-hover:scale-110 transition-transform duration-500">
                    <Award className="w-20 h-20 text-teal-500 drop-shadow-sm" />
                  </div>
               </div>
            </motion.div>

            <motion.div variants={fadeUp} className="w-full md:w-7/12">
              <h2 className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-teal-600"></span> Educational Leadership
              </h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#081a33] leading-[1.1] mb-8">
                Founded by an <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Experienced Teacher</span>
              </h3>
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Let&apos;s Join Quran is not a faceless corporate platform. It was founded and is led by a dedicated educator with over 8 years of specialized teaching experience.
                </p>
                <p>
                  Having taught students from the USA, UK, Canada, Australia, and Sweden, we understand the unique challenges faced by Muslim families living in Western countries—balancing secular school, extracurriculars, and the vital need for Islamic education.
                </p>
                <p>
                  Our ultimate goal is to provide a highly professional, structured environment where students receive personal attention and learn proper recitation safely and effectively.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. BENTO MISSION & VISION (LIGHT PREMIUM) */}
      <section className="py-24 relative overflow-hidden perspective-1000 bg-[#fcfcf9]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
            
            <motion.div variants={fadeUp} className="group relative bg-white p-10 md:p-12 rounded-[2.5rem] hover:-translate-y-2 border border-slate-200/60 shadow-[0_10px_40px_rgba(8,26,51,0.04)] hover:shadow-[0_20px_50px_rgba(8,26,51,0.08)] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-teal-50 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative z-10 w-20 h-20 bg-teal-50 rounded-[1.2rem] flex items-center justify-center mb-8 border border-teal-100 group-hover:scale-110 transition-all duration-500 shadow-sm">
                <Target className="w-10 h-10 text-teal-600" />
              </div>
              <h2 className="relative z-10 text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Our Mission</h2>
              <p className="relative z-10 text-slate-600 text-lg font-medium leading-relaxed">
                To make Quran learning easy, highly structured, and globally accessible for Muslim families, ensuring that distance is never a barrier to connecting with the Word of Allah.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="group relative bg-white p-10 md:p-12 rounded-[2.5rem] hover:-translate-y-2 border border-slate-200/60 shadow-[0_10px_40px_rgba(8,26,51,0.04)] hover:shadow-[0_20px_50px_rgba(8,26,51,0.08)] transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-cyan-50 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="relative z-10 w-20 h-20 bg-cyan-50 rounded-[1.2rem] flex items-center justify-center mb-8 border border-cyan-100 group-hover:scale-110 transition-all duration-500 shadow-sm">
                <Eye className="w-10 h-10 text-cyan-600" />
              </div>
              <h2 className="relative z-10 text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-400">Our Vision</h2>
              <p className="relative z-10 text-slate-600 text-lg font-medium leading-relaxed">
                To become the most trusted online Quran academy, recognized for unmatched educational quality, disciplined Tajweed, and genuine care for every student&apos;s spiritual growth.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. TEACHING PHILOSOPHY (LIGHT MULTI-COLOR BENTO) */}
      <section className="py-32 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#f4f7fb] to-[#edf2f7]">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#081a33] mb-6 tracking-tight">
              The pillars of our <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400 italic">teaching philosophy.</span>
            </h2>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Patience First", desc: "Every student learns at their own pace. We never rush. We nurture gently.", icon: Heart, bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100" },
              { name: "Strict Tajweed", desc: "Beautiful recitation comes from strict adherence to the rules of Tajweed and Makharij.", icon: BookOpen, bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-100" },
              { name: "Child-Friendly", desc: "We use engaging, encouraging methods so kids look forward to class.", icon: Star, bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
              { name: "Total Respect", desc: "A dignified, safe learning environment for students of all ages.", icon: Users, bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
              { name: "Parent Partnership", desc: "We keep you fully informed. You are part of the learning journey.", icon: ShieldCheck, bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
              { name: "Consistency", desc: "Reliable schedules and steady progress. Consistency is key to mastery.", icon: Clock, bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
            ].map((value, i) => (
              <motion.div key={i} variants={fadeUp} className={`group relative bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200/60 hover:-translate-y-2 shadow-[0_10px_30px_rgba(8,26,51,0.03)] hover:shadow-[0_20px_40px_rgba(8,26,51,0.06)] transition-all duration-500 overflow-hidden`}>
                <div className={`absolute inset-0 ${value.bg} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>
                
                <div className={`relative z-10 w-16 h-16 rounded-[1.2rem] ${value.bg} flex items-center justify-center mb-6 shadow-sm border ${value.border} group-hover:scale-110 transition-transform duration-500`}>
                  <value.icon className={`w-7 h-7 ${value.text}`} />
                </div>
                <h3 className="relative z-10 text-2xl font-extrabold text-[#081a33] mb-3">{value.name}</h3>
                <p className="relative z-10 text-slate-600 font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden bg-[#f4f7fb]">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} 
            className="rounded-[3rem] p-16 text-center shadow-[0_20px_50px_rgba(8,26,51,0.2)] border border-white/10 relative overflow-hidden bg-gradient-to-br from-[#081a33] via-[#0b2342] to-[#0e2a4d]"
          >
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-400/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-sm relative z-10">Experience our philosophy firsthand.</h2>
            <p className="text-xl text-teal-50/80 mb-10 font-medium relative z-10 max-w-2xl mx-auto">Book a free trial class to see how we teach and connect with our expert tutors today.</p>
            <Link href="/free-trial" className="relative z-10 inline-block bg-teal-500 text-white px-10 py-5 rounded-full font-black hover:shadow-[0_15px_40px_rgba(20,184,166,0.3)] hover:bg-teal-400 hover:-translate-y-1 transition-all text-lg">
              Book 3 Days Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
