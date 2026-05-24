# HP Builder — セットアップ仕様書

> この仕様書を読めば、誰でも最初から迷わずセットアップできます。
> 上から順番に進めてください。

---

## この仕様書の使い方

| 状況 | 読む章 |
|------|--------|
| 初めてこのリポジトリを使う | 第1章 → 第2章 → 第3章 |
| 2案件目以降（環境構築済み） | 第3章のみ |
| 案件を公開する | 第4章 |
| 毎月の保守作業 | 第5章 |
| エラーが出た | 第6章 |

---

## 第1章　前提条件の確認（初回のみ）

### 1-1　必要なアカウント

以下をすべて作成済みか確認してください。

- [ ] **GitHub** — github.com（無料）
- [ ] **Vercel** — vercel.com（GitHubアカウントでサインイン）
- [ ] **microCMS** — microcms.io（無料）
- [ ] **Claude Pro** — claude.ai（Pro以上のプラン）

### 1-2　必要なソフトウェアの確認

PowerShellを開いて以下を1行ずつ実行してください。
バージョン番号が表示されればOKです。

```powershell
node -v
npm -v
git --version
gh --version
vercel --version
claude --version
```

インストールできていないものがあった場合：

```powershell
# GitHub CLI
winget install GitHub.cli

# Vercel CLI
npm install -g vercel

# Claude Code CLI
npm install -g @anthropic-ai/claude-code
```

> インストール後はPowerShellを閉じて開き直してください。

### 1-3　GitHubにログイン

```powershell
gh auth login
```

質問が出たら以下を選択してください。

1. `GitHub.com` → Enter
2. `HTTPS` → Enter
3. `Y` → Enter
4. `Login with a web browser` → Enter
5. ブラウザが開く → 承認する

ログイン確認：

```powershell
gh auth status
# → Logged in to github.com as (ユーザー名) と表示されればOK
```

### 1-4　Vercelにログイン

```powershell
vercel login
# → ブラウザが開く → GitHubアカウントでサインイン
```

### 1-5　自分のGitHubユーザー名を確認する

```powershell
gh api user --jq .login
```

表示されたユーザー名をメモしておいてください。
以降の手順で `(ユーザー名)` と書いてある箇所に入れます。

---

## 第2章　テンプレートのセットアップ（初回のみ）

> この章は一生に1回だけやります。完了したら次回からは第3章へ。
> Miyoki347 はすでに完了済みのためスキップしてください。

### 2-1　作業フォルダを作る

```powershell
mkdir C:\dev\hp-builder
cd C:\dev\hp-builder
```

### 2-2　テンプレートプロジェクトを作成する

```powershell
npx create-next-app@latest hp-builder-template `
  --typescript `
  --tailwind `
  --eslint `
  --app `
  --src-dir `
  --import-alias "@/*" `
  --no-git

cd hp-builder-template
npm install framer-motion microcms-js-sdk resend
```

### 2-3　フォルダ構成を整備する

```powershell
New-Item -ItemType Directory -Force `
  src\components\ui, `
  src\components\layout, `
  src\components\sections, `
  src\lib, `
  src\styles\themes, `
  src\types, `
  cms-schema, `
  .github\workflows
```

### 2-4　業種別テーマCSSを作成する

保育園・幼稚園（nursery.css）、クリニック・医療（medical.css）、
飲食・カフェ（restaurant.css）、企業・法人（corporate.css）の
4ファイルを `src\styles\themes\` に作成します。
詳細はリポジトリ内のファイルを参照してください。

### 2-5　GitHubにpushしてTemplate設定をONにする

```powershell
git init
git add .
git commit -m "feat: HP Builder Template initial setup"

gh repo create hp-builder-template --private --source=. --push

# Template Repository設定をON
gh api -X PATCH repos/(ユーザー名)/hp-builder-template -f is_template=true

