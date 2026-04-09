import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Hyroo?",
    answer: "Hyroo is a specialized recruitment firm helping businesses hire high-impact talent across mid-senior to CXO roles- faster, smarter, and better."
  },
  {
    question: "What services does Hyroo provide?",
    answer: `Talent Sourcing & Market Mapping
Identifying and engaging the right candidates across mid-senior to CXO roles through curated networks and targeted search.

Candidate Screening & Evaluation
Resume shortlisting, initial assessments, and fitment checks aligned to role, culture, and business goals.

Interview Coordination & Scheduling
End-to-end interview management between candidates and stakeholders to ensure speed and minimal drop-offs.

Offer Management & Closure Support
Compensation benchmarking, offer negotiations, and candidate closure to secure top talent.

Onboarding Support
Ensuring smooth candidate handover, joining formalities, and pre-joining engagement to reduce no-shows.

Hiring Advisory & Workforce Consulting
Role structuring, hiring strategy, talent market insights, and leadership hiring guidance.`
  },
  {
    question: "Who can use Hyroo services?",
    answer: `Our services support startups, SMBs, and large enterprises—including global MNCs and Fortune 500 companies—by delivering dependable recruitment expertise across domestic and international markets, without the cost and complexity of large in-house teams.`
  },
  {
    question: "Does Hyroo offer customized HR solutions?",
    answer: "Yes, Hyroo tailors its recruitment solutions to your business size, industry context, and specific hiring needs."
  },
  {
    question: "How can I get started with Hyroo?",
    answer: `You can get started by contacting us through our website or reaching out directly to our team. We’ll understand your hiring requirements and recommend the right recruitment solution for your business.

Email: aakriti@uniconhr.com
Phone: +91 9289888097`
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-accent text-lg font-bold mb-4">Frequently Asked Questions</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">
            Everything You Need to Know About Our HR Services
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-fit"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full px-8 py-6 flex items-center justify-between text-left transition-colors duration-300 min-h-[100px] ${activeIndex === index ? 'bg-accent/10' : 'bg-white'}`}
              >
                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? (
                    <Minus className="w-5 h-5 text-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
