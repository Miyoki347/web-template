import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey:        process.env.MICROCMS_API_KEY!,
})

// ── 型定義 ──────────────────────────────
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

// ── 取得関数 ──────────────────────────────
export async function getNewsList(limit = 10) {
  return client.getList({
    endpoint: 'news',
    queries: { limit, orders: '-publishedAt' },
  })
}

export async function getNewsDetail(contentId: string) {
  return client.get({ endpoint: 'news', contentId })
}

export async function getSiteSettings() {
  return client.get({ endpoint: 'settings' })
}
