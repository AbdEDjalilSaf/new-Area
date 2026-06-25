import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import Home from './pages/Home';

// Lazy-loaded heavy sections for code splitting
const Hero = lazy(() => import('./components/sections/Hero'));
const Marquee = lazy(() => import('./components/ui/Marquee'));
const Work = lazy(() => import('./components/sections/Work'));
const About = lazy(() => import('./components/sections/About'));
const Services = lazy(() => import('./components/sections/Services'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
// const Contact = lazy(() => import('./components/sections/Contact'));

function SectionLoader() {
  return (
    <div className="w-full py-24 lg:py-36 flex items-center justify-center">
      <div className="skeleton w-full max-w-[1400px] mx-auto h-[200px] rounded-2xl" />
    </div>
  );
}

export default function App() {
  return (
    <div className="grain-overlay">
      <CustomCursor />
      <Navbar />
      <Home
        Hero={<Suspense fallback={<SectionLoader />}><Hero /></Suspense>}
        Marquee={<Suspense fallback={<SectionLoader />}><Marquee /></Suspense>}
        Work={<Suspense fallback={<SectionLoader />}><Work /></Suspense>}
        About={<Suspense fallback={<SectionLoader />}><About /></Suspense>}
        Services={<Suspense fallback={<SectionLoader />}><Services /></Suspense>}
        Testimonials={<Suspense fallback={<SectionLoader />}><Testimonials /></Suspense>}
        // Contact={<Suspense fallback={<SectionLoader />}><Contact /></Suspense>}
      />
      <Footer />
    </div>
  );
}