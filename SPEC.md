# Miyoki HP Builder 窶・繧ｻ繝・ヨ繧｢繝・・莉墓ｧ俶嶌

> 縺薙・莉墓ｧ俶嶌繧定ｪｭ繧√・縲∬ｪｰ縺ｧ繧よ怙蛻昴°繧芽ｿｷ繧上★繧ｻ繝・ヨ繧｢繝・・縺ｧ縺阪∪縺吶・
> 荳翫°繧蛾・分縺ｫ騾ｲ繧√※縺上□縺輔＞縲・

---

## 縺薙・莉墓ｧ俶嶌縺ｮ菴ｿ縺・婿

| 迥ｶ豕・| 隱ｭ繧遶 |
|------|--------|
| 蛻昴ａ縺ｦ縺薙・繝ｪ繝昴ず繝医Μ繧剃ｽｿ縺・| 隨ｬ1遶 竊・隨ｬ2遶 竊・隨ｬ3遶 |
| 2譯井ｻｶ逶ｮ莉･髯搾ｼ育腸蠅・ｧ狗ｯ画ｸ医∩・・| 隨ｬ3遶縺ｮ縺ｿ |
| 譯井ｻｶ繧貞・髢九☆繧・| 隨ｬ4遶 |
| 豈取怦縺ｮ菫晏ｮ井ｽ懈･ｭ | 隨ｬ5遶 |
| 繧ｨ繝ｩ繝ｼ縺悟・縺・| 隨ｬ6遶 |

---

## 隨ｬ1遶縲蜑肴署譚｡莉ｶ縺ｮ遒ｺ隱搾ｼ亥・蝗槭・縺ｿ・・

### 1-1縲蠢・ｦ√↑繧｢繧ｫ繧ｦ繝ｳ繝・

莉･荳九ｒ縺吶∋縺ｦ菴懈・貂医∩縺狗｢ｺ隱阪＠縺ｦ縺上□縺輔＞縲・

- [ ] **GitHub** 窶・github.com・育┌譁呻ｼ・
- [ ] **Vercel** 窶・vercel.com・・itHub繧｢繧ｫ繧ｦ繝ｳ繝医〒繧ｵ繧､繝ｳ繧､繝ｳ・・
- [ ] **microCMS** 窶・microcms.io・育┌譁呻ｼ・
- [ ] **Claude Pro** 窶・claude.ai・・ro莉･荳翫・繝励Λ繝ｳ・・

### 1-2縲蠢・ｦ√↑繧ｽ繝輔ヨ繧ｦ繧ｧ繧｢縺ｮ遒ｺ隱・

PowerShell繧帝幕縺・※莉･荳九ｒ1陦後★縺､螳溯｡後＠縺ｦ縺上□縺輔＞縲・
繝舌・繧ｸ繝ｧ繝ｳ逡ｪ蜿ｷ縺瑚｡ｨ遉ｺ縺輔ｌ繧後・OK縺ｧ縺吶・

```powershell
node -v
npm -v
git --version
gh --version
vercel --version
claude --version
```

**繧､繝ｳ繧ｹ繝医・繝ｫ縺ｧ縺阪※縺・↑縺・ｂ縺ｮ縺後≠縺｣縺溷ｴ蜷茨ｼ・*

```powershell
# GitHub CLI
winget install GitHub.cli

# Vercel CLI
npm install -g vercel

# Claude Code CLI
npm install -g @anthropic-ai/claude-code
```

> 繧､繝ｳ繧ｹ繝医・繝ｫ蠕後・PowerShell繧帝哩縺倥※髢九″逶ｴ縺励※縺上□縺輔＞縲・

### 1-3縲GitHub縺ｫ繝ｭ繧ｰ繧､繝ｳ

```powershell
gh auth login
```

雉ｪ蝠上′蜃ｺ縺溘ｉ莉･荳九ｒ驕ｸ謚槭＠縺ｦ縺上□縺輔＞縲・

1. `GitHub.com` 竊・Enter
2. `HTTPS` 竊・Enter
3. `Y` 竊・Enter
4. `Login with a web browser` 竊・Enter
5. 繝悶Λ繧ｦ繧ｶ縺碁幕縺・竊・謇ｿ隱阪☆繧・

繝ｭ繧ｰ繧､繝ｳ遒ｺ隱搾ｼ・

```powershell
gh auth status
# 竊・Logged in to github.com as (繝ｦ繝ｼ繧ｶ繝ｼ蜷・ 縺ｨ陦ｨ遉ｺ縺輔ｌ繧後・OK
```

### 1-4縲Vercel縺ｫ繝ｭ繧ｰ繧､繝ｳ

```powershell
vercel login
# 竊・繝悶Λ繧ｦ繧ｶ縺碁幕縺・竊・GitHub繧｢繧ｫ繧ｦ繝ｳ繝医〒繧ｵ繧､繝ｳ繧､繝ｳ
```

