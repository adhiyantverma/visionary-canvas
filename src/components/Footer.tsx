const footerLinks = {
  Services: ["Websites", "Wedding Cards", "Menu Design", "Branding"],
  Portfolio: ["Web Projects", "Invitations", "Menus", "Logos"],
  Company: ["About", "Process", "Careers", "Blog"],
  Connect: ["Instagram", "Pinterest", "LinkedIn", "Email"],
};

const Footer = () => (
  <footer className="bg-apple-gray border-t border-border px-6 py-16">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-xs font-semibold text-foreground tracking-wide mb-4">
              {heading}
            </h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-xs text-apple-secondary hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-apple-secondary">
          © {new Date().getFullYear()} Studio. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-apple-secondary hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-xs text-apple-secondary hover:text-foreground transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
