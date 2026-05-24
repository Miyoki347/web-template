# Claude Code 指示セット

## プロジェクト概要

スタック: Next.js 14 App Router / TypeScript / Tailwind CSS / Framer Motion / microCMS

## ディレクトリ構成

src/components/sections/  ← ページセクション単位
src/components/ui/        ← Button / Card などの汎用UI
src/components/layout/    ← Header / Footer / Navigation
src/lib/microcms.ts       ← CMS SDK・型定義・取得関数
src/styles/themes/        ← 業種別テーマCSS

## 実装ルール（必ず守ること）

- スタイルはTailwindクラスのみ（style属性は使わない）
- アニメーションはFramer Motionのみ
- 画像はnext/imageコンポーネントを必ず使う
- any型禁止・すべての型を明示的に定義
- コンポーネント名はPascalCase、ファイル名はkebab-case
- useInViewでスクロールトリガーアニメーションを実装
- レスポンシブはsm(640px)/md(768px)/lg(1024px)で対応

## テーマの使い方

active.css に選択したテーマをコピーして使う。使用できる変数：

- `--brand-primary` / `--brand-secondary` / `--brand-accent` — メイン3色
- `--brand-bg` / `--brand-surface` — 背景・カード面
- `--brand-text` / `--brand-text-muted` — テキスト
- `--brand-glow` — グロー・光彩エフェクト用
- `--brand-gradient` / `--brand-gradient-btn` — グラデーション
- `--font-heading` / `--font-body` — フォント
- `--radius-brand` / `--radius-card` — 角丸
- `--anim-speed` / `--anim-ease` — アニメーション速度・イージング
- `--shadow-card` / `--shadow-hero` — シャドウ
- `--glass-bg` / `--glass-border` / `--glass-blur` — Glassmorphism用

## テーマ一覧

| ファイル名 | 業種・用途 |
|-----------|-----------|
| nursery.css | 保育園・幼稚園 |
| medical-clinic.css | 一般クリニック |
| medical-dental.css | 歯科 |
| medical-beauty.css | 美容クリニック |
| medical-wellness.css | 整体・接骨院・マッサージ |
| food-casual.css | 定食屋・大衆食堂 |
| food-cafe.css | カフェ・ベーカリー |
| food-bar.css | バー・居酒屋・ダイニングバー |
| food-fine.css | 高級レストラン・割烹 |
| construction.css | 一般建設・土木・工務店 |
| renovation.css | リフォーム・内装 |
| realestate.css | 不動産 |
| salon-hair.css | 美容室・ヘアサロン |
| salon-nail.css | ネイル・エステ |
| school-juku.css | 学習塾・予備校 |
| school-language.css | 英会話・語学スクール |
| fitness.css | ジム・フィットネス |
| corporate.css | 企業・法人 |
| startup.css | ITスタートアップ・Web企業 |
| professional.css | 士業・コンサル・会計・法律 |

## よく使うコマンド

npm run dev      # 開発サーバー (localhost:3000)
npm run build    # 本番ビルド確認（デプロイ前に必ず実行）
npm run lint     # ESLintチェック

## 案件追加時の記載欄

（新案件のたびに以下を記入して Claude Code に渡す）

- 案件名:
- 業種:
- 使用テーマ: （上のテーマ一覧からファイル名を記入）
- 特記事項:
