/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'

const projectId = 'xunid8ab'
const dataset = 'production'
const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION || '2026-08-05'

export default defineConfig({
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    internationalizedArray({

      languages: [
        {
          id: 'pl',
          title: 'Polski'
        },
        {
          id: 'en',
          title: 'English'
        },
      ],

      fieldTypes: [
        'string',
        'text'
      ],

    }),
  ],
})
