import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Capabilities from './components/Capabilities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Capabilities />
      </main>
      <Footer />
    </div>
  );
}

export default App;
