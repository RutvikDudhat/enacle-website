const Footer = () => (
  <footer className="bg-foreground text-white/60 py-16 px-4">
    <div className="container mx-auto max-w-7xl">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-lg text-white mb-4">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-sm">☀️</div>
            Solar<span className="gradient-text">CRM</span>
          </div>
          <p className="text-sm leading-relaxed">The all-in-one platform for modern solar businesses. Manage leads, projects, and billing seamlessly.</p>
        </div>
        {[
          { title: "Product", links: ["Features", "Pricing", "Integrations", "API", "Security"] },
          { title: "Company", links: ["About", "Blog", "Careers", "Contact", "Partners"] },
          { title: "Support", links: ["Help Center", "Documentation", "Community", "Status", "Privacy Policy"] },
        ].map((col) => (
          <div key={col.title}>
            <div className="font-bold text-white text-sm mb-4">{col.title}</div>
            <div className="space-y-2">
              {col.links.map((link) => (
                <a key={link} href="#" className="block text-sm hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">© 2026 SolarCRM. All rights reserved.</p>
        <div className="flex gap-4 text-xs">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
