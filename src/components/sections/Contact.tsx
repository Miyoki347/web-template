"use client";

// ============================================================
// ここを編集してください
// SNS・連絡手段の設定は src/config/contact.ts で行う
//
// YOUR_CONTACT_HEADING : コンタクトセクションの見出し
// YOUR_CONTACT_BODY    : 見出し下の説明文
// YOUR_NAME            : フッターのコピーライト表記に使う名前
// YOUR_CATCHCOPY       : フッターのコピーライトに添えるキャッチコピー
// ============================================================

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { contactConfig, type ContactConfig } from "@/config/contact";

const YOUR_CONTACT_HEADING = "YOUR_CONTACT_HEADING";
const YOUR_CONTACT_BODY    = "YOUR_CONTACT_BODY — お問い合わせの内容や対応できること、気軽さなどを伝える文章。";
const YOUR_NAME            = "YOUR_NAME";
const YOUR_CATCHCOPY       = "YOUR_CATCHCOPY";

// ── フォーム型定義 ────────────────────────────────────────────
type FormState   = "idle" | "submitting" | "success" | "error";
type FormValues  = { name: string; email: string; message: string };
type FieldErrors = Partial<Record<keyof FormValues, string>>;

// ── チャンネルボタン定義 ──────────────────────────────────────
type ChannelKey = Exclude<keyof ContactConfig, "email">;

type ChannelDef = {
  key:          ChannelKey
  defaultLabel: string
  icon:         string
  className:    string
  bgStyle?:     React.CSSProperties
  isEnabled:    (c: ContactConfig) => boolean
  getLabel:     (c: ContactConfig) => string | undefined
  getHref:      (c: ContactConfig) => string
}

const CHANNEL_DEFS: ChannelDef[] = [
  {
    key:          "twitter",
    defaultLabel: "XでDMする",
    icon:         "𝕏",
    className:    "border border-white/20 text-white hover:bg-white/5 hover:border-white/40",
    isEnabled:    (c) => c.twitter.enabled,
    getLabel:     (c) => c.twitter.label,
    getHref:      (c) => c.twitter.url,
  },
  {
    key:          "instagram",
    defaultLabel: "Instagramで見る",
    icon:         "Ig",
    className:    "text-white hover:opacity-90",
    bgStyle:      { background: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)" },
    isEnabled:    (c) => c.instagram.enabled,
    getLabel:     (c) => c.instagram.label,
    getHref:      (c) => c.instagram.url,
  },
  {
    key:          "line",
    defaultLabel: "LINEで問い合わせ",
    icon:         "L",
    className:    "bg-[#06C755] text-white hover:bg-[#05b04c]",
    isEnabled:    (c) => c.line.enabled,
    getLabel:     (c) => c.line.label,
    getHref:      (c) => c.line.url,
  },
  {
    key:          "facebook",
    defaultLabel: "Facebookで見る",
    icon:         "f",
    className:    "bg-[#1877F2] text-white hover:bg-[#1565d8]",
    isEnabled:    (c) => c.facebook.enabled,
    getLabel:     (c) => c.facebook.label,
    getHref:      (c) => c.facebook.url,
  },
  {
    key:          "youtube",
    defaultLabel: "YouTubeで見る",
    icon:         "▶",
    className:    "bg-[#FF0000] text-white hover:bg-[#dd0000]",
    isEnabled:    (c) => c.youtube.enabled,
    getLabel:     (c) => c.youtube.label,
    getHref:      (c) => c.youtube.url,
  },
  {
    key:          "tiktok",
    defaultLabel: "TikTokで見る",
    icon:         "♪",
    className:    "bg-[#010101] border border-white/20 text-white hover:border-white/40",
    isEnabled:    (c) => c.tiktok.enabled,
    getLabel:     (c) => c.tiktok.label,
    getHref:      (c) => c.tiktok.url,
  },
  {
    key:          "phone",
    defaultLabel: "電話でお問い合わせ",
    icon:         "☎",
    className:    "bg-brand-sub text-white hover:bg-[#9B84FF] shadow-lg shadow-brand-sub/30",
    isEnabled:    (c) => c.phone.enabled,
    getLabel:     (c) => c.phone.label,
    getHref:      (c) => `tel:${c.phone.number}`,
  },
];

// ── バリデーション ────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim())    errors.name    = "お名前を入力してください";
  if (!values.email.trim()) {
    errors.email = "メールアドレスを入力してください";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "メールアドレスの形式が正しくありません";
  }
  if (!values.message.trim()) errors.message = "メッセージを入力してください";
  return errors;
}

// ── アニメーション ────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

// ── スタイル定数 ──────────────────────────────────────────────
const inputBase =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white text-sm font-body placeholder:text-white/25 focus:outline-none focus:border-brand-sub/60 transition-colors duration-200";
const inputErrorClass = "border-red-400/60 focus:border-red-400/60";

