import { notFound } from 'next/navigation'
import PostBody from '@/components/writing/PostBody'
import { client } from '@/lib/sanity/client'
import { postBySlugQuery } from '@/lib/sanity/queries'
import { Post as PostType } from '@/lib/sanity/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export const dynamic = 'force-dynamic'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch<PostType>(postBySlugQuery, { slug })
  if (!post) {
    return {
      title: 'Post Not Found — Eniola Alex',
    }
  }
  return {
    title: `${post.title} — Eniola Alex`,
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await client.fetch<PostType>(postBySlugQuery, { slug })

  if (!post) {
    notFound()
  }

  return (
    <div style={{ padding: '40px 32px', maxWidth: '680px' }}>
      <div
        style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          marginBottom: '8px',
        }}
      >
        {formatDate(post.publishedAt)}
      </div>
      <h1
        style={{
          fontSize: '20px',
          color: 'var(--text-primary)',
          fontWeight: 500,
          marginBottom: '32px',
          lineHeight: '1.4',
        }}
      >
        {post.title}
      </h1>
      {post.body && <PostBody value={post.body} />}
    </div>
  )
}
