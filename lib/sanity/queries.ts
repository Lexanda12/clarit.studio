import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    category,
    coverImage,
    featured
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    year,
    coverImage,
    gallery[] {
      _key,
      image,
      caption,
      span
    },
    overview[] {
      _key,
      heading,
      body
    },
    liveUrl,
    summary,
    services,
    stack,
    featured,
    stats[] {
      number,
      label
    },
    backedBy
  }
`

export const postListQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    tag
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    tag,
    body
  }
`
