import { defineType, defineField, defineArrayMember } from 'sanity';
import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list'

export const exhibitionCategory = defineType({
  name: 'exhibitionCategory',
  title: 'Kategorie Wystaw',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'exhibitionCategory'}),
    // Nazwa kategorii 
    defineField({
      name: 'title',
      title: 'Tytuł kategorii',
      description: 'np. Wystawy indywidualne / Solo exhibitions',
      type: 'internationalizedArrayString',
    }),
    // Lista wystaw w kategorii
    defineField({
      name: 'items',
      title: 'Lista wystaw',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'year',
              title: 'Rok',
              type: 'string',
            }),
            // Opis wystawy (PL + EN)
            defineField({
              name: 'description',
              title: 'Opis wystawy',
              type: 'internationalizedArrayText',
            }),
          ],

          preview: {
            select: {
              year: 'year',
              description: 'description',
            },
            prepare({ year, description }) {
              return {
                title: year,
                subtitle:
                  description?.[0]?.value || 'Brak opisu',
              };
            },
          },
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title:
          title?.[0]?.value || 'Bez nazwy',
      };
    },
  },
});