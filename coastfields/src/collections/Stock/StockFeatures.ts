import { CollectionConfig } from 'payload/types'

export const StockFeatures: CollectionConfig = {
    slug: 'stockfeatures',
    labels: {
      singular : 'Stock Features',
      plural: 'Stock Features'
    }, 
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'id', 'archived'],
      group: 'Stock',
    },
    // access: {
    //   read: isAdminOrSelf('id'),
    //   create: isAdminOrSelf('id'),
    //   update: isAdminOrSelf('id'),
    //   delete: isAdmin,
    // },
  
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