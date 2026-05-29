"use client";

// ============================================================
// ここを編集してください
// YOUR_NAME       : ロゴに表示する名前・サイト名
// YOUR_CTA_LABEL  : 右上のCTAボタンのテキスト（例: "依頼する"）
// NAV_LINKS       : ナビゲーションリンクのラベルとhref
// ============================================================

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const YOUR_NAME = "YOUR_NAME";
const YOUR_CTA_LABEL = "YOUR_CTA_LABEL";

const NAV_LINKS = [
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Writing",  href: "#writing" },
  { label: "Contact",  href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-primary/90 backdrop-blur-md border-b border-white/5"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-heading font-bold text-xl text-white tracking-tight"
        >
          {YOUR_NAME}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-heading text-sm text-white/60 hover:text-brand-accent transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center h-9 px-5 rounded-full bg-brand-sub text-white text-sm font-heading font-medium hover:bg-[#9B84FF] transition-colors"
        >
          {YOUR_CTA_LABEL}
        </a>

        <nav className="flex md:hidden items-center gap-5">
          {NAV_LINKS.slice(0, 3).map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-xs text-white/60 hover:text-brand-accent transition-colors font-heading"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
