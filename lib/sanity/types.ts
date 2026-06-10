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

export interface GalleryImage {
  _key: string
  image: SanityImage
  caption?: string
  span?: 'full' | 'half'
}

export interface OverviewSection {
  _key: string
  heading: string
  body: string
}

export interface Project {
  _id: string
  title: string
  slug: SanitySlug
  category: string
  year: number
  coverImage?: SanityImage
  gallery?: GalleryImage[]
  overview?: OverviewSection[]
  liveUrl?: string
  summary?: string
  services?: string[]
  stack?: string[]
  featured?: boolean
  order?: number
}

export interface ProjectList {
  _id: string
  title: string
  slug: SanitySlug
  category: string
  coverImage?: SanityImage
  featured?: boolean
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
