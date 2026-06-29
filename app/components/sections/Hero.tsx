"use client";

import { useState, useEffect } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
       <style>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          20% {
            opacity: 0;
            transform: scale(0.3) rotate(90deg);
          }
          40% {
            opacity: 0;
            transform: scale(0.3) rotate(90deg);
          }
          60% {
            opacity: 1;
            transform: scale(1.15) rotate(0deg);
          }
          80% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .star {
          animation: twinkle var(--duration) var(--delay) ease-in-out infinite;
          opacity: 0;
        }
      `}</style>

      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-20 overflow-hidden">
        {/* Ambient gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

        {/* ─── Twinkling Stars ─── */}
        {/* Star 1 — top-right area, large */}
       
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="star absolute pointer-events-none text-accent/70
            top-[12%] right-[8%]
            sm:top-[14%] sm:right-[10%]
            md:top-[10%] md:right-[12%]
            lg:top-[8%] lg:right-[14%]
            w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" style={{ '--duration': '3s', '--delay': '0s' } as React.CSSProperties} version="1.1" id="_x32_" viewBox="0 0 512 512" xmlSpace="preserve" fill="currentColor">
            <g>
              <path className="st0" d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917   c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9   c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904   C315.08,148.422,272.014,131.551,247.355,106.9z"/>
              <path className="st0" d="M407.471,304.339c-14.714-14.721-24.81-40.46-29.812-63.864c-5.011,23.404-15.073,49.142-29.803,63.872   c-14.73,14.714-40.464,24.801-63.864,29.812c23.408,5.01,49.134,15.081,63.864,29.811c14.73,14.722,24.81,40.46,29.82,63.864   c5.001-23.413,15.081-49.142,29.802-63.872c14.722-14.722,40.46-24.802,63.856-29.82   C447.939,329.14,422.201,319.061,407.471,304.339z"/>
              <path className="st0" d="M146.352,354.702c-4.207,19.648-12.655,41.263-25.019,53.626c-12.362,12.354-33.968,20.82-53.613,25.027   c19.645,4.216,41.251,12.656,53.613,25.027c12.364,12.362,20.829,33.96,25.036,53.618c4.203-19.658,12.655-41.255,25.023-53.626   c12.354-12.362,33.964-20.82,53.605-25.035c-19.64-4.2-41.251-12.656-53.613-25.019   C159.024,395.966,150.555,374.351,146.352,354.702z"/>
            </g>
          </svg>

        {/* Star 2 — mid-left area, medium */}
      

        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="star absolute pointer-events-none text-accent/50
                  top-[38%] left-[4%]
                  sm:top-[42%] sm:left-[3%]
                  md:top-[35%] md:left-[5%]
                  lg:top-[30%] lg:left-[6%]
                  w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-8 lg:h-8" style={{ '--duration': '4s', '--delay': '1.2s' } as React.CSSProperties} version="1.1" id="_x32_" viewBox="0 0 512 512" xmlSpace="preserve" fill="currentColor">
      <g>
        <path className="st0" d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917   c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9   c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904   C315.08,148.422,272.014,131.551,247.355,106.9z"/>
        <path className="st0" d="M407.471,304.339c-14.714-14.721-24.81-40.46-29.812-63.864c-5.011,23.404-15.073,49.142-29.803,63.872   c-14.73,14.714-40.464,24.801-63.864,29.812c23.408,5.01,49.134,15.081,63.864,29.811c14.73,14.722,24.81,40.46,29.82,63.864   c5.001-23.413,15.081-49.142,29.802-63.872c14.722-14.722,40.46-24.802,63.856-29.82   C447.939,329.14,422.201,319.061,407.471,304.339z"/>
        <path className="st0" d="M146.352,354.702c-4.207,19.648-12.655,41.263-25.019,53.626c-12.362,12.354-33.968,20.82-53.613,25.027   c19.645,4.216,41.251,12.656,53.613,25.027c12.364,12.362,20.829,33.96,25.036,53.618c4.203-19.658,12.655-41.255,25.023-53.626   c12.354-12.362,33.964-20.82,53.605-25.035c-19.64-4.2-41.251-12.656-53.613-25.019   C159.024,395.966,150.555,374.351,146.352,354.702z"/>
      </g>
      </svg>

        {/* Star 3 — bottom-right area, small */}
     
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="star absolute pointer-events-none text-accent/40
                  bottom-[22%] right-[18%]
                  sm:bottom-[18%] sm:right-[22%]
                  md:bottom-[15%] md:right-[25%]
                  lg:bottom-[12%] lg:right-[20%]
                  w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" style={{ '--duration': '3.5s', '--delay': '2.4s' } as React.CSSProperties} version="1.1" id="_x32_" viewBox="0 0 512 512" xmlSpace="preserve" fill="currentColor">
      <g>
        <path className="st0" d="M247.355,106.9C222.705,82.241,205.833,39.18,197.46,0c-8.386,39.188-25.24,82.258-49.899,106.917   c-24.65,24.642-67.724,41.514-106.896,49.904c39.188,8.373,82.254,25.235,106.904,49.895c24.65,24.65,41.522,67.72,49.908,106.9   c8.373-39.188,25.24-82.258,49.886-106.917c24.65-24.65,67.724-41.514,106.896-49.904   C315.08,148.422,272.014,131.551,247.355,106.9z"/>
        <path className="st0" d="M407.471,304.339c-14.714-14.721-24.81-40.46-29.812-63.864c-5.011,23.404-15.073,49.142-29.803,63.872   c-14.73,14.714-40.464,24.801-63.864,29.812c23.408,5.01,49.134,15.081,63.864,29.811c14.73,14.722,24.81,40.46,29.82,63.864   c5.001-23.413,15.081-49.142,29.802-63.872c14.722-14.722,40.46-24.802,63.856-29.82   C447.939,329.14,422.201,319.061,407.471,304.339z"/>
        <path className="st0" d="M146.352,354.702c-4.207,19.648-12.655,41.263-25.019,53.626c-12.362,12.354-33.968,20.82-53.613,25.027   c19.645,4.216,41.251,12.656,53.613,25.027c12.364,12.362,20.829,33.96,25.036,53.618c4.203-19.658,12.655-41.255,25.023-53.626   c12.354-12.362,33.964-20.82,53.605-25.035c-19.64-4.2-41.251-12.656-53.613-25.019   C159.024,395.966,150.555,374.351,146.352,354.702z"/>
      </g>
      </svg>
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl lg:text-[110px] xl:text-[130px] font-black leading-[0.9] tracking-tighter mb-8">
            <span className={`block animate-fade-up ${loaded ? '' : 'opacity-0'}`}>
              Creative
            </span>
            <span
              className={`block animate-fade-up delay-100 ${loaded ? '' : 'opacity-0'}`}
            >
              Dev<span className="text-accent">el</span>oper
            </span>
            <span
              className={`block text-stroke animate-fade-up delay-200 ${loaded ? '' : 'opacity-0'}`}
            >
              &amp; Engineer
            </span>
          </h1>

          {/* Sub text + CTA */}
          <div
            className={`flex flex-col sm:flex-row sm:items-end justify-between gap-8 animate-fade-up delay-400 ${
              loaded ? '' : 'opacity-0'
            }`}
          >
            <p className="max-w-md text-subtle text-base lg:text-lg leading-relaxed">
              I craft immersive digital experiences that blend bold development with
              clean, performant code. Based in Algeria, working globally.
            </p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-border">
          <div
            className={`h-full bg-accent/30 animate-fade-in delay-700 ${loaded ? '' : 'opacity-0'}`}
          />
        </div>
      </section>
    </> 
  );
}
