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
          surface:   'var(--brand-surface)',
          text:      'var(--brand-text)',
          muted:     'var(--brand-text-muted)',
          glow:      'var(--brand-glow)',
        },
      },
      borderRadius: {
        brand: 'var(--radius-brand)',
        card:  'var(--radius-card)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body:    'var(--font-body)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        hero: 'var(--shadow-hero)',
      },
      transitionTimingFunction: {
        brand: 'var(--anim-ease)',
      },
      transitionDuration: {
        brand: 'var(--anim-speed)',
      },
    },
  },
  plugins: [],
}

export default config