// ── コンポーネント ────────────────────────────────────────────
export default function Contact() {
  const ref      = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const animate  = isInView ? "visible" : "hidden";

  const [values, setValues]           = useState<FormValues>({ name: "", email: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formState, setFormState]     = useState<FormState>("idle");

  const showForm      = contactConfig.email.enabled;
  const enabledChannels = CHANNEL_DEFS.filter((def) => def.isEnabled(contactConfig));
  const showDivider   = showForm && enabledChannels.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name as keyof FormValues]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(values),
      });
      if (!res.ok) throw new Error("send failed");
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 px-6 bg-brand-primary">
      <div className="max-w-2xl mx-auto">

        {/* ── ヘッダー ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          custom={0}
          className="text-center mb-12"
        >
          <p className="font-heading text-brand-accent text-xs tracking-[0.3em] uppercase mb-6">
            05 — Contact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {YOUR_CONTACT_HEADING}
          </h2>
          <p className="text-white/55 font-body text-lg leading-relaxed max-w-xl mx-auto">
            {YOUR_CONTACT_BODY}
          </p>
        </motion.div>

        {/* ── フォーム（email.enabled のときのみ） ── */}
        {showForm && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={animate}
            custom={0.2}
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-brand-accent/30 bg-brand-accent/10 p-10 text-center"
                >
                  <p className="text-brand-accent text-4xl mb-4">✓</p>
                  <p className="font-heading text-white font-semibold text-xl mb-2">
                    送信が完了しました
                  </p>
                  <p className="text-white/55 font-body text-sm leading-relaxed">
                    お問い合わせありがとうございます。
                    <br />
                    折り返しご連絡いたします。
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  noValidate
                  className="space-y-5"
                >
                  {/* お名前 */}
                  <div>
                    <label className="block text-white/60 text-xs font-heading tracking-widest uppercase mb-2">
                      お名前 <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="山田 太郎"
                      className={`${inputBase} ${fieldErrors.name ? inputErrorClass : ""}`}
                    />
                    {fieldErrors.name && (
                      <p className="mt-1.5 text-red-400 text-xs font-body">{fieldErrors.name}</p>
                    )}
                  </div>

                  {/* メールアドレス */}
                  <div>
                    <label className="block text-white/60 text-xs font-heading tracking-widest uppercase mb-2">
                      メールアドレス <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={`${inputBase} ${fieldErrors.email ? inputErrorClass : ""}`}
                    />
                    {fieldErrors.email && (
                      <p className="mt-1.5 text-red-400 text-xs font-body">{fieldErrors.email}</p>
                    )}
                  </div>

                  {/* メッセージ */}
                  <div>
                    <label className="block text-white/60 text-xs font-heading tracking-widest uppercase mb-2">
                      メッセージ <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      placeholder="お問い合わせ内容をご記入ください"
                      rows={5}
                      className={`${inputBase} resize-none ${fieldErrors.message ? inputErrorClass : ""}`}
                    />
                    {fieldErrors.message && (
                      <p className="mt-1.5 text-red-400 text-xs font-body">{fieldErrors.message}</p>
                    )}
                  </div>

                  {formState === "error" && (
                    <p className="text-red-400 text-sm font-body text-center">
                      送信に失敗しました。時間をおいて再度お試しください。
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full h-14 rounded-full bg-brand-sub text-white font-heading font-medium text-sm hover:bg-[#9B84FF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-xl shadow-brand-sub/30"
                  >
                    {formState === "submitting" ? "送信中..." : (contactConfig.email.label ?? "メールで問い合わせる")}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* ── 区切り線 ── */}
        {showDivider && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={animate}
            custom={0.3}
            className="flex items-center gap-4 my-8"
          >
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/30 text-xs font-heading tracking-widest uppercase">または</span>
            <div className="flex-1 h-px bg-white/10" />
          </motion.div>
        )}

        {/* ── SNS・連絡チャンネルボタン ── */}
        {enabledChannels.length > 0 && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={animate}
            custom={showForm ? 0.4 : 0.2}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {enabledChannels.map((def) => (
              <a
                key={def.key}
                href={def.getHref(contactConfig)}
                target={def.key === "phone" ? undefined : "_blank"}
                rel={def.key === "phone" ? undefined : "noopener noreferrer"}
                style={def.bgStyle}
                className={`inline-flex items-center justify-center gap-2.5 h-13 px-6 py-3.5 rounded-full font-heading font-medium text-sm transition-all duration-200 ${def.className}`}
              >
                <span className="text-base font-bold leading-none">{def.icon}</span>
                {def.getLabel(contactConfig) ?? def.defaultLabel}
              </a>
            ))}
          </motion.div>
        )}

        {/* ── フッター ── */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={animate}
          custom={0.5}
          className="mt-20 text-white/25 text-xs font-body text-center"
        >
          © 2024 {YOUR_NAME}. {YOUR_CATCHCOPY}
        </motion.p>
      </div>
    </section>
  );
}
