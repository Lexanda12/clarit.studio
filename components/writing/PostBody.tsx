import { PortableText } from '@portabletext/react'

interface PostBodyProps {
  value: any[]
}

const components = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
          marginBottom: '20px',
          margin: '0 0 20px 0',
        }}
      >
        {children}
      </p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2
        style={{
          fontSize: '15px',
          color: 'var(--text-primary)',
          fontWeight: 500,
          marginBottom: '12px',
          marginTop: '40px',
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3
        style={{
          fontSize: '13px',
          color: 'var(--text-primary)',
          fontWeight: 500,
          marginBottom: '8px',
          marginTop: '32px',
        }}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote
        style={{
          borderLeft: '2px solid var(--border)',
          paddingLeft: '16px',
          margin: '24px 0',
          color: 'var(--text-muted)',
          fontSize: '14px',
          lineHeight: '1.75',
        }}
      >
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
        {children}
      </strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em style={{ fontStyle: 'italic' }}>{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          backgroundColor: 'var(--bg-hover)',
          padding: '2px 6px',
          borderRadius: '2px',
          color: 'var(--text-primary)',
        }}
      >
        {children}
      </code>
    ),
  },
}

export default function PostBody({ value }: PostBodyProps) {
  return (
    <div>
      <PortableText value={value} components={components} />
    </div>
  )
}
