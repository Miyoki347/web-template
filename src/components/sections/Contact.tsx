"use client";

// ============================================================
// ここを編集してください
// YOUR_EMAIL            : お問い合わせ先のメールアドレス
// YOUR_TWITTER_URL      : XのプロフィールURL（例: "https://twitter.com/your_handle"）
// YOUR_CONTACT_HEADING  : コンタクトセクションの見出し
// YOUR_CONTACT_BODY     : 見出し下の説明文
// YOUR_EMAIL_CTA        : メールボタンのラベル（例: "メールで問い合わせる"）
// YOUR_TWITTER_CTA      : XボタンのラベルDM誘導など（例: "XでDMする"）
// YOUR_NAME             : フッターのコピーライト表記に使う名前
// YOUR_CATCHCOPY        : フッターのコピーライトに添えるキャッチコピー
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const YOUR_EMAIL           = "your@email.com";
const YOUR_TWITTER_URL     = "https://twitter.com/YOUR_HANDLE";
const YOUR_CONTACT_HEADING = "YOUR_CONTACT_HEADING";
const YOUR_CONTACT_BODY    = "YOUR_CONTACT_BODY — お問い合わせの内容や対応できること、気軽さなどを伝える文章。";
const YOUR_EMAIL_CTA       = "YOUR_EMAIL_CTA";
const YOUR_TWITTER_CTA     = "YOUR_TWITTER_CTA";
const YOUR_NAME            = "YOUR_NAME";
const YOUR_CATCHCOPY       = "YOUR_CATCHCOPY";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const state = isInView ? "visible" : "hidden";

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 px-6 bg-brand-primary">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={state}
          custom={0}
        >
          <p className="font-heading text-brand-accent text-xs tracking-[0.3em] uppercase mb-6">
            05 — Contact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {YOUR_CONTACT_HEADING}
          </h2>
          <p className="text-white/55 font-body text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            {YOUR_CONTACT_BODY}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={state}
          custom={0.2}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`mailto:${YOUR_EMAIL}`}
            className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full bg-brand-sub text-white font-heading font-medium text-sm hover:bg-[#9B84FF] transition-colors shadow-xl shadow-brand-sub/30"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {YOUR_EMAIL_CTA}
          </a>
          <a
            href={YOUR_TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 h-14 px-8 rounded-full border border-white/20 text-white font-heading font-medium text-sm hover:border-white/40 hover:bg-white/5 transition-colors"
          >
            <span className="text-base font-bold">𝕏</span>
            {YOUR_TWITTER_CTA}
          </a>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={state}
          custom={0.5}
          className="mt-20 text-white/25 text-xs font-body"
        >
          © 2024 {YOUR_NAME}. {YOUR_CATCHCOPY}
        </motion.p>
      </div>
    </section>
  );
}
