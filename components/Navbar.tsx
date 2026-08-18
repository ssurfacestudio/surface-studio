"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Search, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";
import { collections, products } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Collections", href: "/collections", mega: true },
  { label: "About", href: "/about" },
  { label: "Custom Projects", href: "/custom-projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 100);
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
  }, [mobileOpen, searchOpen]);

  const results = query.trim()
    ? products
        .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 6)
    : [];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-500",
          scrolled || mobileOpen
            ? "bg-ivory/90 dark:bg-charcoal/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        )}
        onMouseLeave={() => setMegaOpen(false)}
      >
        <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <Link
            href="/"
            className="font-display text-xl tracking-widest2 uppercase text-charcoal dark:text-ivory"
          >
            Surface <span className="text-gold">Studio</span>
          </Link>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li
                key={link.href}
                onMouseEnter={() => link.mega && setMegaOpen(true)}
                className="relative"
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 font-body text-[13px] uppercase tracking-[0.14em] text-charcoal/80 transition-colors hover:text-gold dark:text-ivory/80 dark:hover:text-gold"
                >
                  {link.label}
                  {link.mega && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="text-charcoal/80 transition-colors hover:text-gold dark:text-ivory/80"
            >
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </button>
            {mounted && (
              <button
                aria-label="Toggle dark mode"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-charcoal/80 transition-colors hover:text-gold dark:text-ivory/80"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" strokeWidth={1.5} />
                ) : (
                  <Moon className="h-5 w-5" strokeWidth={1.5} />
                )}
              </button>
            )}
            <Link
              href="/contact"
              className="hidden rounded-full border border-gold px-5 py-2 font-body text-[12px] uppercase tracking-[0.14em] text-charcoal transition-colors hover:bg-gold hover:text-white dark:text-ivory md:inline-block"
            >
              Request Catalogue
            </Link>
            <button
              aria-label="Open menu"
              className="text-charcoal dark:text-ivory lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </nav>

        {/* Mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="hidden border-t border-charcoal/10 bg-ivory dark:bg-charcoal dark:border-ivory/10 lg:block"
            >
              <div className="mx-auto grid max-w-8xl grid-cols-4 gap-8 px-12 py-10">
                <div className="col-span-1">
                  <p className="mb-4 font-body text-[12px] uppercase tracking-[0.2em] text-gold">
                    Shop by Collection
                  </p>
                  <ul className="space-y-3">
                    {collections.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/collections/${c.slug}`}
                          onClick={() => setMegaOpen(false)}
                          className="font-display text-lg text-charcoal transition-colors hover:text-gold dark:text-ivory"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-5">
                  {collections.slice(0, 3).map((c) => (
                    <Link
                      key={c.slug}
                      href={`/collections/${c.slug}`}
                      onClick={() => setMegaOpen(false)}
                      className="group relative block h-48 overflow-hidden rounded-md"
                    >
                      <img
                        src={c.image}
                        alt={c.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-charcoal/30 transition-colors group-hover:bg-charcoal/40" />
                      <span className="absolute bottom-4 left-4 font-display text-lg text-white">
                        {c.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-ivory dark:bg-charcoal lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg uppercase tracking-widest2 text-charcoal dark:text-ivory">
                Menu
              </span>
              <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6 text-charcoal dark:text-ivory" />
              </button>
            </div>
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-charcoal/10 py-4 dark:border-ivory/10">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-display text-2xl text-charcoal dark:text-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-6 py-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block rounded-full bg-gold px-6 py-3 text-center font-body text-sm uppercase tracking-[0.14em] text-white"
              >
                Request Catalogue
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="mx-auto mt-24 w-[92%] max-w-2xl rounded-lg bg-ivory p-6 shadow-2xl dark:bg-charcoal-soft"
            >
              <div className="flex items-center gap-3 border-b border-charcoal/15 pb-4 dark:border-ivory/15">
                <Search className="h-5 w-5 text-charcoal/50 dark:text-ivory/50" />
                <input
                  ref={searchInputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search coffee tables, marble types, sculptures…"
                  className="w-full bg-transparent font-body text-lg text-charcoal placeholder:text-charcoal/40 outline-none dark:text-ivory dark:placeholder:text-ivory/40"
                />
                <button onClick={() => setSearchOpen(false)} aria-label="Close search">
                  <X className="h-5 w-5 text-charcoal/60 dark:text-ivory/60" />
                </button>
              </div>
              <div className="mt-4 max-h-80 space-y-1 overflow-y-auto">
                {results.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/product/${p.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-4 rounded-md p-3 transition-colors hover:bg-charcoal/5 dark:hover:bg-ivory/5"
                  >
                    <img src={p.images[0]} alt={p.name} className="h-12 w-12 rounded object-cover" />
                    <div>
                      <p className="font-body text-sm text-charcoal dark:text-ivory">{p.name}</p>
                      <p className="font-body text-xs text-charcoal/50 dark:text-ivory/50">{p.marbleType}</p>
                    </div>
                  </Link>
                ))}
                {query && results.length === 0 && (
                  <p className="p-3 font-body text-sm text-charcoal/50 dark:text-ivory/50">
                    No pieces found for “{query}”. Try “table” or a marble type.
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}