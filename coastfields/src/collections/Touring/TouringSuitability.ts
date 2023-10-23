import { CollectionConfig } from "payload/types";

export const TouringSuitability: CollectionConfig = {
    slug: 'touringsuitability',
    labels: {
      singular : 'Touring Suitability',
      plural: 'Touring Suitability'
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