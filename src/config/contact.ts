// ============================================================
// ここを編集してください（新案件のたびにこのファイルだけ変更する）
//
// enabled: true  → コンタクトセクションに表示
// enabled: false → 非表示（URL や number は設定不要）
// label          → オプション。省略するとデフォルトラベルが使われます
//
// 【デフォルトラベル一覧】
//   email     : "メールで問い合わせる"
//   twitter   : "XでDMする"
//   instagram : "Instagramで見る"
//   line      : "LINEで問い合わせ"
//   facebook  : "Facebookで見る"
//   youtube   : "YouTubeで見る"
//   tiktok    : "TikTokで見る"
//   phone     : "電話でお問い合わせ"
// ============================================================

// ── 型定義 ──────────────────────────────────────────────────

/** フォーム経由のメール送信（Resend連携）。送信先は .env の CONTACT_TO_EMAIL */
export type EmailConfig = {
  enabled: boolean
  label?:  string
}

/** URL で遷移する SNS チャンネル */
export type UrlChannelConfig = {
  enabled: boolean
  url:     string
  label?:  string
}

/** 電話番号（tel: リンクで発信） */
export type PhoneConfig = {
  enabled: boolean
  number:  string  // 例: "03-1234-5678"
  label?:  string
}

export type ContactConfig = {
  email:     EmailConfig
  twitter:   UrlChannelConfig
  instagram: UrlChannelConfig
  line:      UrlChannelConfig
  facebook:  UrlChannelConfig
  youtube:   UrlChannelConfig
  tiktok:    UrlChannelConfig
  phone:     PhoneConfig
}

// ── 設定値 ──────────────────────────────────────────────────

export const contactConfig: ContactConfig = {
  // ▼ フォーム送信（Resend）
  email: {
    enabled: true,
  },

  // ▼ SNS リンク
  twitter: {
    enabled: false,
    url:     'https://twitter.com/YOUR_HANDLE',
  },
  instagram: {
    enabled: false,
    url:     'https://instagram.com/YOUR_HANDLE',
  },
  line: {
    enabled: false,
    url:     'https://line.me/ti/p/YOUR_LINE_ID',
  },
  facebook: {
    enabled: false,
    url:     'https://facebook.com/YOUR_PAGE',
  },
  youtube: {
    enabled: false,
    url:     'https://youtube.com/@YOUR_CHANNEL',
  },
  tiktok: {
    enabled: false,
    url:     'https://tiktok.com/@YOUR_HANDLE',
  },

  // ▼ 電話
  phone: {
    enabled: false,
    number:  '000-0000-0000',
  },
}
