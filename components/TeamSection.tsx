"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Arnab Das",
    role: "Co-founder",
    phone: "+91 7278183606",
    emails: ["arnbrxdas@gmail.com", "arnab@engnf1.com"],
    connectEmail: "arnbrxdas@gmail.com",
    linkedin: "https://www.linkedin.com/in/arnab-das-7748b6205/",
  },
  {
    name: "Sarthak Chakraborty",
    role: "Co-founder",
    phone: "+91 8585835583",
    emails: ["sarthak.chakraborty.144@gmail.com", "sarthak@engnf1.com"],
    connectEmail: "sarthak.chakraborty.144@gmail.com",
    linkedin: "https://www.linkedin.com/in/sarthakchakraborty/",
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Meet the Founders
          </h2>
          <p className="text-gray-400">The team building the future of intelligent systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-colors"
            >
              <div className="mb-6 border-b border-gray-800 pb-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>

              <div className="space-y-3 mb-8 text-sm">
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="text-gray-500 w-16">Phone:</span>
                  <span>{member.phone}</span>
                </div>
                
                {member.emails.map((email, eIdx) => (
                  <div key={eIdx} className="flex items-center gap-3 text-gray-300">
                    <span className="text-gray-500 w-16">{eIdx === 0 ? 'Email:' : ''}</span>
                    <span className="truncate">{email}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => window.location.href = `mailto:${member.connectEmail}`}
                  className="flex-1 text-center py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium"
                >
                  Contact
                </button>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
