import { CollectionConfig } from 'payload/types';

export const StockFinanceTerm: CollectionConfig = {
  slug: 'stock-finance-term',
  labels: {
    singular : 'Stock Finance Term',
    plural: 'Stock Finance Terms'
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