### 1-5縲閾ｪ蛻・・GitHub繝ｦ繝ｼ繧ｶ繝ｼ蜷阪ｒ遒ｺ隱阪☆繧・

```powershell
gh api user --jq .login
```

陦ｨ遉ｺ縺輔ｌ縺溘Θ繝ｼ繧ｶ繝ｼ蜷阪ｒ繝｡繝｢縺励※縺翫＞縺ｦ縺上□縺輔＞縲・
莉･髯阪・謇矩・〒 `(繝ｦ繝ｼ繧ｶ繝ｼ蜷・` 縺ｨ譖ｸ縺・※縺ゅｋ邂・園縺ｫ蜈･繧後∪縺吶・

---

## 隨ｬ2遶縲繝・Φ繝励Ξ繝ｼ繝医・繧ｻ繝・ヨ繧｢繝・・・亥・蝗槭・縺ｿ・・

> 笞・・縺薙・遶縺ｯ**荳逕溘↓1蝗槭□縺・*繧・ｊ縺ｾ縺吶ょｮ御ｺ・＠縺溘ｉ谺｡蝗槭°繧峨・隨ｬ3遶縺ｸ縲・

### 2-1縲菴懈･ｭ繝輔か繝ｫ繝繧剃ｽ懊ｋ

```powershell
# 莉ｻ諢上・蝣ｴ謇縺ｧOK縲ゆｾ・
mkdir C:\dev\hp-builder
cd C:\dev\hp-builder
```

### 2-2縲繝・Φ繝励Ξ繝ｼ繝医・繝ｭ繧ｸ繧ｧ繧ｯ繝医ｒ菴懈・縺吶ｋ

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

### 2-3縲繝輔か繝ｫ繝讒区・繧呈紛蛯吶☆繧・

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

### 2-4縲讌ｭ遞ｮ蛻･繝・・繝曚SS繧剃ｽ懈・縺吶ｋ

**菫晁ご蝨偵・蟷ｼ遞壼恍**

```powershell
@"
:root {
  --brand-primary:   #FF8C42;
  --brand-secondary: #4ECDC4;
  --brand-accent:    #FFE66D;
  --brand-bg:        #FFFBF0;
  --font-heading:    'Rounded Mplus 1c', sans-serif;
  --font-body:       'Noto Sans JP', sans-serif;
  --anim-speed:      0.6s;
  --radius-brand:    24px;
}
"@ | Out-File -FilePath src\styles\themes\nursery.css -Encoding UTF8
```

**繧ｯ繝ｪ繝九ャ繧ｯ繝ｻ蛹ｻ逋・*

```powershell
@"
:root {
  --brand-primary:   #2B6CB0;
  --brand-secondary: #48BB78;
  --brand-accent:    #EBF8FF;
  --brand-bg:        #F7FAFC;
  --font-heading:    'Noto Serif JP', serif;
  --font-body:       'Noto Sans JP', sans-serif;
  --anim-speed:      0.3s;
  --radius-brand:    8px;
}
"@ | Out-File -FilePath src\styles\themes\medical.css -Encoding UTF8
```

**鬟ｲ鬟溘・繧ｫ繝輔ぉ**

```powershell
@"
:root {
  --brand-primary:   #744210;
  --brand-secondary: #D69E2E;
  --brand-accent:    #FFFAF0;
  --brand-bg:        #1A1209;
  --font-heading:    'Playfair Display', serif;
  --font-body:       'Noto Sans JP', sans-serif;
  --anim-speed:      0.8s;
  --radius-brand:    2px;
}
"@ | Out-File -FilePath src\styles\themes\restaurant.css -Encoding UTF8
```

**莨∵･ｭ繝ｻ豕穂ｺｺ**

```powershell
@"
:root {
  --brand-primary:   #1A202C;
  --brand-secondary: #3182CE;
  --brand-accent:    #EDF2F7;
  --brand-bg:        #FFFFFF;
  --font-heading:    'Noto Sans JP', sans-serif;
  --font-body:       'Noto Sans JP', sans-serif;
  --anim-speed:      0.4s;
  --radius-brand:    4px;
}
"@ | Out-File -FilePath src\styles\themes\corporate.css -Encoding UTF8
```

### 2-5縲globals.css繧剃ｸ頑嶌縺阪☆繧・

```powershell
@"
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --brand-primary:   #1A202C;
  --brand-secondary: #3182CE;
  --brand-accent:    #EDF2F7;
  --brand-bg:        #FFFFFF;
  --font-heading:    'Noto Sans JP', sans-serif;
  --font-body:       'Noto Sans JP', sans-serif;
  --anim-speed:      0.4s;
  --radius-brand:    4px;
}

body {
  background-color: var(--brand-bg);
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
"@ | Out-File -FilePath src\app\globals.css -Encoding UTF8
```

### 2-6縲tailwind.config.ts繧剃ｸ頑嶌縺阪☆繧・

