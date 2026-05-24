# HP Builder Template

**AIとモダンスタックを活用したHP制作パッケージのマスターテンプレートです。**  
このリポジトリをベースに新規案件を高速で立ち上げられます。

---

## 技術スタック

| ツール | 役割 |
|--------|------|
| Next.js 14 App Router | フロントエンド基盤 |
| TypeScript | 型安全な実装 |
| Tailwind CSS | スタイリング |
| Framer Motion | アニメーション |
| microCMS | ヘッドレスCMS |
| Vercel | ホスティング・自動デプロイ |

---

## 使い方

### 新規案件を立ち上げる

```bash
gh repo create miyoki-client-XXX \
  --template Miyoki347/web-template \
  --private --clone

cd miyoki-client-XXX
npm install
```

### 業種テーマを適用する

```bash
# 保育園・幼稚園
cp src/styles/themes/nursery.css src/styles/themes/active.css

# クリニック・医療
cp src/styles/themes/medical.css src/styles/themes/active.css

# 飲食・カフェ
cp src/styles/themes/restaurant.css src/styles/themes/active.css

# 企業・法人・個人
cp src/styles/themes/corporate.css src/styles/themes/active.css
```

### 環境変数を設定する

```bash
cp .env.local.example .env.local
# .env.local に MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を記入
```

### 開発サーバーを起動する

```bash
npm run dev
# → http://localhost:3000
```

---

## ディレクトリ構成

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # TOPページ
│   └── api/
│       ├── contact/        # お問い合わせフォームAPI
│       └── revalidate/     # CMS Webhook受信
├── components/
│   ├── ui/                 # 汎用UIコンポーネント
│   ├── layout/             # Header / Footer / Navigation
│   └── sections/           # ページセクション単位
├── lib/
│   └── microcms.ts         # CMS SDK・型定義・取得関数
├── styles/
│   ├── globals.css
│   └── themes/             # 業種別テーマCSS
│       ├── nursery.css     # 保育園・幼稚園
│       ├── medical.css     # クリニック・医療
│       ├── restaurant.css  # 飲食・カフェ
│       └── corporate.css   # 企業・法人
└── types/
    └── microcms.ts         # CMS APIレスポンス型
```

---

## 業種別テーマ

| テーマ | 対象業種 | メインカラー | 雰囲気 |
|--------|----------|-------------|--------|
| nursery | 保育園・幼稚園 | #FF8C42 | 温かみ・丸み |
| medical | クリニック・医療 | #2B6CB0 | 清潔・信頼 |
| restaurant | 飲食・カフェ | #744210 | 高級・ダーク |
| corporate | 企業・法人・個人 | #1A202C | シンプル・誠実 |

---

## 環境変数

| 変数名 | 説明 | タイミング |
|--------|------|------------|
| `MICROCMS_SERVICE_DOMAIN` | microCMSのサービスID | 今すぐ |
| `MICROCMS_API_KEY` | microCMSのAPIキー | 今すぐ |
| `RESEND_API_KEY` | メール送信用APIキー | フォーム実装時 |
| `NEXT_PUBLIC_GA_ID` | Google Analytics測定ID | 公開直前 |
| `NEXT_PUBLIC_SITE_URL` | 本番URL | 公開直前 |
| `REVALIDATE_SECRET` | Webhook用シークレット | 公開直前 |

---

## AIツールとの連携

```
Claude AI       コンセプト・コピー・構成を言語化
    ↓
Claude Design   UIプロトタイプを視覚化・クライアント確認
    ↓
Claude Code     Next.jsコンポーネントとして実装
    ↓
Vercel          デプロイ・本番公開
```

CLAUDE.mdがプロジェクトルートに配置されているため、  
Claude Codeがプロジェクトの文脈を自動で把握した状態で動作します。

---

## セットアップ詳細

初回セットアップの詳細手順は **SPEC.md** を参照してください。

---

## License

Private — Miyoki347
