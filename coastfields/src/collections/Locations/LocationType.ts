import { CollectionConfig } from 'payload/types';

export const LocationTypes: CollectionConfig = {
  slug: 'location-types',
  labels: {
    singular : 'Location Type',
    plural: 'Location Types'
  }, 
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
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