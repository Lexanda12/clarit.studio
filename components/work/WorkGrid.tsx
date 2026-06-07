import WorkCell from './WorkCell'

interface Project {
  _id: string
  title: string
  category: string
  slug: { current: string }
  coverImage?: string
  tall?: boolean
}

interface WorkGridProps {
  projects: Project[]
}

export default function WorkGrid({ projects }: WorkGridProps) {
  if (projects.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
          No projects yet.
        </span>
      </div>
    )
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0',
        borderTop: '1px solid var(--border)',
        borderLeft: '1px solid var(--border)',
      }}
    >
      {projects.map((project) => (
        <div
          key={project._id}
          style={{
            borderRight: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            padding: '0',
          }}
        >
          <WorkCell
            title={project.title}
            category={project.category}
            href={`/work/${project.slug.current}`}
            imageSrc={project.coverImage}
            tall={project.tall}
          />
        </div>
      ))}
    </div>
  )
}
