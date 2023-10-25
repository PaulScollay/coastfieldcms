import { CollectionConfig } from 'payload/types'

export const SelfCateringFeatures: CollectionConfig = {
    slug: 'SelfCateringFeatures',
    labels: {
      singular : 'Self Catering Features',
      plural: 'Self Catering Features'
    }, 
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'id', 'archived'],
      group: 'Self Catering',
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