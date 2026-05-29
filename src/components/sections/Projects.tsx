"use client";

// ============================================================
// ここを編集してください
// PROJECTS — 制作物・実績の一覧データ（何件でも追加可）
//   title       : プロジェクト名
//   description : 概要説明（2〜3文程度）
//   tags        : 使用技術・ツールのタグ（文字列の配列）
//   status      : "DONE"（完成）または "WIP"（制作中）
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Status = "DONE" | "WIP";

interface Project {
  title: string;
  description: string;
  tags: string[];
  status: Status;
}

const PROJECTS: Project[] = [
  {
    title: "Sample Project Alpha",
    description:
      "YOUR_PROJECT_1_DESCRIPTION — このプロジェクトの概要・目的・実装した機能などを2〜3文で説明してください。",
    tags: ["YOUR_TAG_1", "YOUR_TAG_2", "YOUR_TAG_3"],
    status: "DONE",
  },
  {
    title: "Sample Project Beta",
    description:
      "YOUR_PROJECT_2_DESCRIPTION — このプロジェクトの概要・目的・実装した機能などを2〜3文で説明してください。",
    tags: ["YOUR_TAG_1", "YOUR_TAG_2", "YOUR_TAG_3"],
    status: "WIP",
  },
  {
    title: "Sample Project Gamma",
    description:
      "YOUR_PROJECT_3_DESCRIPTION — このプロジェクトの概要・目的・実装した機能などを2〜3文で説明してください。",
    tags: ["YOUR_TAG_1", "YOUR_TAG_2", "YOUR_TAG_3"],
    status: "WIP",
  },
];

const STATUS_STYLE: Record<Status, string> = {
  DONE: "bg-brand-accent/15 text-brand-accent border border-brand-accent/30",
  WIP:  "bg-brand-sub/15 text-brand-sub border border-brand-sub/30",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const state = isInView ? "visible" : "hidden";

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32 px-6 bg-brand-primary">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={state}
          custom={0}
        >
          <p className="font-heading text-brand-accent text-xs tracking-[0.3em] uppercase mb-3">
            03 — Projects
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-12">
            What I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              initial="hidden"
              animate={state}
              custom={0.2 + i * 0.12}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-brand-sub/40 hover:shadow-lg hover:shadow-brand-sub/10 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4 gap-3">
                <h3 className="font-heading text-white font-semibold text-lg leading-snug">
                  {project.title}
                </h3>
                <span className={`flex-shrink-0 text-xs font-heading font-semibold px-2.5 py-1 rounded-full tracking-wide ${STATUS_STYLE[project.status]}`}>
                  {project.status}
                </span>
              </div>

              <p className="text-white/55 text-sm font-body leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-white/50 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full font-body"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
