import RightPanelPrecision from '@/components/work/RightPanelPrecision'

export const metadata = {
  title: 'Precision — Eniola Alex',
  description: 'Two-sided dermatology PWA connecting patients to dermatologists in Nigeria.',
}

export default function PrecisionPage() {
  return (
    <>
      <RightPanelPrecision />
      <div style={{ padding: '0' }}>

        {/* Hero block */}
        <div
          style={{
            width: '100%',
            aspectRatio: '16/9',
            backgroundColor: 'var(--bg-hover)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            precision — hero screenshot
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '40px 32px', maxWidth: '680px' }}>

          {/* Problem */}
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Problem
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              Dermatology access in Nigeria is broken. Patients wait weeks for
              appointments. Dermatologists have no tools to manage consultations
              at scale. The gap between patient need and specialist availability
              is structural — and nobody had built the software to close it.
            </p>
          </div>

          {/* What I built */}
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              What I built
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              Precision is a two-sided PWA — a patient-facing app for submitting
              skin concerns with AI-assisted triage, and a doctor-facing dashboard
              for managing consultations, reviewing cases, and following up with
              patients. Built solo, from design through deployment.
            </p>
          </div>

          {/* Screenshot pair placeholder */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              backgroundColor: 'var(--border)',
              marginBottom: '48px',
            }}
          >
            {['Patient flow', 'Doctor dashboard'].map((label) => (
              <div
                key={label}
                style={{
                  backgroundColor: 'var(--bg-hover)',
                  aspectRatio: '4/3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Technical challenge */}
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Technical challenge
            </div>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                margin: 0,
              }}
            >
              Nigeria has unreliable internet. A healthcare app that fails offline
              is a healthcare app that fails patients. I built full offline-first
              support using IndexedDB for local data persistence and background
              sync — so patients can submit cases on 2G and doctors receive them
              when connectivity returns. Automated follow-ups run on Inngest.
              Notifications go out via Termii (SMS) and Resend (email).
            </p>
          </div>

          {/* AI screenshot placeholder */}
          <div
            style={{
              width: '100%',
              aspectRatio: '16/9',
              backgroundColor: 'var(--bg-hover)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '48px',
              border: '1px solid var(--border)',
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              AI diagnostic interface
            </span>
          </div>

          {/* Stack */}
          <div style={{ marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}
            >
              Stack
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              {[
                'Next.js',
                'TypeScript',
                'PostgreSQL',
                'Neon',
                'Claude Vision AI',
                'Paystack',
                'IndexedDB',
                'Inngest',
                'Termii',
                'Resend',
                'Vercel',
              ].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                    padding: '4px 8px',
                    borderRadius: '2px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Numbers */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px',
              backgroundColor: 'var(--border)',
              marginBottom: '48px',
            }}
          >
            {[
              { number: '400+', label: 'Patients' },
              { number: '18', label: 'Paid consultations' },
              { number: '9', label: 'Dermatologists' },
              { number: '100%', label: 'Satisfaction' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: 'var(--bg-base)',
                  padding: '24px 16px',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                    color: 'var(--text-primary)',
                    fontWeight: 400,
                    marginBottom: '4px',
                  }}
                >
                  {stat.number}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Accelerators */}
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
              Backed by
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
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

          {/* Live link */}
          <a
            href="https://app.tryprecisioncare.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px',
              color: 'var(--text-primary)',
              borderBottom: '1px solid var(--text-muted)',
              paddingBottom: '2px',
              textDecoration: 'none',
            }}
          >
            View live — app.tryprecisioncare.com ↗
          </a>

        </div>
      </div>
    </>
  )
}
