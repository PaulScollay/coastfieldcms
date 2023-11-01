import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
// import { slateEditor } from '@payloadcms/richtext-slate'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

// Storage Adaptor
import { adapterAZ } from './adaptors/storage/BlobStorage'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';

import Users from './collections/Users'

//Coastfield Specific
import { Media } from './collections/Media';
import { Pages } from './collections/Pages';

import { Regions } from './collections/Regions/Regions'
import { Locations } from './collections/Locations/Locations'
import { LocationTypes } from './collections/Locations/LocationType'
import { LocationFeatures } from './collections/Locations/LocationFeatures'
import { Venues } from './collections/Venues/Venus'
import { VenueTypes } from './collections/Venues/VenueType'
import { SelfCateringUnits } from './collections/SelfCatering/SelfCateringUnits'
import { SelfCateringUnitTypes } from './collections/SelfCatering/SelfCateringUnitTypes'
import { SelfCateringFeatures } from './collections/SelfCatering/SelfCateringFeatures'
import { Touring } from './collections/Touring/Touring'  
import { TouringFeatures } from './collections/Touring/TouringFeatures'
import { TouringSuitability } from './collections/Touring/TouringSuitability'
import { TouringUnitTypes } from './collections/Touring/TouringUnitTypes'
import { TouringTags } from './collections/Touring/TouringTags'
import { Stock } from './collections/Stock/Stock'
import { StockAvailability } from './collections/Stock/StockAvailability'
import { StockFinanceTerm } from './collections/Stock/StockFinanceTerm'
import { StockFeatures } from './collections/Stock/StockFeatures'
import { Attractions } from './collections/Attractions'
import { Events } from './collections/Events'
import { Promotions } from './collections/Promotions'

export default buildConfig({
  admin: {

    user: Users.slug,
    bundler: webpackBundler(),
    webpack(config) {
      const emptyModulePath = path.resolve(__dirname, './adaptors/storage/mockModule.ts');
  
      return {
         ...config, 
         resolve: {
           ...config.resolve,
            alias: {
              ...config.resolve.alias,
              fs: emptyModulePath, 
              stream: emptyModulePath, 
            }
         }
      }
    },
    livePreview: {
      url: 'http://localhost:3001', // The URL to your front-end, this can also be a function (see below)
      collections: ['SelfCateringUnits'], // The collections to enable Live Preview on (globals are also possible)
    },
  },
  editor: lexicalEditor({}),
  collections: [
    Users,
    Media,
    Pages,
    Regions,
    Locations,
    LocationTypes,
    LocationFeatures,
    Venues,
    VenueTypes,
    SelfCateringUnits,
    SelfCateringUnitTypes,
    SelfCateringFeatures,
    Touring,
    TouringFeatures,
    TouringSuitability,
    TouringUnitTypes,
    TouringTags,
    Stock,
    StockAvailability,
    StockFinanceTerm,
    StockFeatures,
    Attractions,
    Events,
    Promotions
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
      payloadCloud(),
      cloudStorage({
        collections: {
          media: {
            adapter: adapterAZ
          },
        },
      }),
    ],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
})