```powershell
@"
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary:   'var(--brand-primary)',
          secondary: 'var(--brand-secondary)',
          accent:    'var(--brand-accent)',
          bg:        'var(--brand-bg)',
        },
      },
      borderRadius: {
        brand: 'var(--radius-brand)',
      },
    },
  },
  plugins: [],
}

export default config
"@ | Out-File -FilePath tailwind.config.ts -Encoding UTF8
```

### 2-7縲microCMS SDK險ｭ螳壹ヵ繧｡繧､繝ｫ繧剃ｽ懈・縺吶ｋ

```powershell
@"
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey:        process.env.MICROCMS_API_KEY!,
})

export type MicroCMSImage = {
  url: string
  width: number
  height: number
}

export type NewsItem = {
  id: string
  title: string
  body: string
  category: string
  thumbnail: MicroCMSImage
  publishedAt: string
  updatedAt: string
}

export type SiteSettings = {
  siteName: string
  tel: string
  address: string
  email: string
  twitterUrl?: string
  instagramUrl?: string
}

export async function getNewsList(limit = 10) {
  return client.getList<NewsItem>({
    endpoint: 'news',
    queries: { limit, orders: '-publishedAt' },
  })
}

export async function getNewsDetail(contentId: string) {
  return client.get<NewsItem>({ endpoint: 'news', contentId })
}

export async function getSiteSettings() {
  return client.get<SiteSettings>({ endpoint: 'settings' })
}
"@ | Out-File -FilePath src\lib\microcms.ts -Encoding UTF8
```

### 2-8縲迺ｰ蠅・､画焚繝・Φ繝励Ξ繝ｼ繝医ｒ菴懈・縺吶ｋ

```powershell
@"
# microCMS・亥ｿ・医・莉翫☆縺占ｨｭ螳夲ｼ・
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key

# Resend繝ｻ繝輔か繝ｼ繝騾∽ｿ｡・医ヵ繧ｩ繝ｼ繝螳溯｣・凾縺ｫ險ｭ螳夲ｼ・
RESEND_API_KEY=re_your_key

# Google Analytics・亥・髢狗峩蜑阪↓險ｭ螳夲ｼ・
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 譛ｬ逡ｪURL・・ercel繝・・繝ｭ繧､蠕後↓險ｭ螳夲ｼ・
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Webhook逕ｨ繧ｷ繝ｼ繧ｯ繝ｬ繝・ヨ・亥・髢狗峩蜑阪↓險ｭ螳壹・莉ｻ諢上・譁・ｭ怜・縺ｧOK・・
REVALIDATE_SECRET=your-random-secret
"@ | Out-File -FilePath .env.local.example -Encoding UTF8

# .gitignore縺ｫ霑ｽ險假ｼ・PI繧ｭ繝ｼ繧竪itHub縺ｫ荳翫￡縺ｪ縺・ｼ・
@"

# 迺ｰ蠅・､画焚・育ｵｶ蟇ｾ縺ｫ繧ｳ繝溘ャ繝医＠縺ｪ縺・ｼ・
.env.local
.env.local.1password
"@ | Add-Content -Path .gitignore -Encoding UTF8
```

### 2-9縲CLAUDE.md繧剃ｽ懈・縺吶ｋ

