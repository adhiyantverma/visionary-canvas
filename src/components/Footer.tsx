import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const footerLinks = {
  Services: ["Website Design", "Wedding Invitations", "Menu Design", "Brand Identity"],
  Company: ["About", "Portfolio", "Process", "Blog"],
  Connect: ["Instagram", "Pinterest", "LinkedIn", "Email"],
};

const Footer = () => (
  <footer className="bg-footer text-footer py-16 px-6">
    <div className="section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
        <div className="lg:col-span-2">
          <h4 className="text-xl font-bold text-white mb-3">Cre8tive</h4>
          <p className="text-sm leading-relaxed mb-6 max-w-xs">
            Strategic design solutions for modern businesses, beautiful weddings, and unforgettable dining experiences.
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

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h5 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">{heading}</h5>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">© {new Date().getFullYear()} Cre8tive Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
