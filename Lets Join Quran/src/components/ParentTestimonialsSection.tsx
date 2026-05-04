"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ParentTestimonialsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section id="parent-testimonials" className="pt-2 pb-24 lg:pt-4 lg:pb-32 relative overflow-hidden bg-[#fbfbf9]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft glowing blurs */}
        <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-teal-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-60"></div>
        <div className="absolute bottom-10 right-[10%] w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[120px] mix-blend-multiply opacity-60"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-[120px] mix-blend-multiply opacity-50"></div>
        
        {/* Islamic Corner Patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTMwIDBMMzAgMzBMMCAzMEwzMCAwWiIgZmlsbD0iIzA4MWEzMyIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTMwIDBMMzAgMzBMMCAzMEwzMCAwWiIgZmlsbD0iIzA4MWEzMyIvPjwvc3ZnPg==')] bg-repeat transform rotate-90"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTMwIDBMMzAgMzBMMCAzMEwzMCAwWiIgZmlsbD0iIzA4MWEzMyIvPjwvc3ZnPg==')] bg-repeat transform -rotate-90"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTMwIDBMMzAgMzBMMCAzMEwzMCAwWiIgZmlsbD0iIzA4MWEzMyIvPjwvc3ZnPg==')] bg-repeat transform rotate-180"></div>
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Header Area */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }} 
          variants={fadeUp} 
          className="text-center flex flex-col items-center mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-teal-50/80 text-[#081a33] text-[14px] md:text-[15px] font-bold tracking-widest uppercase mb-8 shadow-sm border border-teal-200/50 backdrop-blur-sm">
            What Parents Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-[#081a33] mb-6 tracking-tight relative">
            Parent <span className="relative whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Testimonials</span>
              {/* Decorative swoosh underline */}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-400/70 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                 <path d="M0,15 C30,0 70,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-[600px] leading-relaxed">
            Read what families around the world say about our academy.
          </p>
        </motion.div>

        {/* Main Conversation Layout */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={staggerContainer}
          className="relative max-w-[1050px] mx-auto w-full min-h-[600px] flex flex-col md:block"
        >
          {/* Connector Lines and Dots (SVG Background behind bubbles) */}
          <div className="absolute inset-0 pointer-events-none hidden md:block z-0">
            <svg className="w-full h-full" viewBox="0 0 1050 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              {/* Circular arcs/rings */}
              <circle cx="200" cy="400" r="180" stroke="#2dd4bf" strokeWidth="1.5" strokeOpacity="0.3" />
              <circle cx="850" cy="200" r="150" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.3" />
              <circle cx="900" cy="500" r="120" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.3" />

              {/* Connector lines matching the reference */}
              <path d="M 450 300 C 500 150, 600 100, 750 150" stroke="#2dd4bf" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.5" />
              <path d="M 850 350 C 900 450, 800 500, 650 450" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.5" />
              <path d="M 550 450 C 450 500, 300 450, 250 400" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.5" />

              {/* Colored Dots */}
              <circle cx="150" cy="200" r="6" fill="#2dd4bf" opacity="0.6" />
              <circle cx="170" cy="180" r="4" fill="#fbbf24" opacity="0.6" />
              <circle cx="500" cy="120" r="8" fill="#38bdf8" opacity="0.6" />
              <circle cx="800" cy="400" r="5" fill="#2dd4bf" opacity="0.6" />
              <circle cx="450" cy="520" r="6" fill="#081a33" opacity="0.6" />
              <circle cx="480" cy="500" r="4" fill="#2dd4bf" opacity="0.6" />
            </svg>
          </div>

          {/* TESTIMONIAL 1: Featured (Left) */}
          <motion.div 
            variants={fadeUp}
            className="md:absolute top-10 left-0 md:w-[500px] w-full mb-10 md:mb-0 z-20 group"
          >
            <div className="relative">
              {/* Bubble Container */}
              <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(8,26,51,0.06)] border-[3px] border-transparent bg-clip-padding transition-transform duration-500 group-hover:-translate-y-2 z-10">
                {/* Gradient Border Base */}
                <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[#081a33] via-[#081a33]/80 to-[#d4af37] p-[3px]"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-slate-200">
                  <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>

                {/* Stars */}
                <div className="flex gap-1.5 mb-6 relative z-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-[17px] md:text-[19px] text-[#081a33] font-medium leading-[1.6] mb-8 relative z-10">
                  My son’s confidence in reading has improved so much. The teacher is incredibly patient and knows exactly how to keep him engaged during the sessions.
                </p>

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-[#eaf4f4] flex items-center justify-center text-[#081a33] font-bold text-lg shadow-sm">
                    S
                  </div>
                  <div>
                    <h4 className="font-bold text-[#081a33] text-[16px]">Sarah M.</h4>
                    <span className="text-slate-500 text-sm">UK</span>
                  </div>
                </div>
              </div>
              
              {/* CSS Tail matching gradient (Bottom-left pointing down) */}
              <svg className="absolute -bottom-8 left-16 w-12 h-12 z-0" viewBox="0 0 40 40" fill="none">
                 {/* The shadow/border part of the tail */}
                 <path d="M 0 0 L 20 40 Q 25 40 25 30 L 40 0 Z" fill="#d4af37" />
                 <path d="M 4 0 L 20 32 Q 22 32 23 26 L 36 0 Z" fill="white" />
              </svg>
            </div>
          </motion.div>

          {/* TESTIMONIAL 2: Secondary Top (Right) */}
          <motion.div 
            variants={fadeUp}
            className="md:absolute top-0 right-0 md:w-[460px] w-full mb-10 md:mb-0 z-10 group"
          >
            <div className="relative">
              {/* Bubble Container */}
              <div className="relative bg-white rounded-[2rem] p-7 lg:p-8 shadow-[0_15px_40px_rgba(8,26,51,0.05)] border-[2px] border-transparent bg-clip-padding transition-transform duration-500 group-hover:-translate-y-1 z-10">
                {/* Gradient Border Base */}
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-400 via-emerald-300 to-sky-300 p-[2px]"></div>
                
                <div className="absolute top-6 right-6 text-slate-100">
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>

                <div className="flex gap-1.5 mb-5 relative z-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-[15px] md:text-[16px] text-[#081a33] font-medium leading-[1.6] mb-8 relative z-10">
                  We struggled to find a reliable academy with timings that suited our routine. Let’s Join Quran gave us flexibility, structure, and excellent one-to-one support.
                </p>

                <div className="flex items-center justify-between relative z-10 border-t border-slate-100 pt-5 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 font-bold shadow-sm">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-[#081a33] text-[15px]">Ahmed K.</h4>
                      <span className="text-slate-500 text-xs block">USA</span>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-[11px] font-bold uppercase tracking-wide">
                    USA
                  </div>
                </div>
              </div>

              {/* CSS Tail (Bottom-right pointing down-right) */}
              <svg className="absolute -bottom-6 right-16 w-12 h-10 z-0" viewBox="0 0 40 40" fill="none">
                 <path d="M 0 0 L 15 25 Q 20 30 30 40 L 40 0 Z" fill="#7dd3fc" />
                 <path d="M 4 0 L 17 21 Q 20 25 25 31 L 36 0 Z" fill="white" />
              </svg>
            </div>
          </motion.div>

          {/* TESTIMONIAL 3: Secondary Bottom (Right-Center) */}
          <motion.div 
            variants={fadeUp}
            className="md:absolute top-[280px] right-[60px] md:w-[460px] w-full z-30 group"
          >
            <div className="relative">
              {/* Bubble Container */}
              <div className="relative bg-white rounded-[2rem] p-7 lg:p-8 shadow-[0_15px_40px_rgba(8,26,51,0.05)] border-[2px] border-transparent bg-clip-padding transition-transform duration-500 group-hover:-translate-y-1 z-10">
                {/* Gradient Border Base */}
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-sky-300 to-[#d4af37] p-[2px]"></div>
                
                <div className="absolute top-6 right-6 text-slate-100">
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                </div>

                <div className="flex gap-1.5 mb-5 relative z-10">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  ))}
                </div>

                <p className="text-[15px] md:text-[16px] text-[#081a33] font-medium leading-[1.6] mb-8 relative z-10">
                  The Tajweed focus here is genuine. My daughter corrected many pronunciation mistakes within a short time, and the regular updates have been very reassuring.
                </p>

                <div className="flex items-center justify-between relative z-10 border-t border-slate-100 pt-5 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold shadow-sm">
                      F
                    </div>
                    <div>
                      <h4 className="font-bold text-[#081a33] text-[15px]">Fatima A.</h4>
                      <span className="text-slate-500 text-xs block">Canada</span>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-full text-[11px] font-bold uppercase tracking-wide">
                    Canada
                  </div>
                </div>
              </div>

              {/* CSS Tail (Bottom-left pointing down-left) */}
              <svg className="absolute -bottom-6 left-12 w-12 h-10 z-0 transform -scale-x-100" viewBox="0 0 40 40" fill="none">
                 <path d="M 0 0 L 15 25 Q 20 30 30 40 L 40 0 Z" fill="#7dd3fc" />
                 <path d="M 4 0 L 17 21 Q 20 25 25 31 L 36 0 Z" fill="white" />
              </svg>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
