import { motion } from "motion/react";
import { ArrowRight, Quote } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="text-left max-w-2xl lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
                Discover, Engage, Empower
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
                Helping Businesses Scale With the{" "}
                <span className="text-accent">Right Talent</span>, Globally
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                Hyroo is a dedicated, full-service talent advisory and recruitment firm that has been 
                helping companies hire top talent and scale efficiently for over 20 years.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2 group">
                  GET A QUOTE
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center">
                  ABOUT US
                </button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative overflow-hidden pt-12">
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse" />
              <img 
                src="https://uniconhr.com/uploads/home/hero/fcee46f70f51ad96c4824dcb246cfc4b.png" 
                alt="Hyroo Professional Character" 
                className="w-full max-w-[500px] h-auto drop-shadow-2xl translate-y-12"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
