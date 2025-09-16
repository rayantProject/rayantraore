"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="z-20 fixed top-0 left-0 right-0">
      {/* Desktop and Mobile Header */}
      <div className="flex items-center justify-between p-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-border bg-background/95 backdrop-blur-sm">
          <ul className="flex flex-col space-y-1 p-4">
            <li>
              <Link
                href="/"
                className="block py-3 px-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-200"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block py-3 px-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-200"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-3 px-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-200"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-3 px-2 text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-200"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