```powershell
@"
# Miyoki Web Package 窶・Claude Code 謖・､ｺ繧ｻ繝・ヨ

## 繝励Ο繧ｸ繧ｧ繧ｯ繝域ｦりｦ・
HP蛻ｶ菴懊ヱ繝・こ繝ｼ繧ｸ・亥倶ｺｺ蜑ｯ讌ｭ迚・/ Miyoki・・
繧ｹ繧ｿ繝・け: Next.js 14 App Router / TypeScript / Tailwind CSS / Framer Motion / microCMS

## 繝・ぅ繝ｬ繧ｯ繝医Μ讒区・
src/components/sections/  竊・繝壹・繧ｸ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ蜊倅ｽ・
src/components/ui/        竊・Button / Card 縺ｪ縺ｩ縺ｮ豎守畑UI
src/components/layout/    竊・Header / Footer / Navigation
src/lib/microcms.ts       竊・CMS SDK繝ｻ蝙句ｮ夂ｾｩ繝ｻ蜿門ｾ鈴未謨ｰ
src/styles/themes/        竊・讌ｭ遞ｮ蛻･繝・・繝曚SS

## 螳溯｣・Ν繝ｼ繝ｫ・亥ｿ・★螳医ｋ縺薙→・・
- 繧ｹ繧ｿ繧､繝ｫ縺ｯTailwind繧ｯ繝ｩ繧ｹ縺ｮ縺ｿ・・tyle螻樊ｧ縺ｯ菴ｿ繧上↑縺・ｼ・
- 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｯFramer Motion縺ｮ縺ｿ
- 逕ｻ蜒上・next/image繧ｳ繝ｳ繝昴・繝阪Φ繝医ｒ蠢・★菴ｿ縺・
- any蝙狗ｦ∵ｭ｢繝ｻ縺吶∋縺ｦ縺ｮ蝙九ｒ譏守､ｺ逧・↓螳夂ｾｩ
- 繧ｳ繝ｳ繝昴・繝阪Φ繝亥錐縺ｯPascalCase縲√ヵ繧｡繧､繝ｫ蜷阪・kebab-case
- useInView縺ｧ繧ｹ繧ｯ繝ｭ繝ｼ繝ｫ繝医Μ繧ｬ繝ｼ繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ繧貞ｮ溯｣・
- 繝ｬ繧ｹ繝昴Φ繧ｷ繝悶・sm(640px)/md(768px)/lg(1024px)縺ｧ蟇ｾ蠢・

## 繝・・繝槭・菴ｿ縺・婿
- bg-brand-primary / text-brand-primary
- bg-brand-secondary / text-brand-secondary
- bg-brand-accent / text-brand-accent
- rounded-brand・域･ｭ遞ｮ蛻･縺ｮ隗剃ｸｸ・・

## 繧医￥菴ｿ縺・さ繝槭Φ繝・
npm run dev      # 髢狗匱繧ｵ繝ｼ繝舌・ (localhost:3000)
npm run build    # 譛ｬ逡ｪ繝薙Ν繝臥｢ｺ隱搾ｼ医ョ繝励Ο繧､蜑阪↓蠢・★螳溯｡鯉ｼ・
npm run lint     # ESLint繝√ぉ繝・け

## 譯井ｻｶ霑ｽ蜉譎ゅ・險倩ｼ画ｬ・
・域眠譯井ｻｶ縺ｮ縺溘・縺ｫ莉･荳九ｒ蝓九ａ縺ｦClaude Code縺ｫ貂｡縺呻ｼ・
- 譯井ｻｶ蜷・
- 讌ｭ遞ｮ:
- 菴ｿ逕ｨ繝・・繝・ nursery / medical / restaurant / corporate
- 繧ｫ繝ｩ繝ｼ:
- 繧ｭ繝｣繝・メ繧ｳ繝斐・:
- 繝壹・繧ｸ讒区・:
- 迚ｹ險倅ｺ矩・
"@ | Out-File -FilePath CLAUDE.md -Encoding UTF8
```

### 2-10縲GitHub Actions CI險ｭ螳壹ｒ菴懈・縺吶ｋ

```powershell
@"
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npx tsc --noEmit
      - run: npm run build
        env:
          MICROCMS_SERVICE_DOMAIN: dummy-domain
          MICROCMS_API_KEY: dummy-key
          REVALIDATE_SECRET: dummy-secret
"@ | Out-File -FilePath .github\workflows\ci.yml -Encoding UTF8
```

### 2-11縲GitHub縺ｫpush縺励※Template險ｭ螳壹ｒON縺ｫ縺吶ｋ

```powershell
git init
git add .
git commit -m "feat: Miyoki HP Builder Template initial setup"

# (繝ｦ繝ｼ繧ｶ繝ｼ蜷・ 縺ｯ隨ｬ1遶1-5縺ｧ遒ｺ隱阪＠縺溯・蛻・・GitHub繝ｦ繝ｼ繧ｶ繝ｼ蜷・
gh repo create hp-builder-template --private --source=. --push

# Template Repository險ｭ螳壹ｒON
gh api -X PATCH repos/(繝ｦ繝ｼ繧ｶ繝ｼ蜷・/hp-builder-template `
  -f is_template=true

