import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h3 className="text-xl font-semibold text-slate-900">Apex Stretch Films</h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md">Specialists in export-grade stretch film solutions for stable, secure, and efficient global shipments.</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Phone size={16} /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-2"><Mail size={16} /> sales@apexstretch.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900">Head Office</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5"/> 120 Industrial Park, Export Zone, Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Apex Stretch Films. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
