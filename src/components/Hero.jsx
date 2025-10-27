import { motion } from 'framer-motion';
import { Ship, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-sky-50 to-white" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
            >
              Premium Stretch Film for Global Logistics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-lg text-slate-600 max-w-xl"
            >
              Engineered for load stability, clarity, and efficiency. Export-ready manufacturing with consistent quality, reliable lead times, and worldwide shipping.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-6 py-3 font-medium hover:bg-slate-800">
                Request Pricing
              </a>
              <a href="#products" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-medium text-slate-800 hover:bg-slate-50">
                View Specifications
              </a>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <Feature icon={<Ship className="text-slate-900" size={20} />} title="Global Shipping" desc="Sea, air, and land logistics" />
              <Feature icon={<Shield className="text-slate-900" size={20} />} title="ISO Standards" desc="Consistent batch quality" />
              <Feature icon={<Award className="text-slate-900" size={20} />} title="OEM/Private Label" desc="Custom branding available" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-xl ring-1 ring-black/5 p-6 grid place-content-center">
              <div className="relative">
                <div className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-tr from-indigo-100 to-sky-100 blur-xl" />
                <div className="relative rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                  <div className="h-40 w-40 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-sky-500" />
                  <p className="mt-4 text-center text-sm text-slate-600">
                    High-clarity LLDPE stretch film rolls
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, desc }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-md bg-slate-900 text-white grid place-content-center">
          {icon}
        </div>
        <div>
          <p className="font-semibold text-slate-900">{title}</p>
          <p className="text-xs text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
