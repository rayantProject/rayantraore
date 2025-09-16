"use client";

import { motion } from "framer-motion";
import { Bitcount_Grid_Double } from "next/font/google";
import Link from "next/link";
import { networks } from "@/consts/networks";
import { cn } from "@/lib/utils";

const bitcountGridDouble = Bitcount_Grid_Double({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
});

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", href: "/" },
      { name: "Projects", href: "/projects" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className={cn(
                "text-3xl font-bold mb-4 inline-block hover:text-primary transition-colors",
                bitcountGridDouble.className,
              )}
            >
              RT
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative and
              performant digital experiences. Specialized in React, Next.js and
              modern technologies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {networks.map((network) => (
                <a
                  key={network.id}
                  href={network.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center group hover:scale-105 hover:-translate-y-1"
                  aria-label={`Visit my ${network.name} profile`}
                >
                  <span className="w-5 h-5 transition-transform group-hover:scale-110">
                    {network.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <span className="block text-sm">Email</span>
                <a
                  href="mailto:contact@rayantraore.dev"
                  className="hover:text-primary transition-colors duration-200 hover:underline"
                >
                  contact@rayantraore.me
                </a>
              </p>
              <p>
                <span className="block text-sm">Location</span>
                France
              </p>
              <p>
                <span className="block text-sm">Availability</span>
                Open to opportunities
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Rayan Traore. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="text-red-500"
              >
                ❤️
              </motion.span>
              <span>and</span>
              <code className="bg-muted px-2 py-1 rounded text-xs">
                Next.js
              </code>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
