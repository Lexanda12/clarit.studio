import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: ['Product', 'Design', 'Engineering', 'Brand'],
      },
    }),
    defineField({ name: 'year', type: 'number', title: 'Year' }),
    defineField({
      name: 'coverImage',
      type: 'image',
      title: 'Cover Image',
      options: { hotspot: true },
    }),
    defineField({ name: 'liveUrl', type: 'url', title: 'Live URL' }),
    defineField({
      name: 'summary',
      type: 'text',
      title: 'Summary',
      rows: 3,
    }),
    defineField({
      name: 'services',
      type: 'array',
      title: 'Services',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'stack',
      type: 'array',
      title: 'Tech Stack',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      title: 'Featured',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      type: 'number',
      title: 'Display Order',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'order',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
