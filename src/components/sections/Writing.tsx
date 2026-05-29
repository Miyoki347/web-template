"use client";

// ============================================================
// ここを編集してください
// PLATFORMS — 発信プラットフォームの一覧
//   name        : プラットフォーム名（例: "X (Twitter)"）
//   handle      : ユーザー名・ハンドル（例: "@your_handle"）
//   description : そのプラットフォームで発信している内容の説明
//   href        : プロフィールページのURL
//   icon        : アイコン文字（1文字 or Unicode記号）
//   accentClass : アイコン色（Tailwindクラス）
//   hoverClass  : カードホバー時のボーダー色（Tailwindクラス）
//
// ※ 使わないプラットフォームはオブジェクトごと削除してください
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Platform {
  name: string;
  handle: string;
  description: string;
  href: string;
  icon: string;
  accentClass: string;
  hoverClass: string;
}

const PLATFORMS: Platform[] = [
  {
    name: "X (Twitter)",
    handle: "@YOUR_TWITTER_HANDLE",
    description: "YOUR_TWITTER_DESCRIPTION — このプラットフォームで発信している内容を1文で。",
    href: "https://twitter.com/YOUR_TWITTER_HANDLE",
    icon: "𝕏",
    accentClass: "text-white",
    hoverClass: "hover:border-white/30",
  },
  {
    name: "Zenn",
    handle: "YOUR_ZENN_HANDLE",
    description: "YOUR_ZENN_DESCRIPTION — このプラットフォームで発信している内容を1文で。",
    href: "https://zenn.dev/YOUR_ZENN_HANDLE",
    icon: "Z",
    accentClass: "text-[#3EA8FF]",
    hoverClass: "hover:border-[#3EA8FF]/40",
  },
  {
    name: "Qiita",
    handle: "YOUR_QIITA_HANDLE",
    description: "YOUR_QIITA_DESCRIPTION — このプラットフォームで発信している内容を1文で。",
    href: "https://qiita.com/YOUR_QIITA_HANDLE",
    icon: "Q",
    accentClass: "text-[#55C500]",
    hoverClass: "hover:border-[#55C500]/40",
  },
  {
    name: "note",
    handle: "YOUR_NOTE_HANDLE",
    description: "YOUR_NOTE_DESCRIPTION — このプラットフォームで発信している内容を1文で。",
    href: "https://note.com/YOUR_NOTE_HANDLE",
    icon: "n",
    accentClass: "text-[#41C9B4]",
    hoverClass: "hover:border-[#41C9B4]/40",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Writing() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const state = isInView ? "visible" : "hidden";

  return (
    <section id="writing" ref={ref} className="py-24 sm:py-32 px-6 bg-[#13132A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={state}
          custom={0}
        >
          <p className="font-heading text-brand-accent text-xs tracking-[0.3em] uppercase mb-3">
            04 — Writing
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Where I write
          </h2>
          <p className="text-white/50 font-body mb-12">
            YOUR_WRITING_INTRO — 発信活動の概要・姿勢を一言で説明してください。
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {PLATFORMS.map((platform, i) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              initial="hidden"
              animate={state}
              custom={0.2 + i * 0.1}
              className={`group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${platform.hoverClass}`}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/15 flex items-center justify-center">
                <span className={`font-heading font-bold text-base ${platform.accentClass}`}>
                  {platform.icon}
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <p className="font-heading font-semibold text-white text-base">
                    {platform.name}
                  </p>
                  <span className={`text-xs font-body opacity-60 ${platform.accentClass}`}>
                    {platform.handle}
                  </span>
                </div>
                <p className="text-white/55 text-sm font-body leading-relaxed">
                  {platform.description}
                </p>
              </div>

              <span className="flex-shrink-0 text-white/20 group-hover:text-white/60 transition-colors self-center text-lg ml-auto">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