# 確認（trueと表示されればOK）
gh api repos/(ユーザー名)/hp-builder-template --jq .is_template
```

> ここまで完了したら第2章は終わりです。次回からは第3章へ。

---

## 第3章　新規案件の立ち上げ（毎回）

> 所要時間：15〜20分

### 3-1　案件フォルダに移動する

```powershell
cd C:\dev\hp-builder-test
```

### 3-2　テンプレートから複製する

```powershell
# XXX をクライアント名に変える（例: tanaka-clinic）
gh repo create miyoki-client-XXX `
  --template Miyoki347/hp-builder-template `
  --private --clone

cd miyoki-client-XXX
npm install
```

### 3-3　業種テーマを適用する

業種に合わせて1行だけ実行してください。

```powershell
# 保育園・幼稚園
Copy-Item src\styles\themes\nursery.css src\styles\themes\active.css

# クリニック・医療
Copy-Item src\styles\themes\medical.css src\styles\themes\active.css

# 飲食・カフェ
Copy-Item src\styles\themes\restaurant.css src\styles\themes\active.css

# 企業・法人・個人
Copy-Item src\styles\themes\corporate.css src\styles\themes\active.css
```

### 3-4　環境変数を設定する

```powershell
Copy-Item .env.local.example .env.local
notepad .env.local
```

今すぐ必要な値（microCMSで確認）：

```
MICROCMS_SERVICE_DOMAIN=（microcms.ioのサービスID）
MICROCMS_API_KEY=（microcms.ioのAPIキー）
```

残りは後でOKです。

### 3-5　CLAUDE.mdに案件情報を追記する

```powershell
notepad CLAUDE.md
```

末尾の「案件追加時の記載欄」を埋めてください。

```
- 案件名: 田中クリニック
- 業種: クリニック・医療
- 使用テーマ: medical
- カラー: #2B6CB0 / #48BB78
- キャッチコピー: あなたの健康を、ともに守ります
- ページ構成: Hero / 診療案内 / 医師紹介 / アクセス / お問い合わせ
- 特記事項: 予約ボタンは外部予約サービスへのリンク
```

### 3-6　開発サーバーを起動する

新しいPowerShellウィンドウを開いて実行してください。

```powershell
cd C:\dev\hp-builder-test\miyoki-client-XXX
npm run dev
```

ブラウザで `http://localhost:3000` を開いてNext.jsの画面が出ればOKです。

### 3-7　Claude Codeで実装を開始する

元のPowerShellウィンドウで実行してください。

```powershell
claude
```

Claude Designのハンドオフを使う場合：
Claude Designの「Copy command」ボタンでコピーしたコマンドをそのまま貼り付けてください。

直接指示する場合の例：

```
Heroセクションを実装してください。
ファイル: src/components/sections/Hero.tsx
- 背景: brand-primaryのダーク
- キャッチコピーをフェードインで表示
- CTAボタンをbrand-secondaryの塗りで実装
- Framer Motionで左からフェードイン
```

---

## 第4章　Vercelデプロイ・公開手順

### 4-1　ビルドが通るか確認する

```powershell
npm run build
```

エラーが出たらClaude Codeに「ビルドエラーを修正して」と伝えてください。

### 4-2　Vercelにデプロイする（初回）

```powershell
vercel
```

質問が出たら以下を選択してください。

1. `Set up and deploy?` → `y`
2. `Which scope?` → 自分のアカウントを選択
3. `Link to existing project?` → `n`（新規）
4. `Project name?` → そのままEnter

プレビューURL（`https://miyoki-client-xxx.vercel.app`）が発行されます。
クライアントに共有して最終確認をしてもらってください。

### 4-3　Vercelの環境変数を設定する

vercel.com → プロジェクト → Settings → Environment Variables

| 変数名 | 値 |
|--------|----|
| MICROCMS_SERVICE_DOMAIN | microCMSのサービスID |
| MICROCMS_API_KEY | microCMSのAPIキー |
| REVALIDATE_SECRET | 任意の文字列（自分で決める） |
| NEXT_PUBLIC_SITE_URL | https://（本番ドメイン） |

設定後に再デプロイしてください。

```powershell
vercel --prod
```

### 4-4　カスタムドメインを設定する

vercel.com → プロジェクト → Domains → 「Add Domain」

