'use client';
import { useState } from 'react';
import { siteMetadata } from '@/constants/metadata';
import { navLinks } from '@/constants/navLinks';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 backdrop-blur-xl border-b border-cyan-400/30 hud-panel">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <button
          type="button"
          onClick={() => handleScroll('#home')}
          className="font-display text-2xl text-cyber font-bold tracking-widest"
        >
          [HP]
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="font-mono text-xs tracking-widest text-silver hover:text-cyber transition-all"
            >
              {'> '} {link.label}
            </button>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={siteMetadata.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-silver hover:text-cyber transition-colors"
            title="GitHub"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="GitHub"
            >
              <title>GitHub</title>
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href={siteMetadata.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-silver hover:text-cyber transition-colors"
            title="Facebook"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="Facebook"
            >
              <title>Facebook</title>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <a
            href={siteMetadata.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-silver hover:text-cyber transition-colors"
            title="Instagram"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="img"
              aria-label="Instagram"
            >
              <title>Instagram</title>
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 15.892c-1.102 1.101-2.566 1.708-4.192 1.708-.777 0-1.514-.2-2.163-.578 1.415-.24 2.77-.91 3.86-1.994 1.089-1.085 1.758-2.44 1.998-3.855.378.649.578 1.386.578 2.163 0 1.626-.607 3.09-1.708 4.192zm1.332-6.08c-.24 1.415-.91 2.77-1.994 3.86-1.085 1.089-2.44 1.758-3.855 1.998-.649-.378-.578-1.386.578-2.163 1.089-1.089 2.44-1.758 3.855-1.998.649.378 1.386.2 2.163-.578.777.0 1.514.2 2.163.578-1.415.24-2.77.91-3.86 1.994z" />
            </svg>
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          type="button"
          className="md:hidden text-silver hover:text-cyber transition-colors text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-1 border-t border-cyan-400/20 pt-4">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="font-mono text-xs tracking-widest text-silver hover:text-cyber transition-all text-left py-3 px-2 border-b border-cyber/10 hover:bg-cyber/5"
            >
              {'>'} {link.label}
            </button>
          ))}

          {/* Social Icons in Mobile Menu */}
          <div className="flex items-center gap-4 pt-4 px-2">
            <a
              href={siteMetadata.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-cyber transition-colors"
              title="GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
                aria-label="GitHub"
              >
                <title>GitHub</title>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={siteMetadata.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-cyber transition-colors"
              title="Facebook"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
                aria-label="Facebook"
              >
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={siteMetadata.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-cyber transition-colors"
              title="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="img"
                aria-label="Instagram"
              >
                <title>Instagram</title>
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 15.892c-1.102 1.101-2.566 1.708-4.192 1.708-.777 0-1.514-.2-2.163-.578 1.415-.24 2.77-.91 3.86-1.994 1.089-1.085 1.758-2.44 1.998-3.855.378.649.578 1.386.578 2.163 0 1.626-.607 3.09-1.708 4.192zm1.332-6.08c-.24 1.415-.91 2.77-1.994 3.86-1.085 1.089-2.44 1.758-3.855 1.998-.649-.378-.578-1.386.578-2.163 1.089-1.089 2.44-1.758 3.855-1.998.649.378 1.386.2 2.163-.578.777.0 1.514.2 2.163.578-1.415.24-2.77.91-3.86 1.994z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
