"use client";

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../lib/data';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { setContactOpen } from "@/store/initialSlice";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav 
      
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-xl border-b border-border' : ''
      }`}
    >
      <div className="max-w-[500px]  mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight hoverable">
          SA<span className="text-accent">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            link === 'Contact' ? (
              <button
                key={link}
                onClick={() => {
                  dispatch(setContactOpen(true));
                }}
                className="nav-link cursor-pointer text-sm font-medium text-subtle hover:text-accent transition-colors"
              >
                {link}
              </button>
            ) : (
            <Link
              key={link}
              href={`${link.toLowerCase()}`}
              className="nav-link text-sm font-medium text-subtle hover:text-accent transition-colors"
            >
              {link} 
            </Link>
          )))}
         
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex hover:cursor-pointer flex-col gap-1.5 hoverable"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#025a4e] hover:bg-[#025a4e]/80  transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#025a4e] hover:bg-[#025a4e]/80  transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#025a4e] hover:bg-[#025a4e]/80  transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 border-b border-border' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6 bg-bg/95 backdrop-blur-xl">
          {NAV_LINKS.map((link) => {
            if (link === 'Contact') {
              return (
              <button
                key={link}
                onClick={() => {
                  dispatch(setContactOpen(true));
                  setMenuOpen(false);
                }}
                className="text-2xl cursor-pointer font-semibold text-fg hover:text-accent transition-colors"
              >
                {link}
              </button>
            )}else {
              return (
              <Link
                key={link}
                href={`${link.toLowerCase()}`}
                onClick={() => {
                  setMenuOpen(false);
                }}
                className="text-2xl font-semibold text-fg hover:text-accent transition-colors"
              >
                {link}
              </Link>
            )
          }})
          }
        </div>
      </div>
    </nav>
  );
}