ドメインを入力するとDNSの設定方法が表示されます。
お名前.com等でAレコードを追加してください（76.76.21.21）。
SSL証明書は自動で発行されます（数分で完了）。

### 4-5　以後の更新（自動デプロイ）

```powershell
git add .
git commit -m "更新内容のメモ"
git push origin main
# → Vercelが自動でビルド・デプロイします
```

### 4-6　Lighthouseでスコアを確認する

Chromeでサイトを開く → F12 → Lighthouseタブ → 「Analyze page load」

目標スコア：

- Performance: 90以上
- Accessibility: 90以上
- SEO: 90以上

スコアが低い場合はClaude Codeに「Lighthouseのスコアを改善して」と指示してください。

---

## 第5章　月次保守作業

月に1〜2時間で完結します。

### 5-1　エラーログの確認

```powershell
vercel logs https://your-domain.com --follow
```

### 5-2　パッケージの脆弱性チェック

```powershell
cd C:\dev\hp-builder-test\miyoki-client-XXX
npm audit
```

### 5-3　GA4レポートの送付

1. analytics.google.com でレポートを確認
2. Claude AIに「このGA4データをクライアント向けに簡単に説明して」と貼り付け
3. 生成された文章をクライアントにメールで送付

### 5-4　コンテンツ更新代行

microCMSの管理画面でお知らせなどを更新してください。
更新すると約10秒でサイトに自動反映されます。

### 5-5　請求書発行

freeeで月額保守料の請求書を発行してください。

---

## 第6章　よくあるエラーと対処

| エラー | 原因 | 対処 |
|--------|------|------|
| `Could not clone: repository is empty` | Template設定がOFF | `gh api -X PATCH repos/Miyoki347/hp-builder-template -f is_template=true` を実行 |
| `PathNotFound` でcdができない | フォルダが存在しない | `gh repo create --clone` を先に実行するとフォルダが自動作成される |
| `npm run build` でエラー | 環境変数が未設定 | `.env.local` の MICROCMS の2つが記入されているか確認 |
| サイトが更新されない | Webhookが動いていない | VercelとmicroCMSの REVALIDATE_SECRET が同じ値か確認 |
| `gh: command not found` | GitHub CLIが未インストール | `winget install GitHub.cli` を実行してPowerShellを再起動 |

---

## 付録　業種別テーマ早見表

| 業種 | テーマファイル | メインカラー | 雰囲気 |
|------|--------------|-------------|--------|
| 保育園・幼稚園 | nursery.css | #FF8C42（オレンジ） | 温かみ・丸み |
| クリニック・医療 | medical.css | #2B6CB0（青） | 清潔・信頼 |
| 飲食・カフェ | restaurant.css | #744210（ブラウン） | 高級・ダーク |
| 企業・法人・個人 | corporate.css | #1A202C（ネイビー） | シンプル・誠実 |

---

## 付録　AIツールの役割分担

| ツール | 役割 | できないこと |
|--------|------|-------------|
| Claude AI（チャット） | コンセプト・コピー・構成を言語化 | 視覚化・コード実装 |
| Claude Design | UIプロトタイプを視覚化・クライアント確認用 | 動的処理・アニメーション |
| Claude Code | Next.jsコンポーネント実装・動的処理 | デザイン判断 |

使う順番：

```
Claude AI（言語化）→ Claude Design（視覚化）→ Claude Code（実装）
```

---

## 付録　1案件の全体フロー

```
DAY 1  ヒアリングシートをクライアントに送る（非同期・返答待ち）
         ↓
       Claude AI でコンセプト・コピーを生成
         ↓
       Claude Design でプロトタイプ生成 → クライアント承認
         ↓
DAY 2  第3章の手順でリポジトリ複製・環境構築
         ↓
       Claude Code でセクション単位に実装
         ↓
DAY 3  microCMS でスキーマ作成・コンテンツ入稿
         ↓
DAY 4  第4章の手順でVercelにデプロイ
         ↓
DAY 5  Lighthouseスコア確認 → マニュアル送付 → 納品
```

---

最終更新: 2026年5月
作成: Miyoki（Miyoki347）
