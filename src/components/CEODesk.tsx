import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function CEODesk() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-[35%] relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-[-2deg]">
              <img 
                src="https://uniconhr.com/uploads/home/founder/fc0cf57970b17eb3cc67be194ad5b9fd.jpeg" 
                alt="Aakriti Bansal - CEO" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/5 mix-blend-multiply" />
            </div>
            {/* Name Tag */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg border border-slate-100 z-20 whitespace-nowrap">
              <span className="text-primary font-bold">Aakriti Bansal</span>
            </div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-full flex items-center justify-center text-white shadow-xl">
              <Quote className="w-8 h-8 fill-current" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-3/5"
          >
            <h2 className="text-accent text-lg font-bold mb-4">From the CEO's Desk</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
              Building Careers. Building Trust
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed italic">
              <p>
                "UniconHR was built on a belief — that people are at the heart of every successful 
                organisation. Every role we close and every career we shape is a responsibility we 
                carry with sincerity and pride."
              </p>
              <p>
                "Over the years, we've had the privilege of supporting organisations through growth, 
                restructuring and global expansion, while helping thousands of professionals find 
                careers that truly align with their aspirations."
              </p>
              <p>
                "As we continue our journey, our commitment remains the same: to build meaningful 
                connections between exceptional talent and outstanding organisations."
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-slate-100">
              <div className="text-2xl font-display font-bold text-slate-900">Founder & CEO</div>
              <div className="text-accent font-semibold">Hyroo (formerly UniconHR)</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
