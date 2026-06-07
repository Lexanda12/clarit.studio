import { client } from '@/lib/sanity/client'
import { postListQuery } from '@/lib/sanity/queries'
import { PostList as PostListType } from '@/lib/sanity/types'
import PostList from '@/components/writing/PostList'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Writing — Eniola Alex',
  description: 'Thinking on design, engineering, and building products.',
}

export default async function WritingPage() {
  let posts: PostListType[] = []

  try {
    posts = await client.fetch<PostListType[]>(postListQuery)
  } catch {
    posts = []
  }

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
        Writing
      </div>
      <PostList posts={posts} />
    </div>
  )
}
