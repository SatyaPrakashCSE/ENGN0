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
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Contact Us
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tell us about your business challenges, and our experts will connect to design a tailored solution for you.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full bg-gray-900/50 border border-gray-800 rounded-xl p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact" className="text-sm font-medium text-gray-300">Contact No.</label>
                  <div className="flex gap-2">
                    <select 
                      name="countryCode" 
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="bg-gray-800/50 border border-gray-700 rounded-lg px-3 py-3 text-white focus:outline-none focus:border-gray-500 w-24"
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
                      placeholder="Contact number" 
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your optimization needs" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2 flex justify-end">
                <button 
                  type="submit"
                  className="px-8 py-3 w-full md:w-auto bg-gray-200 text-black font-semibold rounded-lg hover:bg-white transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full text-center flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-gray-400"
          >
            <div>
              <span className="block text-sm text-gray-500 mb-1">Email</span>
              <a href="mailto:engn2625@gmail.com" className="hover:text-gray-200 transition-colors">engn2625@gmail.com</a>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-800"></div>
            <div>
              <span className="block text-sm text-gray-500 mb-1">Phone</span>
              <span className="text-gray-300">+91 8585835583</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-800"></div>
            <div>
              <span className="block text-sm text-gray-500 mb-1">Location</span>
              <span className="text-gray-300">India</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-800"></div>
            <div>
              <span className="block text-sm text-gray-500 mb-1">Follow Us</span>
              <a href="https://www.linkedin.com/company/engn-f1/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-300 hover:text-gray-200 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
