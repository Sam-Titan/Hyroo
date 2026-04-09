import { motion } from "motion/react";
import { Briefcase, Users, CreditCard, Award, FileText } from "lucide-react";

const services = [
  {
    id: 1,
    name: "Staffing",
    type: "Contractual/commission based",
    inclusions: "Recruitment",
    ref: "Hunar",
    icon: Briefcase
  },
  {
    id: 2,
    name: "Outsourcing HR Teams",
    type: "Monthly retainer",
    inclusions: "Contracts, joining letter, hiring, leave",
    ref: "-",
    icon: Users
  },
  {
    id: 3,
    name: "Third Party Payroll",
    type: "Monthly retainer",
    inclusions: "-",
    ref: "Ranstad",
    icon: CreditCard
  },
  {
    id: 4,
    name: "Employer Branding",
    type: "Monthly retainer",
    inclusions: "LinkedIn, Glassdoor, Google reviews, CXO LinkedIn",
    ref: "-",
    icon: Award
  },
  {
    id: 5,
    name: "Playbook/Material",
    type: "One time sale",
    inclusions: "Contracts, joining letter, leave, policies",
    ref: "-",
    icon: FileText
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent text-lg font-bold mb-4 uppercase tracking-wider">Our Solutions</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Services</h3>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Comprehensive HR and recruitment solutions tailored to support your business growth and operational efficiency.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-6 text-sm font-bold text-slate-900 uppercase tracking-wider">Services</th>
                <th className="px-8 py-6 text-sm font-bold text-slate-900 uppercase tracking-wider">Type</th>
                <th className="px-8 py-6 text-sm font-bold text-slate-900 uppercase tracking-wider">Inclusions</th>
                <th className="px-8 py-6 text-sm font-bold text-slate-900 uppercase tracking-wider">Ref</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {services.map((service, index) => (
                <motion.tr 
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-slate-50/50 transition-colors group"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-slate-900">{service.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 text-slate-600 font-medium">{service.type}</td>
                  <td className="px-8 py-6 text-slate-600 leading-relaxed max-w-xs">{service.inclusions}</td>
                  <td className="px-8 py-6">
                    {service.ref !== "-" ? (
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                        {service.ref}
                      </span>
                    ) : (
                      <span className="text-slate-300">-</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
