import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => (
  <footer className="bg-footer text-footer py-16 px-6">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
        <div className="lg:col-span-2">
          <h4 className="text-xl font-bold text-white mb-3">WebNest Consultancy Services</h4>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            Strategic design and advisory solutions for modern businesses and unforgettable dining experiences.
          </p>
          <div className="flex items-center gap-2 max-w-xs">
            <Input
              placeholder="Get design tips & updates"
              className="bg-white/10 border-white/10 text-white placeholder:text-white/40 rounded-full text-sm h-10"
            />
            <Button size="sm" className="rounded-full px-4 shrink-0 bg-white text-foreground hover:bg-white/90 h-10">
              Join
            </Button>
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Services</h5>
          <ul className="space-y-3">
            {["Website Design", "Accounting & Consultancy", "Menu Design", "Brand Identity"].map((s) => (
              <li key={s}>
                <button onClick={() => scrollTo("services")} className="text-sm hover:text-white transition-colors text-left">
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h5>
          <ul className="space-y-3">
            <li><button onClick={() => scrollTo("why-us")} className="text-sm hover:text-white transition-colors text-left">About</button></li>
            <li><button onClick={() => scrollTo("portfolio")} className="text-sm hover:text-white transition-colors text-left">Portfolio</button></li>
            <li><button onClick={() => scrollTo("process")} className="text-sm hover:text-white transition-colors text-left">Process</button></li>
            <li><button onClick={() => scrollTo("faq")} className="text-sm hover:text-white transition-colors text-left">FAQ</button></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Connect</h5>
          <ul className="space-y-3">
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Instagram</a></li>
            <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Pinterest</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">LinkedIn</a></li>
            <li><a href="mailto:Adhiyantverma00623@gmail.com" className="text-sm hover:text-white transition-colors">Email Us</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">© {new Date().getFullYear()} WebNest Consultancy Services. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://www.termsfeed.com/live/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">Privacy Policy</a>
          <a href="https://www.termsfeed.com/live/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
