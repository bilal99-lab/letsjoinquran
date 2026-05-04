"use client";

import { BookOpen, CheckCircle2, ArrowRight, Play, Star, Book, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function CoursesPage() {
  const courses = [
    {
      step: "01",
      title: "Noorani Qaida for Beginners",
      subtitle: "The crucial first step to reading the Quran.",
      bestFor: ["Young children", "Complete beginners", "Students unable to read Arabic"],
      studentsLearn: ["Arabic letters & phonetics", "Harakaat (Short Vowels)", "Joining letters", "Basic reading fluency"],
      icon: Book,
      color: "teal",
      bgLight: "bg-teal-50",
      iconBg: "bg-teal-500",
      borderColor: "border-teal-100",
      shadowColor: "shadow-teal-500/20",
      textColor: "text-teal-600",
      gradientText: "from-teal-600 to-teal-400"
    },
    {
      step: "02",
      title: "Quran Reading with Tajweed",
      subtitle: "Read with beauty, accuracy, and confidence.",
      bestFor: ["Students who can read basic Arabic", "Children needing fluency", "Adults correcting recitation"],
      studentsLearn: ["Quran reading fluency", "Complete Tajweed rules", "Makharij correction", "Daily recitation practice"],
      icon: Star,
      color: "cyan",
      bgLight: "bg-cyan-50",
      iconBg: "bg-cyan-500",
      borderColor: "border-cyan-100",
      shadowColor: "shadow-cyan-500/20",
      textColor: "text-cyan-600",
      gradientText: "from-cyan-600 to-cyan-400"
    },
    {
      step: "03",
      title: "Hifz / Quran Memorisation",
      subtitle: "Preserve the words of Allah in your heart.",
      bestFor: ["Students memorising the Quran", "Children memorising Surahs", "Students needing revision"],
      studentsLearn: ["New lesson memorisation", "Strict revision systems", "Fluency & confidence", "Parent progress tracking"],
      icon: Sparkles,
      color: "amber",
      bgLight: "bg-amber-50",
      iconBg: "bg-amber-500",
      borderColor: "border-amber-100",
      shadowColor: "shadow-amber-500/20",
      textColor: "text-amber-600",
      gradientText: "from-amber-600 to-amber-400"
    },
    {
      step: "04",
      title: "Quran Classes for Adults",
      subtitle: "It is never too late to learn or perfect your recitation.",
      bestFor: ["Adult beginners", "Adults preferring private learning", "Busy professionals"],
      studentsLearn: ["Basic Quran reading", "Tajweed correction", "Slow, comfortable pace", "1-on-1 private environment"],
      icon: BookOpen,
      color: "blue",
      bgLight: "bg-blue-50",
      iconBg: "bg-blue-500",
      borderColor: "border-blue-100",
      shadowColor: "shadow-blue-500/20",
      textColor: "text-blue-600",
      gradientText: "from-blue-600 to-blue-400"
    }
  ];

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
                <Play className="w-4 h-4 text-teal-400 fill-teal-400" />
                <span className="text-sm font-bold text-teal-100 tracking-wide uppercase drop-shadow-sm">Learning Pathways</span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8 drop-shadow-sm">
                Structured courses. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 italic font-medium">Personalized pace.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-slate-300 leading-relaxed font-medium max-w-2xl mb-8">
                Whether you are starting from the alphabet or perfecting your Tajweed, we have a clear, structured path for you.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/free-trial" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_30px_rgba(20,184,166,0.3)] bg-teal-500 hover:bg-teal-400 text-white hover:-translate-y-1">
                  Start Learning Today
                </Link>
              </motion.div>
            </div>

            <motion.div variants={fadeUp} className="w-full lg:w-[45%] relative h-[450px] lg:h-[550px] preserve-3d">
               <motion.div animate={{ rotateY: [-5, 5, -5], rotateX: [2, -2, 2] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute inset-0 glass-dark shadow-[0_20px_60px_-15px_rgba(20,184,166,0.15)] flex items-center justify-center border border-white/10 rounded-[3rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent mix-blend-overlay"></div>
                  <Image src="/courses-hero-3d.png" alt="Premium Courses Illustration" fill className="object-cover" priority />
               </motion.div>
            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* 2. COURSE PATHWAY - LIGHT PREMIUM MULTI-COLOR BENTO */}
      <section className="py-24 lg:py-32 relative z-20 perspective-1000 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#f4f7fb] to-[#edf2f7]">
        {/* Soft Background Accents */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="space-y-10 lg:space-y-16">
            
            {courses.map((course, i) => (
              <motion.div key={i} variants={fadeUp} className={`group relative bg-white border border-slate-200/60 rounded-[2.5rem] p-8 md:p-14 overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_rgba(8,26,51,0.04)] hover:border-slate-300/80 hover:shadow-[0_25px_60px_rgba(8,26,51,0.08)]`}>
                
                {/* Background Accent glow */}
                <div className={`absolute top-0 right-0 w-[400px] h-[400px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${course.bgLight} rounded-full blur-[100px]`}></div>
                
                {/* Number Watermark */}
                <div className={`absolute -bottom-10 -right-10 text-[180px] font-black leading-none opacity-[0.03] pointer-events-none ${course.textColor}`}>
                  {course.step}
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16">
                  {/* Left Side: Title & Info */}
                  <div className="lg:w-5/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-white to-${course.color}-50 border border-slate-100 flex items-center justify-center shadow-md relative group-hover:scale-110 transition-transform duration-500`}>
                          <div className={`absolute inset-0 ${course.iconBg} blur-md opacity-[0.15] rounded-[1.2rem] -z-10 group-hover:opacity-30 transition-opacity`}></div>
                          <course.icon className={`w-7 h-7 ${course.textColor}`} />
                        </div>
                      </div>
                      <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-br ${course.gradientText}`}>
                        {course.title}
                      </h2>
                      <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed">
                        {course.subtitle}
                      </p>
                    </div>
                    
                    <Link href="/free-trial" className={`hidden lg:inline-flex items-center gap-3 w-max px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 bg-white border border-slate-200 text-[#081a33] hover:shadow-lg hover:border-slate-300`}>
                      Start this course <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Right Side: Details Grid (Light Theme) */}
                  <div className="lg:w-7/12 grid sm:grid-cols-2 gap-8 bg-slate-50/80 border border-slate-100 rounded-3xl p-8 group-hover:bg-white transition-colors duration-500">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">Best For</h3>
                      <ul className="space-y-4">
                        {course.bestFor.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-700 font-medium text-[15px]">
                            <div className={`w-5 h-5 rounded-full ${course.bgLight} flex items-center justify-center shrink-0 border ${course.borderColor} mt-0.5 shadow-sm`}>
                               <CheckCircle2 className={`w-3.5 h-3.5 ${course.textColor}`} />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">You Will Learn</h3>
                      <ul className="space-y-4">
                        {course.studentsLearn.map((item, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-700 font-medium text-[15px]">
                            <div className={`w-5 h-5 rounded-full ${course.bgLight} flex items-center justify-center shrink-0 border ${course.borderColor} mt-0.5 shadow-sm`}>
                              <CheckCircle2 className={`w-3.5 h-3.5 ${course.textColor}`} />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/free-trial" className={`lg:hidden inline-flex items-center justify-center gap-3 w-full px-8 py-4 rounded-full font-bold transition-all shadow-md bg-white border border-slate-200 text-[#081a33]`}>
                      Start this course <ArrowRight className="w-5 h-5" />
                  </Link>

                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* 3. INCLUDED SUPPORT (Remains dark to contrast the body, matching homepage hero styling) */}
      <section className="py-24 relative overflow-hidden perspective-1000 bg-[#081a33]">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 preserve-3d">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-sm">Beyond just reading.</h2>
            <p className="text-xl text-teal-50/80 font-medium max-w-2xl mx-auto">
              Every course includes essential Islamic foundational knowledge at no extra cost, tailored to the student&apos;s age and level.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Daily Duas", "Salah Basics", "Short Surahs",
              "Islamic Manners", "Prophet Stories", "Parent Feedback"
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="glass-dark bg-gradient-to-b from-[#0e172a] to-[#040914] backdrop-blur-md border border-white/10 p-8 rounded-2xl text-center hover:-translate-y-1 hover:border-white/20 transition-all duration-300 group shadow-xl">
                <span className="font-bold text-slate-300 text-lg group-hover:text-white transition-colors drop-shadow-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 relative overflow-hidden bg-[#f4f7fb]">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} 
            className="relative z-10 max-w-4xl mx-auto p-16 rounded-[3rem] text-center border border-white/10 bg-gradient-to-br from-[#081a33] via-[#0b2342] to-[#0e2a4d] shadow-[0_20px_50px_rgba(8,26,51,0.2)] overflow-hidden"
          >
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-400/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-sm relative z-10">Ready to find your path?</h2>
            <p className="text-teal-50/80 mb-10 text-xl font-medium relative z-10 max-w-2xl mx-auto">Book a Free Trial and our expert tutors will evaluate your level to recommend the perfect course.</p>
            <Link href="/free-trial" className="relative z-10 inline-block text-white bg-teal-500 px-10 py-5 rounded-full font-black hover:-translate-y-1 transition-transform shadow-[0_15px_40px_rgba(20,184,166,0.3)] hover:bg-teal-400 text-lg">
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
