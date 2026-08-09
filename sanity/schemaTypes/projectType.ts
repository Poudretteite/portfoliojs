import { defineType, defineField, defineArrayMember } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export const projectType = defineType({
  name: 'projectType',
  title: 'Projekty',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'projectType'}),
    // Nazwa kategorii 
    defineField({
      name: 'title',
      title: 'Tytuł projektu',
      type: 'internationalizedArrayString',
    }),
    // Metadane projektu
    defineField({
      name: 'metadata',
      title: 'Metadane projektu',
      type: 'object',
      fields: [
        defineField({
          name: 'medium',
          title: 'Medium',
          type: 'internationalizedArrayString',
        }),
        defineField({
          name: 'format',
          title: 'Format',
          type: 'internationalizedArrayString',
        })
      ]
    }),
    defineField({
      name: 'shortDesc',
      title: 'Krótki opis projektu',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'longDesc',
      title: 'Długi opis projektu',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'images',
      title: 'Zdjęcia',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {
            hotspot: true,
          }
        })
      ]
    }),
    defineField({
      name: 'videos',
      title: 'Filmy',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'type',
              title: 'Typ filmu',
              type: 'string',
              options: {
                list: [
                  {
                    title: 'Film (plik)',
                    value: 'video',
                  },
                  {
                    title: 'YouTube',
                    value: 'youtube',
                  },
                  {
                    title: 'Facebook',
                    value: 'facebook',
                  },
                ]
              }
            }),
            defineField({
              name: 'file',
              title: 'Plik video',
              type: 'file',
            }),
            defineField({
              name: 'url',
              title: 'Link',
              type: 'url',
            })
          ],
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title?.[0]?.value || 'Bez nazwy',
      };
    }
  }
});