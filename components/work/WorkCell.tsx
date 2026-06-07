'use client'

import Link from 'next/link'
import Image from 'next/image'

interface WorkCellProps {
  title: string
  category: string
  href: string
  imageSrc?: string
  imageAlt?: string
  tall?: boolean
}

export default function WorkCell({
  title,
  category,
  href,
  imageSrc,
  imageAlt,
  tall = false,
}: WorkCellProps) {
  return (
    <Link
      href={href}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: tall ? '4/5' : '16/10',
          backgroundColor: 'var(--bg-hover)',
          overflow: 'hidden',
        }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            style={{
              objectFit: 'cover',
              transition: 'filter 150ms ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLImageElement).style.filter = 'brightness(0.85)'
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLImageElement).style.filter = 'brightness(1)'
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              {title}
            </span>
          </div>
        )}
      </div>
      <div
        style={{
          padding: '8px 0 16px',
          display: 'flex',
          gap: '8px',
          alignItems: 'baseline',
        }}
      >
        <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
          {title}
        </span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          {category}
        </span>
      </div>
    </Link>
  )
}
