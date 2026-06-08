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
        Design engineer based in Lagos, Nigeria.
      </p>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
          marginBottom: '24px',
        }}
      >
        I built Precision — a dermatology startup — from zero with no
        playbook and limited resources. I learned quickly that having the
        idea isn&apos;t enough. What actually moves the needle is making the
        product look and work so well that it attracts the right people:
        dermatologists, accelerators, investors.
      </p>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
          marginBottom: '24px',
        }}
      >
        Clarity of vision and quality of execution are compounding assets.
        A product that looks considered signals seriousness. It opens doors
        that a deck alone won&apos;t.
      </p>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
          marginBottom: '48px',
        }}
      >
        Most founders I work with have everything — the idea, the name, the
        market, the vision. What&apos;s missing is someone who can make it look
        and work like the thing they see in their head. That&apos;s the gap I close.
      </p>

      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
          marginBottom: '48px',
        }}
      >
        This is what I&apos;ve built Clarit Studio around.
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
