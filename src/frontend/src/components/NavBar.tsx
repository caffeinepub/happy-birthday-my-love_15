import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Memories", href: "#memories" },
  { label: "Celebrate", href: "#celebrate" },
  { label: "Birthday Wishes", href: "#wishes" },
];

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className="sticky top-0 z-50 bg-maroon shadow-md"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-2 font-script text-2xl text-cream hover:opacity-80 transition-opacity"
          data-ocid="nav.link"
        >
          <Heart className="w-5 h-5 fill-current text-gold" />
          Happy Birthday, My Love
        </a>
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm tracking-widest uppercase text-cream/80 hover:text-gold transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden text-cream hover:text-gold transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-maroon border-t border-white/10">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm tracking-widest uppercase text-cream/80 hover:text-gold transition-colors block py-1"
                  onClick={() => setMenuOpen(false)}
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
