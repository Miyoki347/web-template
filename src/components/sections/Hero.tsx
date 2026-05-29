"use client";

// ============================================================
// ここを編集してください（静的な表示テキスト）
// HERO_LABEL    : セクション上部の小さなラベル（例: "AI × Design × Code"）
// SECONDARY_CTA : 右のサブボタンのテキスト（例: "実績を見る"）
//
// heading / subheading / ctaText / ctaUrl は
// microCMS /hero エンドポイントから page.tsx 経由で渡されます
// ============================================================

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const HERO_LABEL    = "YOUR_HERO_LABEL";
const SECONDARY_CTA = "YOUR_SECONDARY_CTA";

// ── Props 型（page.tsx から CMS データを受け取る） ────────────
export type HeroProps = {
  heading:    string
  subheading: string
  ctaText:    string
  ctaUrl:     string
}

export default function Hero({ heading, subheading, ctaText, ctaUrl }: HeroProps) {
  const [displayed, setDisplayed]     = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(-9999);
  const mouseY = useMotionValue(-9999);
  const glowBg = useMotionTemplate`radial-gradient(700px circle at ${mouseX}px ${mouseY}px, rgba(123,97,255,0.18) 0%, transparent 70%)`;

  // タイプライター：heading が変わったらリセットして再実行
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed(heading.slice(0, i + 1));
      i++;
      if (i >= heading.length) clearInterval(timer);
    }, 55);
    return () => clearInterval(timer);
  }, [heading]);

  useEffect(() => {
    const timer = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-primary pt-16"
      onMouseMove={handleMouseMove}
    >
      {/* Mouse-tracking glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: glowBg }}
      />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-sub/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-heading text-brand-accent text-xs tracking-[0.3em] uppercase mb-8"
        >
          {HERO_LABEL}
        </motion.p>

        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight min-h-[3em] sm:min-h-[2em]">
          {displayed}
          <span
            className={`inline-block w-[3px] h-[0.78em] bg-brand-accent ml-1 align-middle transition-opacity duration-75 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mt-6 text-white/50 text-lg sm:text-xl font-body leading-relaxed"
        >
          {subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={ctaUrl}
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-brand-sub text-white font-heading font-medium text-sm hover:bg-[#9B84FF] transition-colors shadow-lg shadow-brand-sub/30"
          >
            {ctaText}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 text-white font-heading font-medium text-sm hover:border-brand-accent/60 hover:text-brand-accent transition-colors"
          >
            {SECONDARY_CTA}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.0, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-[0.25em] uppercase font-heading">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
