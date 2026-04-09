import { motion } from "motion/react";
import { Calendar, User, ArrowUpRight } from "lucide-react";

const blogs = [
  {
    title: "The Indian Hiring Market Is Changing: Why Mid-Senior Talent Is More Selective Than Ever",
    date: "04 February, 2026",
    author: "Hyroo",
    excerpt: "For years, hiring in India favored employers due to high talent supply. That balance is now shifting...",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Hiring Leaders in India for Global and Multi-Market Roles",
    date: "01 February, 2026",
    author: "Hyroo Team",
    excerpt: "How to hire India-based leaders with the right experience to manage global and multi-market roles...",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Why CXO Hiring Is a Business Decision, Not an HR Task",
    date: "01 February, 2026",
    author: "Hyroo Team",
    excerpt: "Why CXO hiring should be treated as a strategic business decision rather than a routine HR process.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  }
];

export default function KnowledgeHub() {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-accent text-lg font-bold mb-4">Knowledge Hub</h2>
            <h3 className="text-4xl font-bold text-slate-900">
              Expert Insights on Careers, People, and Performance
            </h3>
          </div>
          <button className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Posts
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 group/img">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
              </div>
              
              <div className="flex items-center gap-6 text-sm text-slate-500 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blog.date}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blog.author}
                </div>
              </div>

              <h4 className="text-xl font-bold text-slate-900 mb-4 hover:text-accent transition-colors line-clamp-2 leading-tight">
                {blog.title}
              </h4>
              <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center gap-2 text-black font-bold transition-all group/link w-fit">
                <span className="relative">
                  Read More
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transition-transform duration-300 origin-right scale-x-100 group-hover/link:scale-x-0" />
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
