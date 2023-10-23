import { CollectionConfig } from 'payload/types';

export const TouringTags: CollectionConfig = {
  slug: 'touringtags',
  labels: {
    singular : 'Touring Tags',
    plural: 'Touring Tags'
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
      label: 'Tag Name',
    },
  ],
};