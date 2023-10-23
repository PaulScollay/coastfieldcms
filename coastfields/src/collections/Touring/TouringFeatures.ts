import { CollectionConfig } from "payload/types";

export const TouringFeatures: CollectionConfig = {
    slug: 'touringfeaturess',
    labels: {
      singular : 'Touring Features',
      plural: 'Touring Features'
    }, 
    admin: {
      useAsTitle: 'name',
      defaultColumns: ['name', 'id', 'archived'],
      group: 'Touring',
    },
    fields: [
      {
        name: 'name',
        type: 'text',
       }
    ]
  }