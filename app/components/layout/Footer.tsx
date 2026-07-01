"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

const elsewhereLinks = [
  { label: "Figma", href: "https://figma.com" },
  { label: "Github", href: "https://github.com" },
  { label: "Posts", href: "/posts" },
  { label: "CV", href: "/cv" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const contactLinks = [
  { label: "Message", href: "/contact" },
];

export default function Footer() {
  const { dark, toggleTheme } = useTheme();

  return (
    <footer
      className={`
        relative w-full transition-colors duration-500
        ${dark ? "bg-[#0a1f14] text-[#a3c9b8]" : "bg-[#ede7dd] text-[#3a3530]"}
      `}
    >
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <p
            className={`
              text-sm leading-relaxed
              ${dark ? "text-[#a3c9b8]/80" : "text-[#3a3530]/70"}
            `}
          >
            © 2026 Saf Abd El-Djalil&nbsp;•&nbsp;Colophon
          </p>

          <div className="flex gap-16 sm:gap-20">
            <div>
              <h3
                className={`
                  mb-3 text-xs font-semibold uppercase tracking-widest
                  ${dark ? "text-[#a3c9b8]/50" : "text-[#3a3530]/40"}
                `}
              >
                Elsewhere
              </h3>
              <ul className="space-y-2">
                {elsewhereLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className={`
                        inline-block text-sm transition-colors duration-300
                        hover:underline
                        ${
                          dark
                            ? "text-[#a3c9b8] hover:text-[#d4f5e0]"
                            : "text-[#3a3530] hover:text-[#0a1f14]"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className={`
                  mb-3 text-xs font-semibold uppercase tracking-widest
                  ${dark ? "text-[#a3c9b8]/50" : "text-[#3a3530]/40"}
                `}
              >
                Contact
              </h3>
              <ul className="space-y-2">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`
                        inline-block text-sm transition-colors duration-300
                        hover:underline
                        ${
                          dark
                            ? "text-[#a3c9b8] hover:text-[#d4f5e0]"
                            : "text-[#3a3530] hover:text-[#0a1f14]"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-5">
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className={`
              flex h-10 w-10 shrink-0 items-center justify-center rounded-full
              transition-all duration-500 focus:outline-none focus-visible:ring-2
              focus-visible:ring-offset-2
              ${
                dark
                  ? "bg-[#1a3a28] text-[#a3c9b8] hover:bg-[#245236] focus-visible:ring-[#a3c9b8] focus-visible:ring-offset-[#0a1f14]"
                  : "bg-[#e8e2d6] text-[#3a3530] hover:bg-[#d9d2c4] focus-visible:ring-[#3a3530] focus-visible:ring-offset-[#f5f0e8]"
              }
            `}
          >
            {dark ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <div className="flex flex-1 items-center gap-[6px] overflow-hidden">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className={`
                  h-5 w-[1.5px] shrink-0 rounded-full transition-colors duration-500
                  ${dark ? "bg-[#a3c9b8]/15" : "bg-[#3a3530]/10"}
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
