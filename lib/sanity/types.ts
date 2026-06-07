export interface SanitySlug {
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Project {
  _id: string
  title: string
  slug: SanitySlug
  category: string
  year: number
  coverImage?: SanityImage
  liveUrl?: string
  summary?: string
  services?: string[]
  stack?: string[]
  featured?: boolean
  order?: number
}

export interface Post {
  _id: string
  title: string
  slug: SanitySlug
  publishedAt: string
  tag?: string
  body?: unknown[]
}

export interface PostList {
  _id: string
  title: string
  slug: SanitySlug
  publishedAt: string
  tag?: string
}
