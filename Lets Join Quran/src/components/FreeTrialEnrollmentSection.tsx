"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Users, User, Globe, BookOpen, Calendar, MessageSquare, Send, Loader2 } from "lucide-react";

const COUNTRIES = [
  { name: "Afghanistan", dial: "+93", code: "af" }, { name: "Albania", dial: "+355", code: "al" }, { name: "Algeria", dial: "+213", code: "dz" }, { name: "Andorra", dial: "+376", code: "ad" }, { name: "Angola", dial: "+244", code: "ao" },
  { name: "Antigua and Barbuda", dial: "+1-268", code: "ag" }, { name: "Argentina", dial: "+54", code: "ar" }, { name: "Armenia", dial: "+374", code: "am" }, { name: "Australia", dial: "+61", code: "au" }, { name: "Austria", dial: "+43", code: "at" },
  { name: "Azerbaijan", dial: "+994", code: "az" }, { name: "Bahamas", dial: "+1-242", code: "bs" }, { name: "Bahrain", dial: "+973", code: "bh" }, { name: "Bangladesh", dial: "+880", code: "bd" }, { name: "Barbados", dial: "+1-246", code: "bb" },
  { name: "Belarus", dial: "+375", code: "by" }, { name: "Belgium", dial: "+32", code: "be" }, { name: "Belize", dial: "+501", code: "bz" }, { name: "Benin", dial: "+229", code: "bj" }, { name: "Bhutan", dial: "+975", code: "bt" },
  { name: "Bolivia", dial: "+591", code: "bo" }, { name: "Bosnia and Herzegovina", dial: "+387", code: "ba" }, { name: "Botswana", dial: "+267", code: "bw" }, { name: "Brazil", dial: "+55", code: "br" }, { name: "Brunei", dial: "+673", code: "bn" },
  { name: "Bulgaria", dial: "+359", code: "bg" }, { name: "Burkina Faso", dial: "+226", code: "bf" }, { name: "Burundi", dial: "+257", code: "bi" }, { name: "Cabo Verde", dial: "+238", code: "cv" }, { name: "Cambodia", dial: "+855", code: "kh" },
  { name: "Cameroon", dial: "+237", code: "cm" }, { name: "Canada", dial: "+1", code: "ca" }, { name: "Central African Republic", dial: "+236", code: "cf" }, { name: "Chad", dial: "+235", code: "td" }, { name: "Chile", dial: "+56", code: "cl" },
  { name: "China", dial: "+86", code: "cn" }, { name: "Colombia", dial: "+57", code: "co" }, { name: "Comoros", dial: "+269", code: "km" }, { name: "Congo", dial: "+242", code: "cg" }, { name: "Costa Rica", dial: "+506", code: "cr" },
  { name: "Croatia", dial: "+385", code: "hr" }, { name: "Cuba", dial: "+53", code: "cu" }, { name: "Cyprus", dial: "+357", code: "cy" }, { name: "Czech Republic", dial: "+420", code: "cz" }, { name: "Denmark", dial: "+45", code: "dk" },
  { name: "Djibouti", dial: "+253", code: "dj" }, { name: "Dominica", dial: "+1-767", code: "dm" }, { name: "Dominican Republic", dial: "+1-809", code: "do" }, { name: "Ecuador", dial: "+593", code: "ec" }, { name: "Egypt", dial: "+20", code: "eg" },
  { name: "El Salvador", dial: "+503", code: "sv" }, { name: "Equatorial Guinea", dial: "+240", code: "gq" }, { name: "Eritrea", dial: "+291", code: "er" }, { name: "Estonia", dial: "+372", code: "ee" }, { name: "Eswatini", dial: "+268", code: "sz" },
  { name: "Ethiopia", dial: "+251", code: "et" }, { name: "Fiji", dial: "+679", code: "fj" }, { name: "Finland", dial: "+358", code: "fi" }, { name: "France", dial: "+33", code: "fr" }, { name: "Gabon", dial: "+241", code: "ga" },
  { name: "Gambia", dial: "+220", code: "gm" }, { name: "Georgia", dial: "+995", code: "ge" }, { name: "Germany", dial: "+49", code: "de" }, { name: "Ghana", dial: "+233", code: "gh" }, { name: "Greece", dial: "+30", code: "gr" },
  { name: "Grenada", dial: "+1-473", code: "gd" }, { name: "Guatemala", dial: "+502", code: "gt" }, { name: "Guinea", dial: "+224", code: "gn" }, { name: "Guinea-Bissau", dial: "+245", code: "gw" }, { name: "Guyana", dial: "+592", code: "gy" },
  { name: "Haiti", dial: "+509", code: "ht" }, { name: "Honduras", dial: "+504", code: "hn" }, { name: "Hungary", dial: "+36", code: "hu" }, { name: "Iceland", dial: "+354", code: "is" }, { name: "India", dial: "+91", code: "in" },
  { name: "Indonesia", dial: "+62", code: "id" }, { name: "Iran", dial: "+98", code: "ir" }, { name: "Iraq", dial: "+964", code: "iq" }, { name: "Ireland", dial: "+353", code: "ie" }, { name: "Israel", dial: "+972", code: "il" },
  { name: "Italy", dial: "+39", code: "it" }, { name: "Jamaica", dial: "+1-876", code: "jm" }, { name: "Japan", dial: "+81", code: "jp" }, { name: "Jordan", dial: "+962", code: "jo" }, { name: "Kazakhstan", dial: "+7", code: "kz" },
  { name: "Kenya", dial: "+254", code: "ke" }, { name: "Kiribati", dial: "+686", code: "ki" }, { name: "Kuwait", dial: "+965", code: "kw" }, { name: "Kyrgyzstan", dial: "+996", code: "kg" }, { name: "Laos", dial: "+856", code: "la" },
  { name: "Latvia", dial: "+371", code: "lv" }, { name: "Lebanon", dial: "+961", code: "lb" }, { name: "Lesotho", dial: "+266", code: "ls" }, { name: "Liberia", dial: "+231", code: "lr" }, { name: "Libya", dial: "+218", code: "ly" },
  { name: "Liechtenstein", dial: "+423", code: "li" }, { name: "Lithuania", dial: "+370", code: "lt" }, { name: "Luxembourg", dial: "+352", code: "lu" }, { name: "Madagascar", dial: "+261", code: "mg" }, { name: "Malawi", dial: "+265", code: "mw" },
  { name: "Malaysia", dial: "+60", code: "my" }, { name: "Maldives", dial: "+960", code: "mv" }, { name: "Mali", dial: "+223", code: "ml" }, { name: "Malta", dial: "+356", code: "mt" }, { name: "Marshall Islands", dial: "+692", code: "mh" },
  { name: "Mauritania", dial: "+222", code: "mr" }, { name: "Mauritius", dial: "+230", code: "mu" }, { name: "Mexico", dial: "+52", code: "mx" }, { name: "Micronesia", dial: "+691", code: "fm" }, { name: "Moldova", dial: "+373", code: "md" },
  { name: "Monaco", dial: "+377", code: "mc" }, { name: "Mongolia", dial: "+976", code: "mn" }, { name: "Montenegro", dial: "+382", code: "me" }, { name: "Morocco", dial: "+212", code: "ma" }, { name: "Mozambique", dial: "+258", code: "mz" },
  { name: "Myanmar", dial: "+95", code: "mm" }, { name: "Namibia", dial: "+264", code: "na" }, { name: "Nauru", dial: "+674", code: "nr" }, { name: "Nepal", dial: "+977", code: "np" }, { name: "Netherlands", dial: "+31", code: "nl" },
  { name: "New Zealand", dial: "+64", code: "nz" }, { name: "Nicaragua", dial: "+505", code: "ni" }, { name: "Niger", dial: "+227", code: "ne" }, { name: "Nigeria", dial: "+234", code: "ng" }, { name: "North Korea", dial: "+850", code: "kp" },
  { name: "North Macedonia", dial: "+389", code: "mk" }, { name: "Norway", dial: "+47", code: "no" }, { name: "Oman", dial: "+968", code: "om" }, { name: "Pakistan", dial: "+92", code: "pk" }, { name: "Palau", dial: "+680", code: "pw" },
  { name: "Palestine", dial: "+970", code: "ps" }, { name: "Panama", dial: "+507", code: "pa" }, { name: "Papua New Guinea", dial: "+675", code: "pg" }, { name: "Paraguay", dial: "+595", code: "py" }, { name: "Peru", dial: "+51", code: "pe" },
  { name: "Philippines", dial: "+63", code: "ph" }, { name: "Poland", dial: "+48", code: "pl" }, { name: "Portugal", dial: "+351", code: "pt" }, { name: "Qatar", dial: "+974", code: "qa" }, { name: "Romania", dial: "+40", code: "ro" },
  { name: "Russia", dial: "+7", code: "ru" }, { name: "Rwanda", dial: "+250", code: "rw" }, { name: "Saint Kitts and Nevis", dial: "+1-869", code: "kn" }, { name: "Saint Lucia", dial: "+1-758", code: "lc" }, { name: "Saint Vincent and the Grenadines", dial: "+1-784", code: "vc" },
  { name: "Samoa", dial: "+685", code: "ws" }, { name: "San Marino", dial: "+378", code: "sm" }, { name: "Sao Tome and Principe", dial: "+239", code: "st" }, { name: "Saudi Arabia", dial: "+966", code: "sa" }, { name: "Senegal", dial: "+221", code: "sn" },
  { name: "Serbia", dial: "+381", code: "rs" }, { name: "Seychelles", dial: "+248", code: "sc" }, { name: "Sierra Leone", dial: "+232", code: "sl" }, { name: "Singapore", dial: "+65", code: "sg" }, { name: "Slovakia", dial: "+421", code: "sk" },
  { name: "Slovenia", dial: "+386", code: "si" }, { name: "Solomon Islands", dial: "+677", code: "sb" }, { name: "Somalia", dial: "+252", code: "so" }, { name: "South Africa", dial: "+27", code: "za" }, { name: "South Korea", dial: "+82", code: "kr" },
  { name: "South Sudan", dial: "+211", code: "ss" }, { name: "Spain", dial: "+34", code: "es" }, { name: "Sri Lanka", dial: "+94", code: "lk" }, { name: "Sudan", dial: "+249", code: "sd" }, { name: "Suriname", dial: "+597", code: "sr" },
  { name: "Sweden", dial: "+46", code: "se" }, { name: "Switzerland", dial: "+41", code: "ch" }, { name: "Syria", dial: "+963", code: "sy" }, { name: "Taiwan", dial: "+886", code: "tw" }, { name: "Tajikistan", dial: "+992", code: "tj" },
  { name: "Tanzania", dial: "+255", code: "tz" }, { name: "Thailand", dial: "+66", code: "th" }, { name: "Timor-Leste", dial: "+670", code: "tl" }, { name: "Togo", dial: "+228", code: "tg" }, { name: "Tonga", dial: "+676", code: "to" },
  { name: "Trinidad and Tobago", dial: "+1-868", code: "tt" }, { name: "Tunisia", dial: "+216", code: "tn" }, { name: "Turkey", dial: "+90", code: "tr" }, { name: "Turkmenistan", dial: "+993", code: "tm" }, { name: "Tuvalu", dial: "+688", code: "tv" },
  { name: "Uganda", dial: "+256", code: "ug" }, { name: "Ukraine", dial: "+380", code: "ua" }, { name: "United Arab Emirates", dial: "+971", code: "ae" }, { name: "United Kingdom", dial: "+44", code: "gb" }, { name: "United States", dial: "+1", code: "us" },
  { name: "Uruguay", dial: "+598", code: "uy" }, { name: "Uzbekistan", dial: "+998", code: "uz" }, { name: "Vanuatu", dial: "+678", code: "vu" }, { name: "Vatican City", dial: "+379", code: "va" }, { name: "Venezuela", dial: "+58", code: "ve" },
  { name: "Vietnam", dial: "+84", code: "vn" }, { name: "Yemen", dial: "+967", code: "ye" }, { name: "Zambia", dial: "+260", code: "zm" }, { name: "Zimbabwe", dial: "+263", code: "zw" }
];

