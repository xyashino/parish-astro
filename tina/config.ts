import { defineConfig } from 'tinacms'
import { contactCollection, navigationCollection } from './collections'
import { intentionsCollection } from './collections/intentions-collection'

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'main'

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public'
    }
  },
  schema: {
    collections: [navigationCollection, contactCollection, intentionsCollection]
  }
})
