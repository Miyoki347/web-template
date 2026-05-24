'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CursorFollower() {
  const [active, setActive] = useState(false)
  const [hovering, setHovering] = useState(false)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)

  // 外リング：ゆっくり追従
  const ringX = useSpring(x, { damping: 22, stiffness: 280, mass: 0.6 })
  const ringY = useSpring(y, { damping: 22, stiffness: 280, mass: 0.6 })
  // 内ドット：素早く追従
  const dotX = useSpring(x, { damping: 45, stiffness: 900 })
  const dotY = useSpring(y, { damping: 45, stiffness: 900 })

  useEffect(() => {
    // タッチデバイス・動き軽減設定ではスキップ
    if (
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return

    setActive(true)
    document.body.classList.add('cursor-custom')

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [role="button"], [data-cursor-hover]'))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    return () => {
      document.body.classList.remove('cursor-custom')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [x, y])

  if (!active) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true">
      {/* スポットライトグロー */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          width: 320,
          height: 320,
          background: 'radial-gradient(circle, var(--brand-glow) 0%, transparent 65%)',
          opacity: 0.55,
        }}
      />

      {/* 外リング */}
      <motion.div
        className="absolute rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: 'var(--brand-primary)',
        }}
        animate={{
          width:   hovering ? 52 : 32,
          height:  hovering ? 52 : 32,
          opacity: hovering ? 0.9 : 0.55,
        }}
        transition={{ duration: 0.18 }}
      />

      {/* 内ドット */}
      <motion.div
        className="absolute rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 6,
          height: 6,
          backgroundColor: 'var(--brand-primary)',
          boxShadow: '0 0 10px var(--brand-glow), 0 0 4px var(--brand-primary)',
        }}
        animate={{ scale: hovering ? 1.6 : 1 }}
        transition={{ duration: 0.18 }}
      />
    </div>
  )
}