const COURSES = [
  "Noorani Qaida",
  "Quran Reading",
  "Tajweed",
  "Hifz Support",
  "Islamic Studies"
];

const AGES = [
  "4–6",
  "7–10",
  "11–15",
  "16+",
  "Adult"
];

export default function FreeTrialEnrollmentSection() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState("us");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedAge, setSelectedAge] = useState("");

  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);
  const [isCourseOpen, setIsCourseOpen] = useState(false);
  const [isAgeOpen, setIsAgeOpen] = useState(false);
  
  const [countrySearch, setCountrySearch] = useState("");
  const [phoneSearch, setPhoneSearch] = useState("");

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section id="free-trial-enrollment" className="py-20 lg:py-28 relative overflow-hidden bg-[#fcfcf9]">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft glowing blurs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-100/50 rounded-full blur-[120px] mix-blend-multiply opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-60"></div>
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-sky-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-50"></div>
        
        {/* Subtle Islamic Arch Outline */}
        <svg className="absolute top-1/2 left-[10%] -translate-y-1/2 w-[800px] h-[800px] opacity-[0.03] text-[#081a33]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          <path d="M10,90 V40 C10,15 50,5 50,5 C50,5 90,15 90,40 V90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M20,90 V45 C20,25 50,15 50,15 C50,15 80,25 80,45 V90" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>

        {/* Decorative Dots */}
        <div className="absolute top-20 right-[40%] w-2 h-2 rounded-full bg-teal-400 opacity-60"></div>
        <div className="absolute bottom-40 left-[10%] w-3 h-3 rounded-full bg-amber-400 opacity-60"></div>
        <div className="absolute top-1/3 left-[50%] w-1.5 h-1.5 rounded-full bg-sky-400 opacity-60"></div>
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center lg:items-start justify-between">
          
          {/* LEFT COLUMN: Content & Trust */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-50px" }} 
            variants={staggerContainer}
            className="w-full lg:w-[45%] flex flex-col pt-4"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center px-5 py-2 rounded-full bg-teal-50/80 text-[#081a33] text-[13px] font-bold tracking-widest uppercase mb-8 shadow-sm border border-teal-200/50 backdrop-blur-sm self-start">
              Free Trial Class
            </motion.div>
            
            <motion.h2 variants={fadeUp} className="text-4xl lg:text-[50px] font-extrabold text-[#081a33] mb-6 tracking-tight leading-[1.15]">
              Start Quran Learning with <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Confidence</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-teal-400/70 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 C30,0 70,0 100,15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-[17px] text-slate-600 font-medium leading-[1.7] mb-10 max-w-[480px]">
              Fill out this short form and our team will help you choose the right course, teacher, and class timing for your child or family.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-5 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-teal-500" />
                </div>
                <span className="text-[17px] font-bold text-[#081a33]">3 Days Free Trial</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <span className="text-[17px] font-bold text-[#081a33]">Flexible Timings</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-sky-500" />
                </div>
                <span className="text-[17px] font-bold text-[#081a33]">One-to-One Classes</span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Form Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.95 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[50%] relative z-20"
          >
            {/* Form Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/30 via-sky-300/20 to-amber-300/30 blur-[80px] rounded-[3rem] -z-10 transform scale-95"></div>
            
            <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-10 shadow-[0_20px_60px_rgba(8,26,51,0.08)] border-[2px] border-white relative">
              <div className="mb-8">
                <h3 className="text-2xl lg:text-3xl font-extrabold text-[#081a33] mb-2">Book Your Free Trial</h3>
                <p className="text-[15px] text-slate-500 font-medium">We’ll contact you with suitable teacher and timing options.</p>
              </div>

              {isMounted ? (
                <form className="flex flex-col gap-5">
                  {/* 1. Student Name */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="Student Name *" 
                    required
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[15px] text-[#081a33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium"
                  />
                </div>

                {/* 2 & 3. Country and Phone (Row on desktop) */}
                <div className="flex flex-col sm:flex-row gap-5 relative z-30">
                  {/* Custom Country Dropdown */}
                  <div 
                    className="relative w-full sm:w-[45%]"
                    tabIndex={0}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) setIsCountryOpen(false);
                    }}
                  >
                    <div 
                      className="w-full pl-11 pr-10 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[15px] text-[#081a33] transition-all font-medium flex items-center cursor-pointer hover:border-teal-500 group-focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 relative"
                      onClick={() => { setIsCountryOpen(!isCountryOpen); setIsPhoneOpen(false); }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-slate-400 group-focus-within:text-teal-500" />
                      </div>
                      
                      {selectedCountry ? (
                        <div className="flex items-center gap-2 truncate">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={`https://flagcdn.com/w40/${selectedCountry}.png`} alt="flag" className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm shrink-0 bg-white" />
                          <span className="truncate">{COUNTRIES.find(c => c.code === selectedCountry)?.name}</span>
                        </div>
                      ) : (
                        <span className="text-slate-400">Country *</span>
                      )}

                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <svg className={`h-4 w-4 text-slate-400 transition-transform ${isCountryOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isCountryOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-xl shadow-[0_15px_40px_rgba(8,26,51,0.15)] border border-slate-100 overflow-hidden z-50 flex flex-col"
                        >
                          <div className="p-2 border-b border-slate-100">
                            <input 
                              type="text" 
                              placeholder="Search country..." 
                              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-teal-500 transition-colors placeholder:text-slate-400"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              autoFocus
                            />
                          </div>
                          <div className="max-h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                            {COUNTRIES.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase())).map(c => (
                              <div 
                                key={c.code}
                                className="flex items-center gap-2 px-3 py-2 hover:bg-teal-50 cursor-pointer transition-colors text-[14px] text-slate-700 hover:text-[#081a33]"
                                onClick={() => {
                                  setSelectedCountry(c.code);
                                  setSelectedPhoneCountry(c.code);
                                  setIsCountryOpen(false);
                                  setCountrySearch("");
                                }}
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={`https://flagcdn.com/w40/${c.code}.png`} alt="flag" className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm shrink-0 bg-white" />
                                <span className="truncate">{c.name}</span>
                              </div>
                            ))}
                            {COUNTRIES.filter(c => c.name.toLowerCase().includes(countrySearch.toLowerCase())).length === 0 && (
                              <div className="px-3 py-4 text-center text-slate-400 text-[13px]">No countries found</div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative group w-full sm:w-[55%] flex focus-within:ring-2 focus-within:ring-teal-500/20 rounded-xl transition-all">
                    {/* Custom Phone Code Dropdown Trigger */}
                    <div 
                      className="relative w-[110px] shrink-0 bg-slate-50/50 border border-slate-200 border-r-0 rounded-l-xl flex items-center justify-between px-3 hover:bg-slate-100 transition-colors cursor-pointer group-focus-within:border-teal-500 outline-none"
                      tabIndex={0}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget)) setIsPhoneOpen(false);
                      }}
                      onClick={() => { setIsPhoneOpen(!isPhoneOpen); setIsCountryOpen(false); }}
                    >
                      <div className="flex items-center gap-2 pointer-events-none">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={`https://flagcdn.com/w40/${selectedPhoneCountry}.png`} 
                          alt="flag" 
                          className="w-5 h-5 rounded-full object-cover shadow-sm border border-slate-200 bg-white" 
                        />
                        <span className="text-[#081a33] font-bold text-[14px]">
                          {COUNTRIES.find(c => c.code === selectedPhoneCountry)?.dial}
                        </span>
                      </div>
                      <svg className={`h-4 w-4 text-slate-400 transition-transform ${isPhoneOpen ? 'rotate-180' : ''} pointer-events-none`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isPhoneOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-[calc(100%+8px)] left-0 w-[260px] bg-white rounded-xl shadow-[0_15px_40px_rgba(8,26,51,0.15)] border border-slate-100 overflow-hidden z-50 flex flex-col cursor-default"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="p-2 border-b border-slate-100">
                              <input 
                                type="text" 
                                placeholder="Search country or code..." 
                                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-[13px] outline-none focus:border-teal-500 transition-colors placeholder:text-slate-400"
                                value={phoneSearch}
                                onChange={(e) => setPhoneSearch(e.target.value)}
                                autoFocus
                              />
                            </div>
                            <div className="max-h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                              {COUNTRIES.filter(c => c.name.toLowerCase().includes(phoneSearch.toLowerCase()) || c.dial.includes(phoneSearch)).map(c => (
                                <div 
                                  key={c.code}
                                  className="flex items-center justify-between px-3 py-2 hover:bg-teal-50 cursor-pointer transition-colors text-[14px] text-slate-700 hover:text-[#081a33]"
                                  onClick={() => {
                                    setSelectedPhoneCountry(c.code);
                                    setIsPhoneOpen(false);
                                    setPhoneSearch("");
                                  }}
                                >
                                  <div className="flex items-center gap-2 truncate pr-2">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={`https://flagcdn.com/w40/${c.code}.png`} alt="flag" className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm shrink-0 bg-white" />
                                    <span className="truncate">{c.name}</span>
                                  </div>
                                  <span className="font-semibold text-slate-500 text-[13px] shrink-0">{c.dial}</span>
                                </div>
                              ))}
                              {COUNTRIES.filter(c => c.name.toLowerCase().includes(phoneSearch.toLowerCase()) || c.dial.includes(phoneSearch)).length === 0 && (
                                <div className="px-3 py-4 text-center text-slate-400 text-[13px]">No results found</div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone Input Area */}
                    <div className="relative flex-grow">
                      <input 
                        type="tel" 
                        placeholder="Phone Number *" 
                        required
                        className="w-full pl-4 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-r-xl text-[15px] text-[#081a33] placeholder:text-slate-400 focus:outline-none focus:border-teal-500 transition-all font-medium border-l-0"
                      />
                    </div>
                  </div>
                </div>

                {/* 4 & 5. Course and Age (Row on desktop) */}
                <div className="flex flex-col sm:flex-row gap-5 relative z-20">
                  {/* Custom Course Dropdown */}
                  <div 
                    className="relative w-full sm:w-[55%]"
                    tabIndex={0}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) setIsCourseOpen(false);
                    }}
                  >
                    <div 
                      className="w-full pl-11 pr-10 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[15px] text-[#081a33] transition-all font-medium flex items-center cursor-pointer hover:border-teal-500 group-focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 relative"
                      onClick={() => { setIsCourseOpen(!isCourseOpen); setIsAgeOpen(false); }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <BookOpen className="h-5 w-5 text-slate-400 group-focus-within:text-teal-500" />
                      </div>
                      
                      {selectedCourse ? (
                        <span className="truncate">{selectedCourse}</span>
                      ) : (
                        <span className="text-slate-400">Select Course *</span>
                      )}

                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <svg className={`h-4 w-4 text-slate-400 transition-transform ${isCourseOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isCourseOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-xl shadow-[0_15px_40px_rgba(8,26,51,0.15)] border border-slate-100 overflow-hidden z-50 flex flex-col py-1.5"
                        >
                          {COURSES.map(course => (
                            <div 
                              key={course}
                              className="flex items-center px-4 py-2 hover:bg-teal-50 cursor-pointer transition-colors text-[14px] text-slate-700 hover:text-[#081a33]"
                              onClick={() => {
                                setSelectedCourse(course);
                                setIsCourseOpen(false);
                              }}
                            >
                              <span className="truncate">{course}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Custom Age Dropdown */}
                  <div 
                    className="relative w-full sm:w-[45%]"
                    tabIndex={0}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) setIsAgeOpen(false);
                    }}
                  >
                    <div 
                      className="w-full pl-11 pr-10 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[15px] text-[#081a33] transition-all font-medium flex items-center cursor-pointer hover:border-teal-500 group-focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-500/20 relative"
                      onClick={() => { setIsAgeOpen(!isAgeOpen); setIsCourseOpen(false); }}
                    >
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-slate-400 group-focus-within:text-teal-500" />
                      </div>
                      
                      {selectedAge ? (
                        <span className="truncate">{selectedAge}</span>
                      ) : (
                        <span className="text-slate-400">Student Age *</span>
                      )}

                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <svg className={`h-4 w-4 text-slate-400 transition-transform ${isAgeOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isAgeOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-[calc(100%+8px)] left-0 w-full bg-white rounded-xl shadow-[0_15px_40px_rgba(8,26,51,0.15)] border border-slate-100 overflow-hidden z-50 flex flex-col py-1.5"
                        >
                          {AGES.map(age => (
                            <div 
                              key={age}
                              className="flex items-center px-4 py-2 hover:bg-teal-50 cursor-pointer transition-colors text-[14px] text-slate-700 hover:text-[#081a33]"
                              onClick={() => {
                                setSelectedAge(age);
                                setIsAgeOpen(false);
                              }}
                            >
                              <span className="truncate">{age}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 6. Message */}
                <div className="relative group">
                  <div className="absolute top-4 left-0 pl-4 pointer-events-none">
                    <MessageSquare className="h-5 w-5 text-slate-400 group-focus-within:text-teal-500 transition-colors" />
                  </div>
                  <textarea 
                    placeholder="Message / Special Requirement" 
                    rows={3}
                    className="w-full pl-11 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl text-[15px] text-[#081a33] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="mt-2 w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-[#081a33] to-teal-700 hover:from-[#0a2140] hover:to-teal-600 text-white rounded-xl font-bold text-[16px] shadow-[0_10px_20px_rgba(20,184,166,0.25)] hover:shadow-[0_15px_25px_rgba(20,184,166,0.35)] transition-all hover:-translate-y-0.5 border border-teal-600/50"
                >
                  Book 3 Days Free Trial <Send className="w-4 h-4 ml-1" />
                </button>

                {/* Support Text */}
                <div className="text-center mt-3 flex items-center justify-center gap-1.5">
                  <p className="text-[13px] text-slate-500 font-medium">Prefer WhatsApp? We’ll contact you after your request.</p>
                </div>
              </form>
              ) : (
                <div className="flex flex-col gap-5 min-h-[400px] items-center justify-center">
                  <Loader2 className="w-8 h-8 text-teal-500 animate-spin" />
                  <p className="text-slate-500 text-sm font-medium">Loading form...</p>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
