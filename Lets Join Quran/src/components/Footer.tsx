import Link from "next/link";
import Image from "next/image";
import { BookOpen, Mail, Phone, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import React from "react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#081a33] text-slate-300 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-sky-500/10 blur-[120px]"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay"></div>
        
        {/* Subtle Corner Patterns (White version) */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTMwIDBMMzAgMzBMMCAzMEwzMCAwWiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')] bg-repeat"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTMwIDBMMzAgMzBMMCAzMEwzMCAwWiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg==')] bg-repeat transform rotate-180"></div>
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* 1) PRE-FOOTER CTA STRIP */}
        <div className="relative w-full bg-gradient-to-br from-[#0a2140] to-[#061428] border border-teal-500/20 rounded-[2rem] p-10 md:p-14 mb-20 shadow-[0_20px_50px_rgba(8,26,51,0.5)] overflow-hidden flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-8 backdrop-blur-sm group">
          {/* Inner Decorative Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/10 blur-[80px] pointer-events-none rounded-full transform group-hover:bg-teal-500/20 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500/10 blur-[80px] pointer-events-none rounded-full"></div>

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Ready to start learning?
            </h3>
            <p className="text-[17px] text-teal-50/70 font-medium leading-relaxed">
              Join families worldwide experiencing the difference of 1-to-1 Quran classes.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Link 
              href="/free-trial" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-teal-500 text-white font-extrabold shadow-[0_10px_25px_rgba(20,184,166,0.4)] hover:-translate-y-1 transition-all text-[15px] hover:bg-teal-400 hover:shadow-[0_15px_35px_rgba(20,184,166,0.5)]"
            >
              Book 3 Days Free Trial
            </Link>
          </div>
        </div>

        {/* 2) MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="lg:col-span-4 space-y-6 lg:pr-6">
            <Link href="/" className="flex items-center gap-3.5 group mb-2">
              <div className="relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                <Image 
                  src="/brand-icon-final.png" 
                  alt="Let's Join Quran" 
                  fill
                  className="object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[14px] md:text-[15px] font-extrabold text-teal-400 leading-[1] tracking-wide text-left mb-[3px]">
                  Let’s Join
                </span>
                <span className="text-[22px] md:text-[25px] font-black text-white leading-[0.9] tracking-[0.03em] uppercase text-left">
                  QURAN
                </span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-[15px] font-medium max-w-sm">
              A premium online academy offering personalised Quran classes for kids and adults worldwide. Learn with Tajweed from the comfort of your home.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: FacebookIcon, href: "#", name: "Facebook" },
                { icon: InstagramIcon, href: "#", name: "Instagram" },
                { icon: YoutubeIcon, href: "#", name: "YouTube" },
                { icon: MessageCircle, href: "#", name: "WhatsApp" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href} 
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:border-teal-500 hover:text-white hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-extrabold text-[17px] mb-6 tracking-wide flex items-center gap-2">
              Quick Links
              <div className="h-[2px] w-6 bg-teal-500/50 rounded-full"></div>
            </h3>
            <ul className="space-y-3.5 text-[15px] font-medium">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Courses", href: "/courses" },
                { name: "Pricing Plans", href: "/pricing" },
                { name: "Book Free Trial", href: "/free-trial" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: POPULAR COURSES */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-extrabold text-[17px] mb-6 tracking-wide flex items-center gap-2">
              Courses
              <div className="h-[2px] w-6 bg-teal-500/50 rounded-full"></div>
            </h3>
            <ul className="space-y-3.5 text-[15px] font-medium">
              {[
                { name: "Noorani Qaida", href: "/courses" },
                { name: "Quran Reading", href: "/courses" },
                { name: "Quran with Tajweed", href: "/courses" },
                { name: "Hifz Program", href: "/courses" },
                { name: "Islamic Studies", href: "/courses" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors inline-flex items-center gap-2 group">
                    <ChevronRight size={14} className="text-slate-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-extrabold text-[17px] mb-6 tracking-wide flex items-center gap-2">
              Contact Info
              <div className="h-[2px] w-6 bg-teal-500/50 rounded-full"></div>
            </h3>
            <ul className="space-y-5 text-[15px] font-medium">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-all text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                  <Phone className="w-[18px] h-[18px]" />
                </div>
                <div className="pt-0.5">
                  <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1 font-bold">WhatsApp / Call</p>
                  <a href="https://wa.me/923161610705" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-teal-400 transition-colors block font-semibold tracking-wide">
                    +92 316 161 0705
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-all text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                  <Mail className="w-[18px] h-[18px]" />
                </div>
                <div className="pt-0.5">
                  <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1 font-bold">Email Support</p>
                  <a href="mailto:info@letsjoinquran.com" className="text-slate-200 hover:text-teal-400 transition-colors block font-semibold tracking-wide">
                    info@letsjoinquran.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-all text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.1)]">
                  <MapPin className="w-[18px] h-[18px]" />
                </div>
                <div className="pt-0.5">
                  <p className="text-slate-500 text-[11px] uppercase tracking-widest mb-1 font-bold">Available Globally</p>
                  <span className="text-slate-200 block font-semibold tracking-wide">
                    USA, UK, Canada, Australia
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between text-[13px] font-bold tracking-wide text-slate-500">
          <p>© {new Date().getFullYear()} Let’s Join Quran. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <Link href="/" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-teal-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
