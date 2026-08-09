import {defineType, defineField} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
        }),
        defineField({
          name: 'subtitle',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'bio',
          type: 'internationalizedArrayText',
        }),
      ],
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          type: 'string',
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: 'hero.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Bez nazwy',
      };
    },
  },
})