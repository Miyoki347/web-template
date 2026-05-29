"use client";

// ============================================================
// ここを編集してください
// YOUR_NAME        : 自己紹介内で使う名前（例: "Taro（たろう）"）
// PROFILE_P1〜P3   : 自己紹介文の3段落
// CARDS            : STATUS / FOCUS / GOAL の3カードの内容
//   value          : カードの見出し（短く）
//   detail         : カードの説明文（1〜2文）
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const YOUR_NAME = "YOUR_NAME";

const PROFILE_P1 = "YOUR_PROFILE_P1 — ここに自己紹介の1段落目を書いてください。どんな人物か、現在の状況や背景などを簡潔に。";
const PROFILE_P2 = "YOUR_PROFILE_P2 — ここに自己紹介の2段落目を書いてください。主な活動内容・使っている技術・制作スタイルなどを。";
const PROFILE_P3 = "YOUR_PROFILE_P3 — ここに自己紹介の3段落目を書いてください。発信活動・テーマ・大切にしていることなどを。";

const CARDS = [
  {
    label: "STATUS",
    value: "YOUR_STATUS_VALUE",
    detail: "YOUR_STATUS_DETAIL — 現在の状況や立場について一言。",
    labelClass: "text-brand-sub",
    hoverClass: "hover:border-brand-sub/50 hover:shadow-brand-sub/10",
  },
  {
    label: "FOCUS",
    value: "YOUR_FOCUS_VALUE",
    detail: "YOUR_FOCUS_DETAIL — 今もっとも注力している分野や活動について。",
    labelClass: "text-brand-accent",
    hoverClass: "hover:border-brand-accent/50 hover:shadow-brand-accent/10",
  },
  {
    label: "GOAL",
    value: "YOUR_GOAL_VALUE",
    detail: "YOUR_GOAL_DETAIL — 目指していること・将来のビジョンを一言。",
    labelClass: "text-brand-sub",
    hoverClass: "hover:border-brand-sub/50 hover:shadow-brand-sub/10",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const state = isInView ? "visible" : "hidden";

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 px-6 bg-brand-primary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={state}
          custom={0}
        >
          <p className="font-heading text-brand-accent text-xs tracking-[0.3em] uppercase mb-3">
            01 — About
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
            Who I am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={state}
            className="lg:col-span-3 space-y-5 text-white/65 text-base sm:text-lg leading-relaxed font-body"
          >
            <p>
              こんにちは、
              <span className="text-white font-semibold">{YOUR_NAME}</span>
              です。{PROFILE_P1}
            </p>
            <p>{PROFILE_P2}</p>
            <p>{PROFILE_P3}</p>
          </motion.div>

          <div className="lg:col-span-2 space-y-4">
            {CARDS.map((card, i) => (
              <motion.div
                key={card.label}
                variants={fadeRight}
                initial="hidden"
                animate={state}
                custom={0.3 + i * 0.12}
                className={`rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 ${card.hoverClass}`}
              >
                <p className={`font-heading text-xs tracking-[0.2em] uppercase mb-1.5 ${card.labelClass}`}>
                  {card.label}
                </p>
                <p className="text-white font-semibold text-base mb-1.5 font-heading">
                  {card.value}
                </p>
                <p className="text-white/50 text-sm font-body leading-relaxed">
                  {card.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
