"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    countryCode: "+91",
    contact: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Request for Demo - ENGN-F1");
    const bodyText = `Hi ENGN-F1 Team,\n\nI am ${formData.name} from ${formData.company} and I would like to request a demo of the ENGN-F1 optimization engine.\n\n${formData.message ? `Additional details:\n${formData.message}\n\n` : ''}Regards,\n${formData.name}\nEmail: ${formData.email}\nContact: ${formData.countryCode} ${formData.contact}`;
    
    window.location.href = `mailto:engn2625@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  return (
    <section id="contact" className="py-32 bg-darker relative overflow-hidden flex flex-col items-center">
      
      {/* Background Aesthetics */}
      <div className="absolute top-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-neon-blue/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Start Your Optimization Journey with <br />
            <span className="text-neon-blue">ENGN-F1</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl">
            Tell us about your business challenges — our experts will connect, consult, and design a tailored optimization path for you.
          </p>
        </div>

        <div className="flex flex-col gap-16 max-w-4xl mx-auto">
          
          {/* Top Form Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full bg-[#11131a] border border-gray-800 rounded-xl p-8 md:p-12 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Request a Demo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    className="w-full bg-[#1c2130] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    className="w-full bg-[#1c2130] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-white">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name" 
                    className="w-full bg-[#1c2130] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm font-medium text-white">Contact No.</label>
                  <div className="flex gap-2">
                    <select 
                      name="countryCode" 
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="bg-[#1c2130] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-blue w-24"
                    >
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                    </select>
                    <input 
                      type="tel" 
                      id="contact"
                      name="contact"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="Enter contact number" 
                      className="w-full bg-[#1c2130] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your optimization needs" 
                  className="w-full bg-[#1c2130] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-4 flex justify-center md:justify-end">
                <button 
                  type="submit"
                  className="px-10 py-4 w-full md:w-auto bg-neon-blue text-black font-bold tracking-widest uppercase rounded-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  Request Demo
                </button>
              </div>
            </form>
          </motion.div>

          {/* Bottom Info Panel (Centered Address) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full text-center bg-dark border border-gray-800/50 rounded-xl p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-white mb-8">Direct Contact</h3>
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 relative z-10">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#1c2130] flex items-center justify-center text-neon-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-mono text-sm">engn2625@gmail.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#1c2130] flex items-center justify-center text-neon-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-mono text-sm">connect@engnf1.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#1c2130] flex items-center justify-center text-neon-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-mono text-sm">+91 8585835583</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 rounded-full bg-[#1c2130] flex items-center justify-center text-neon-blue">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="font-mono text-sm">India</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
