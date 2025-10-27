import { Factory, Shield, Ship } from 'lucide-react';

const items = [
  {
    icon: Factory,
    title: 'Manufacturing',
    desc: 'Multi-layer LLDPE with precision thickness control and high clarity.'
  },
  {
    icon: Shield,
    title: 'Quality Control',
    desc: 'Batch traceability, tensile testing, and load retention validation.'
  },
  {
    icon: Ship,
    title: 'Export Logistics',
    desc: 'INCO terms expertise, pallet optimization, and global partner network.'
  }
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Capabilities</h2>
          <p className="mt-2 text-slate-600">From resin sourcing to final dispatch, we optimize every step to deliver consistent performance and reliable lead times.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-content-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
