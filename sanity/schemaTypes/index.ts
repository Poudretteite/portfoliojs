import { type SchemaTypeDefinition } from 'sanity'

import {exhibitionCategory} from './exhibitionCategory'
import { Gallery } from './Gallery'
import {projectType} from './projectType'
import {siteSettings} from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [exhibitionCategory, Gallery, projectType, siteSettings],
}
