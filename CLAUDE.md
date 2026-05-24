# Miyoki Web Package — Claude Code 指示セット

## プロジェクト概要
HP制作パッケージ（個人副業版 / Miyoki）
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
- bg-brand-primary / text-brand-primary
- bg-brand-secondary / text-brand-secondary
- rounded-brand（業種別の角丸）

## よく使うコマンド
npm run dev      # 開発サーバー (localhost:3000)
npm run build    # 本番ビルド確認（デプロイ前に必ず実行）
npm run lint     # ESLintチェック

## 案件追加時の記載欄
（新案件のたびに以下を記入して Claude Code に渡す）
- 案件名:
- 業種:
- 使用テーマ: （nursery / medical / restaurant / corporate）
- 特記事項:
