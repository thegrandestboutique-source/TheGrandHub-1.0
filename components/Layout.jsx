import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  // Only access theme context after mounting on client
  const themeContext = useTheme();
  const theme = mounted ? themeContext.theme : 'dark';
  const cycleTheme = mounted ? themeContext.cycleTheme : () => {};

  useEffect(() => {
    setMounted(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('thegrandestboutique@gmail.com');
    alert('Email copied to clipboard!');
  };

  const getThemeLabel = () => {
    if (theme === 'dark') return 'Dark';
    if (theme === 'oled') return 'OLED';
    return 'Light';
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b transition-all duration-300" 
              style={{ 
                backgroundColor: 'var(--bg)', 
                borderColor: 'var(--border)' 
              }}>
        <nav className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold hover:opacity-80 transition-opacity">
            TheGrandHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/gallery" className="hover:opacity-70 transition-opacity">
              Gallery
            </Link>
            <Link href="/shop" className="hover:opacity-70 transition-opacity">
              Shop
            </Link>
            <Link href="/links" className="hover:opacity-70 transition-opacity">
              Links
            </Link>
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
            
            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              className="px-3 py-1 border rounded-md text-sm hover:opacity-70 transition-all"
              style={{ borderColor: 'var(--border)' }}
              aria-label="Cycle theme"
            >
              {getThemeLabel()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: 'var(--border)' }}>
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link href="/gallery" className="hover:opacity-70" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="/shop" className="hover:opacity-70" onClick={() => setMenuOpen(false)}>
                Shop
              </Link>
              <Link href="/links" className="hover:opacity-70" onClick={() => setMenuOpen(false)}>
                Links
              </Link>
              <Link href="/about" className="hover:opacity-70" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <button
                onClick={cycleTheme}
                className="px-3 py-2 border rounded-md text-sm hover:opacity-70 text-left"
                style={{ borderColor: 'var(--border)' }}
              >
                Theme: {getThemeLabel()}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t mt-16" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-content mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm opacity-70">
              Website Code: MIT License<br />
              Photography & Images: © {new Date().getFullYear()} Lorenzo LDS · Brazil. All rights reserved.
            </p>

            {/* Footer Nav */}
            <div className="flex gap-6 text-sm">
              <Link href="/gallery" className="hover:opacity-70">Gallery</Link>
              <Link href="/shop" className="hover:opacity-70">Shop</Link>
              <Link href="/links" className="hover:opacity-70">Links</Link>
              <Link href="/about" className="hover:opacity-70">About</Link>
            </div>

            {/* Email */}
            <button 
              onClick={copyEmail}
              className="text-sm hover:opacity-70 transition-opacity"
              title="Click to copy email"
            >
              thegrandestboutique@gmail.com
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
