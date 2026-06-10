import { client } from '@/lib/sanity/client'
import { projectBySlugQuery, projectsQuery } from '@/lib/sanity/queries'
import { Project, ProjectList } from '@/lib/sanity/types'
import { notFound } from 'next/navigation'
import { urlFor } from '@/lib/sanity/image'
import Image from 'next/image'
import CaseStudyGallery from '@/components/work/CaseStudyGallery'
import RightPanel from '@/components/layout/RightPanel'

export const revalidate = 60

export async function generateStaticParams() {
  const projects = await client.fetch<ProjectList[]>(projectsQuery)
  return projects.map((p) => ({ slug: p.slug.current }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = await client.fetch<Project>(projectBySlugQuery, { slug })

  if (!project) notFound()

  const panelItems = [
    { label: 'Year', value: String(project.year) },
    ...(project.services ? [{ label: 'Services', value: project.services }] : []),
    ...(project.liveUrl ? [{ label: 'Live', value: project.liveUrl.replace('https://', ''), isLink: true, href: project.liveUrl }] : []),
    ...(project.summary ? [{ label: 'Description', value: project.summary }] : []),
    ...(project.stack ? [{ label: 'Stack', value: project.stack }] : []),
  ]

  return (
    <>
      <div style={{ position: 'fixed', top: 0, right: 0, width: 'var(--panel-width)', height: '100vh', zIndex: 50 }}>
        <RightPanel items={panelItems} />
      </div>
      <div>
        {/* Hero image */}
        {project.coverImage && (
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderBottom: '1px solid var(--border)' }}>
            <Image
              src={urlFor(project.coverImage).width(1600).url()}
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        )}

        <div style={{ padding: '40px 32px', maxWidth: '680px' }}>

          {/* Overview sections */}
          {project.overview && project.overview.map((section) => (
            <div key={section._key} style={{ marginBottom: '48px' }}>
              <div style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}>
                {section.heading}
              </div>
              <p style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
                margin: 0,
              }}>
                {section.body}
              </p>
            </div>
          ))}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <div style={{ marginBottom: '48px' }}>
              <CaseStudyGallery images={project.gallery} />
            </div>
          )}

          {/* Stack tags */}
          {project.stack && (
            <div style={{ marginBottom: '48px' }}>
              <div style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px',
              }}>
                Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.stack.map((tech) => (
                  <span key={tech} style={{
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    border: '1px solid var(--border)',
                    padding: '4px 8px',
                    borderRadius: '2px',
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stats / Numbers */}
          {project.stats && project.stats.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${project.stats.length}, 1fr)`,
                gap: '1px',
                backgroundColor: 'var(--border)',
                marginBottom: '48px',
              }}
            >
              {project.stats.map((stat) => (
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
          )}

          {/* Accelerators / Backed by */}
          {project.backedBy && project.backedBy.length > 0 && (
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
                {project.backedBy.map((org) => (
                  <div
                    key={org}
                    style={{ fontSize: '13px', color: 'var(--text-secondary)' }}
                  >
                    {org}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Live link */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
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
              View live ↗
            </a>
          )}
        </div>
      </div>
    </>
  )
}
