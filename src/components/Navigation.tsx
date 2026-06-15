"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CALENDLY_URL, NAV_LINKS, SITE_NAME } from "@/lib/site";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-[--color-onyx] border-b border-[--color-brick]"
          : "bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="container-x flex h-20 md:h-24 items-center justify-between">
        <Link
          href="/#home"
          className="h-display text-[20px] md:text-[22px] text-[--color-smoke] tracking-[0.04em] shrink-0"
          onClick={() => setOpen(false)}
        >
          {SITE_NAME}
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.08em] text-[--color-smoke] hover:text-[--color-brick] transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block ml-6 shrink-0">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-[12px]"
          >
            Book Free Intro Session
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[--color-smoke]"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <div className="w-6 h-4 relative">
            <span
              className={[
                "absolute left-0 right-0 h-[2px] bg-[--color-smoke] transition-all duration-300",
                open ? "top-1/2 rotate-45 -translate-y-1/2" : "top-0",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-[--color-smoke] transition-all duration-200",
                open ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />
            <span
              className={[
                "absolute left-0 right-0 h-[2px] bg-[--color-smoke] transition-all duration-300",
                open ? "top-1/2 -rotate-45 -translate-y-1/2" : "bottom-0",
              ].join(" ")}
            />
          </div>
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={[
          "lg:hidden fixed inset-0 top-20 md:top-24 bg-[--color-onyx] transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8 px-6 pb-24">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[28px] uppercase tracking-[0.08em] text-[--color-smoke] hover:text-[--color-brick] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-6"
          >
            Book Free Intro Session
          </a>
        </div>
      </div>
    </header>
  );
}
