import { Package, CheckCircle } from 'lucide-react';

const products = [
  {
    name: 'Machine Wrap',
    specs: ['Width: 500mm', 'Thickness: 15–30µm', 'Stretch: up to 300%', 'Clarity: High'],
    desc: 'High-performance film optimized for automated wrappers and high-speed lines.'
  },
  {
    name: 'Hand Wrap',
    specs: ['Width: 450mm', 'Thickness: 12–23µm', 'Core: 50mm / 3"', 'Low noise unwind'],
    desc: 'Versatile, strong, and easy to apply for manual operations and rework.'
  },
  {
    name: 'Pre-stretch',
    specs: ['Width: 400–450mm', 'Thickness: 6–12µm', 'Lightweight', 'Less material, same hold'],
    desc: 'Cost-efficient solution that reduces waste while maintaining load security.'
  },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="relative py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Product Range</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Stretch films engineered for stability, clarity, and efficiency—tailored to export requirements and regional standards.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-content-center">
                  <Package size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
              <ul className="mt-4 space-y-2">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle size={16} className="text-emerald-600" /> {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
