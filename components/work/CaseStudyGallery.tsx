import Image from 'next/image'
import { urlFor } from '@/lib/sanity/image'
import { GalleryImage } from '@/lib/sanity/types'

interface CaseStudyGalleryProps {
  images: GalleryImage[]
}

export default function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  if (!images || images.length === 0) return null

  const rows: GalleryImage[][] = []
  let i = 0

  while (i < images.length) {
    const current = images[i]
    if (current.span === 'half' && images[i + 1]?.span === 'half') {
      rows.push([current, images[i + 1]])
      i += 2
    } else {
      rows.push([current])
      i += 1
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'var(--border)' }}>
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: 'grid',
            gridTemplateColumns: row.length === 2 ? '1fr 1fr' : '1fr',
            gap: '1px',
            backgroundColor: 'var(--border)',
          }}
        >
          {row.map((item) => (
            <div key={item._key} style={{ backgroundColor: 'var(--bg-base)', position: 'relative' }}>
              <div style={{ position: 'relative', width: '100%', aspectRatio: row.length === 2 ? '4/3' : '16/9' }}>
                <Image
                  src={urlFor(item.image).width(1200).url()}
                  alt={item.caption ?? ''}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              {item.caption && (
                <div style={{ padding: '8px 0 12px', fontSize: '11px', color: 'var(--text-muted)' }}>
                  {item.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
