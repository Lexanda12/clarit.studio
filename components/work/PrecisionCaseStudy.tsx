import Image from 'next/image'

function Stage({
  src,
  alt,
  priority = false,
}: {
  src: string
  alt: string
  priority?: boolean
}) {
  return (
    <div
      style={{
        backgroundColor: '#0c0c0c',
        padding: '40px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: '4px',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'top' }}
          priority={priority}
        />
      </div>
    </div>
  )
}

function StagePair({
  left,
  right,
}: {
  left: { src: string; alt: string; caption?: string }
  right: { src: string; alt: string; caption?: string }
}) {
  return (
    <div
      style={{
        backgroundColor: '#0c0c0c',
        padding: '40px',
        borderBottom: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
      }}
    >
      {[left, right].map((item) => (
        <div key={item.src}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
          {item.caption && (
            <div
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                marginTop: '10px',
              }}
            >
              {item.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function TextBlock({
  heading,
  body,
}: {
  heading: string
  body: string
}) {
  return (
    <div
      style={{
        padding: '40px 32px',
        maxWidth: '640px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '12px',
        }}
      >
        {heading}
      </div>
      <p
        style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  )
}

function StatsBar() {
  const stats = [
    { number: '400+', label: 'Patients' },
    { number: '18', label: 'Paid consultations' },
    { number: '9', label: 'Dermatologists' },
    { number: '100%', label: 'Satisfaction' },
  ]
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        borderBottom: '1px solid var(--border)',
        borderTop: '1px solid var(--border)',
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          style={{
            padding: '32px 24px',
            borderRight:
              i < stats.length - 1 ? '1px solid var(--border)' : 'none',
          }}
        >
          <div
            style={{
              fontSize: '28px',
              color: 'var(--text-primary)',
              fontWeight: 400,
              marginBottom: '4px',
              letterSpacing: '-0.02em',
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
  )
}

export default function PrecisionCaseStudy() {
  return (
    <>
      <Stage
        src="/precision/Cover.png"
        alt="Precision — Expert-backed dermatology care"
        priority
      />

      <TextBlock
        heading="Problem"
        body="Dermatology access in Nigeria is broken. Patients wait weeks for appointments. Dermatologists have no tools to manage consultations at scale. The gap between patient need and specialist availability is structural — and nobody had built the software to close it."
      />

      <StagePair
        left={{
          src: '/precision/Scan.png',
          alt: 'AI skin scan',
          caption: 'Patient uploads a photo for instant AI assessment',
        }}
        right={{
          src: '/precision/Skin_Report.png',
          alt: 'Skin report',
          caption: 'Precision Intelligence returns a skin report in seconds',
        }}
      />

      <TextBlock
        heading="What I built"
        body="Precision is a two-sided PWA — a patient-facing app for submitting skin concerns with AI-assisted triage, and a doctor-facing dashboard for managing consultations, reviewing cases, and following up with patients. Built solo, from design through deployment."
      />

      <StagePair
        left={{
          src: '/precision/Intake.png',
          alt: 'Patient intake form',
          caption: 'Structured intake form collects medical history',
        }}
        right={{
          src: '/precision/Slot.png',
          alt: 'Pick a consultation time',
          caption: 'Patient books a slot with a certified dermatologist',
        }}
      />

      <Stage
        src="/precision/Clinic_Dashboard.png"
        alt="Doctor dashboard — new bookings and follow-ups"
      />

      <TextBlock
        heading="Technical challenge"
        body="Nigeria has unreliable internet. A healthcare app that fails offline is a healthcare app that fails patients. I built full offline-first support using IndexedDB for local data persistence and background sync — so patients can submit cases on 2G and doctors receive them when connectivity returns. Automated follow-ups run on Inngest. Notifications go out via Termii (SMS) and Resend (email)."
      />

      <Stage
        src="/precision/Clinic_Patient.png"
        alt="Patient pipeline — kanban view"
      />

      <StatsBar />

      <Stage
        src="/precision/clinic_revenue.png"
        alt="Revenue dashboard — ₦1.1M all time"
      />

      <div style={{ padding: '40px 32px', maxWidth: '640px' }}>
        <div style={{ marginBottom: '32px' }}>
          <div
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
            }}
          >
            Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
              width: 'fit-content',
            }}
          >
            Launch PWA — app.tryprecisioncare.com ↗
          </a>
          <a
            href="https://www.tryprecisioncare.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '13px',
              color: 'var(--text-primary)',
              borderBottom: '1px solid var(--text-muted)',
              paddingBottom: '2px',
              textDecoration: 'none',
              width: 'fit-content',
            }}
          >
            Visit website — tryprecisioncare.com ↗
          </a>
        </div>
      </div>
    </>
  )
}
