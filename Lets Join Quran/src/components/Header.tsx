"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Pricing", href: "/pricing" },
  { name: "Free Trial", href: "/free-trial" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#081a33]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(8,26,51,0.6)] py-3 border-b border-white/5" 
          : "bg-[#081a33]/60 backdrop-blur-lg py-4 border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Lockup */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-[48px] h-[48px] md:w-[56px] md:h-[56px] transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
            <Image 
              src="/brand-icon-final.png" 
              alt="Let's Join Quran" 
              fill
              className="object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]"
              priority
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

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 p-1.5 bg-[#0a2140]/60 rounded-full border border-white/5 shadow-inner backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-[14px] font-bold transition-colors duration-300 z-10 ${
                  isActive ? "text-teal-50" : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-teal-500/20 border border-teal-400/30 rounded-full -z-10 shadow-[0_0_15px_rgba(20,184,166,0.15)]"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/free-trial"
            className="hidden md:inline-flex relative group items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-teal-400 text-[#081a33] font-extrabold shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="relative z-10 tracking-wide">Book Free Trial</span>
          </Link>
          
          <button
            className="lg:hidden p-2 text-slate-300 hover:bg-white/10 hover:text-white rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy border-b border-slate-800 overflow-hidden shadow-2xl absolute top-full left-0 w-full"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === link.href
                      ? "bg-white/10 text-teal-400"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Link
                  href="/free-trial"
                  onClick={() => setIsOpen(false)}
                  className="block text-center bg-teal-500 text-white px-6 py-3.5 rounded-xl font-bold shadow-md hover:bg-teal-400 transition-colors"
                >
                  Book Free Trial
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
