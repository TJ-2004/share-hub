import {defineConfig} from 'sanity'

import {structureTool} from 'sanity/structure'

import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index.js'

export default defineConfig({
  name: 'default',
  title: 'sharme-hub',

  projectId: 'f60xbrip',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
