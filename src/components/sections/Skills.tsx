"use client";

// ============================================================
// ここを編集してください
// SKILLS — スキルカテゴリーと各スキル項目の一覧
//   category : カテゴリー名（例: "FRONTEND" / "BACKEND" / "DESIGN"）
//   icon     : カテゴリーアイコン（Unicode記号 or 絵文字）
//   items    : スキル・ツール名の配列（5〜7件程度）
//   labelClass / dotClass / hoverClass : 色は変更不要（テーマに依存）
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILLS = [
  {
    category: "YOUR_CATEGORY_1",
    icon: "◈",
    items: [
      "YOUR_SKILL_1",
      "YOUR_SKILL_2",
      "YOUR_SKILL_3",
      "YOUR_SKILL_4",
      "YOUR_SKILL_5",
    ],
    labelClass: "text-brand-sub",
    dotClass: "bg-brand-sub",
    hoverClass: "hover:border-brand-sub/50 hover:shadow-brand-sub/10",
  },
  {
    category: "YOUR_CATEGORY_2",
    icon: "◎",
    items: [
      "YOUR_SKILL_1",
      "YOUR_SKILL_2",
      "YOUR_SKILL_3",
      "YOUR_SKILL_4",
      "YOUR_SKILL_5",
    ],
    labelClass: "text-brand-accent",
    dotClass: "bg-brand-accent",
    hoverClass: "hover:border-brand-accent/50 hover:shadow-brand-accent/10",
  },
  {
    category: "YOUR_CATEGORY_3",
    icon: "⬡",
    items: [
      "YOUR_SKILL_1",
      "YOUR_SKILL_2",
      "YOUR_SKILL_3",
      "YOUR_SKILL_4",
      "YOUR_SKILL_5",
    ],
    labelClass: "text-[#E879F9]",
    dotClass: "bg-[#E879F9]",
    hoverClass: "hover:border-[#E879F9]/50 hover:shadow-[#E879F9]/10",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const state = isInView ? "visible" : "hidden";

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32 px-6 bg-[#13132A]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={state}
          custom={0}
        >
          <p className="font-heading text-brand-accent text-xs tracking-[0.3em] uppercase mb-3">
            02 — Skills
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
            What I build with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              variants={fadeUp}
              initial="hidden"
              animate={state}
              custom={0.2 + i * 0.12}
              className={`rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${skill.hoverClass}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`text-2xl ${skill.labelClass}`}>{skill.icon}</span>
                <p className={`font-heading text-xs tracking-[0.2em] uppercase font-semibold ${skill.labelClass}`}>
                  {skill.category}
                </p>
              </div>

              <ul className="space-y-3">
                {skill.items.map((name) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 text-white/70 text-sm font-body"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${skill.dotClass}`} />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
