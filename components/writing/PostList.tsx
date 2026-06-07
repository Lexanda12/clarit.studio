import Link from 'next/link'
import { PostList as PostListType } from '@/lib/sanity/types'

interface PostListProps {
  posts: PostListType[]
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/writing/${post.slug.current}`}
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <div
            style={{
              padding: '16px 0',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              gap: '24px',
              alignItems: 'baseline',
            }}
          >
            <span
              style={{
                fontSize: '11px',
                color: 'var(--text-muted)',
                minWidth: '120px',
                flexShrink: 0,
              }}
            >
              {formatDate(post.publishedAt)}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
              {post.title}
            </span>
            {post.tag && (
              <span
                style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  marginLeft: 'auto',
                  flexShrink: 0,
                }}
              >
                {post.tag}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}
