export const metadata = {
  title: 'About — Eniola Alex',
}

export default function AboutPage() {
  return (
    <div style={{ padding: '40px 32px', maxWidth: '560px' }}>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
          marginBottom: '24px',
        }}
      >
        I&apos;m a designer who ships the code. I close the gap between what a
        product could look like and what it actually ships as.
      </p>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
          marginBottom: '48px',
        }}
      >
        Based in Lagos, Nigeria. Founder of Clarit Studio. I work with
        YC-backed startups as a design engineer — the person who takes a
        Figma file to production without losing anything in translation.
      </p>

      <div style={{ marginBottom: '48px' }}>
        <div
          style={{
            fontSize: '11px',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}
        >
          Recognition
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            'Moonshot by Techcabal',
            'Brave Fellowship',
            'OFO Founder Fellowship',
            'Nithub Accelerator',
          ].map((org) => (
            <div
              key={org}
              style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
            >
              {org}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div
          style={{
            fontSize: '11px',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '12px',
          }}
        >
          Contact
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <a
            href="mailto:alex@clarit.studio"
            style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
          >
            alex@clarit.studio
          </a>
          <a
            href="https://linkedin.com/in/eniolaalex"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

    </div>
  )
}
