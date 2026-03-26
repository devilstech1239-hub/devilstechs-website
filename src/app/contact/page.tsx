"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-32 pb-32 bg-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Let's Talk</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none">Estimate <br /><span className="text-primary">Project.</span></h1>
          <p className="text-text-gray text-lg leading-relaxed mb-12 max-w-md">
            Ready to provoke change? Tell us about your project, your goals, and your vision. We'll get back to you within 24 hours.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-[#151515] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Headquarters</h4>
                <p className="text-text-gray">V3 mall, adajan,<br />surat, gujarat.india</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-[#151515] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Call Us</h4>
                <p className="text-text-gray">+918160969105</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-[#151515] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wider">Email Us</h4>
                <p className="text-text-gray">support@devilstechs.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#151515] p-10 lg:p-14 border border-white/5"
        >
          <h3 className="text-3xl font-black text-white mb-8">Send a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">First Name</label>
                <input type="text" className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors text-base" placeholder="John" />
              </div>
              <div>
                <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">Last Name</label>
                <input type="text" className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors text-base" placeholder="Doe" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">Email Address</label>
                <input type="email" className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors text-base" placeholder="john@company.com" />
              </div>
              <div>
                <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">Phone Number</label>
                <input type="tel" className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors text-base" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <div>
              <label className="block text-text-gray text-xs font-bold uppercase tracking-widest mb-3">Project Details</label>
              <textarea rows={5} className="w-full bg-dark border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none text-base" placeholder="Tell us about your project..."></textarea>
            </div>
            <button className="w-full py-4 bg-primary text-dark font-black uppercase tracking-widest text-sm hover:bg-white flex items-center justify-center gap-2 transition-colors duration-300 mt-4 shadow-[0_0_20px_rgba(16,243,206,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              Submit Request <Send size={16} />
            </button>
          </form>
        </motion.div>

      </div>
    </div>
  );
}
