import { CollectionConfig } from 'payload/types';

export const VenueTypes: CollectionConfig = {
  slug: 'venue-type',
  labels: {
    singular : 'Venue Type',
    plural: 'Venue Types'
  }, 
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    group: 'Venues',
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