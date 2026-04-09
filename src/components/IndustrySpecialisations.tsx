import { motion } from "motion/react";
import { 
  Car, 
  Cpu, 
  Banknote, 
  Factory, 
  Stethoscope, 
  ShoppingBag, 
  Truck 
} from "lucide-react";

const industries = [
  {
    title: "Automobile & Auto Components",
    desc: "Driving talent across OEMs, EV players, and auto component manufacturers.",
    icon: Car,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Information Technology & Digital",
    desc: "Building high-impact tech, product, and digital teams at scale.",
    icon: Cpu,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "BFSI & FinTech",
    desc: "Hiring trusted leaders and specialists for regulated, fast-evolving financial ecosystems.",
    icon: Banknote,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Manufacturing & Engineering",
    desc: "Powering plants and projects with technically strong and execution-focused talent.",
    icon: Factory,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Healthcare & Pharmaceuticals",
    desc: "Supporting growth with skilled professionals across clinical, commercial, and R&D roles.",
    icon: Stethoscope,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Ecommerce, Retail & Internet Businesses",
    desc: "Growth and digital leaders for high-velocity businesses.",
    icon: ShoppingBag,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Supply Chain and Logistics",
    desc: "Strengthening operations with leaders who move businesses efficiently and reliably.",
    icon: Truck,
    color: "bg-slate-50 text-slate-600"
  }
];

export default function IndustrySpecialisations() {
  return (
    <section className="py-24 bg-[#064e3b]" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-accent text-lg font-bold mb-4 uppercase tracking-wider">Industry-Specific Hiring</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">Industry Specialisations</h3>
          <p className="text-emerald-100/70 text-lg max-w-3xl mx-auto">
            Each industry is unique — so is its talent. With deep sector expertise, Hyroo delivers 
            industry-specific hiring solutions for precise and scalable recruitment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-8">
                {/* Outer Glow/Container */}
                <div className="w-24 h-24 rounded-[2rem] bg-emerald-900/50 flex items-center justify-center border border-emerald-800/50 group-hover:border-accent/50 transition-all">
                  {/* Inner Icon Container */}
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20 group-hover:scale-110 transition-transform">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold text-white mb-4 leading-tight px-4">{industry.title}</h4>
              <p className="text-emerald-100/60 text-sm leading-relaxed px-4">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
