import Link from "next/link";
import { Zap, Twitter, Github, Linkedin, Youtube } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Platform Overview", href: "/platform" },
      { label: "AI Agents", href: "/platform#agents" },
      { label: "Brain MAX", href: "/products" },
      { label: "Automations", href: "/platform#automations" },
      { label: "Dashboards", href: "/platform#dashboards" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Engineering", href: "/solutions#engineering" },
      { label: "For Marketing", href: "/solutions#marketing" },
      { label: "For Sales", href: "/solutions#sales" },
      { label: "For Support", href: "/solutions#support" },
      { label: "For Executives", href: "/solutions#executives" },
      { label: "Enterprise", href: "/solutions#enterprise" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Community", href: "/community" },
      { label: "Changelog", href: "/changelog" },
      { label: "Status", href: "/status" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Partners", href: "/partners" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIAL = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="mx-auto max-w-350 px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pt-16 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#7B68EE,#FD71AF)" }}>
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">Enacle</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-xs">
              The AI-Powered Operating System for modern businesses. One platform to replace every disconnected tool.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#f59e0b] hover:text-[#0f172a] transition-colors"
                >
                  <s.icon className="h-3.5 w-3.5 text-slate-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Enacle, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/security" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
