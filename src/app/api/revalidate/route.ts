import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// microCMS Webhook が送ってくるボディの型
type WebhookBody = {
  service: string
  api:     string
  id?:     string
  type:    'new' | 'edit' | 'delete'
}

// エンドポイントごとに再検証するパスのマッピング
const REVALIDATE_PATHS: Record<string, { path: string; type?: 'page' | 'layout' }[]> = {
  news:     [
    { path: '/' },
    { path: '/news' },
    { path: '/news/[slug]', type: 'page' },
  ],
  settings: [{ path: '/', type: 'layout' }],
  hero:     [{ path: '/' }],
  services: [{ path: '/' }],
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  let body: WebhookBody
  try {
    body = (await req.json()) as WebhookBody
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const targets = REVALIDATE_PATHS[body.api] ?? [{ path: '/' }]

  for (const { path, type } of targets) {
    revalidatePath(path, type)
  }

  return NextResponse.json({
    revalidated: true,
    api:         body.api,
    paths:       targets.map((t) => t.path),
    timestamp:   Date.now(),
  })
}
