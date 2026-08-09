import { defineType, defineField } from 'sanity';

export const Gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',

  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Galeria',
      };
    },
  },
});