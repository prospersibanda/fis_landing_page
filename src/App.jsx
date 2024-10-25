import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="home" className="pt-16">
        <Hero />
      </div>
      <HowItWorks />
      <Services />
      <About />
      <Contact />
      <CTA />
    </div>
  );
}

export default App;