interface PanelItem {
  label: string
  value: string | string[]
  isLink?: boolean
  href?: string
}

interface RightPanelProps {
  items: PanelItem[]
}

export default function RightPanel({ items }: RightPanelProps) {
  return (
    <aside
      style={{
        width: 'var(--panel-width)',
        minWidth: 'var(--panel-width)',
        height: '100vh',
        position: 'fixed',
        top: 0,
        right: 0,
        backgroundColor: 'var(--bg-panel)',
        borderLeft: '1px solid var(--border)',
        padding: '20px 16px',
        overflowY: 'auto',
        zIndex: 50,
      }}
    >
      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: '20px' }}>
          <div
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '4px',
            }}
          >
            {item.label}
          </div>
          {Array.isArray(item.value) ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {item.value.map((v, j) => (
                <div key={j} style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  {v}
                </div>
              ))}
            </div>
          ) : item.isLink && item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
            >
              {item.value} ↗
            </a>
          ) : (
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              {item.value}
            </div>
          )}
        </div>
      ))}
    </aside>
  )
}
