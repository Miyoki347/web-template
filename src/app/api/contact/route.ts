import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactBody = {
  name:    string
  email:   string
  message: string
}

type FieldErrors = Partial<Record<keyof ContactBody, string>>

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(body: Partial<ContactBody>): FieldErrors {
  const errors: FieldErrors = {}

  if (!body.name?.trim())    errors.name    = 'お名前は必須です'
  if (!body.email?.trim()) {
    errors.email = 'メールアドレスは必須です'
  } else if (!EMAIL_REGEX.test(body.email)) {
    errors.email = 'メールアドレスの形式が正しくありません'
  }
  if (!body.message?.trim()) errors.message = 'メッセージは必須です'

  return errors
}

export async function POST(req: NextRequest) {
  // 環境変数チェック
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { error: 'サーバー設定エラーが発生しました' },
      { status: 500 }
    )
  }

  // ボディパース
  let body: Partial<ContactBody>
  try {
    body = (await req.json()) as Partial<ContactBody>
  } catch {
    return NextResponse.json({ error: 'リクエスト形式が正しくありません' }, { status: 400 })
  }

  // バリデーション
  const errors = validate(body)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 })
  }

  const { name, email, message } = body as ContactBody

  // Resend でメール送信
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error } = await resend.emails.send({
    from:    process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev',
    to:      [process.env.CONTACT_TO_EMAIL],
    replyTo: email,
    subject: `【お問い合わせ】${name} 様より`,
    text: [
      `名前: ${name}`,
      `メール: ${email}`,
      '',
      message,
    ].join('\n'),
  })

  if (error) {
    console.error('[contact] resend error:', error)
    return NextResponse.json({ error: 'メール送信に失敗しました' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
