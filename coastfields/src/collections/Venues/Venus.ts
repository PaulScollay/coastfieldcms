import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { Block, CollectionConfig } from 'payload/types';

export const QuoteBlock: Block = {
    slug: 'quote', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'A nice thumbnail image to show what this block looks like',
    interfaceName: 'QuoteBlock', // optional
    fields: [
      // required
      {
        name: 'quoteHeader',
        type: 'text',
        required: true,
      },
      {
        name: 'quoteText',
        type: 'text',
      },
    ],
  }


export const Venues: CollectionConfig = {
  slug: 'venus',
  labels: {
    singular : 'Venue',
    plural: 'Venues'
  }, 
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name'],
    group: 'Venues',
  },

//   {
//     type: 'row', // required
//     fields: [
  fields: [
        {
    type: 'row', // required
    fields: [
        {
            name: 'name',
            type: 'text',
            localized: true,
            unique: true,
            label: 'Name',
            admin: {
            width: '60%',
          },
        },
        {
            name: 'type',
            label: 'Venu Type',
            type: 'relationship',
            relationTo: "venue-type",
            admin: {
                width: '40%',
                },
        },
    ]
    },
    {
        label: 'Use Existing Location',
        name: 'locationActive',
        type: 'checkbox',
    },
    {
        name: 'shortDescription', // required
        label: 'Short Description',
        type: 'textarea', // required
        required: true,
      },

    {
        name: "location",
        label: 'Venue Location',
        type: "relationship",
        relationTo: "location",
    },
    {
        name: 'featuredImage', 
        label: 'Featured Image',
        type: 'upload', 
        relationTo: 'media', 
        required: true,
    },
    {
        name: 'slider', // required
        type: 'array', // required
        label: 'Image Slider',
        minRows: 2,
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
      {
        name: 'venueContent',
        label: 'Venue Content',
        type: 'richText',
    },
    {
      name: 'layout', // required
      type: 'blocks', // required
      minRows: 1,
      maxRows: 20,
      blocks: [
        // required
        QuoteBlock,
      ],
    },

  ],
};

