import { CollectionConfig } from "payload/types";

export const Regions: CollectionConfig = {
    slug: 'regions',
    labels: {
      singular : 'Region',
      plural: 'Regions'
    },   
    admin: {
      defaultColumns: ['name', 'locations', 'archived'],
      group: 'Regions',
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        label: 'Name',
      },
      {
        name: "locations",
        type: "relationship",
        relationTo: "location",
        hasMany: true,
        admin: {
            width: '100%',
          },
      },
    //   {
    //     name: 'attractions',
    //     title: 'Attractions',
    //     type: 'array',
    //     of: [
    //       {
    //         type: 'reference',
    //         to: { type: 'attraction' },
    //       },
    //     ],
    //   },
      {
        name: 'slider', // required
        type: 'array', // required
        label: 'Image Slider',
        minRows: 1,
        maxRows: 10,
        interfaceName: 'CardSlider', // optional
        labels: {
          singular: 'Slide',
          plural: 'Slides',
        },
        fields: [
          // required
          {
            name: 'title',
            type: 'text',
          },
          {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
          {
            name: 'caption',
            type: 'text',
          },
        ],
      },
    ]
  }