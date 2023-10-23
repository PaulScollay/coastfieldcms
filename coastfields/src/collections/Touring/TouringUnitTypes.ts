import { CollectionConfig } from 'payload/types';

export const TouringUnitTypes: CollectionConfig = {
  slug: 'touringunittypes',
  labels: {
    singular : 'Touring Unit Type',
    plural: 'Touring Unit Types'
  }, 
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    group: 'Touring',
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