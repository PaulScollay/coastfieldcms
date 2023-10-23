import { CollectionConfig } from 'payload/types';

export const StockAvailability: CollectionConfig = {
  slug: 'stock-availability',
  labels: {
    singular : 'Stock Availability',
    plural: 'Stock Availability'
  }, 
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    group: 'Stock',
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