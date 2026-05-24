'use client'

import { useEffect, useRef } from 'react'

export type HeroVariant = 'blob' | 'particle' | 'wave' | 'grid'

interface HeroBackgroundProps {
  variant?: HeroVariant
  className?: string
}

/**
 * ヒーローセクション背景アニメーション
 *
 * variant 早見表:
 *   blob     — 浮遊グラデーションブロブ（nursery, medical, corporate など明るい系）
 *   particle — 粒子コンステレーション（food-bar, food-fine, startup, fitness などダーク系）
 *   wave     — 有機的ウェーブ（food-cafe, medical-wellness, renovation など自然系）
 *   grid     — 幾何学グリッド（corporate, professional, realestate など格式系）
 */
export default function HeroBackground({ variant = 'blob', className = '' }: HeroBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {variant === 'blob'     && <BlobBackground />}
      {variant === 'particle' && <ParticleBackground />}
      {variant === 'wave'     && <WaveBackground />}
      {variant === 'grid'     && <GridBackground />}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Blob — 大きなぼかし円が緩やかに漂う                                  */
/* ------------------------------------------------------------------ */
function BlobBackground() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute rounded-full"
        style={{
          width: 'min(60vw, 700px)',
          height: 'min(60vw, 700px)',
          top: '-20%',
          left: '-10%',
          background: 'var(--brand-primary)',
          opacity: 0.12,
          filter: 'blur(80px)',
          animation: 'blob-drift-1 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 'min(50vw, 600px)',
          height: 'min(50vw, 600px)',
          top: '10%',
          right: '-15%',
          background: 'var(--brand-secondary)',
          opacity: 0.1,
          filter: 'blur(80px)',
          animation: 'blob-drift-2 16s ease-in-out infinite',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 'min(40vw, 500px)',
          height: 'min(40vw, 500px)',
          bottom: '-10%',
          left: '30%',
          background: 'var(--brand-accent)',
          opacity: 0.08,
          filter: 'blur(60px)',
          animation: 'blob-drift-3 10s ease-in-out infinite',
        }}
      />
      {/* ノイズテクスチャ */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Particle — Canvas ベースの粒子コンステレーション                      */
/* ------------------------------------------------------------------ */
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -999, y: -999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // CSS変数から hex を RGB 分解
    function hexToRgb(hex: string): [number, number, number] {
      const h = hex.replace('#', '').trim()
      return [
        parseInt(h.slice(0, 2), 16),
        parseInt(h.slice(2, 4), 16),
        parseInt(h.slice(4, 6), 16),
      ]
    }

    const style = getComputedStyle(document.documentElement)
    const [pr, pg, pb] = hexToRgb(style.getPropertyValue('--brand-primary').trim())
    const [sr, sg, sb] = hexToRgb(style.getPropertyValue('--brand-secondary').trim())

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()

    type P = { x: number; y: number; vx: number; vy: number; r: number }

    const COUNT = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80)
    const particles: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.5 + 0.8,
    }))

    const MAX_DIST = 130
    let animId: number

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height)  p.vy *= -1

        // マウス反発
        const dx = p.x - mouseRef.current.x
        const dy = p.y - mouseRef.current.y
        const d = Math.hypot(dx, dy)
        if (d < 100 && d > 0) {
          const f = ((100 - d) / 100) * 0.35
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
        }

        // 速度上限
        const speed = Math.hypot(p.vx, p.vy)
        if (speed > 1.5) {
          p.vx = (p.vx / speed) * 1.5
          p.vy = (p.vy / speed) * 1.5
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${pr},${pg},${pb},0.75)`
        ctx.fill()
      }

      // 近い粒子同士を線でつなぐ
      for (let i = 0; i < particles.length - 1; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.hypot(dx, dy)
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.35
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(${sr},${sg},${sb},${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(tick)
    }

    tick()

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    window.addEventListener('mousemove', onMove)

    return () => {
      cancelAnimationFrame(animId)
      observer.disconnect()
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.65 }}
    />
  )
}

/* ------------------------------------------------------------------ */
/* Wave — SVG 多層ウェーブ                                              */
/* ------------------------------------------------------------------ */
function WaveBackground() {
  return (
    <div className="absolute inset-0">
      {/* ラジアルグロー */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, var(--brand-glow) 0%, transparent 70%)',
          opacity: 0.4,
        }}
      />

      {/* Wave 1 */}
      <svg
        className="absolute bottom-0 left-0"
        style={{ width: '200%', animation: 'wave-drift-1 8s ease-in-out infinite' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0,160 C360,240 720,80 1080,160 C1260,200 1380,140 1440,160 L1440,320 L0,320 Z"
          style={{ fill: 'var(--brand-primary)', opacity: 0.07 }}
        />
      </svg>

      {/* Wave 2 */}
      <svg
        className="absolute bottom-0 left-0"
        style={{ width: '200%', animation: 'wave-drift-2 11s ease-in-out infinite' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0,200 C480,120 960,280 1440,200 L1440,320 L0,320 Z"
          style={{ fill: 'var(--brand-secondary)', opacity: 0.06 }}
        />
      </svg>

      {/* Wave 3 */}
      <svg
        className="absolute bottom-0 left-0"
        style={{ width: '200%', animation: 'wave-drift-3 14s ease-in-out infinite' }}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          d="M0,240 C360,160 720,300 1080,240 C1260,210 1380,270 1440,240 L1440,320 L0,320 Z"
          style={{ fill: 'var(--brand-accent)', opacity: 0.05 }}
        />
      </svg>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Grid — 幾何学グリッドライン                                           */
/* ------------------------------------------------------------------ */
function GridBackground() {
  return (
    <div className="absolute inset-0">
      {/* グリッドライン */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(var(--brand-primary) 1px, transparent 1px),
            linear-gradient(90deg, var(--brand-primary) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-pulse 4s ease-in-out infinite',
        }}
      />
      {/* 角のグロー */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2"
        style={{
          background: 'radial-gradient(circle at top right, var(--brand-glow) 0%, transparent 60%)',
          opacity: 0.35,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-1/3 h-1/3"
        style={{
          background: 'radial-gradient(circle at bottom left, var(--brand-glow) 0%, transparent 70%)',
          opacity: 0.2,
        }}
      />
    </div>
  )
}
