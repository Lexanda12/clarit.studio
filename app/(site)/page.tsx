import { client } from '@/lib/sanity/client'
import { projectsQuery } from '@/lib/sanity/queries'
import { ProjectList } from '@/lib/sanity/types'
import WorkGrid from '@/components/work/WorkGrid'
import { urlFor } from '@/lib/sanity/image'

export const revalidate = 60

interface GridProject {
  _id: string
  title: string
  category: string
  slug: { current: string }
  coverImage?: string
  tall?: boolean
}

export default async function Home() {
  let projects: ProjectList[] = []

  try {
    projects = await client.fetch<ProjectList[]>(projectsQuery)
  } catch {
    projects = []
  }

  const STATIC_COVERS: Record<string, string> = {
    precision: '/precision/Cover.png',
  }

  const gridProjects: GridProject[] = projects.map((p) => ({
    _id: p._id,
    title: p.title,
    category: p.category,
    slug: p.slug,
    coverImage:
      (p.coverImage && p.coverImage.asset)
        ? urlFor(p.coverImage).width(800).url()
        : STATIC_COVERS[p.slug.current] ?? undefined,
  }))

  return (
    <div style={{ padding: '20px' }}>
      <div
        style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '20px',
        }}
      >
        Work
      </div>
      <WorkGrid projects={gridProjects} />
    </div>
  )
}
