import { Suspense, lazy } from 'react';
import CustomCursor from './components/layout/CustomCursor';
import Home from './pages/Home';

const Hero = lazy(() => import('./components/sections/Hero'));
const Marquee = lazy(() => import('./components/ui/Marquee'));
const WorkCards = lazy(() => import('./components/sections/WorkCards'));


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
      <Home
        Hero={<Suspense fallback={<SectionLoader />}><Hero /></Suspense>}
        Marquee={<Suspense fallback={<SectionLoader />}><Marquee /></Suspense>}
        WorkCards={<Suspense fallback={<SectionLoader />}><WorkCards /></Suspense>}
      />
    </div>
  );
}