import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Column 1 */}
          <div>
            <div className="text-3xl font-display font-bold mb-8">
              Hyroo<span className="text-accent">.</span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We help businesses simplify HR processes with smart, reliable, and easy-to-use 
              technology designed to support growing teams.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold mb-8">Get In Touch With Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-400">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0" />
                <span>Offices in Gurgaon and Delhi</span>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Phone className="w-6 h-6 text-accent flex-shrink-0" />
                <a href="tel:+919289888097" className="hover:text-white transition-colors">+91 9289888097</a>
              </li>
              <li className="flex items-center gap-4 text-slate-400">
                <Mail className="w-6 h-6 text-accent flex-shrink-0" />
                <a href="mailto:aakriti@uniconhr.com" className="hover:text-white transition-colors">aakriti@uniconhr.com</a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {["Contact Us", "About Us", "Blog", "Services", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <p>© 2026 Hyroo. All rights reserved.</p>
          <p>Developed By Swayam</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
