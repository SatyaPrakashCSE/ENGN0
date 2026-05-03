"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Arnab Das",
    role: "Co-founder",
    phone: "+91 7278183606",
    emails: ["arnbrxdas@gmail.com", "arnab@engnf1.com"],
    connectEmail: "arnbrxdas@gmail.com",
    accentBorder: "border-neon-blue",
    accentText: "text-neon-blue",
    hoverBg: "hover:bg-neon-blue/10",
    glowGradient: "from-neon-blue/0 to-neon-blue/5"
  },
  {
    name: "Sarthak Chakraborty",
    role: "Co-founder",
    phone: "+91 8585835583",
    emails: ["sarthak.chakraborty.144@gmail.com", "sarthak@engnf1.com"],
    connectEmail: "sarthak.chakraborty.144@gmail.com",
    accentBorder: "border-neon-green",
    accentText: "text-neon-green",
    hoverBg: "hover:bg-neon-green/10",
    glowGradient: "from-neon-green/0 to-neon-green/5"
  }
];

export default function TeamSection() {
  return (
    <section id="founders" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-neon-blue font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Command Hierarchy
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-green">Founders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`relative bg-dark border border-gray-800 p-8 lg:p-10 group hover:border-gray-600 transition-colors`}
            >
              {/* Corner Accents */}
              <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${member.accentBorder}`}></div>
              <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${member.accentBorder}`}></div>

              <div className="mb-8 border-b border-gray-800 pb-6">
                <p className="font-mono text-xs text-gray-500 mb-3 tracking-widest"></p>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2 uppercase tracking-wide">{member.name}</h3>
                <p className={`font-mono text-sm ${member.accentText}`}>{member.role}</p>
              </div>

              <div className="space-y-4 mb-12 font-mono text-sm">
                <div className="flex items-center gap-4 text-gray-400 group-hover:text-gray-200 transition-colors">
                  <span className="w-20 text-gray-600">COMMS.1 //</span>
                  <span>{member.phone}</span>
                </div>
                
                {member.emails.map((email, eIdx) => (
                  <div key={eIdx} className="flex items-center gap-4 text-gray-400 group-hover:text-gray-200 transition-colors">
                    <span className="w-20 text-gray-600">COMMS.{eIdx + 2} //</span>
                    <span className="truncate">{email}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.location.href = `mailto:${member.connectEmail}`}
                className={`inline-block w-full text-center py-4 border ${member.accentBorder} ${member.accentText} font-mono text-sm uppercase tracking-widest ${member.hoverBg} transition-all active:scale-95 relative z-10`}
              >
                [ Initialize Handshake ]
              </button>
              
              {/* Subtle hover glow */}
              <div className={`absolute inset-0 bg-linear-to-b ${member.glowGradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
