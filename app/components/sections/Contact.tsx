
"use client";

import { useState } from 'react';
import useReveal from '../../hooks/useReveal';
import { SOCIAL_LINKS } from '../../lib/data';

export default function Contact() {
  const ref1 = useReveal();
  const ref2 = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <section
      id="contact"
      className="px-6 lg:px-12 py-24 lg:py-36 border-t border-border relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div ref={ref1 as React.RefObject<HTMLDivElement>} className="reveal text-center mb-16">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter mb-6">
            Let's Build
            <br />
            <span className="text-stroke-accent">Something Great</span>
          </h2>
          <p className="text-subtle max-w-lg mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a
            message and let's create something extraordinary together.
          </p>
        </div>

        {/* Form */}
        <div
          ref={ref2 as React.RefObject<HTMLDivElement>}
          className="reveal max-w-2xl mx-auto"
          style={{ transitionDelay: '0.2s' }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  className="hoverable w-full px-5 py-4 rounded-xl bg-card border border-border text-fg placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className="hoverable w-full px-5 py-4 rounded-xl bg-card border border-border text-fg placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-muted uppercase tracking-wider mb-2 block">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={update('message')}
                className="hoverable w-full px-5 py-4 rounded-xl bg-card border border-border text-fg placeholder-muted/50 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 text-sm resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="hoverable w-full py-4 bg-accent text-bg font-bold text-sm uppercase tracking-widest rounded-xl hover:shadow-[0_0_40px_rgba(200,255,0,0.2)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {sent ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent!
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </form>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10 justify-center">
            <span className="text-muted text-xs uppercase tracking-wider">
              Or find me on
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="hoverable text-xs font-medium text-subtle hover:text-accent transition-colors uppercase tracking-wider"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}