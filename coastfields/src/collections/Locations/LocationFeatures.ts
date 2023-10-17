import { CollectionConfig } from 'payload/types'

export const LocationFeatures: CollectionConfig = {
    slug: 'location-features',
    labels: {
      singular : ' ',
      plural: ' '
    }, 
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name','archived'],
      group: 'Locations',
    },
  
    fields: [
      {
        name: 'name',
        type: 'text',
        localized: true,
        unique: true,
        label: 'Name',
      },
    ],
  };