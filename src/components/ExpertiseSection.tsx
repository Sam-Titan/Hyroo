import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-accent text-lg font-bold mb-4">Our Expertise</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              We Specialize in Mid-Senior to CXO Level Hiring
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We connect organizations with high-impact leaders and technologists who drive scale, 
              transformation, and results. Our experience spans fast-growing startups to global 
              enterprises, delivering talent that performs from day one.
            </p>
            
            <ul className="space-y-6 mb-10">
              {[
                "Technology, Product & IT Leadership Roles",
                "MNCs & High-Growth Startups",
                "20+ Years of Curated Talent Database"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-700 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-lg shadow-slate-200">
              GET A QUOTE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative flex justify-center"
          >
            <div className="relative">
              <img 
                src="https://uniconhr.com/uploads/home/expertise/c8bbc922b269d86c1a743112b18823c9.png" 
                alt="Expertise" 
                className="w-full max-w-[500px] h-auto drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500">Client Satisfaction</div>
                </div>
              </div>
              <div className="text-sm text-slate-600 font-medium">Trusted by Global Leaders</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
