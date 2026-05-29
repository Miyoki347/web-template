import { createClient } from 'microcms-js-sdk'
import type {
  MicroCMSListContent,
  MicroCMSObjectContent,
  MicroCMSImage,
  MicroCMSListResponse,
} from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey:        process.env.MICROCMS_API_KEY!,
})

// ── 共通型 ──────────────────────────────
export type { MicroCMSImage }

// ── コンテンツ型定義 ─────────────────────
// ※ id / createdAt / updatedAt / publishedAt / revisedAt は
//   MicroCMSListContent / MicroCMSObjectContent が持つため定義不要

export type NewsItem = {
  title:       string
  body:        string
  category:    string
  thumbnail:   MicroCMSImage
} & MicroCMSListContent

export type SiteSettings = {
  siteName:      string
  tel:           string
  address:       string
  email:         string
  twitterUrl?:   string
  instagramUrl?: string
} & MicroCMSObjectContent

export type Hero = {
  heading:         string
  subheading:      string
  backgroundImage: MicroCMSImage
  ctaText:         string
  ctaUrl:          string
} & MicroCMSObjectContent

export type Service = {
  title:       string
  description: string
  price:       string
  sortOrder:   number
} & MicroCMSListContent

// ── 取得関数 ─────────────────────────────

/** /news リスト取得（新着順） */
export async function getNewsList(limit = 10): Promise<MicroCMSListResponse<NewsItem>> {
  return client.getList<NewsItem>({
    endpoint: 'news',
    queries: { limit, orders: '-publishedAt' },
  })
}

/** /news 単件取得 */
export async function getNewsDetail(contentId: string): Promise<NewsItem> {
  return client.getListDetail<NewsItem>({
    endpoint: 'news',
    contentId,
  })
}

/** /settings オブジェクト取得 */
export async function getSiteSettings(): Promise<SiteSettings> {
  return client.getObject<SiteSettings>({ endpoint: 'settings' })
}

/** /hero オブジェクト取得 */
export async function getHero(): Promise<Hero> {
  return client.getObject<Hero>({ endpoint: 'hero' })
}

/** /services リスト取得（sortOrder 昇順） */
export async function getServices(limit = 100): Promise<MicroCMSListResponse<Service>> {
  return client.getList<Service>({
    endpoint: 'services',
    queries: { limit, orders: 'sortOrder' },
  })
}
