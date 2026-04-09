import { motion } from "motion/react";

const stats = [
  { value: "20", label: "Years of Recruitment Expertise" },
  { value: "12000+", label: "Careers Built Across India & Overseas" },
  { value: "300+", label: "Technology & Leadership Roles Closed Every Year" },
  { value: "40+", label: "Specialist Recruiters & Talent Partners" },
  { value: "100+", label: "Clients Served — From Start-ups To Multinationals" },
  { value: "6", label: "Countries Served Through Global Hiring Mandates" },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-[#f0fdf4] text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-accent text-lg font-bold mb-4">Proven Impact</h2>
          <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-primary">
            A Driving Force in Shaping Global Talent Landscape
          </h3>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Trusted recruitment partners to Fortune 500 companies, global tech brands, and 
            fast-growing start-ups for two decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full bg-white border-4 border-accent/10 flex flex-col items-center justify-center p-6 shadow-xl group-hover:border-accent/30 transition-all duration-500 group-hover:scale-105">
                <div className="text-4xl lg:text-5xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="w-12 h-1 bg-accent/20 mb-3 rounded-full group-hover:w-20 transition-all" />
                <p className="text-slate-600 text-sm font-semibold leading-tight max-w-[140px]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
