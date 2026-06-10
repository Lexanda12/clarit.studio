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
    defineField({
      name: 'gallery',
      type: 'array',
      title: 'Case Study Gallery',
      description: 'Images shown in the case study page in order',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              type: 'image',
              title: 'Image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional label shown below the image',
            }),
            defineField({
              name: 'span',
              type: 'string',
              title: 'Width',
              description: 'How wide this image appears',
              options: {
                list: [
                  { title: 'Full width', value: 'full' },
                  { title: 'Half width (left)', value: 'half' },
                ],
                layout: 'radio',
              },
              initialValue: 'full',
            }),
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
            },
            prepare({ title, media }) {
              return {
                title: (title as string | undefined) || 'Untitled image',
                media,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'overview',
      type: 'array',
      title: 'Case Study Overview',
      description: 'The written sections of the case study',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              type: 'string',
              title: 'Section Heading',
            }),
            defineField({
              name: 'body',
              type: 'text',
              title: 'Body',
              rows: 4,
            }),
          ],
          preview: {
            select: { title: 'heading' },
          },
        },
      ],
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
