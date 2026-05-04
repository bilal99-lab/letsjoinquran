"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Star, BookOpen, Clock, Users, Globe, 
  CheckCircle2, ShieldCheck, MessageCircle,
  ChevronRight, ChevronLeft, Book, Award,
  Laptop, Video, CheckSquare, Calendar
} from "lucide-react";
import ParentTestimonialsSection from "@/components/ParentTestimonialsSection";
import FreeTrialEnrollmentSection from "@/components/FreeTrialEnrollmentSection";

// Shared Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const slides = [
  {
    id: 1,
    headline: "Unlock Your Quranic Journey at Home",
    highlightWord: "Journey",
    text: "Join online classes with expert tutors and flexible schedules for all ages.",
    buttons: [
      { text: "Book Free Trial", href: "/free-trial", primary: true },
      { text: "Register Now", href: "/courses", primary: false }
    ],
    chips: [
      { text: "Expert Tutors", icon: Award },
      { text: "Flexible Classes", icon: Calendar },
      { text: "Online Learning", icon: Laptop }
    ],
    badges: [
      { text: "Live 1-on-1 Sessions", icon: Video, position: "bottom-left" },
      { text: "Flexible Schedule", icon: Clock, position: "top-right" }
    ],
    image: "/hero-v2-1.png",
    theme: { bgLight: "bg-teal-500/10", bgDark: "bg-teal-500/20", text: "text-teal-400", border: "border-teal-500/40" }
  },
  {
    id: 2,
    headline: "Learn Quran with Confidence & Ease",
    highlightWord: "Confidence",
    text: "Start your journey with guided learning and personalized attention.",
    buttons: [
      { text: "Explore Courses", href: "/courses", primary: true },
      { text: "About Us", href: "/about", primary: false }
    ],
    chips: [
      { text: "Expert Tutors", icon: Users },
      { text: "Online Convenience", icon: Globe },
      { text: "Flexible Scheduling", icon: Clock }
    ],
    badges: [
      { text: "Certified Instructors", icon: ShieldCheck, position: "top-right" },
      { text: "Tajweed Focused", icon: Star, position: "bottom-left" }
    ],
    image: "/hero-v2-2.png",
    theme: { bgLight: "bg-teal-500/10", bgDark: "bg-teal-500/20", text: "text-teal-400", border: "border-teal-500/40" }
  },
  {
    id: 3,
    headline: "Master Quran with Expert Tutors Online",
    highlightWord: "Quran",
    text: "Structured one-on-one learning designed for real progress.",
    buttons: [
      { text: "Get a Free Trial", href: "/free-trial", primary: true },
      { text: "Explore Courses", href: "/courses", primary: false }
    ],
    chips: [
      { text: "Qualified Tutors", icon: Award },
      { text: "Flexible Classes", icon: Calendar },
      { text: "Progress Tracking", icon: CheckSquare }
    ],
    badges: [
      { text: "1-on-1 Sessions", icon: Globe, position: "bottom-left" },
      { text: "Flexible Schedule", icon: Clock, position: "top-right" }
    ],
    image: "/hero-v2-3.png",
    theme: { bgLight: "bg-teal-500/10", bgDark: "bg-teal-500/20", text: "text-teal-400", border: "border-teal-500/40" }
  }
];


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col min-h-screen bg-[#f4f7fb] font-sans selection:bg-navy/20 selection:text-navy overflow-hidden">
      
      {/* 1. HERO SLIDER */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 perspective-1000 overflow-hidden bg-gradient-to-br from-[#081a33] via-[#0b2342] to-[#0e2a4d]">
        {/* Dynamic Abstract Background based on Slide */}
        <div className="absolute inset-0 z-0 pointer-events-none transition-colors duration-1000">
          <div className={`absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse [animation-duration:8s] transition-colors duration-1000 ${currentSlide === 0 ? 'bg-teal-400/20' : currentSlide === 1 ? 'bg-blue-400/20' : 'bg-emerald-400/20'}`}></div>
          <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] mix-blend-screen opacity-50 transition-colors duration-1000 ${currentSlide === 0 ? 'bg-cyan-500/10' : currentSlide === 1 ? 'bg-indigo-500/10' : 'bg-teal-500/10'}`}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-[0.08] mix-blend-overlay"></div>
        </div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 preserve-3d">
            
            {/* Left Content (Slider) */}
            <div className="w-full lg:w-[45%] relative min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-sm max-w-[500px] mb-6">
                    {slides[currentSlide].headline.split(' ').map((word, i) => {
                       const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
                       if (cleanWord === slides[currentSlide].highlightWord) {
                         return <span key={i} className="text-teal-400">{word} </span>
                       }
                       return word + ' ';
                    })}
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-medium max-w-[440px] mb-8">
                    {slides[currentSlide].text}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-8">
                    {slides[currentSlide].buttons.map((btn, i) => (
                      <Link key={i} href={btn.href} className={`px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center shadow-md hover:-translate-y-1 ${btn.primary ? 'bg-teal-500 hover:bg-teal-400 text-white shadow-[0_10px_30px_rgba(20,184,166,0.3)]' : 'bg-[#081a33]/40 border border-white/20 text-white hover:bg-white/10 backdrop-blur-md'}`}>
                        {btn.text}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {slides[currentSlide].chips.map((chip, i) => {
                      const Icon = chip.icon;
                      return (
                        <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border-white/10 text-sm font-bold text-slate-200 shadow-sm bg-white/5 backdrop-blur-md">
                          <Icon className="w-4 h-4 text-teal-400 opacity-90" />
                          {chip.text}
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex gap-4 mt-10">
                <button onClick={prevSlide} aria-label="Previous Slide" className="w-12 h-12 rounded-full glass-dark border-teal-500/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-teal-400/50 transition-colors shadow-sm">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <div className="flex gap-2 items-center px-4">
                  {slides.map((_, i) => (
                    <button key={i} onClick={() => setCurrentSlide(i)} aria-label={`Go to slide ${i + 1}`} className={`h-2 rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 bg-teal-400' : 'w-2 bg-slate-600'}`} />
                  ))}
                </div>
                <button onClick={nextSlide} aria-label="Next Slide" className="w-12 h-12 rounded-full glass-dark border-teal-500/30 flex items-center justify-center text-white hover:bg-white/10 hover:border-teal-400/50 transition-colors shadow-sm">
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Right Side: 3D Creative Glass Scene */}
            <div className="hidden lg:flex w-full lg:w-[55%] justify-center xl:justify-start relative h-[600px] preserve-3d xl:pl-10">
              <AnimatePresence>
               <motion.div 
                 key={currentSlide}
                 initial={{ opacity: 0, filter: "blur(12px)", scale: 1.05 }}
                 animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: [-5, 5, -5] }}
                 exit={{ opacity: 0, filter: "blur(12px)", scale: 0.95 }}
                 transition={{ 
                   opacity: { duration: 1.2, ease: "easeInOut" },
                   filter: { duration: 1.2, ease: "easeInOut" },
                   scale: { duration: 1.2, ease: "easeInOut" },
                   y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                 }}
                 className="absolute inset-0 flex items-center justify-center xl:justify-start preserve-3d xl:pl-10"
               >
                 <div className="relative w-[480px] h-[560px]">
                   <div className={`absolute inset-0 glass-dark ${slides[currentSlide].theme.border} p-2 shadow-[0_0_50px_rgba(20,184,166,0.15)] rounded-[3rem] z-20 flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-500`}>
                      <div className={`absolute inset-0 ${slides[currentSlide].theme.bgLight} z-10 pointer-events-none mix-blend-overlay transition-colors duration-500`}></div>
                      <Image src={slides[currentSlide].image} alt="Hero Slider Image" fill className="object-cover rounded-[2.8rem]" priority />
                   </div>
                   
                   {/* Top Right Badge */}
                   {slides[currentSlide].badges.find(b => b.position === 'top-right') && (() => {
                     const badge = slides[currentSlide].badges.find(b => b.position === 'top-right')!;
                     const BadgeIcon = badge.icon;
                     return (
                       <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-12 -right-6 w-auto pr-6 glass-dark p-3 rounded-2xl shadow-xl z-30 flex items-center gap-4 border border-white/10 backdrop-blur-md">
                          <div className={`w-10 h-10 ${slides[currentSlide].theme.bgDark} rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-500`}>
                            <BadgeIcon className={`w-5 h-5 ${slides[currentSlide].theme.text} transition-colors duration-500`} />
                          </div>
                          <div><p className="text-white font-bold text-sm whitespace-nowrap">{badge.text}</p></div>
                       </motion.div>
                     );
                   })()}

                   {/* Bottom Left Badge */}
                   {slides[currentSlide].badges.find(b => b.position === 'bottom-left') && (() => {
                     const badge = slides[currentSlide].badges.find(b => b.position === 'bottom-left')!;
                     const BadgeIcon = badge.icon;
                     return (
                       <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute bottom-16 -left-10 w-auto pr-6 glass-dark p-3 rounded-2xl shadow-2xl z-30 flex items-center gap-4 border border-white/10 backdrop-blur-md">
                          <div className={`w-10 h-10 ${slides[currentSlide].theme.bgDark} rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-500`}>
                            <BadgeIcon className={`w-5 h-5 ${slides[currentSlide].theme.text} transition-colors duration-500`} />
                          </div>
                          <div><p className="text-white font-bold text-sm whitespace-nowrap">{badge.text}</p></div>
                       </motion.div>
                     );
                   })()}
                 </div>
               </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>


      {/* 2. ABOUT OUR ACADEMY */}
      <section id="about-academy" className="py-24 lg:py-[100px] relative bg-[#fcfcf9] overflow-hidden">
        {/* Soft background glow and accents */}
        <div className="absolute top-1/2 left-[15%] w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-12 left-10 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2NmI1YjEiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-60"></div>
        <div className="absolute bottom-12 right-10 w-24 h-24 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM2NmI1YjEiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-60"></div>
        
        {/* Faint Islamic Patterns */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.02] pointer-events-none mix-blend-multiply">
          <svg className="w-full h-full">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.02] pointer-events-none mix-blend-multiply">
          <svg className="w-full h-full">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Side: Visual Setup */}
            <div className="w-full lg:w-[48%] relative flex justify-center lg:justify-start pt-10 lg:pt-0">
              
              {/* Vertical Accent Bar (Right side of image) */}
              <div className="absolute -right-3 lg:-right-6 top-[15%] bottom-[20%] w-3 lg:w-4 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.15)] z-0 flex flex-col overflow-hidden">
                 <div className="flex-1 bg-teal-500"></div>
                 <div className="h-1/4 bg-[#d4af37]"></div>
                 <div className="h-1/4 bg-[#87ceeb]"></div>
              </div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                className="relative w-full max-w-[550px] aspect-[4/3.5] lg:aspect-[4/3.5] rounded-[2.5rem] lg:rounded-[3rem] bg-white border-[8px] lg:border-[12px] border-white shadow-[0_30px_60px_rgba(8,26,51,0.06),0_0_60px_rgba(20,184,166,0.12)] p-0 group transition-transform duration-700 hover:-translate-y-2 z-10"
              >
                {/* Main Image Container */}
                <div className="relative w-full h-full rounded-[1.8rem] lg:rounded-[2.2rem] overflow-hidden bg-slate-100">
                  <Image src="/children-quran-online.png" alt="Children learning Quran online via laptop" fill className="object-cover" />
                </div>

                {/* Floating Tutor Video Call Card */}
                <motion.div 
                  animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 right-4 lg:right-10 w-[140px] h-[100px] lg:w-[180px] lg:h-[130px] bg-white border-[5px] lg:border-[6px] border-white rounded-[1.2rem] lg:rounded-[1.2rem] shadow-[0_20px_40px_rgba(8,26,51,0.12)] overflow-hidden z-20"
                >
                  <Image src="/tutor-video-call.png" alt="Quran Tutor on Video Call" fill className="object-cover" />
                  
                  {/* Subtle Video Call UI dots */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                     <div className="w-[18px] h-[18px] lg:w-5 lg:h-5 rounded-full bg-teal-500/90 border border-white flex items-center justify-center backdrop-blur-sm"><div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full border-2 border-white"></div></div>
                     <div className="w-[18px] h-[18px] lg:w-5 lg:h-5 rounded-full bg-slate-800/80 border border-white flex items-center justify-center backdrop-blur-sm"><div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-white rounded-[2px]"></div></div>
                     <div className="w-[18px] h-[18px] lg:w-5 lg:h-5 rounded-full bg-red-500/90 border border-white flex items-center justify-center backdrop-blur-sm"><div className="w-1.5 h-0.5 lg:w-2 lg:h-0.5 bg-white rounded-full"></div></div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Side: Content */}
            <div className="w-full lg:w-[52%] flex flex-col items-start text-left pt-12 lg:pt-0">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer} className="w-full">
                
                {/* Small Label */}
                <motion.div variants={fadeUp} className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#e8f1f2] mb-6">
                  <span className="text-[12px] font-bold text-[#081a33] tracking-wider uppercase">ABOUT OUR ACADEMY</span>
                </motion.div>

                {/* Heading */}
                <motion.h2 variants={fadeUp} className="text-[36px] md:text-[44px] lg:text-[50px] font-extrabold text-[#081a33] mb-6 leading-[1.15] tracking-tight">
                  Guided Quran Learning<br/>for <span className="relative whitespace-nowrap">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Every Family</span>
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-400/60" viewBox="0 0 100 20" preserveAspectRatio="none">
                      <path d="M0,15 C30,0 70,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </motion.h2>

                {/* Paragraphs */}
                <motion.p variants={fadeUp} className="text-[17px] md:text-[18px] text-[#081a33]/80 font-medium mb-6 leading-[1.7] max-w-[92%]">
                  Let’s Join Quran offers a caring and flexible online learning experience for children and adults. Our academy focuses on one-to-one attention, experienced teachers, and structured lessons designed for steady progress from home.
                </motion.p>
                <motion.p variants={fadeUp} className="text-[17px] md:text-[18px] text-[#081a33]/80 font-medium mb-10 leading-[1.7] max-w-[92%]">
                  From Noorani Qaida and Quran reading to Tajweed, Hifz support, and essential Islamic learning, each student is guided according to their level in a comfortable and supportive environment.
                </motion.p>

                {/* Trust Pills */}
                <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-2">
                  {/* Pill 1: Personal Classes */}
                  <div className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-[0_8px_20px_rgba(8,26,51,0.03)] hover:shadow-[0_8px_25px_rgba(20,184,166,0.12)] hover:border-teal-100 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-teal-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-[16px] font-medium leading-none mb-0.5">+</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#081a33]">Personal Classes</span>
                  </div>
                  
                  {/* Pill 2: Caring Teachers */}
                  <div className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-[0_8px_20px_rgba(8,26,51,0.03)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.12)] hover:border-[#d4af37]/20 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-[#d4af37] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-[16px] font-medium leading-none mb-0.5">+</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#081a33]">Caring Teachers</span>
                  </div>
                  
                  {/* Pill 3: Flexible Timings */}
                  <div className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-[0_8px_20px_rgba(8,26,51,0.03)] hover:shadow-[0_8px_25px_rgba(135,206,235,0.2)] hover:border-sky-200 transition-all duration-300">
                    <div className="w-6 h-6 rounded-full bg-[#87ceeb] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <span className="text-[16px] font-medium leading-none mb-0.5">+</span>
                    </div>
                    <span className="text-[14px] font-semibold text-[#081a33]">Flexible Timings</span>
                  </div>
                </motion.div>

              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY PARENTS CHOOSE US */}
      <section className="pt-16 lg:pt-24 pb-8 lg:pb-12 relative bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-[#f0f7f9] to-[#e8f3f8] overflow-hidden">
        {/* Decorative Islamic geometric corners */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none mix-blend-multiply">
          <svg className="w-full h-full">
            <defs>
              <pattern id="islamic-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z" fill="#081a33" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none mix-blend-multiply">
          <svg className="w-full h-full">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-8 lg:mb-12 relative z-10 flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#081a33] mb-8 lg:mb-10 tracking-tight relative">
               Why Parents <span className="relative whitespace-nowrap">
                 <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">Choose Us</span>
                 {/* Decorative swoosh underline */}
                 <svg className="absolute -bottom-3 left-0 w-full h-4 text-teal-500/80 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 C30,0 70,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                 </svg>
               </span>
             </h2>
             
             <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
               Structured, caring, and personal Quran learning for every family.
             </p>
          </motion.div>
        </div>

        {/* The Exact Aligned Container */}
        <div className="w-full flex justify-center pb-4 lg:pb-8 overflow-hidden relative z-10 px-4 lg:px-0">
          <div className="w-full max-w-[1200px] relative h-auto lg:h-[450px]">
            
            {/* Connecting Wavy Lines Background (Desktop only) */}
            <div className="absolute inset-0 w-[1200px] h-[450px] opacity-100 pointer-events-none hidden lg:block -translate-x-[1px]">
               <svg viewBox="0 0 1200 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-500">
                 {/* The original beautiful sweeping line */}
                 <path d="M-100,250 C150,250 250,50 450,50 C650,50 750,350 950,350 C1100,350 1200,150 1300,150" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.25" />
                 
                 {/* Secondary sweeping dashed line for depth */}
                 <path d="M-100,150 C100,150 200,300 400,300 C600,300 700,100 900,100 C1100,100 1200,250 1300,250" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" opacity="0.2" />
                 
                 {/* Large aesthetic background rings */}
                 <circle cx="200" cy="50" r="150" stroke="currentColor" strokeWidth="1" opacity="0.03" />
                 <circle cx="950" cy="400" r="200" stroke="currentColor" strokeWidth="1" opacity="0.03" />
                 
                 {/* Floating Nodes & Particles */}
                 <circle cx="150" cy="250" r="4" fill="currentColor" opacity="0.4" />
                 <circle cx="450" cy="50" r="5" fill="currentColor" opacity="0.5" />
                 <circle cx="750" cy="350" r="6" fill="currentColor" opacity="0.6" />
                 <circle cx="950" cy="350" r="4" fill="currentColor" opacity="0.4" />
                 <circle cx="1200" cy="150" r="5" fill="currentColor" opacity="0.5" />

                 {/* Decorative Plus Signs */}
                 <g opacity="0.3">
                   <path d="M 300 100 L 300 110 M 295 105 L 305 105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                   <path d="M 850 50 L 850 60 M 845 55 L 855 55" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                   <path d="M 100 380 L 100 390 M 95 385 L 105 385" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                   <path d="M 1100 400 L 1100 410 M 1095 405 L 1105 405" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                 </g>

                 {/* Scattered tiny dots */}
                 <circle cx="250" cy="350" r="1.5" fill="currentColor" opacity="0.5" />
                 <circle cx="550" cy="100" r="1.5" fill="currentColor" opacity="0.4" />
                 <circle cx="850" cy="280" r="2" fill="currentColor" opacity="0.3" />
                 <circle cx="1050" cy="120" r="1.5" fill="currentColor" opacity="0.5" />
               </svg>
            </div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={staggerContainer} 
              className="relative lg:absolute lg:inset-0 flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-6 lg:gap-0"
            >
              {[
                { 
                  title: "One-to-One\nClasses", 
                  desc: "Personal attention with steady correction and support.", 
                  icon: BookOpen, 
                  offset: "lg:translate-y-0",
                  glow: "bg-teal-500",
                  border: "border-teal-500/30",
                  textGradient: "from-teal-300 to-teal-100",
                  shadow: "shadow-[0_0_30px_rgba(20,184,166,0.15)]"
                },
                { 
                  title: "Experienced\nTutors", 
                  desc: "Qualified teachers with years of Quran teaching experience.", 
                  icon: Award, 
                  offset: "lg:translate-y-24",
                  glow: "bg-amber-500",
                  border: "border-amber-500/30",
                  textGradient: "from-amber-300 to-amber-100",
                  shadow: "shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                },
                { 
                  title: "Male & Female\nTeachers", 
                  desc: "Choose a suitable teacher based on comfort and preference.", 
                  icon: Users, 
                  offset: "lg:-translate-y-8",
                  glow: "bg-blue-500",
                  border: "border-blue-500/30",
                  textGradient: "from-blue-300 to-blue-100",
                  shadow: "shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                },
                { 
                  title: "Flexible\nTimings", 
                  desc: "Class schedules that fit school, work, and family routines.", 
                  icon: Clock, 
                  offset: "lg:translate-y-32",
                  glow: "bg-emerald-500",
                  border: "border-emerald-500/30",
                  textGradient: "from-emerald-300 to-emerald-100",
                  shadow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                },
                { 
                  title: "Tajweed-\nFocused", 
                  desc: "Build clear pronunciation from the beginning.", 
                  icon: Star, 
                  offset: "lg:-translate-y-4",
                  glow: "bg-purple-500",
                  border: "border-purple-500/30",
                  textGradient: "from-purple-300 to-purple-100",
                  shadow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                },
                { 
                  title: "Progress\nSupport", 
                  desc: "Parents stay informed about learning and consistency.", 
                  icon: MessageCircle, 
                  offset: "lg:translate-y-16",
                  glow: "bg-rose-500",
                  border: "border-rose-500/30",
                  textGradient: "from-rose-300 to-rose-100",
                  shadow: "shadow-[0_0_30px_rgba(244,63,94,0.15)]"
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp} 
                  className={`group relative flex flex-col items-center text-center bg-gradient-to-b from-[#0e172a] to-[#040914] rounded-3xl p-6 lg:p-5 xl:p-6 border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.1)] w-full sm:w-[320px] lg:w-[180px] flex-shrink-0 ${feature.offset} hover:-translate-y-2 transition-all duration-500`}
                >
                  {/* Powerful colored background ambient glow for the whole card */}
                  <div className={`absolute inset-0 ${feature.glow} blur-[60px] opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 pointer-events-none rounded-3xl`}></div>
                  
                  {/* Card border glow on hover */}
                  <div className={`absolute inset-0 rounded-3xl border border-transparent group-hover:${feature.border} transition-colors duration-500`}></div>
                  
                  {/* Inner premium glass icon box */}
                  <div className={`w-14 h-14 rounded-[14px] bg-gradient-to-b from-white/10 to-transparent border border-white/20 flex items-center justify-center mb-5 shadow-xl relative z-10 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-white/30`}>
                    <feature.icon className={`w-6 h-6 text-white`} strokeWidth={1.5} />
                    {/* Intense core glow exactly behind the icon */}
                    <div className={`absolute inset-0 ${feature.glow} blur-md opacity-50 rounded-[14px] -z-10 group-hover:opacity-70 transition-opacity`}></div>
                  </div>
                  
                  {/* Gradient Title */}
                  <h3 className={`text-[15px] font-bold mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-br ${feature.textGradient} whitespace-pre-line tracking-tight leading-snug`}>
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-400 text-[12px] leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-500 max-w-[140px]">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. COURSES PREVIEW - Premium Bento Dashboard */}
      <section className="pt-10 lg:pt-14 pb-12 lg:pb-16 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#f2f7fa] to-[#eaf2f7]">
        {/* Subtle Islamic Corner Patterns */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.02] pointer-events-none mix-blend-multiply rotate-90">
          <svg className="w-full h-full">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.02] pointer-events-none mix-blend-multiply -rotate-90">
          <svg className="w-full h-full">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16 relative z-10 flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#081a33] mb-6 tracking-tight relative">
               Quran <span className="relative whitespace-nowrap">
                 <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Courses</span>
                 {/* Decorative swoosh underline */}
                 <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-400/70 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 C30,0 70,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                 </svg>
               </span> Preview
             </h2>
             
             <p className="text-[17px] md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
               Choose a structured path for reading, Tajweed, memorisation, adults, and Islamic basics.
             </p>
          </motion.div>

          {/* Main Glass Dashboard Container */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={fadeUp} 
            className="relative w-full rounded-[2.5rem] bg-white/50 border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-2xl p-5 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12"
          >
            
            {/* Animated Floating Stickers (Absolute to Dashboard) */}
            {/* 1. Beginner Foundation Sticker */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:flex absolute top-24 -left-16 z-20 bg-teal-50 border border-teal-100 shadow-lg rounded-xl px-4 py-2 -rotate-6 backdrop-blur-md"
            >
              <span className="text-teal-800 font-bold text-sm">Beginner Foundation</span>
            </motion.div>
            
            {/* 2. Tajweed Sticker */}
            <motion.div 
              animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden lg:flex absolute -top-6 left-[40%] z-20 bg-amber-50 border border-amber-100 shadow-lg rounded-xl px-3 py-1.5 rotate-3 backdrop-blur-md"
            >
              <span className="text-amber-800 font-bold text-sm">Tajweed</span>
            </motion.div>

            {/* 3. Hifz Sticker */}
            <motion.div 
              animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="hidden lg:flex absolute -top-4 right-4 z-20 bg-emerald-50 border border-emerald-100 shadow-lg rounded-xl px-3 py-1.5 rotate-6 backdrop-blur-md"
            >
              <span className="text-emerald-800 font-bold text-sm">Hifz</span>
            </motion.div>

            {/* 4. Adults Sticker */}
            <motion.div 
              animate={{ y: [0, 6, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="hidden lg:flex absolute top-[45%] left-[38%] z-20 bg-blue-50 border border-blue-100 shadow-lg rounded-xl px-3 py-1.5 -rotate-3 backdrop-blur-md"
            >
              <span className="text-blue-800 font-bold text-sm">Adults</span>
            </motion.div>

            {/* 5. Islamic Basics Sticker */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="hidden lg:flex absolute bottom-4 -right-10 z-20 bg-purple-50 border border-purple-100 shadow-lg rounded-xl px-4 py-2 rotate-6 backdrop-blur-md"
            >
              <span className="text-purple-800 font-bold text-sm">Islamic Basics</span>
            </motion.div>


            {/* LEFT: Featured Card (Noorani Qaida) */}
            <div className="relative w-full lg:w-[40%] flex-shrink-0 z-10 group">
              {/* Large ambient glow behind the dark card */}
              <div className="absolute inset-0 bg-teal-400 blur-[80px] opacity-20 pointer-events-none rounded-[2rem]"></div>
              
              <div className="relative h-full bg-gradient-to-b from-[#0e172a] to-[#040914] rounded-[2rem] p-8 lg:p-10 border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1">
                
                {/* Book Graphic Area */}
                <div className="relative w-full flex-grow min-h-[220px] flex items-center justify-center mb-8 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/5">
                   {/* Golden localized glow */}
                   <div className="absolute inset-0 bg-amber-500 blur-[60px] opacity-[0.15] rounded-2xl mix-blend-screen"></div>
                   
                   {/* Open Book Icon SVG (Stylized) */}
                   <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="url(#bookGold)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]">
                     <defs>
                        <linearGradient id="bookGold" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fde047" />
                          <stop offset="50%" stopColor="#fbbf24" />
                          <stop offset="100%" stopColor="#d97706" />
                        </linearGradient>
                     </defs>
                     <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                     <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                   </svg>

                   {/* Floating Arabic Letters (Simulated text) */}
                   <motion.div animate={{ y: [0, -5, 0], x: [0, 2, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-8 left-10 text-teal-200/60 font-arabic text-2xl">ب</motion.div>
                   <motion.div animate={{ y: [0, 5, 0], x: [0, -2, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute top-12 right-12 text-teal-200/60 font-arabic text-3xl">ن</motion.div>
                   <motion.div animate={{ y: [0, -3, 0], x: [0, -3, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 2 }} className="absolute bottom-10 left-16 text-amber-200/60 font-arabic text-2xl">ج</motion.div>
                   <motion.div animate={{ y: [0, 4, 0], x: [0, 3, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-12 right-10 text-amber-200/60 font-arabic text-xl">م</motion.div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-3">Noorani Qaida</h3>
                <p className="text-slate-300 text-[15px] leading-relaxed mb-8 flex-grow">
                  Build the foundation first — Arabic letters, sounds, joining, and basic Quran reading.
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                   <span className="text-slate-400 font-medium text-sm">Beginner Foundation</span>
                   <Link href="/courses" className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-5 rounded-full text-sm transition-colors shadow-[0_4px_15px_rgba(20,184,166,0.3)] hover:shadow-[0_6px_20px_rgba(20,184,166,0.4)]">
                     Start with Qaida
                   </Link>
                </div>
              </div>
            </div>

            {/* RIGHT: Small Cards 2x2 Grid */}
            <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
              
              {/* Card 1: Tajweed */}
              <motion.div variants={fadeUp} className="group relative bg-white rounded-3xl p-7 lg:p-9 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col hover:-translate-y-1">
                <h4 className="text-xl lg:text-2xl font-bold text-[#081a33] mb-4">Quran with Tajweed</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-10 flex-grow">Improve pronunciation, Makharij, rules, and confident recitation.</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                   <span className="text-amber-600 font-semibold text-xs tracking-wide uppercase">Recitation & Tajweed</span>
                   <Link href="/courses" className="bg-[#081a33] text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-teal-600 transition-colors">View Course</Link>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-1.5 bg-gradient-to-r from-amber-400 to-amber-200 rounded-t-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>

              {/* Card 2: Hifz */}
              <motion.div variants={fadeUp} className="group relative bg-white rounded-3xl p-7 lg:p-9 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col hover:-translate-y-1">
                <h4 className="text-xl lg:text-2xl font-bold text-[#081a33] mb-4">Hifz / Memorisation</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-10 flex-grow">Memorise with revision, fluency, and progress support.</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                   <span className="text-emerald-600 font-semibold text-xs tracking-wide uppercase">Hifz Support</span>
                   <Link href="/courses" className="bg-[#081a33] text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-teal-600 transition-colors">View Course</Link>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-1.5 bg-gradient-to-r from-emerald-400 to-emerald-200 rounded-t-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>

              {/* Card 3: Adults */}
              <motion.div variants={fadeUp} className="group relative bg-white rounded-3xl p-7 lg:p-9 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col hover:-translate-y-1">
                <h4 className="text-xl lg:text-2xl font-bold text-[#081a33] mb-4">Quran Classes for Adults</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-10 flex-grow">Private, comfortable learning for adults at a calm pace.</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                   <span className="text-blue-600 font-semibold text-xs tracking-wide uppercase">Adult Learning</span>
                   <Link href="/courses" className="bg-[#081a33] text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-teal-600 transition-colors">View Course</Link>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-1.5 bg-gradient-to-r from-blue-400 to-blue-200 rounded-t-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>

              {/* Card 4: Basics */}
              <motion.div variants={fadeUp} className="group relative bg-white rounded-3xl p-7 lg:p-9 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col hover:-translate-y-1">
                <h4 className="text-xl lg:text-2xl font-bold text-[#081a33] mb-4">Basic Islamic Learning</h4>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-10 flex-grow">Daily duas, Salah basics, manners, and Islamic knowledge.</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                   <span className="text-purple-600 font-semibold text-xs tracking-wide uppercase">Included Support</span>
                   <Link href="/courses" className="bg-[#081a33] text-white text-xs font-bold py-2.5 px-5 rounded-full hover:bg-teal-600 transition-colors">View Course</Link>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-6 right-6 h-1.5 bg-gradient-to-r from-purple-400 to-purple-200 rounded-t-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>

            </div>

          </motion.div>
        </div>
      </section>

      {/* 5. HOW IT WORKS - Reference Image Match */}
      <section className="pt-4 lg:pt-8 pb-16 md:pb-20 relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-[#f2f7fa] to-[#eaf2f7]">
        {/* Subtle Islamic Corner Patterns */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.02] pointer-events-none mix-blend-multiply rotate-90">
          <svg className="w-full h-full">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.02] pointer-events-none mix-blend-multiply -rotate-90">
          <svg className="w-full h-full">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#islamic-pattern)" />
          </svg>
        </div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center mb-16 relative z-10 flex flex-col items-center">
             <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#081a33] mb-6 tracking-tight relative">
               How It <span className="relative whitespace-nowrap">
                 <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Works</span>
                 {/* Decorative swoosh underline */}
                 <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-400/70 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 C30,0 70,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                 </svg>
               </span>
             </h2>
             <p className="text-[17px] md:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
               Start your Quran learning journey in four simple steps.
             </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative mt-16">
            
            {/* LEFT SIDE: 4 Floating Staggered Cards */}
            <div className="w-full lg:w-[45%] relative flex flex-col gap-6 z-20">
               {/* Dotted connecting line behind cards */}
               <div className="hidden lg:block absolute top-[10%] bottom-[10%] left-[25%] right-[15%] border-l-[3px] border-r-[3px] border-dashed border-teal-200/60 z-0 rounded-[100px]"></div>

               {[
                 { step: "01", title: "Book Free Trial", desc: "Message us or submit the short form.", colorClass: "text-teal-600", icon: MessageCircle, align: "self-start", iconBg: "bg-[#20b2aa]", shadow: "shadow-[0_10px_20px_rgba(32,178,170,0.3)]", borderColor: "border-[#20b2aa]" },
                 { step: "02", title: "Choose Time", desc: "Pick a class time that fits your schedule.", colorClass: "text-amber-500", icon: Calendar, align: "self-end", iconBg: "bg-[#d4af37]", shadow: "shadow-[0_10px_20px_rgba(212,175,55,0.3)]", borderColor: "border-[#d4af37]" },
                 { step: "03", title: "Attend Trial", desc: "Join 3 days of free online Quran classes.", colorClass: "text-sky-500", icon: Laptop, align: "self-start", iconBg: "bg-[#38bdf8]", shadow: "shadow-[0_10px_20px_rgba(56,189,248,0.3)]", borderColor: "border-[#38bdf8]" },
                 { step: "04", title: "Continue Learning", desc: "Start regular classes with steady progress.", colorClass: "text-emerald-500", icon: Book, align: "self-end", iconBg: "bg-[#10b981]", shadow: "shadow-[0_10px_20px_rgba(16,185,129,0.3)]", borderColor: "border-[#10b981]" },
               ].map((item, i) => (
                 <motion.div 
                   key={i} 
                   animate={{ y: [0, i % 2 === 0 ? -8 : 8, 0] }} 
                   transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                   className={`w-[90%] md:w-[75%] bg-white/90 backdrop-blur-xl rounded-[1.5rem] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-white flex items-center gap-4 relative overflow-hidden group ${item.align} z-10`}
                 >
                    {/* Top right corner color accent */}
                    <div className={`absolute -top-3 -right-3 w-12 h-12 border-t-[5px] border-r-[5px] ${item.borderColor} rounded-tr-[2rem] opacity-70`}></div>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-slate-100 to-transparent"></div>

                    {/* Left Colored Icon Box */}
                    <div className={`w-14 h-14 rounded-[1.1rem] flex items-center justify-center text-white ${item.iconBg} ${item.shadow} shrink-0`}>
                       <item.icon className="w-6 h-6" strokeWidth={2.5} />
                    </div>

                    {/* Right Text Content */}
                    <div className="flex-grow">
                       <span className={`text-[10px] font-bold tracking-wider uppercase ${item.colorClass} mb-1 block`}>Step {item.step}</span>
                       <h3 className="text-[17px] font-extrabold text-[#081a33] mb-1">{item.title}</h3>
                       <p className="text-[13px] text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            {/* RIGHT SIDE: Large 3D Visual Setup */}
            <div className="w-full lg:w-[50%] relative flex justify-center items-center mt-12 lg:mt-0 z-10 h-[500px]">
               {/* Huge ambient glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-teal-400 blur-[100px] opacity-[0.25] rounded-full pointer-events-none"></div>

               {/* Islamic Arch Background glass */}
               <div className="absolute inset-0 flex justify-center items-center z-0 pointer-events-none">
                  <div className="w-[400px] h-[450px] bg-white/40 border border-white/80 backdrop-blur-xl shadow-xl flex flex-col items-center justify-start overflow-hidden relative rounded-t-[200px]">
                     {/* Inner decorative arch lines */}
                     <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M10 100 V40 C10 15, 50 5, 50 5 C50 5, 90 15, 90 40 V100" stroke="#081a33" strokeWidth="1" fill="none" />
                        <path d="M20 100 V45 C20 25, 50 15, 50 15 C50 15, 80 25, 80 45 V100" stroke="#081a33" strokeWidth="1" fill="none" />
                     </svg>
                  </div>
               </div>

               {/* CSS Drawn Laptop (Zoom Class) */}
               <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[2%] bottom-[15%] z-10 w-[360px]">
                  {/* Laptop Screen */}
                  <div className="w-full bg-[#1e293b] rounded-t-[1rem] p-2 border-x-[3px] border-t-[3px] border-[#334155] shadow-2xl relative overflow-hidden">
                     {/* Screen Content */}
                     <div className="bg-slate-900 w-full aspect-[16/10] rounded-md relative flex flex-col overflow-hidden border border-slate-800">
                        {/* Zoom Topbar */}
                        <div className="h-5 bg-slate-800 w-full flex items-center px-2 gap-1.5 border-b border-slate-700">
                          <div className="w-2 h-2 rounded-full bg-red-400"></div>
                          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                          <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        </div>
                        {/* Zoom Video Area */}
                        <div className="flex-grow flex p-1.5 gap-1.5">
                           {/* Main Video (White with Quran logo) */}
                           <div className="flex-grow bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] rounded flex items-center justify-center relative overflow-hidden flex-col gap-2 shadow-inner">
                              <div className="w-12 h-12 bg-[#081a33] rounded-full flex items-center justify-center shadow-lg">
                                <BookOpen className="w-6 h-6 text-teal-400" />
                              </div>
                              <span className="text-[#081a33] font-black text-[11px] uppercase tracking-[0.2em]">Online Quran</span>
                              {/* Bottom bar inside video */}
                              <div className="absolute bottom-2 left-2 right-2 h-4 bg-black/10 rounded flex items-center px-2 gap-2">
                                <div className="w-3 h-3 bg-teal-500 rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-white rounded-full"></div></div>
                                <div className="h-1.5 w-16 bg-black/20 rounded-full"></div>
                              </div>
                           </div>
                           {/* Sidebar Videos */}
                           <div className="w-14 flex flex-col gap-1.5">
                              <div className="flex-1 bg-slate-700 rounded w-full flex items-center justify-center shadow-inner relative"><Users className="w-4 h-4 text-slate-400" /><div className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-teal-400 rounded-full"></div></div>
                              <div className="flex-1 bg-slate-700 rounded w-full flex items-center justify-center shadow-inner"><Users className="w-4 h-4 text-slate-400" /></div>
                              <div className="flex-1 bg-slate-700 rounded w-full flex items-center justify-center shadow-inner"><Users className="w-4 h-4 text-slate-400" /></div>
                              <div className="flex-1 bg-slate-700 rounded w-full flex items-center justify-center shadow-inner"><Users className="w-4 h-4 text-slate-400" /></div>
                           </div>
                        </div>
                        {/* Zoom Toolbar */}
                        <div className="h-7 bg-slate-800 w-full flex items-center justify-center gap-4 border-t border-slate-700">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                           <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                           <div className="w-3 h-3 rounded-full bg-slate-500"></div>
                        </div>
                     </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="w-[110%] -ml-[5%] h-3.5 bg-gradient-to-b from-[#94a3b8] to-[#475569] rounded-b-[1rem] border-b-[2px] border-[#334155] shadow-[0_15px_30px_rgba(0,0,0,0.3)]"></div>
               </motion.div>

               {/* CSS Drawn Phone (WhatsApp) */}
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute left-[5%] top-[8%] z-20 w-[150px] h-[300px] bg-[#1e293b] rounded-[2rem] p-[5px] shadow-[20px_20px_50px_rgba(0,0,0,0.3)] border-[2px] border-[#334155] -rotate-6">
                  {/* Phone Screen */}
                  <div className="w-full h-full bg-[#efeae2] rounded-[1.5rem] relative overflow-hidden flex flex-col border border-black shadow-inner">
                     {/* Dynamic Island */}
                     <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-4 bg-black rounded-full z-10"></div>
                     
                     {/* WhatsApp Header */}
                     <div className="h-14 bg-[#075e54] w-full flex items-end pb-2 px-3 gap-2">
                       <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center"><BookOpen className="w-3 h-3 text-white" /></div>
                       <span className="text-white text-[11px] font-bold pb-0.5">Online Quran</span>
                     </div>
                     {/* WhatsApp Chat Area */}
                     <div className="flex-grow p-2.5 flex flex-col gap-2 pt-4 relative">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-multiply pointer-events-none"></div>
                        <div className="w-full flex justify-center relative z-10"><span className="bg-black/10 text-[7px] font-bold px-2 py-0.5 rounded-full text-black/50 uppercase tracking-wide">Today</span></div>
                        
                        {/* Green bubble (User) */}
                        <div className="bg-[#dcf8c6] text-slate-800 text-[9px] p-2 rounded-lg rounded-tr-none self-end max-w-[85%] shadow-sm leading-tight relative z-10 font-medium">
                           Booking my trial class
                        </div>
                        {/* White bubble (Academy) */}
                        <div className="bg-white text-slate-800 text-[9px] p-2 rounded-lg rounded-tl-none self-start max-w-[95%] shadow-sm leading-tight mt-1 relative z-10 font-medium">
                           Thank you for your submission. Your message will be sent to the tutor and we&apos;ll schedule a class.
                        </div>
                     </div>
                     {/* Input Area */}
                     <div className="h-10 bg-[#f0f0f0] w-full flex items-center px-2 gap-1.5 pb-1 relative z-10">
                       <div className="flex-grow h-6 bg-white rounded-full flex items-center px-3 border border-slate-200"><span className="text-slate-400 text-[8px] font-medium">Message</span></div>
                       <div className="w-6 h-6 bg-[#128c7e] rounded-full flex items-center justify-center shadow-sm"><span className="text-white text-[8px] ml-0.5">▶</span></div>
                     </div>
                  </div>
               </motion.div>

               {/* Floating Decor Icons around visual */}
               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[8%] left-[-2%] z-30 w-10 h-10 bg-white/90 backdrop-blur rounded-[0.8rem] shadow-xl border border-white/60 flex items-center justify-center">
                 <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]/20" />
               </motion.div>
               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-[25%] left-[-5%] z-30 w-10 h-10 bg-white/90 backdrop-blur rounded-[0.8rem] shadow-xl border border-white/60 flex items-center justify-center">
                 <Calendar className="w-5 h-5 text-emerald-600" />
               </motion.div>
               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }} className="absolute top-[30%] right-[6%] z-30 w-10 h-10 bg-white/90 backdrop-blur rounded-[0.8rem] shadow-xl border border-white/60 flex items-center justify-center">
                 <Video className="w-5 h-5 text-blue-500" />
               </motion.div>
               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute bottom-[8%] right-[8%] z-30 w-14 h-14 bg-white/90 backdrop-blur rounded-[1rem] shadow-xl border border-white/60 flex items-center justify-center">
                 <BookOpen className="w-7 h-7 text-[#8b5a2b]" />
               </motion.div>
               <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-[50%] right-[1%] z-30 w-7 h-7 bg-[#25D366] rounded-full shadow-lg border-[3px] border-white flex items-center justify-center">
                 <CheckCircle2 className="w-4 h-4 text-white" />
               </motion.div>

            </div>
          </div>

          {/* CTA below whole composition */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mt-20 text-center relative z-20">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[60px] bg-teal-400 blur-[30px] opacity-40 z-0 pointer-events-none"></div>
             <Link href="/free-trial" className="relative z-10 inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#081a33] text-white font-extrabold shadow-[0_15px_30px_rgba(8,26,51,0.3)] hover:-translate-y-1 transition-all text-[15px] border border-slate-700 hover:bg-[#0a2140] hover:shadow-[0_20px_40px_rgba(20,184,166,0.3)] hover:border-teal-500/50">
               Book 3 Days Free Trial
             </Link>
          </motion.div>

        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <ParentTestimonialsSection />

      {/* 8. FREE TRIAL ENROLLMENT */}
      <FreeTrialEnrollmentSection />


      {/* 9. TRUSTED STRIP (TICKER) */}
      <section className="pt-12 lg:pt-20 pb-4 relative z-20 bg-[#081a33] overflow-hidden">
        {/* Subtle teal glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[150px] bg-teal-500/[0.03] rounded-full blur-[80px] pointer-events-none"></div>

        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 mb-7">
          
          {/* Main Heading Only */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-2xl md:text-[30px] font-extrabold text-teal-400 uppercase tracking-[2px] text-center drop-shadow-[0_0_15px_rgba(45,212,191,0.35)]">
              Trusted Worldwide Quran Learning
            </h3>
            <div className="w-16 h-[3px] bg-teal-500 rounded-full mt-4 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
          </div>

        </div>

        {/* Ticker Container with Edge Masks (FULL WIDTH) */}
        <div 
          className="relative w-full overflow-hidden z-10 [mask-image:_linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] [-webkit-mask-image:_linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)]"
        >
          <style>{`
            @keyframes ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-ticker {
              animation: ticker 40s linear infinite;
            }
            .animate-ticker:hover {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-ticker {
                animation-play-state: paused;
              }
            }
          `}</style>

          <div className="flex w-max animate-ticker items-center pb-2 pt-2">
            {[
              { type: 'country', name: 'USA', code: 'us' },
              { type: 'country', name: 'United Kingdom', code: 'gb' },
              { type: 'country', name: 'Canada', code: 'ca' },
              { type: 'country', name: 'Australia', code: 'au' },
              { type: 'country', name: 'Sweden', code: 'se' },
              { type: 'country', name: 'Germany', code: 'de' },
              { type: 'country', name: 'France', code: 'fr' },
              { type: 'country', name: 'Netherlands', code: 'nl' },
              { type: 'country', name: 'Italy', code: 'it' },
              { type: 'country', name: 'Spain', code: 'es' },
              { type: 'country', name: 'Norway', code: 'no' },
              { type: 'country', name: 'Denmark', code: 'dk' },
              { type: 'country', name: 'Europe', code: 'eu' },
              { type: 'country', name: 'Worldwide', code: 'un' },
              { type: 'text', name: 'Trusted Tutors', icon: Award },
              { type: 'text', name: 'One-to-One Classes', icon: Users },
              { type: 'text', name: 'Tajweed Focused', icon: BookOpen },
              { type: 'text', name: 'Parent Updates', icon: MessageCircle },
              { type: 'text', name: 'Flexible Timings', icon: Clock },
              { type: 'text', name: 'Safe Online Learning', icon: ShieldCheck },
              { type: 'text', name: '3 Days Free Trial', icon: CheckCircle2 },
              // Duplicate for seamless infinite loop
              { type: 'country', name: 'USA', code: 'us' },
              { type: 'country', name: 'United Kingdom', code: 'gb' },
              { type: 'country', name: 'Canada', code: 'ca' },
              { type: 'country', name: 'Australia', code: 'au' },
              { type: 'country', name: 'Sweden', code: 'se' },
              { type: 'country', name: 'Germany', code: 'de' },
              { type: 'country', name: 'France', code: 'fr' },
              { type: 'country', name: 'Netherlands', code: 'nl' },
              { type: 'country', name: 'Italy', code: 'it' },
              { type: 'country', name: 'Spain', code: 'es' },
              { type: 'country', name: 'Norway', code: 'no' },
              { type: 'country', name: 'Denmark', code: 'dk' },
              { type: 'country', name: 'Europe', code: 'eu' },
              { type: 'country', name: 'Worldwide', code: 'un' },
              { type: 'text', name: 'Trusted Tutors', icon: Award },
              { type: 'text', name: 'One-to-One Classes', icon: Users },
              { type: 'text', name: 'Tajweed Focused', icon: BookOpen },
              { type: 'text', name: 'Parent Updates', icon: MessageCircle },
              { type: 'text', name: 'Flexible Timings', icon: Clock },
              { type: 'text', name: 'Safe Online Learning', icon: ShieldCheck },
              { type: 'text', name: '3 Days Free Trial', icon: CheckCircle2 }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
              <div
                key={`${item.name}-${index}`}
                className="group w-max mx-2 sm:mx-3 flex items-center justify-center px-5 py-3.5 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors cursor-default select-none shrink-0"
              >
                {item.type === 'country' ? (
                  <div className="w-[18px] h-[18px] rounded-full overflow-hidden flex-shrink-0 border border-white/10 opacity-90 transition-opacity flex items-center justify-center mr-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={`https://flagcdn.com/w40/${item.code}.png`} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ) : Icon ? (
                  <div className="w-[18px] h-[18px] flex-shrink-0 opacity-90 transition-opacity flex items-center justify-center mr-3">
                    <Icon className="w-[15px] h-[15px] text-teal-400 group-hover:text-teal-300 transition-colors" strokeWidth={2.5} />
                  </div>
                ) : null}
                <span className="text-[14px] md:text-[15px] font-medium text-slate-300 group-hover:text-white transition-colors whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
              </div>
            )})}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10 mt-7">
          <div className="flex justify-center">
            <p className="text-base md:text-[17px] text-slate-400/80 text-center font-medium whitespace-normal md:whitespace-nowrap max-w-full">
              Helping Muslim families learn Quran with confidence, anywhere in the world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
