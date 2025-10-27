import { useState } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Products', href: '#products' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Certifications', href: '#certs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-600 to-sky-500 grid place-content-center text-white">
              <Globe size={18} />
            </div>
            <span className="font-semibold tracking-tight text-slate-900">Apex Stretch Films</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-slate-950 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 font-medium hover:bg-slate-800 transition-colors">
              <Phone size={18} /> Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block rounded-md px-3 py-2 bg-slate-900 text-white text-center" onClick={() => setOpen(false)}>
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
