export default function Footer() {
  return (
    <footer className="px-6 lg:px-12 py-8 border-t border-border">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-xs">
          © {new Date().getFullYear()} Sean Halpin. All rights reserved.
        </p>
        <p className="text-muted text-xs">
          Designed & Built with <span className="text-accent">♥</span> in Dublin
        </p>
        <a
          href="#"
          className="hoverable text-muted text-xs hover:text-accent transition-colors flex items-center gap-1"
        >
          Back to Top
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </a>
      </div>
    </footer>
  );
}