# 遒ｺ隱搾ｼ・rue縺ｨ陦ｨ遉ｺ縺輔ｌ繧後・OK・・
gh api repos/(繝ｦ繝ｼ繧ｶ繝ｼ蜷・/hp-builder-template --jq .is_template
```

> 笨・縺薙％縺ｾ縺ｧ螳御ｺ・＠縺溘ｉ隨ｬ2遶縺ｯ邨ゅｏ繧翫〒縺吶よｬ｡蝗槭°繧峨・隨ｬ3遶縺ｸ縲・

---

## 隨ｬ3遶縲譁ｰ隕乗｡井ｻｶ縺ｮ遶九■荳翫￡・域ｯ主屓・・

> 謇隕∵凾髢難ｼ・5縲・0蛻・

### 3-1縲譯井ｻｶ繝輔か繝ｫ繝縺ｫ遘ｻ蜍輔☆繧・

```powershell
cd C:\dev\hp-builder-test
```

### 3-2縲繝・Φ繝励Ξ繝ｼ繝医°繧芽､・｣ｽ縺吶ｋ

```powershell
# XXX 繧偵け繝ｩ繧､繧｢繝ｳ繝亥錐縺ｫ螟峨∴繧具ｼ井ｾ・ tanaka-clinic・・
gh repo create miyoki-client-XXX `
  --template (繝ｦ繝ｼ繧ｶ繝ｼ蜷・/hp-builder-template `
  --private --clone

cd miyoki-client-XXX
npm install
```

### 3-3縲讌ｭ遞ｮ繝・・繝槭ｒ驕ｩ逕ｨ縺吶ｋ

讌ｭ遞ｮ縺ｫ蜷医ｏ縺帙※1陦後□縺大ｮ溯｡後＠縺ｦ縺上□縺輔＞縲・

```powershell
# 菫晁ご蝨偵・蟷ｼ遞壼恍
Copy-Item src\styles\themes\nursery.css src\styles\themes\active.css

# 繧ｯ繝ｪ繝九ャ繧ｯ繝ｻ蛹ｻ逋・
Copy-Item src\styles\themes\medical.css src\styles\themes\active.css

# 鬟ｲ鬟溘・繧ｫ繝輔ぉ
Copy-Item src\styles\themes\restaurant.css src\styles\themes\active.css

# 莨∵･ｭ繝ｻ豕穂ｺｺ繝ｻ蛟倶ｺｺ
Copy-Item src\styles\themes\corporate.css src\styles\themes\active.css
```

### 3-4縲迺ｰ蠅・､画焚繧定ｨｭ螳壹☆繧・

```powershell
Copy-Item .env.local.example .env.local
notepad .env.local
```

莉翫☆縺仙ｿ・ｦ√↑蛟､・・icroCMS縺ｧ遒ｺ隱搾ｼ会ｼ・

```
MICROCMS_SERVICE_DOMAIN=・・icrocms.io縺ｮ繧ｵ繝ｼ繝薙せID・・
MICROCMS_API_KEY=・・icrocms.io縺ｮAPI繧ｭ繝ｼ・・
```

谿九ｊ縺ｯ蠕後〒OK縺ｧ縺吶・

### 3-5縲CLAUDE.md縺ｫ譯井ｻｶ諠・ｱ繧定ｿｽ險倥☆繧・

```powershell
notepad CLAUDE.md
```

譛ｫ蟆ｾ縺ｮ縲梧｡井ｻｶ霑ｽ蜉譎ゅ・險倩ｼ画ｬ・阪ｒ蝓九ａ縺ｦ縺上□縺輔＞縲・

```
- 譯井ｻｶ蜷・ 逕ｰ荳ｭ繧ｯ繝ｪ繝九ャ繧ｯ
- 讌ｭ遞ｮ: 繧ｯ繝ｪ繝九ャ繧ｯ繝ｻ蛹ｻ逋・
- 菴ｿ逕ｨ繝・・繝・ medical
- 繧ｫ繝ｩ繝ｼ: #2B6CB0 / #48BB78
- 繧ｭ繝｣繝・メ繧ｳ繝斐・: 縺ゅ↑縺溘・蛛･蠎ｷ繧偵√→繧ゅ↓螳医ｊ縺ｾ縺・
- 繝壹・繧ｸ讒区・: Hero / 險ｺ逋よ｡亥・ / 蛹ｻ蟶ｫ邏ｹ莉・/ 繧｢繧ｯ繧ｻ繧ｹ / 縺雁撫縺・粋繧上○
- 迚ｹ險倅ｺ矩・ 莠育ｴ・・繧ｿ繝ｳ縺ｯ螟夜Κ莠育ｴ・し繝ｼ繝薙せ縺ｸ縺ｮ繝ｪ繝ｳ繧ｯ
```

### 3-6縲髢狗匱繧ｵ繝ｼ繝舌・繧定ｵｷ蜍輔☆繧・

**譁ｰ縺励＞PowerShell繧ｦ繧｣繝ｳ繝峨え**繧帝幕縺・※螳溯｡後＠縺ｦ縺上□縺輔＞縲・

```powershell
cd C:\dev\hp-builder-test\miyoki-client-XXX
npm run dev
```

繝悶Λ繧ｦ繧ｶ縺ｧ `http://localhost:3000` 繧帝幕縺・※Next.js縺ｮ逕ｻ髱｢縺悟・繧後・OK縺ｧ縺吶・

### 3-7縲Claude Code縺ｧ螳溯｣・ｒ髢句ｧ九☆繧・

蜈・・PowerShell繧ｦ繧｣繝ｳ繝峨え縺ｧ螳溯｡後＠縺ｦ縺上□縺輔＞縲・

```powershell
claude
```

**Claude Design縺ｮ繝上Φ繝峨が繝輔ｒ菴ｿ縺・ｴ蜷茨ｼ・*
Claude Design縺ｮ縲靴opy command縲阪・繧ｿ繝ｳ縺ｧ繧ｳ繝斐・縺励◆繧ｳ繝槭Φ繝峨ｒ縺昴・縺ｾ縺ｾ雋ｼ繧贋ｻ倥￠縺ｦ縺上□縺輔＞縲・

**逶ｴ謗･謖・､ｺ縺吶ｋ蝣ｴ蜷医・萓具ｼ・*

```
Hero繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ繧貞ｮ溯｣・＠縺ｦ縺上□縺輔＞縲・
繝輔ぃ繧､繝ｫ: src/components/sections/Hero.tsx

- 閭梧勹: brand-primary 縺ｮ繝繝ｼ繧ｯ
- 繧ｭ繝｣繝・メ繧ｳ繝斐・: 縲後≠縺ｪ縺溘・蛛･蠎ｷ繧偵√→繧ゅ↓螳医ｊ縺ｾ縺吶阪ｒ繝輔ぉ繝ｼ繝峨う繝ｳ縺ｧ陦ｨ遉ｺ
- CTA繝懊ち繝ｳ: 縲瑚ｨｺ逋ゆｺ育ｴ・・縺薙■繧峨搾ｼ・rand-secondary 縺ｮ蝪励ｊ・・
- Framer Motion縺ｧ蟾ｦ縺九ｉ繝輔ぉ繝ｼ繝峨う繝ｳ
- next/image縺ｧ閭梧勹逕ｻ蜒上ｒ陦ｨ遉ｺ
```

---

## 隨ｬ4遶縲Vercel繝・・繝ｭ繧､繝ｻ蜈ｬ髢区焔鬆・

### 4-1縲繝薙Ν繝峨′騾壹ｋ縺狗｢ｺ隱阪☆繧・

```powershell
npm run build
# 繧ｨ繝ｩ繝ｼ縺悟・縺溘ｉClaude Code縺ｫ縲後ン繝ｫ繝峨お繝ｩ繝ｼ繧剃ｿｮ豁｣縺励※縲阪→莨昴∴繧・
```

### 4-2縲Vercel縺ｫ繝・・繝ｭ繧､縺吶ｋ・亥・蝗橸ｼ・

```powershell
vercel
```

雉ｪ蝠上′蜃ｺ縺溘ｉ莉･荳九ｒ驕ｸ謚槭＠縺ｦ縺上□縺輔＞縲・

1. `Set up and deploy?` 竊・`y`
2. `Which scope?` 竊・閾ｪ蛻・・繧｢繧ｫ繧ｦ繝ｳ繝医ｒ驕ｸ謚・
3. `Link to existing project?` 竊・`n`・域眠隕擾ｼ・
4. `Project name?` 竊・縺昴・縺ｾ縺ｾEnter

繝励Ξ繝薙Η繝ｼURL・・https://miyoki-client-xxx.vercel.app`・峨′逋ｺ陦後＆繧後∪縺吶・
縺薙・URL繧偵け繝ｩ繧､繧｢繝ｳ繝医↓蜈ｱ譛峨＠縺ｦ譛邨ら｢ｺ隱阪ｒ縺励※繧ゅｉ縺｣縺ｦ縺上□縺輔＞縲・

### 4-3縲Vercel縺ｮ迺ｰ蠅・､画焚繧定ｨｭ螳壹☆繧・

vercel.com 竊・繝励Ο繧ｸ繧ｧ繧ｯ繝・竊・Settings 竊・Environment Variables

| 螟画焚蜷・| 蛟､ |
|--------|----|
| MICROCMS_SERVICE_DOMAIN | microCMS縺ｮ繧ｵ繝ｼ繝薙せID |
| MICROCMS_API_KEY | microCMS縺ｮAPI繧ｭ繝ｼ |
| REVALIDATE_SECRET | 莉ｻ諢上・譁・ｭ怜・・郁・蛻・〒豎ｺ繧√ｋ・・|
| NEXT_PUBLIC_SITE_URL | https://・域悽逡ｪ繝峨Γ繧､繝ｳ・・|

險ｭ螳壼ｾ後↓蜀阪ョ繝励Ο繧､縺励※縺上□縺輔＞縲・

```powershell
vercel --prod
```

### 4-4縲繧ｫ繧ｹ繧ｿ繝繝峨Γ繧､繝ｳ繧定ｨｭ螳壹☆繧・

vercel.com 竊・繝励Ο繧ｸ繧ｧ繧ｯ繝・竊・Domains 竊・縲窟dd Domain縲・

繝峨Γ繧､繝ｳ繧貞・蜉帙☆繧九→縲．NS縺ｮ險ｭ螳壽婿豕輔′陦ｨ遉ｺ縺輔ｌ縺ｾ縺吶・
縺雁錐蜑・com遲峨〒A繝ｬ繧ｳ繝ｼ繝峨ｒ霑ｽ蜉縺励※縺上□縺輔＞・・6.76.21.21・峨・
SSL險ｼ譏取嶌縺ｯ閾ｪ蜍輔〒逋ｺ陦後＆繧後∪縺呻ｼ域焚蛻・〒螳御ｺ・ｼ峨・

### 4-5縲莉･蠕後・譖ｴ譁ｰ・郁・蜍輔ョ繝励Ο繧､・・

```powershell
git add .
git commit -m "譖ｴ譁ｰ蜀・ｮｹ縺ｮ繝｡繝｢"
git push origin main
# 竊・Vercel縺瑚・蜍輔〒繝薙Ν繝峨・繝・・繝ｭ繧､縺励∪縺・
```

### 4-6縲Lighthouse縺ｧ繧ｹ繧ｳ繧｢繧堤｢ｺ隱阪☆繧・

Chrome縺ｧ繧ｵ繧､繝医ｒ髢九￥ 竊・F12 竊・Lighthouse繧ｿ繝・竊・縲窟nalyze page load縲・

逶ｮ讓吶せ繧ｳ繧｢・・

- Performance: 90莉･荳・
- Accessibility: 90莉･荳・
- SEO: 90莉･荳・

繧ｹ繧ｳ繧｢縺御ｽ弱＞蝣ｴ蜷医・Claude Code縺ｫ縲鍬ighthouse縺ｮ繧ｹ繧ｳ繧｢繧呈隼蝟・＠縺ｦ縲阪→謖・､ｺ縺励※縺上□縺輔＞縲・

---

## 隨ｬ5遶縲譛域ｬ｡菫晏ｮ井ｽ懈･ｭ

譛医↓1縲・譎る俣縺ｧ螳檎ｵ舌＠縺ｾ縺吶・

### 5-1縲繧ｨ繝ｩ繝ｼ繝ｭ繧ｰ縺ｮ遒ｺ隱・

```powershell
vercel logs https://your-domain.com --follow
```

### 5-2縲繝代ャ繧ｱ繝ｼ繧ｸ縺ｮ閼・ｼｱ諤ｧ繝√ぉ繝・け

```powershell
cd C:\dev\hp-builder-test\miyoki-client-XXX
npm audit
```

### 5-3縲GA4繝ｬ繝昴・繝医・騾∽ｻ・

1. analytics.google.com 縺ｧ繝ｬ繝昴・繝医ｒ遒ｺ隱・
2. Claude AI縺ｫ縲後％縺ｮGA4繝・・繧ｿ繧偵け繝ｩ繧､繧｢繝ｳ繝亥髄縺代↓邁｡蜊倥↓隱ｬ譏弱＠縺ｦ縲阪→雋ｼ繧贋ｻ倥￠
3. 逕滓・縺輔ｌ縺滓枚遶繧偵け繝ｩ繧､繧｢繝ｳ繝医↓繝｡繝ｼ繝ｫ縺ｧ騾∽ｻ・

### 5-4縲繧ｳ繝ｳ繝・Φ繝・峩譁ｰ莉｣陦・

microCMS縺ｮ邂｡逅・判髱｢縺ｧ縺顔衍繧峨○縺ｪ縺ｩ繧呈峩譁ｰ縺励※縺上□縺輔＞縲・
譖ｴ譁ｰ縺吶ｋ縺ｨ邏・0遘偵〒繧ｵ繧､繝医↓閾ｪ蜍募渚譏縺輔ｌ縺ｾ縺吶・

### 5-5縲隲区ｱよ嶌逋ｺ陦・

freee縺ｧ譛磯｡堺ｿ晏ｮ域侭縺ｮ隲区ｱよ嶌繧堤匱陦後＠縺ｦ縺上□縺輔＞縲・

---

## 隨ｬ6遶縲繧医￥縺ゅｋ繧ｨ繝ｩ繝ｼ縺ｨ蟇ｾ蜃ｦ

| 繧ｨ繝ｩ繝ｼ | 蜴溷屏 | 蟇ｾ蜃ｦ |
|--------|------|------|
| `Could not clone: repository is empty` | Template險ｭ螳壹′OFF | `gh api -X PATCH repos/(繝ｦ繝ｼ繧ｶ繝ｼ蜷・/hp-builder-template -f is_template=true` 繧貞ｮ溯｡・|
| `PathNotFound` 縺ｧcd縺後〒縺阪↑縺・| 繝輔か繝ｫ繝縺悟ｭ伜惠縺励↑縺・| `gh repo create --clone` 繧貞・縺ｫ螳溯｡後☆繧九→繝輔か繝ｫ繝縺瑚・蜍穂ｽ懈・縺輔ｌ繧・|
| `npm run build` 縺ｧ繧ｨ繝ｩ繝ｼ | 迺ｰ蠅・､画焚縺梧悴險ｭ螳・| `.env.local` 縺ｮ MICROCMS 縺ｮ2縺､縺瑚ｨ伜・縺輔ｌ縺ｦ縺・ｋ縺狗｢ｺ隱・|
| 繧ｵ繧､繝医′譖ｴ譁ｰ縺輔ｌ縺ｪ縺・| Webhook縺悟虚縺・※縺・↑縺・| Vercel縺ｨmicroCMS縺ｮ REVALIDATE_SECRET 縺悟酔縺伜､縺狗｢ｺ隱・|
| `gh: command not found` | GitHub CLI縺梧悴繧､繝ｳ繧ｹ繝医・繝ｫ | `winget install GitHub.cli` 繧貞ｮ溯｡後＠縺ｦPowerShell繧貞・襍ｷ蜍・|

---

## 莉倬鹸縲讌ｭ遞ｮ蛻･繝・・繝樊掠隕玖｡ｨ

| 讌ｭ遞ｮ | 繝・・繝槭ヵ繧｡繧､繝ｫ | 繝｡繧､繝ｳ繧ｫ繝ｩ繝ｼ | 髮ｰ蝗ｲ豌・|
|------|--------------|-------------|--------|
| 菫晁ご蝨偵・蟷ｼ遞壼恍 | nursery.css | #FF8C42・医が繝ｬ繝ｳ繧ｸ・・| 貂ｩ縺九∩繝ｻ荳ｸ縺ｿ |
| 繧ｯ繝ｪ繝九ャ繧ｯ繝ｻ蛹ｻ逋・| medical.css | #2B6CB0・磯搨・・| 貂・ｽ斐・菫｡鬆ｼ |
| 鬟ｲ鬟溘・繧ｫ繝輔ぉ | restaurant.css | #744210・医ヶ繝ｩ繧ｦ繝ｳ・・| 鬮倡ｴ壹・繝繝ｼ繧ｯ |
| 莨∵･ｭ繝ｻ豕穂ｺｺ繝ｻ蛟倶ｺｺ | corporate.css | #1A202C・医ロ繧､繝薙・・・| 繧ｷ繝ｳ繝励Ν繝ｻ隱螳・|

---

## 莉倬鹸縲AI繝・・繝ｫ縺ｮ蠖ｹ蜑ｲ蛻・球

| 繝・・繝ｫ | 蠖ｹ蜑ｲ | 縺ｧ縺阪↑縺・％縺ｨ |
|--------|------|-------------|
| Claude AI・医メ繝｣繝・ヨ・・| 繧ｳ繝ｳ繧ｻ繝励ヨ繝ｻ繧ｳ繝斐・繝ｻ讒区・繧定ｨ隱槫喧 | 隕冶ｦ壼喧繝ｻ繧ｳ繝ｼ繝牙ｮ溯｣・|
| Claude Design | UI繝励Ο繝医ち繧､繝励ｒ隕冶ｦ壼喧繝ｻ繧ｯ繝ｩ繧､繧｢繝ｳ繝育｢ｺ隱咲畑 | 蜍慕噪蜃ｦ逅・・繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ |
| Claude Code | Next.js繧ｳ繝ｳ繝昴・繝阪Φ繝亥ｮ溯｣・・蜍慕噪蜃ｦ逅・| 繝・じ繧､繝ｳ蛻､譁ｭ |

**菴ｿ縺・・分・・*

```
Claude AI・郁ｨ隱槫喧・俄・ Claude Design・郁ｦ冶ｦ壼喧・俄・ Claude Code・亥ｮ溯｣・ｼ・
```

---

## 莉倬鹸縲1譯井ｻｶ縺ｮ蜈ｨ菴薙ヵ繝ｭ繝ｼ

```
DAY 1  繝偵い繝ｪ繝ｳ繧ｰ繧ｷ繝ｼ繝医ｒ繧ｯ繝ｩ繧､繧｢繝ｳ繝医↓騾√ｋ・磯撼蜷梧悄繝ｻ霑皮ｭ泌ｾ・■・・
         竊・
       Claude AI 縺ｧ繧ｳ繝ｳ繧ｻ繝励ヨ繝ｻ繧ｳ繝斐・繧堤函謌・
         竊・
       Claude Design 縺ｧ繝励Ο繝医ち繧､繝礼函謌・竊・繧ｯ繝ｩ繧､繧｢繝ｳ繝域価隱・
         竊・
DAY 2  隨ｬ3遶縺ｮ謇矩・〒繝ｪ繝昴ず繝医Μ隍・｣ｽ繝ｻ迺ｰ蠅・ｧ狗ｯ・
         竊・
       Claude Code 縺ｧ繧ｻ繧ｯ繧ｷ繝ｧ繝ｳ蜊倅ｽ阪↓螳溯｣・
         竊・
DAY 3  microCMS 縺ｧ繧ｹ繧ｭ繝ｼ繝樔ｽ懈・繝ｻ繧ｳ繝ｳ繝・Φ繝・・遞ｿ
         竊・
DAY 4  隨ｬ4遶縺ｮ謇矩・〒Vercel縺ｫ繝・・繝ｭ繧､
         竊・
DAY 5  Lighthouse繧ｹ繧ｳ繧｢遒ｺ隱・竊・繝槭ル繝･繧｢繝ｫ騾∽ｻ・竊・邏榊刀
```

---

*譛邨よ峩譁ｰ: 2026蟷ｴ5譛・  
*菴懈・: Miyoki・・iyoki347・・
